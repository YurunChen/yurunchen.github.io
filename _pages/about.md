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

# 🧐 Who I Am 
👋 Hi there! I'm a Ph.D. student at Zhejiang University, working under the guidance of [Shengyu Zhang](https://shengyuzhang.github.io/) and [Keting Yin](https://person.zju.edu.cn/ykt). I also collaborate closely with Prof. [Juncheng Li](https://person.zju.edu.cn/juncheng#0) (Zhejiang University) and Prof. [Zhuosheng Zhang](https://infosec.sjtu.edu.cn/DirectoryDetail.aspx?id=179) (Shanghai Jiao Tong University).

🔬 My research focuses on **LLM/Agent security**, specifically:
- **Adversarial attacks** and knowledge poisoning targeting AI agents
- **Robust agent architectures** using external security policies
- **Defense mechanisms** against emerging AI threats

💡 I'm passionate about making AI systems more secure and trustworthy as they become increasingly integrated into our daily lives.

🤝 If you're interested in my work or have ideas for collaboration, feel free to reach out via [email](mailto:yurunchen.research@gmail.com)!


<span class='anchor' id='-news'></span>

# 💬 News
<div class="news-item">
<span class="news-time">[08/2025]</span>
🎉 Published paper in arXiv: <em><a href="https://arxiv.org/abs/2508.04482" target="_blank">"OS Agents: A Survey on MLLM-based Agents for Computer, Phone, and Browser Use"</a></em>!
</div>

<div class="news-item">
<span class="news-time">[08/2025]</span>
🎉 Published new work in arXiv: <em><a href="https://arxiv.org/abs/2508.04010" target="_blank">"HarmonyGuard: Toward Safety and Utility in Web Agents via Adaptive Policy Enhancement and Dual-Objective Optimization"</a></em>!
</div>

<div class="news-item">
<span class="news-time">[08/2025]</span>
🎉 Released github project <em><a href="https://github.com/YurunChen/HarmonyGuard" target="_blank">"HarmonyGuard"</a></em>!
</div>

<div class="news-item">
<span class="news-time">[07/2025]</span>
🎉 Paper <em>"Evaluating the Robustness of Multimodal Agents Against Active Environmental Injection Attacks"</em> accepted by ACM MM 2025!
</div>

<div class="news-item">
<span class="news-time">[06/2025]</span>
🎉 Survey paper <em>"OS Agents: A Survey on MLLM-based Agents for Use on General Computing Devices"</em> selected as Oral Paper!
</div>

<div class="news-item">
<span class="news-time">[04/2025]</span>
🎉 Survey paper <em>"OS Agents: A Survey on MLLM-based Agents for Use on General Computing Devices"</em> accepted by ACL 2025!
</div>

<div class="news-item">
<span class="news-time">[02/2025]</span>
🎉 Published new work in arXiv: <em>"Evaluating the Robustness of Multimodal Agents Against Active Environmental Injection Attacks"</em>!
</div>

<div class="news-item">
<span class="news-time">[12/2024]</span>
🎉 Published paper in PrePrint: <em>"OS Agents: A Survey on MLLM-based Agents for Computer, Phone, and Browser Use"</em>!
</div>


# 📝 Publications 
<div class="publication-item">
    <div class='paper-box'>
        <div class='paper-box-image'>
            <div>
                <div class="badge">ACM MM 2025</div>
                <img src='images/Attack_Methods7_00.png' alt="sym" width="100%">
            </div>
        </div>
        <div class='paper-box-text'>
            <h3><a href="https://arxiv.org/abs/2502.13053">Evaluating the Robustness of Multimodal Agents Against Active Environmental Injection Attacks</a></h3>
            <p><strong>Yurun Chen</strong>, Xavier Hu, Keting Yin, Juncheng Li, Shengyu Zhang</p>
            <p class="conference-info">The 33rd ACM International Conference on Multimedia (ACM MM 2025)</p>

            <p class="paper-description">This work introduces Active Environment Injection Attacks (AEIA), where attackers disguise malicious inputs as environmental elements to manipulate AI agents' decisions. By analyzing Android OS interactions, the study reveals two key vulnerabilities and proposes the AEIA-MN attack, which achieves up to 93% success against advanced MLLM-based agents.</p>
            <div class="paper-buttons">
                <a href="https://arxiv.org/abs/2502.13053" class="btn btn-primary" target="_blank">View Paper</a>
            </div>
        </div>
    </div>
