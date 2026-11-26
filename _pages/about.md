---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

<div class="page-hero">

<h1>Yurun Chen</h1>

<div class="page-intro">

<p>I’m a <strong>Ph.D. student</strong> at <a href="https://www.zju.edu.cn/english/">Zhejiang University</a>, advised by <a href="https://shengyuzhang.github.io/">Shengyu Zhang</a> and <a href="https://person.zju.edu.cn/ykt">Keting Yin</a>.</p>

<p>I build benchmarks and guardrails for computer-use agents that must act safely as user intent and real-world context change.</p>

<p><strong>Open to collaborations</strong> on agent safety, red-teaming, and evaluation. <a href="mailto:yurunchen.research@gmail.com">Email me</a>.</p>

<p class="page-stat">Google Scholar · <strong><span id="total_cit">—</span></strong> citations</p>

</div>

</div>

<span class='anchor' id='-news'></span>

# News

{% assign current_year = site.time | date: "%Y" %}
{% assign news_entries = site.data.news | sort: "date" | reverse %}
{% assign news_years = news_entries | group_by_exp: "item", "item.date | slice: 0, 4" %}
<ul class="news-list-wrapper" role="list">
  {% for year in news_years %}
    {% if year.name == current_year %}
      {% for item in year.items %}
        <li class="news-item">
          <time class="news-time" datetime="{{ item.date }}">[{% if item.date.size == 7 %}{{ item.date | slice: 5, 2 }}/{% endif %}{{ year.name }}]</time>
          <span>{% if item.papers == 1 %}One paper{% else %}{{ item.papers }} papers{% endif %} {% if item.event == 'published' %}published in{% else %}accepted at{% endif %} <strong>{{ item.venue | escape }}</strong>{% if item.note %} ({{ item.note | escape }}){% endif %}.</span>
        </li>
      {% endfor %}
    {% else %}
      {% assign accepted = 0 %}
      {% assign published = 0 %}
      {% assign conferences = "" | split: "," %}
      {% assign journals = "" | split: "," %}
      {% for item in year.items %}
        {% capture venue %}<strong>{{ item.venue | escape }}</strong>{% if item.note %} ({{ item.note | escape }}){% endif %}{% if item.papers > 1 %} ({{ item.papers }} papers){% endif %}{% endcapture %}
        {% if item.event == 'published' %}
          {% assign published = published | plus: item.papers %}
          {% assign journals = journals | push: venue %}
        {% else %}
          {% assign accepted = accepted | plus: item.papers %}
          {% assign conferences = conferences | push: venue %}
        {% endif %}
      {% endfor %}
      {% assign total = accepted | plus: published %}
      <li class="news-item">
        <time class="news-time" datetime="{{ year.name }}">[{{ year.name }}]</time>
        <span>{{ total }} {% if total == 1 %}paper{% else %}papers{% endif %}{% if accepted > 0 and published > 0 %} accepted! {{ accepted }} at {{ conferences | array_to_sentence_string }}; {{ published }} published in {{ journals | array_to_sentence_string }}{% elsif accepted > 0 %} accepted at {{ conferences | array_to_sentence_string }}{% else %} published in {{ journals | array_to_sentence_string }}{% endif %}.</span>
      </li>
    {% endif %}
  {% endfor %}
</ul>

<span class='anchor' id='-publications'></span>

# Publications

<div class="publications-list">

