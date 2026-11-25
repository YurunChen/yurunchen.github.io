(() => {
  const root = document.getElementById("player");
  if (!root) return;
  const data = JSON.parse(document.getElementById("player-data").textContent);
  const $ = (selector) => root.querySelector(selector);
  const video = $("[data-video]");
  const viewport = $("[data-viewport]");
  const lanes = $("[data-lanes]");
  const runsBox = $("[data-runs]");
  const talk = $("[data-talk]");
  const cursor = $("[data-cursor]");
  const typing = $("[data-typing]");
  const standby = $("[data-standby]");
  const cartBox = $("[data-cart-box]");
  const play = $("[data-play]");
  const taskButtons = [...root.querySelectorAll("[data-task]")];
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const HOLD_MS = 3200;

  const pad = (n) => String(n).padStart(2, "0");
  const clip = (text, size) => (text.length > size ? `${text.slice(0, size - 1)}…` : text);
  const make = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  };
  const subscript = (n) => String(n).replace(/\d/g, (d) => "₀₁₂₃₄₅₆₇₈₉"[d]);

  let sample;
  let run;
  let pages = [];
  let ticks = [];
  let cells = [];
  let playhead;
  let verdict;
  let current = -1;
  let wantPlay = !reduceMotion;
  let visible = false;
  let holdTimer = 0;

  function actionText(action) {
    if (action.verb === "type") return `type “${action.text}”`;
    if (action.verb === "ask") return `ask “${clip(action.text, 70)}”`;
    if (action.verb === "go to") return `go to ${action.text}`;
    return action.text ? `${action.verb} ${action.text}` : action.verb;
  }

  function eventText(event) {
    if (event.kind === "search") return `search “${event.text}”`;
    return `${event.kind} ${clip(event.text, 48)}`;
  }

  function speechLabels(steps) {
    let request = 0;
    return steps.map((step) => {
      const labels = [];
      step.messages.forEach((message, k) => {
        if (message.who === "agent") labels.push("asks");
        else if (k === 0 || step.messages[k - 1].who !== "agent") labels.push(`u${subscript(request++)}`);
      });
      return labels.join(" ");
    });
  }

  function buildLanes() {
    const steps = run.steps;
    const said = speechLabels(steps);
    lanes.replaceChildren();
    lanes.style.setProperty("--steps", steps.length);
    ticks = steps.map((step, i) => {
      const tick = make("button", "tick", pad(step.step));
      tick.type = "button";
      tick.dataset.step = i;
      tick.style.gridColumn = i + 2;
      const prev = steps[i - 1];
      if (prev && ["done", "standby"].includes(prev.action.verb)) tick.classList.add("after-gap");
      lanes.append(tick);
      return tick;
    });
    cells = steps.map(() => []);
    data.lanes.forEach((lane, r) => {
      const name = make("span", `lane-name lane-${lane.kind}`, lane.name);
      name.style.gridRow = r + 2;
      lanes.append(name);
      steps.forEach((step, i) => {
        const cell = make("span", `cell cell-${lane.kind}`);
        cell.dataset.step = i;
        cell.style.gridRow = r + 2;
        cell.style.gridColumn = i + 2;
        if (lane.kind === "view") {
          const img = make("img");
          img.src = `${data.base}${run.id}/view-${step.step}.jpg`;
          img.alt = "";
          img.loading = "lazy";
          cell.append(img);
        } else if (lane.kind === "say" && said[i]) {
          cell.append(make("em", "", said[i]));
        } else if (lane.kind === "act") {
          const before = i ? steps[i - 1].cart_after : 0;
          if (step.cart_after !== before) cell.append(make("em", "", `cart ${step.cart_after}`));
        }
        lanes.append(cell);
        cells[i].push(cell);
      });
    });
    playhead = make("span", "playhead");
    lanes.append(playhead);
  }

  function buildPages() {
    viewport.querySelectorAll("img").forEach((page) => page.remove());
    pages = run.steps.map((step) => {
      const img = make("img");
      img.src = `${data.base}${run.id}/page-${step.step}.jpg`;
      img.alt = `Page the agent saw at step ${step.step}`;
      img.width = 1134;
      img.height = 600;
      viewport.prepend(img);
      return img;
    });
    if (verdict) verdict.remove();
    verdict = make("p", `verdict ${run.success ? "is-ok" : "is-bad"}`, run.success ? "✓ Succeeded" : "✗ Failed");
    viewport.append(verdict);
  }

  function showTalk(i) {
    let from = i;
    while (from >= 0 && !run.steps[from].messages.length) from -= 1;
    if (from < 0) { talk.replaceChildren(); return; }
    const fresh = from === i;
    const messages = run.steps[from].messages.slice(-3).map((message) => {
      const line = make("p", `msg msg-${message.who}`, clip(message.text, 150));
      if (fresh && !reduceMotion) line.classList.add("is-new");
      return line;
    });
    talk.replaceChildren(...messages);
    talk.classList.toggle("is-old", i - from > 2);
  }

  function show(i) {
    if (i === current) return;
    const prev = run.steps[current];
    current = i;
    const step = run.steps[i];
    pages.forEach((page, k) => page.classList.toggle("is-on", k === i));
    $("[data-url]").textContent = step.path;
    $("[data-clock]").textContent = `step ${pad(step.step)}`;
    const log = $("[data-log]");
    log.replaceChildren(make("b", "", `step ${pad(step.step)}`), ` ${actionText(step.action)}`);
    step.events.forEach((event) => log.append(make("span", "log-event", eventText(event))));
    showTalk(i);
    $("[data-cart]").textContent = step.cart_after;
    if (prev && step.cart_after > prev.cart_after && !reduceMotion) {
      cartBox.classList.remove("bump");
      void cartBox.offsetWidth;
      cartBox.classList.add("bump");
    }
    standby.classList.toggle("is-on", step.action.verb === "standby");
    verdict.classList.toggle("is-on", i === run.steps.length - 1);
    const target = (data.targets[run.id] || {})[String(step.step)];
    cursor.classList.toggle("is-on", Boolean(target));
    if (target) {
      cursor.style.left = `${target.x}%`;
      cursor.style.top = `${target.y}%`;
    }
    typing.classList.toggle("is-on", step.action.verb === "type");
    if (step.action.verb === "type") typing.textContent = clip(step.action.text, 40);
    ticks.forEach((tick, k) => {
      tick.classList.toggle("is-now", k === i);
      tick.classList.toggle("is-past", k < i);
    });
    cells.forEach((column, k) => column.forEach((cell) => {
      cell.classList.toggle("is-now", k === i);
      cell.classList.toggle("is-past", k < i);
    }));
  }

  function frame() {
    if (run && video.readyState >= 1) {
      const t = video.currentTime / data.seconds;
      const i = Math.min(Math.floor(t), run.steps.length - 1);
      show(i);
      const tick = ticks[i];
      const fraction = Math.min(t - i, 1);
      playhead.style.transform = `translateX(${tick.offsetLeft + fraction * tick.offsetWidth}px)`;
    }
    requestAnimationFrame(frame);
  }

  function setPlaying(on) {
    wantPlay = on;
    root.classList.toggle("is-paused", !on);
    play.setAttribute("aria-label", on ? "Pause replay" : "Play replay");
    if (on && visible) video.play().catch(() => {});
    else video.pause();
  }

  function seek(i) {
    clearTimeout(holdTimer);
    video.currentTime = i * data.seconds + 0.05;
    show(i);
  }

  function renderOutcome() {
    const result = $("[data-outcome]");
    result.className = `outcome-result ${run.success ? "is-ok" : "is-bad"}`;
    result.textContent = run.success ? "✓ Succeeded" : "✗ Failed";
    $("[data-outcome-note]").textContent = data.notes[run.id] || "";
    const count = run.final_cart.length;
    $("[data-cart-count]").textContent = `· ${count} ${count === 1 ? "item" : "items"}`;
    $("[data-cart-empty]").hidden = count > 0;
    $("[data-cart-items]").replaceChildren(...run.final_cart.map((name) => {
      const item = make("li", "cart-item");
      item.append(make("span", "cart-quantity", "×1"), make("span", "", name));
      return item;
    }));
  }

  function selectRun(k) {
    clearTimeout(holdTimer);
    run = sample.runs[k];
    [...runsBox.children].forEach((button, j) => button.setAttribute("aria-selected", String(j === k)));
    video.poster = `${data.base}${run.id}/poster.jpg`;
    video.src = `${data.base}${run.id}/wearer.mp4`;
    $("[data-host]").textContent = sample.site;
    $("[data-meta]").textContent = `${sample.source} recording, ${sample.license} · ${sample.track} / ${sample.transition} · ${run.steps.length} steps`;
    renderOutcome();
    buildPages();
    buildLanes();
    current = -1;
    show(0);
    setPlaying(wantPlay);
  }

  function selectTask(i, k = 0) {
    sample = data.samples[i];
    taskButtons.forEach((button, j) => button.setAttribute("aria-selected", String(j === i)));
    runsBox.replaceChildren(...sample.runs.map((item, j) => {
      const button = make("button", "run");
      button.type = "button";
      button.setAttribute("role", "tab");
      button.append(
        make("span", "run-model", item.model),
        make("span", item.success ? "run-ok" : "run-bad", item.success ? "✓ Succeeded" : "✗ Failed"),
      );
      button.addEventListener("click", () => selectRun(j));
      return button;
    }));
    selectRun(k);
  }

  taskButtons.forEach((button, i) => button.addEventListener("click", () => selectTask(i)));
  lanes.addEventListener("click", (event) => {
    const target = event.target.closest("[data-step]");
    if (target) seek(Number(target.dataset.step));
  });
  play.addEventListener("click", () => setPlaying(!wantPlay));
  video.addEventListener("ended", () => {
    show(run.steps.length - 1);
    holdTimer = setTimeout(() => {
      video.currentTime = 0;
      if (wantPlay && visible) video.play().catch(() => {});
    }, HOLD_MS);
  });
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    setPlaying(wantPlay);
  }, { threshold: 0.25 }).observe(root);

  const wanted = new URLSearchParams(location.search).get("run");
  let start = [0, 0];
  data.samples.forEach((item, i) => item.runs.forEach((r, k) => { if (r.id === wanted) start = [i, k]; }));
  root.classList.add("is-live");
  selectTask(...start);
  requestAnimationFrame(frame);
})();