</div>

<div class="publication-item">
    <div class='paper-box'>
        <div class='paper-box-image'>
            <div>
                <div class="badge">ACL 2025</div>
                <img src='images/1_teaser_os_agent_00.png' alt="sym" width="100%">
            </div>
        </div>
        <div class='paper-box-text'>
            <h3><a href="https://github.com/OS-Agent-Survey/OS-Agent-Survey/blob/main/paper.pdf">OS Agents: A Survey on MLLM-based Agents for General Computing Devices Use</a></h3>
            <p>Xueyu Hu, Tao Xiong, Biao Yi, Zishu Wei, Ruixuan Xiao, <strong>Yurun Chen</strong> etc.</p>
            <p class="conference-info">The 63rd Annual Meeting of the Association for Computational Linguistics (ACL 2025)</p>

            <p class="paper-description">This survey explores OS Agents—(M)LLM-based agents that operate within OS environments (e.g., GUI, CLI) on computers, phones, and browsers to automate tasks. It reviews their core components, construction methods, evaluation benchmarks, and outlines key challenges and future directions.</p>
            <div class="paper-buttons">
                <a href="https://github.com/OS-Agent-Survey/OS-Agent-Survey/blob/main/paper.pdf" class="btn btn-primary" target="_blank">View Paper</a>
                <a href="https://github.com/OS-Agent-Survey/OS-Agent-Survey" class="btn btn-primary" target="_blank">View Project</a>
            </div>
        </div>
    </div>
</div>

<div class="journal-paper">
    <div class="journal-paper-header">
        <span class="journal-name">TMC</span>
        <span class="paper-title">S2A-P2FS: Secure Storage Auditing With Privacy-Preserving Flexible Data Sharing in Cloud-Assisted Industrial IoT</span>
    </div>
    <div class="journal-paper-content">
        <p class="authors">Xiaohu Shan; Haiyang Yu; <strong>Yurun Chen</strong>; Yuwen Chen; Zhen Yang</p>

        <p class="journal-info"><em>IEEE Transactions on Mobile Computing</em>, 2025</p>
        <a href="https://ieeexplore.ieee.org/document/10568383" class="paper-link" target="_blank">View Paper</a>
    </div>
</div>

<div class="journal-paper">
    <div class="journal-paper-header">
        <span class="journal-name">TSC</span>
        <span class="paper-title">EDCOMA: Enabling Efficient Double Compressed Auditing for Blockchain-Based Decentralized Storage</span>
    </div>
    <div class="journal-paper-content">
        <p class="authors">Haiyang Yu, <strong>Yurun Chen</strong>, Zhen Yang, Yuwen Chen, Shui Yu</p>

        <p class="journal-info"><em>IEEE Transactions on Services Computing</em>, 2024</p>
        <a href="https://ieeexplore.ieee.org/document/10568383" class="paper-link" target="_blank">View Paper</a>
    </div>
</div>

<span class='anchor' id='-preprints'></span>