<div class="publication-item">
    <div class="paper-box">
        <div class="paper-meta"><span class="badge">arXiv</span></div>
        <div class="paper-box-text">
            <h3>EgoUseBench: Benchmarking Computer-Use Agents under Evolving First-Person Contexts</h3>
            <p class="paper-venue-line">arXiv, <time datetime="2026">2026</time></p>
            <p class="paper-authors"><strong>Yurun Chen</strong>, Biao Yi, Qihang Yu, Keting Yin, Shengyu Zhang</p>
            <div class="paper-links">
                <a href="https://arxiv.org/abs/2611.34466" class="paper-link" target="_blank" rel="noopener">Paper</a>
                <a href="https://github.com/YurunChen/EgoUseBench" class="paper-link" target="_blank" rel="noopener">Code</a>
                <a href="https://yurunchen.github.io/egousebench/" class="paper-link" target="_blank" rel="noopener">Website</a>
                <a href="https://huggingface.co/datasets/yurun-chen/EgoUseBench" class="paper-link" target="_blank" rel="noopener">Dataset</a>
                <button type="button" class="bibtex-copy" aria-label="Copy BibTeX" data-bibtex="{{ site.data.bibtex.egousebench | escape }}"><i class="fas fa-copy" aria-hidden="true"></i><span>BibTeX</span></button>
            </div>
        </div>
        <div class="paper-media">
            <video controls playsinline preload="none" poster="/images/EgoUseBench-explainer.webp" width="1280" height="720" aria-label="EgoUseBench in 41 seconds">
                <source src="/files/egousebench-explainer.mp4" type="video/mp4">
                <a href="/files/egousebench-explainer.mp4">Watch the EgoUseBench explainer</a>
            </video>
        </div>
    </div>
</div>

<div class="publication-item">
    <div class="paper-box">
        <div class="paper-meta"><span class="badge">CVPR 2026</span></div>
        <div class="paper-box-text">
            <h3>Graph2Eval: Automatic Multimodal Task Generation for Agents via Knowledge Graphs</h3>
            <p class="paper-venue-line">IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), <time datetime="2026">2026</time></p>
            <p class="paper-authors"><strong>Yurun Chen</strong>, Xavier Hu, Yuhan Liu, Ziqi Wang, Zeyi Liao, Lin Chen, Feng Wei, Yuxi Qian, Bo Zheng, Keting Yin, Shengyu Zhang</p>
            <div class="paper-links">
                <a href="https://arxiv.org/abs/2510.00507" class="paper-link" target="_blank">Paper</a>
                <a href="https://github.com/YurunChen/Graph2Eval" class="paper-link" target="_blank">Code</a>
                <button type="button" class="bibtex-copy" aria-label="Copy BibTeX" data-bibtex="{{ site.data.bibtex.graph2eval | escape }}"><i class="fas fa-copy" aria-hidden="true"></i><span>BibTeX</span></button>
                <span class="show_paper_citations" data="DGRecXEAAAAJ:LkGwnXOMwfcC"></span>
            </div>
        </div>
        <div class="paper-media">
            <img src="images/Methods4_00.webp" alt="Graph2Eval" width="768" height="481" loading="lazy" decoding="async">
        </div>
    </div>
</div>

<div class="publication-item">
    <div class="paper-box">
        <div class="paper-meta"><span class="badge">arXiv</span></div>
        <div class="paper-box-text">
            <h3>SafePred: A Predictive Guardrail for Computer-Using Agents via World Models</h3>
            <p class="paper-venue-line">arXiv, <time datetime="2026">2026</time></p>
            <p class="paper-authors"><strong>Yurun Chen</strong>, Zeyi Liao, Ping Yin, Taotao Xie, Keting Yin, Shengyu Zhang</p>
            <div class="paper-links">
                <a href="https://arxiv.org/abs/2602.01725" class="paper-link" target="_blank">Paper</a>
                <a href="https://github.com/YurunChen/SafePred" class="paper-link" target="_blank">Code</a>
                <button type="button" class="bibtex-copy" aria-label="Copy BibTeX" data-bibtex="{{ site.data.bibtex.safepred | escape }}"><i class="fas fa-copy" aria-hidden="true"></i><span>BibTeX</span></button>
                <span class="show_paper_citations" data="DGRecXEAAAAJ:UebtZRa9Y70C"></span>
            </div>
        </div>
        <div class="paper-media">
            <img src="images/Method9_01.webp" alt="SafePred" width="768" height="382" loading="lazy" decoding="async">
        </div>
    </div>
</div>

