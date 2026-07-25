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

# Who I Am

<div class="page-intro">

<p>Hi! I'm <strong>Yurun Chen</strong>, a <strong>Ph.D. student</strong> at <a href="https://www.zju.edu.cn/english/">Zhejiang University</a>, advised by <a href="https://shengyuzhang.github.io/">Shengyu Zhang</a> and <a href="https://person.zju.edu.cn/ykt">Keting Yin</a>.</p>

<p>I work on the safety of Computer-Using Agents (CUAs). My research centers on two complementary questions: how to equip CUAs with effective guardrails for robust task execution under real-world noise and uncertainty, and how to systematically develop red-teaming strategies that uncover safety vulnerabilities in realistic deployment settings.</p>

<p><strong>Open to collaborations</strong> on CUA red-teaming, safety, guardrails, and evaluation. Reach out via <a href="mailto:yurunchen.research@gmail.com">email</a>.</p>

<p class="page-stat">Google Scholar · <strong><span id="total_cit">—</span></strong> citations</p>

</div>

</div>

<span class='anchor' id='-news'></span>

# News

<div class="news-list-wrapper" id="news-list-wrapper">
<div class="news-item">
<span class="news-time">Jun 2026</span>
Published on arXiv: <em><a href="https://arxiv.org/abs/2606.20636" target="_blank">"SkillHarness: Harnessing Safe Skills for Computer-Use Agents"</a></em>!
</div>

<div class="news-item">
<span class="news-time">Feb 2026</span>
Paper <em><a href="https://arxiv.org/abs/2510.00507" target="_blank">"Graph2Eval: Automatic Multimodal Task Generation for Agents via Knowledge Graphs"</a></em> accepted by CVPR 2026!
</div>

<div class="news-item">
<span class="news-time">Feb 2026</span>
Published on arXiv: <em><a href="https://arxiv.org/abs/2602.01725" target="_blank">"SafePred: A Predictive Guardrail for Computer-Using Agents via World Models"</a></em>!
</div>

<div class="news-item">
<span class="news-time">Oct 2025</span>
Released project <em><a href="https://github.com/YurunChen/Graph2Eval" target="_blank">"Graph2Eval"</a></em>!
</div>

<div class="news-item">
<span class="news-time">Oct 2025</span>
Published on arXiv: <em><a href="https://arxiv.org/abs/2510.00507" target="_blank">"Graph2Eval: Automatic Multimodal Task Generation for Agents via Knowledge Graphs"</a></em>!
</div>

<div class="news-item">
<span class="news-time">Aug 2025</span>
Published on arXiv: <em><a href="https://arxiv.org/abs/2508.04482" target="_blank">"OS Agents: A Survey on MLLM-based Agents for Computer, Phone, and Browser Use"</a></em>!
</div>

<div class="news-item">
<span class="news-time">Aug 2025</span>
Published on arXiv: <em><a href="https://arxiv.org/abs/2508.04010" target="_blank">"HarmonyGuard: Toward Safety and Utility in Web Agents via Adaptive Policy Enhancement and Dual-Objective Optimization"</a></em>!
</div>

<div class="news-item">
<span class="news-time">Aug 2025</span>
Released project <em><a href="https://github.com/YurunChen/HarmonyGuard" target="_blank">"HarmonyGuard"</a></em>!
</div>

<div class="news-item">
<span class="news-time">Jul 2025</span>
Paper <em><a href="https://arxiv.org/abs/2502.13053" target="_blank">"Evaluating the Robustness of Multimodal Agents Against Active Environmental Injection Attacks"</a></em> accepted by ACM MM 2025!
</div>

<div class="news-item">
<span class="news-time">Jun 2025</span>
Survey paper <em>"OS Agents: A Survey on MLLM-based Agents for Use on General Computing Devices"</em> selected as Oral Paper!
</div>

<div class="news-item">
<span class="news-time">Apr 2025</span>
Survey paper <em>"OS Agents: A Survey on MLLM-based Agents for Use on General Computing Devices"</em> accepted by ACL 2025!
</div>

<div class="news-item">
<span class="news-time">Feb 2025</span>
Published on arXiv: <em><a href="https://arxiv.org/abs/2502.13053" target="_blank">"Evaluating the Robustness of Multimodal Agents Against Active Environmental Injection Attacks"</a></em>!
</div>

<div class="news-item">
<span class="news-time">Dec 2024</span>
Published preprint: <em><a href="https://arxiv.org/abs/2508.04482" target="_blank">"OS Agents: A Survey on MLLM-based Agents for Computer, Phone, and Browser Use"</a></em>!
</div>
</div>

<p class="news-view-more-wrap">
<button type="button" class="news-view-more-btn" id="news-view-more-btn" aria-expanded="false">Show more</button>
</p>