# 📄 Preprints
<div class="publication-item">
    <div class='paper-box'>
        <div class='paper-box-image'>
            <div>
                <div class="badge">arXiv</div>
                <img src='images/HarmonyGuard_00.png' alt="sym" width="100%">
            </div>
        </div>
        <div class='paper-box-text'>
            <h3><a href="https://arxiv.org/abs/2508.04010">HarmonyGuard: Toward Safety and Utility in Web Agents via Adaptive Policy Enhancement and Dual-Objective Optimization</a></h3>
            <p><strong>Yurun Chen</strong>, Xavier Hu, Yuhan Liu, Keting Yin, Juncheng Li, Zhuosheng Zhang, Shengyu Zhang</p>
            <p class="paper-description">We propose HarmonyGuard, a multi-agent collaborative framework that leverages policy enhancement and objective optimization to jointly improve both utility and safety in web agents. Extensive evaluations show that HarmonyGuard improves policy compliance by up to 38% and task completion by up to 20% over existing baselines, while achieving over 90% policy compliance across all tasks.</p>
            <div class="paper-buttons">
                <a href="https://arxiv.org/abs/2508.04010" class="btn btn-primary" target="_blank">View Paper</a>
                <a href="https://github.com/YurunChen/HarmonyGuard" class="btn btn-primary" target="_blank">View Code</a>
            </div>
        </div>
    </div>
</div>

<div class="publication-item">
    <div class='paper-box'>
        <div class='paper-box-image'>
            <div>
                <div class="badge">arXiv</div>
                <img src='images/EcoAgent.png' alt="sym" width="100%">
            </div>
        </div>
        <div class='paper-box-text'>
            <h3><a href="#">EcoAgent: An Efficient Edge-Cloud Collaborative Multi-Agent Framework for Mobile Automation</a></h3>
            <p>Biao Yi, Xavier Hu, <strong>Yurun Chen</strong>, Shengyu Zhang, Hongxia Yang, Fan Wu, Fei Wu</p>
            <p class="paper-description">We propose EcoAgent, an Edge-Cloud Collaborative multi-agent framework for mobile automation that features a closed-loop collaboration among cloud-based Planning Agent and edge-based Execution and Observation Agents. Experiments on AndroidWorld show that EcoAgent achieves task success rates comparable to cloud-based mobile agents while significantly reducing MLLM token consumption, enabling efficient and practical mobile automation.</p>
            <div class="paper-buttons">
                <a href="https://arxiv.org/abs/2505.05440" class="btn btn-primary" target="_blank">View Paper</a>
            </div>
        </div>
    </div>
</div>

# 🎖 Honors and Awards
- *2025.06* Received the title of Outstanding Graduate of Beijing City and the title of Top 100 Graduates of Beijing University of Technology.
- *2024.10* Received Xiaomi Scholarship.
- *2024.09* Received National Scholarship.
- *2023.08* Provincial Second Prize in the Graduate Electronic Design Competition.
- *2023.02* Excellence Award in CCF&ATEC First Undergraduate Blockchain Security, Privacy Technology, and Innovative Application Competition.


# 📖 Educations
- *NOW*, pursuing a Ph.D. at Zhejiang University (ZJU).
- *2022.09 - 2025.06*, Master's Degree, Beijing University of Technology (BJUT). 
- *2019.09 - 2021.06* Bachelor's Degree, California State University, San Bernardino (CSUSB). 
- *2018.09 - 2022.06*, Bachelor's Degree, Jiangsu University (JSU).  


<span class='anchor' id='-collaborators'></span>

# 🤝 Collaborators
- **[Juncheng Li](https://person.zju.edu.cn/juncheng#0)** - Zhejiang University
- **[Zhuosheng Zhang](https://infosec.sjtu.edu.cn/DirectoryDetail.aspx?id=179)** - Shanghai Jiao Tong University
- **[Xavier Hu](https://github.com/xavierhu)** - Zhejiang University
- **[Biao Yi](https://github.com/biaoyi)** - Zhejiang University
- **[Yuhan Liu](https://yuhan-xx.github.io/)** - Xiamen University


<span class='anchor' id='-reviewer-service'></span>

# 🎯 Reviewer Service
- **Conference Reviewer**: ACL'25, AAAI'26.