<div class="publication-item" id="webharbor">
    <div class="paper-box paper-box--text-only">
        <div class="paper-meta"><span class="badge">arXiv</span></div>
        <div class="paper-box-text">
            <h3>WebHarbor: Docking Real Websites for Evolving GUI Agent Environments</h3>
            <p class="paper-venue-line">arXiv, <time datetime="2026">2026</time></p>
            <p class="paper-authors">Zhaoyang Wang, Qianhui Wu, Boyu Gou, …, <strong>Yurun Chen</strong>, et al.</p>
            <div class="paper-links">
                <a href="https://arxiv.org/abs/2611.03634" class="paper-link" target="_blank" rel="noopener">Paper</a>
                <a href="https://github.com/aiming-lab/WebHarbor" class="paper-link" target="_blank" rel="noopener">Code</a>
                <a href="https://aiming-lab.github.io/WebHarbor/" class="paper-link" target="_blank" rel="noopener">Website</a>
                <a href="https://huggingface.co/datasets/ChilleD/WebHarbor-Tasks" class="paper-link" target="_blank" rel="noopener">Dataset</a>
                <button type="button" class="bibtex-copy" aria-label="Copy BibTeX" data-bibtex="{{ site.data.bibtex.webharbor | escape }}"><i class="fas fa-copy" aria-hidden="true"></i><span>BibTeX</span></button>
                <span class="show_paper_citations" data="DGRecXEAAAAJ:3fE2CSJIrl8C"></span>
            </div>
        </div>
    </div>
</div>

<div class="publication-item">
    <div class="paper-box">
        <div class="paper-meta"><span class="badge">arXiv</span></div>
        <div class="paper-box-text">
            <h3>SkillHarness: Harnessing Safe Skills for Computer-Use Agents</h3>
            <p class="paper-venue-line">arXiv, <time datetime="2026">2026</time></p>
            <p class="paper-authors"><strong>Yurun Chen</strong>, Biao Yi, Keting Yin, Shengyu Zhang</p>
            <div class="paper-links">
                <a href="https://arxiv.org/abs/2606.20636" class="paper-link" target="_blank">Paper</a>
                <button type="button" class="bibtex-copy" aria-label="Copy BibTeX" data-bibtex="{{ site.data.bibtex.skillharness | escape }}"><i class="fas fa-copy" aria-hidden="true"></i><span>BibTeX</span></button>
                <span class="show_paper_citations" data="DGRecXEAAAAJ:0EnyYjriUFMC"></span>
            </div>
        </div>
        <div class="paper-media">
            <img src="images/SkillHarness.webp" alt="SkillHarness" width="768" height="510" loading="lazy" decoding="async">
        </div>
    </div>
</div>

<div class="publication-item">
    <div class="paper-box">
        <div class="paper-meta"><span class="badge">AAAI 2026</span></div>
        <div class="paper-box-text">
            <h3>EcoAgent: An Efficient Edge-Cloud Collaborative Multi-Agent Framework for Mobile Automation</h3>
            <p class="paper-venue-line">AAAI Conference on Artificial Intelligence, <time datetime="2026">2026</time></p>
            <p class="paper-authors">Biao Yi, Xavier Hu, <strong>Yurun Chen</strong>, Shengyu Zhang, Hongxia Yang, Fan Wu, Fei Wu</p>
            <div class="paper-links">
                <a href="https://arxiv.org/abs/2505.05440" class="paper-link" target="_blank">Paper</a>
                <a href="https://github.com/Yi-Biao/EcoAgent" class="paper-link" target="_blank" rel="noopener">Code</a>
                <button type="button" class="bibtex-copy" aria-label="Copy BibTeX" data-bibtex="{{ site.data.bibtex.ecoagent | escape }}"><i class="fas fa-copy" aria-hidden="true"></i><span>BibTeX</span></button>
                <span class="show_paper_citations" data="DGRecXEAAAAJ:Tyk-4Ss8FVUC"></span>
            </div>
        </div>
        <div class="paper-media">
            <img src="images/EcoAgent.webp" alt="EcoAgent" width="768" height="431" loading="lazy" decoding="async">
        </div>
    </div>
</div>