<script>
(function() {
  var NEWS_SHOW_COUNT = 5; // Number of news items visible by default; change this to show more/fewer

  function initNewsFold() {
    var wrapper = document.getElementById('news-list-wrapper');
    var btn = document.getElementById('news-view-more-btn');
    if (!wrapper || !btn) return;
    var items = wrapper.querySelectorAll('.news-item');
    var folded = [];
    for (var i = NEWS_SHOW_COUNT; i < items.length; i++) folded.push(items[i]);
    if (folded.length === 0) {
      var wrap = btn.parentElement;
      if (wrap) wrap.style.display = 'none';
      return;
    }
    function hideFolded() {
      for (var i = 0; i < folded.length; i++) folded[i].style.display = 'none';
    }
    function showFolded() {
      for (var i = 0; i < folded.length; i++) folded[i].style.display = 'block';
    }
    hideFolded();
    btn.addEventListener('click', function() {
      if (wrapper.classList.contains('show-all')) {
        wrapper.classList.remove('show-all');
        hideFolded();
        btn.setAttribute('aria-expanded', 'false');
        btn.textContent = 'Show more';
      } else {
        wrapper.classList.add('show-all');
        showFolded();
        btn.setAttribute('aria-expanded', 'true');
        btn.textContent = 'Show less';
      }
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNewsFold);
  } else {
    initNewsFold();
  }
})();
</script>

<span class='anchor' id='-publications'></span>

# Publications

<div class="publications-list">

<div class="publication-item">
    <div class="paper-box">
        <div class="paper-box-image">
            <img src="images/SkillHarness.png" alt="SkillHarness" width="100%">
            <span class="paper-thumb-badge">arXiv</span>
        </div>
        <div class="paper-box-text">
            <h3><a href="https://arxiv.org/abs/2606.20636">SkillHarness: Harnessing Safe Skills for Computer-Use Agents</a></h3>
            <p class="paper-authors"><strong>Yurun Chen</strong>, Biao Yi, Keting Yin, Shengyu Zhang</p>
            <p class="paper-abstract">A framework for safe skill learning and selective reuse in dynamic CUA environments, reducing unsafe learned skills by 57.1% while improving execution stability.</p>
            <div class="paper-links">
                <a href="https://arxiv.org/abs/2606.20636" class="paper-link" target="_blank">Paper</a>
                <span class="show_paper_citations" data="DGRecXEAAAAJ:0EnyYjriUFMC"></span>
            </div>
        </div>
    </div>
</div>

<div class="publication-item">
    <div class="paper-box">
        <div class="paper-box-image">
            <img src="images/Method9_01.png" alt="SafePred" width="100%">
            <span class="paper-thumb-badge">arXiv</span>
        </div>
        <div class="paper-box-text">
            <h3><a href="https://arxiv.org/abs/2602.01725">SafePred: A Predictive Guardrail for Computer-Using Agents via World Models</a></h3>
            <p class="paper-authors"><strong>Yurun Chen</strong>, Zeyi Liao, Ping Yin, Taotao Xie, Keting Yin, Shengyu Zhang</p>
            <p class="paper-abstract">A predictive guardrail for CUAs that anticipates short- and long-term risks, reducing high-risk actions by 97%+ while improving task performance.</p>
            <div class="paper-links">
                <a href="https://arxiv.org/abs/2602.01725" class="paper-link" target="_blank">Paper</a>
                <a href="https://github.com/YurunChen/SafePred" class="paper-link" target="_blank">Code</a>
                <span class="show_paper_citations" data="DGRecXEAAAAJ:UebtZRa9Y70C"></span>
            </div>
        </div>
    </div>
</div>

<div class="publication-item">
    <div class="paper-box">
        <div class="paper-box-image">
            <img src="images/Methods4_00.png" alt="Graph2Eval" width="100%">
            <span class="paper-thumb-badge">CVPR 2026</span>
        </div>
        <div class="paper-box-text">
            <h3><a href="https://arxiv.org/abs/2510.00507">Graph2Eval: Automatic Multimodal Task Generation for Agents via Knowledge Graphs</a></h3>
            <p class="paper-authors"><strong>Yurun Chen</strong>, Xavier Hu, Yuhan Liu, Ziqi Wang, Zeyi Liao, Lin Chen, Feng Wei, Yuxi Qian, Bo Zheng, Keting Yin, Shengyu Zhang</p>
            <p class="paper-abstract">A knowledge-graph framework that automatically generates multimodal document and web interaction tasks for comprehensive agent evaluation.</p>
            <div class="paper-links">
                <a href="https://arxiv.org/abs/2510.00507" class="paper-link" target="_blank">Paper</a>
                <a href="https://github.com/YurunChen/Graph2Eval" class="paper-link" target="_blank">Code</a>
                <span class="show_paper_citations" data="DGRecXEAAAAJ:LkGwnXOMwfcC"></span>
            </div>
        </div>
    </div>
</div>

<div class="publication-item">
    <div class="paper-box">
        <div class="paper-box-image">
            <img src="images/EcoAgent.png" alt="EcoAgent" width="100%">
            <span class="paper-thumb-badge">AAAI 2026</span>
        </div>
        <div class="paper-box-text">
            <h3><a href="https://arxiv.org/abs/2505.05440">EcoAgent: An Efficient Edge-Cloud Collaborative Multi-Agent Framework for Mobile Automation</a></h3>
            <p class="paper-authors">Biao Yi, Xavier Hu, <strong>Yurun Chen</strong>, Shengyu Zhang, Hongxia Yang, Fan Wu, Fei Wu</p>
            <p class="paper-abstract">An edge–cloud collaborative multi-agent framework for mobile automation with comparable success rates and significantly lower MLLM token cost.</p>
            <div class="paper-links">
                <a href="https://arxiv.org/abs/2505.05440" class="paper-link" target="_blank">Paper</a>
                <span class="show_paper_citations" data="DGRecXEAAAAJ:Tyk-4Ss8FVUC"></span>
            </div>
        </div>
    </div>
</div>

<div class="publication-item">
    <div class="paper-box">
        <div class="paper-box-image">
            <img src="images/Attack_Methods7_00.png" alt="AEIA" width="100%">
            <span class="paper-thumb-badge">ACM MM 2025</span>
        </div>
        <div class="paper-box-text">
            <h3><a href="https://arxiv.org/abs/2502.13053">Evaluating the Robustness of Multimodal Agents Against Active Environmental Injection Attacks</a></h3>
            <p class="paper-authors"><strong>Yurun Chen</strong>, Xavier Hu, Keting Yin, Juncheng Li, Shengyu Zhang</p>
            <p class="paper-abstract">Introduces Active Environment Injection Attacks (AEIA) that disguise malicious inputs as UI elements, achieving up to 93% success against advanced agents.</p>
            <div class="paper-links">
                <a href="https://arxiv.org/abs/2502.13053" class="paper-link" target="_blank">Paper</a>
                <a href="https://github.com/YurunChen/AEIA" class="paper-link" target="_blank">Code</a>
                <span class="show_paper_citations" data="DGRecXEAAAAJ:W7OEmFMy1HYC"></span>
            </div>
        </div>
    </div>
</div>

<div class="publication-item">
    <div class="paper-box">
        <div class="paper-box-image">
            <img src="images/1_teaser_os_agent_00.png" alt="OS Agents Survey" width="100%">
            <span class="paper-thumb-badge">ACL 2025 Oral</span>
        </div>
        <div class="paper-box-text">
            <h3><a href="https://arxiv.org/abs/2508.04482">OS Agents: A Survey on MLLM-based Agents for General Computing Devices Use</a></h3>
            <p class="paper-authors">Xueyu Hu, Tao Xiong, Biao Yi, Zishu Wei, Ruixuan Xiao, <strong>Yurun Chen</strong>, et al.</p>
            <p class="paper-abstract">A survey on agents operating in OS environments across computers, phones, and browsers — components, benchmarks, and open challenges.</p>
            <div class="paper-links">
                <a href="https://aclanthology.org/2025.acl-long.369/" class="paper-link" target="_blank">Paper</a>
                <a href="https://github.com/OS-Agent-Survey/OS-Agent-Survey" class="paper-link" target="_blank">Project</a>
                <span class="show_paper_citations" data="DGRecXEAAAAJ:eQOLeE2rZwMC"></span>
            </div>
        </div>
    </div>
</div>

<div class="publication-item">
    <div class="paper-box">
        <div class="paper-box-image">
            <img src="images/HarmonyGuard_00.png" alt="HarmonyGuard" width="100%">
            <span class="paper-thumb-badge">arXiv</span>
        </div>
        <div class="paper-box-text">
            <h3><a href="https://arxiv.org/abs/2508.04010">HarmonyGuard: Toward Safety and Utility in Web Agents via Adaptive Policy Enhancement and Dual-Objective Optimization</a></h3>
            <p class="paper-authors"><strong>Yurun Chen</strong>, Xavier Hu, Yuhan Liu, Keting Yin, Juncheng Li, Zhuosheng Zhang, Shengyu Zhang</p>
            <p class="paper-abstract">A multi-agent framework that jointly improves utility and safety in web agents via policy enhancement and dual-objective optimization.</p>
            <div class="paper-links">
                <a href="https://arxiv.org/abs/2508.04010" class="paper-link" target="_blank">Paper</a>
                <a href="https://github.com/YurunChen/HarmonyGuard" class="paper-link" target="_blank">Code</a>
                <span class="show_paper_citations" data="DGRecXEAAAAJ:ufrVoPGSRksC"></span>
            </div>
        </div>
    </div>
</div>

<div class="publication-item">
    <div class="paper-box">
        <div class="paper-box-image">
            <img src="images/GUI-PRA.png" alt="GUI-PRA" width="100%">
            <span class="paper-thumb-badge">arXiv</span>
        </div>
        <div class="paper-box-text">
            <h3><a href="https://arxiv.org/abs/2509.23263">GUI-PRA: Process Reward Agent for GUI Tasks</a></h3>
            <p class="paper-authors">Tao Xiong, Xavier Hu, <strong>Yurun Chen</strong>, Yuhang Liu, Changqiao Wu, Pengzhi Gao, Wei Liu, Jian Luan, Shengyu Zhang</p>
            <p class="paper-abstract">A judge agent with dynamic memory and adaptive UI perception for more accurate process rewards on GUI tasks.</p>
            <div class="paper-links">
                <a href="https://arxiv.org/abs/2509.23263" class="paper-link" target="_blank">Paper</a>
                <span class="show_paper_citations" data="DGRecXEAAAAJ:roLk4NBRz8UC"></span>
            </div>
        </div>
    </div>
</div>

<div class="publication-item">
    <div class="paper-box paper-box--text-only">
        <div class="paper-box-text">
            <div class="paper-meta"><span class="badge">TIFS 2025</span></div>
            <h3><a href="https://ieeexplore.ieee.org/document/11187397">DART: Distributed Zero Knowledge Data Auditing with Retrievability for Blockchain-Based Decentralized Storage Networks</a></h3>
            <p class="paper-authors">Haiyang Yu, <strong>Yurun Chen</strong>, Shen Su∗, Jian Su∗, Yuwen Chen, Zhen Yang</p>
            <p class="paper-venue-line"><em>IEEE Transactions on Information Forensics and Security</em>, 2025</p>
            <div class="paper-links">
                <a href="https://ieeexplore.ieee.org/document/11187397" class="paper-link" target="_blank">Paper</a>
                <span class="show_paper_citations" data="DGRecXEAAAAJ:Se3iqnhoufwC"></span>
            </div>
        </div>
    </div>
</div>

<div class="publication-item">
    <div class="paper-box paper-box--text-only">
        <div class="paper-box-text">
            <div class="paper-meta">
                <span class="badge">TMC 2025</span>
            </div>
            <h3><a href="https://ieeexplore.ieee.org/document/10886974">S2A-P2FS: Secure Storage Auditing With Privacy-Preserving Flexible Data Sharing in Cloud-Assisted Industrial IoT</a></h3>
            <p class="paper-authors">Xiaohu Shan, Haiyang Yu, <strong>Yurun Chen</strong>, Yuwen Chen, Zhen Yang</p>
            <p class="paper-venue-line"><em>IEEE Transactions on Mobile Computing</em>, 2025</p>
            <div class="paper-links">
                <a href="https://ieeexplore.ieee.org/document/10886974" class="paper-link" target="_blank">Paper</a>
                <span class="show_paper_citations" data="DGRecXEAAAAJ:qjMakFHDy7sC"></span>
            </div>
        </div>
    </div>
</div>

<div class="publication-item">
    <div class="paper-box paper-box--text-only">
        <div class="paper-box-text">
            <div class="paper-meta">
                <span class="badge">TSC 2024</span>
            </div>
            <h3><a href="https://ieeexplore.ieee.org/document/10568383">EDCOMA: Enabling Efficient Double Compressed Auditing for Blockchain-Based Decentralized Storage</a></h3>
            <p class="paper-authors">Haiyang Yu, <strong>Yurun Chen</strong>, Zhen Yang, Yuwen Chen, Shui Yu</p>
            <p class="paper-venue-line"><em>IEEE Transactions on Services Computing</em>, 2024</p>
            <div class="paper-links">
                <a href="https://ieeexplore.ieee.org/document/10568383" class="paper-link" target="_blank">Paper</a>
                <span class="show_paper_citations" data="DGRecXEAAAAJ:u-x6o8ySG0sC"></span>
            </div>
        </div>
    </div>
</div>

</div>

<span class='anchor' id='-service-and-awards'></span>

# Service & Awards

<ul class="site-list">
<li><strong>Reviewer</strong> — ACL 2025, AAAI 2026, ACM MM 2026, AAAI 2027, ACM MM 2027</li>
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