<div class="publication-item">
    <div class="paper-box">
        <div class="paper-meta"><span class="badge">ACM MM 2025</span></div>
        <div class="paper-box-text">
            <h3>Evaluating the Robustness of Multimodal Agents Against Active Environmental Injection Attacks</h3>
            <p class="paper-venue-line">ACM International Conference on Multimedia (ACM MM), <time datetime="2025">2025</time></p>
            <p class="paper-authors"><strong>Yurun Chen</strong>, Xavier Hu, Keting Yin, Juncheng Li, Shengyu Zhang</p>
            <div class="paper-links">
                <a href="https://arxiv.org/abs/2502.13053" class="paper-link" target="_blank">Paper</a>
                <a href="https://github.com/YurunChen/AEIA" class="paper-link" target="_blank">Code</a>
                <button type="button" class="bibtex-copy" aria-label="Copy BibTeX" data-bibtex="{{ site.data.bibtex.aeia | escape }}"><i class="fas fa-copy" aria-hidden="true"></i><span>BibTeX</span></button>
                <span class="show_paper_citations" data="DGRecXEAAAAJ:W7OEmFMy1HYC"></span>
            </div>
        </div>
        <div class="paper-media">
            <img src="images/Attack_Methods7_00.webp" alt="AEIA" width="768" height="484" loading="lazy" decoding="async">
        </div>
    </div>
</div>

<div class="publication-item">
    <div class="paper-box">
        <div class="paper-meta"><span class="badge">ACL 2025 Oral</span></div>
        <div class="paper-box-text">
            <h3>OS Agents: A Survey on MLLM-based Agents for General Computing Devices Use</h3>
            <p class="paper-venue-line">Annual Meeting of the Association for Computational Linguistics (ACL), <time datetime="2025">2025</time> (Oral)</p>
            <p class="paper-authors">Xueyu Hu, Tao Xiong, Biao Yi, Zishu Wei, Ruixuan Xiao, <strong>Yurun Chen</strong>, et al.</p>
            <div class="paper-links">
                <a href="https://aclanthology.org/2025.acl-long.369/" class="paper-link" target="_blank">Paper</a>
                <a href="https://os-agent-survey.github.io/" class="paper-link" target="_blank" rel="noopener">Project</a>
                <a href="https://github.com/OS-Agent-Survey/OS-Agent-Survey" class="paper-link" target="_blank" rel="noopener">GitHub</a>
                <button type="button" class="bibtex-copy" aria-label="Copy BibTeX" data-bibtex="{{ site.data.bibtex.os_agents | escape }}"><i class="fas fa-copy" aria-hidden="true"></i><span>BibTeX</span></button>
                <span class="show_paper_citations" data="DGRecXEAAAAJ:eQOLeE2rZwMC"></span>
            </div>
        </div>
        <div class="paper-media">
            <img src="images/1_teaser_os_agent_00.webp" alt="OS Agents Survey" width="768" height="395" loading="lazy" decoding="async">
        </div>
    </div>
</div>

<div class="publication-item">
    <div class="paper-box">
        <div class="paper-meta"><span class="badge">arXiv</span></div>
        <div class="paper-box-text">
            <h3>HarmonyGuard: Toward Safety and Utility in Web Agents via Adaptive Policy Enhancement and Dual-Objective Optimization</h3>
            <p class="paper-venue-line">arXiv, <time datetime="2025">2025</time></p>
            <p class="paper-authors"><strong>Yurun Chen</strong>, Xavier Hu, Yuhan Liu, Keting Yin, Juncheng Li, Zhuosheng Zhang, Shengyu Zhang</p>
            <div class="paper-links">
                <a href="https://arxiv.org/abs/2508.04010" class="paper-link" target="_blank">Paper</a>
                <a href="https://github.com/YurunChen/HarmonyGuard" class="paper-link" target="_blank">Code</a>
                <button type="button" class="bibtex-copy" aria-label="Copy BibTeX" data-bibtex="{{ site.data.bibtex.harmonyguard | escape }}"><i class="fas fa-copy" aria-hidden="true"></i><span>BibTeX</span></button>
                <span class="show_paper_citations" data="DGRecXEAAAAJ:ufrVoPGSRksC"></span>
            </div>
        </div>
        <div class="paper-media">
            <img src="images/HarmonyGuard_00.webp" alt="HarmonyGuard" width="768" height="444" loading="lazy" decoding="async">
        </div>
    </div>
</div>

<div class="publication-item">
    <div class="paper-box">
        <div class="paper-meta"><span class="badge">EMNLP 2026</span></div>
        <div class="paper-box-text">
            <h3>GUI-PRA: Process Reward Agents for GUI Tasks</h3>
            <p class="paper-venue-line">Conference on Empirical Methods in Natural Language Processing (EMNLP), <time datetime="2026">2026</time></p>
            <p class="paper-authors">Tao Xiong, Xueyu Hu, <strong>Yurun Chen</strong>, Yuhang Liu, Changqiao Wu, Pengzhi Gao, Wei Liu, Jian Luan, Shengyu Zhang</p>
            <div class="paper-links">
                <a href="https://aclanthology.org/2026.emnlp-main.1304/" class="paper-link" target="_blank">Paper</a>
                <a href="https://github.com/YuanDaoze/GUI-PRA" class="paper-link" target="_blank" rel="noopener">Code</a>
                <button type="button" class="bibtex-copy" aria-label="Copy BibTeX" data-bibtex="{{ site.data.bibtex.gui_pra | escape }}"><i class="fas fa-copy" aria-hidden="true"></i><span>BibTeX</span></button>
                <span class="show_paper_citations" data="DGRecXEAAAAJ:roLk4NBRz8UC"></span>
            </div>
        </div>
        <div class="paper-media">
            <img src="images/GUI-PRA.webp" alt="GUI-PRA" width="768" height="397" loading="lazy" decoding="async">
        </div>
    </div>
</div>

<div class="publication-item" id="journal-publications">
    <div class="paper-box">
        <div class="paper-meta"><span class="badge">TIFS 2025</span></div>
        <div class="paper-box-text">
            <h3>DART: Distributed Zero Knowledge Data Auditing with Retrievability for Blockchain-Based Decentralized Storage Networks</h3>
            <p class="paper-venue-line">IEEE Transactions on Information Forensics and Security, <time datetime="2025">2025</time></p>
            <p class="paper-authors">Haiyang Yu, <strong>Yurun Chen</strong>, Shen Su∗, Jian Su∗, Yuwen Chen, Zhen Yang</p>
            <div class="paper-links">
                <a href="https://ieeexplore.ieee.org/document/11187397" class="paper-link" target="_blank">Paper</a>
                <button type="button" class="bibtex-copy" aria-label="Copy BibTeX" data-bibtex="{{ site.data.bibtex.dart | escape }}"><i class="fas fa-copy" aria-hidden="true"></i><span>BibTeX</span></button>
                <span class="show_paper_citations" data="DGRecXEAAAAJ:Se3iqnhoufwC"></span>
            </div>
        </div>
        <div class="paper-media">
            <img src="images/DART-system.webp" alt="DART system model from Figure 1" width="768" height="616" loading="lazy" decoding="async">
        </div>
    </div>
</div>

<div class="publication-item">
    <div class="paper-box">
        <div class="paper-meta"><span class="badge">TMC 2025</span></div>
        <div class="paper-box-text">
            <h3>S2A-P2FS: Secure Storage Auditing With Privacy-Preserving Flexible Data Sharing in Cloud-Assisted Industrial IoT</h3>
            <p class="paper-venue-line">IEEE Transactions on Mobile Computing, <time datetime="2025">2025</time></p>
            <p class="paper-authors">Xiaohu Shan, Haiyang Yu, <strong>Yurun Chen</strong>, Yuwen Chen, Zhen Yang</p>
            <div class="paper-links">
                <a href="https://ieeexplore.ieee.org/document/10886974" class="paper-link" target="_blank">Paper</a>
                <button type="button" class="bibtex-copy" aria-label="Copy BibTeX" data-bibtex="{{ site.data.bibtex.s2a_p2fs | escape }}"><i class="fas fa-copy" aria-hidden="true"></i><span>BibTeX</span></button>
                <span class="show_paper_citations" data="DGRecXEAAAAJ:qjMakFHDy7sC"></span>
            </div>
        </div>
        <div class="paper-media">
            <img src="images/S2A-P2FS-system.webp" alt="S2A-P2FS system model from Figure 2" width="768" height="417" loading="lazy" decoding="async">
        </div>
    </div>
</div>

<div class="publication-item">
    <div class="paper-box">
        <div class="paper-meta"><span class="badge">TSC 2024</span></div>
        <div class="paper-box-text">
            <h3>EDCOMA: Enabling Efficient Double Compressed Auditing for Blockchain-Based Decentralized Storage</h3>
            <p class="paper-venue-line">IEEE Transactions on Services Computing, <time datetime="2024">2024</time></p>
            <p class="paper-authors">Haiyang Yu, <strong>Yurun Chen</strong>, Zhen Yang, Yuwen Chen, Shui Yu</p>
            <div class="paper-links">
                <a href="https://ieeexplore.ieee.org/document/10568383" class="paper-link" target="_blank">Paper</a>
                <button type="button" class="bibtex-copy" aria-label="Copy BibTeX" data-bibtex="{{ site.data.bibtex.edcoma | escape }}"><i class="fas fa-copy" aria-hidden="true"></i><span>BibTeX</span></button>
                <span class="show_paper_citations" data="DGRecXEAAAAJ:u-x6o8ySG0sC"></span>
            </div>
        </div>
        <div class="paper-media">
            <img src="images/EDCOMA-system.webp" alt="EDCOMA decentralized storage network architecture" width="768" height="512" loading="lazy" decoding="async">
        </div>
    </div>
</div>

</div>

<div id="bibtex-status" class="visually-hidden" role="status"></div>
<script>
(function () {
  const publications = document.querySelector('.publications-list');
  const status = document.getElementById('bibtex-status');
  const feedback = new WeakMap();

  publications.addEventListener('click', async (event) => {
    const button = event.target.closest('button[data-bibtex]');
    if (!button) return;

    const links = button.closest('.paper-links');
    let fallback = links.parentElement.querySelector('.bibtex-fallback');
    const bibtex = button.dataset.bibtex;
    status.textContent = '';

    try {
      await navigator.clipboard.writeText(bibtex);
    } catch {
      if (!fallback) {
        fallback = document.createElement('label');
        fallback.className = 'bibtex-fallback';
        fallback.textContent = 'Copy this BibTeX citation:';
        const field = document.createElement('textarea');
        field.readOnly = true;
        field.value = bibtex;
        field.rows = 5;
        fallback.append(field);
        links.after(fallback);
      }
      const field = fallback.querySelector('textarea');
      field.focus();
      field.select();
      status.textContent = 'BibTeX selected for manual copying.';
      return;
    }

    if (fallback) fallback.remove();
    const icon = button.querySelector('i');
    icon.classList.replace('fa-copy', 'fa-check');
    status.textContent = 'BibTeX copied to clipboard.';
    clearTimeout(feedback.get(button));
    feedback.set(button, setTimeout(() => { icon.classList.replace('fa-check', 'fa-copy'); }, 1600));
  });
})();
</script>

<span class='anchor' id='-service-and-awards'></span>

# Service & Awards

<ul class="site-list">
<li><strong>Reviewer</strong> — ACL 2025, AAAI 2026, ACM MM 2026, AAAI 2027, ICLR 2027, ACM MM 2027</li>
<li><strong>Open Source</strong> — <a href="https://github.com/YurunChen/Graph2Eval">Graph2Eval</a>, <a href="https://github.com/YurunChen/HarmonyGuard">HarmonyGuard</a>, <a href="https://github.com/YurunChen/SafePred">SafePred</a>, <a href="https://github.com/OS-Agent-Survey/OS-Agent-Survey">OS-Agent-Survey</a></li>
<li><strong>2025.06</strong> — Outstanding Graduate of Beijing; Top 100 Graduates of BJUT</li>
<li><strong>2024.10</strong> — Xiaomi Scholarship</li>
<li><strong>2024.09</strong> — National Scholarship</li>
<li><strong>2023.08</strong> — Provincial Second Prize, Graduate Electronic Design Competition</li>
<li><strong>2023.02</strong> — Excellence Award, CCF&ATEC Undergraduate Blockchain Security Competition</li>
</ul>

<span class='anchor' id='-people'></span>

# People & Network

<ul class="site-list">
<li><a href="https://shengyuzhang.github.io/">Shengyu Zhang</a> — Zhejiang University</li>
<li><a href="https://person.zju.edu.cn/ykt">Keting Yin</a> — Zhejiang University</li>
<li><a href="https://person.zju.edu.cn/juncheng#0">Juncheng Li</a> — Zhejiang University</li>
<li>Xavier Hu — Zhejiang University</li>
<li>Biao Yi — Zhejiang University</li>
<li><a href="https://yuhan0802.github.io/">Yuhan Liu</a> — Xiamen University</li>
</ul>
