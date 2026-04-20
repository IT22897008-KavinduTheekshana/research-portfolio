<div align="center">

# 🎓 AspireAI — Career Guidance System for Sri Lanka

**AI-Powered Career Guidance · SLIIT Faculty of Computing · Research 2025**

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

> A single-page research portfolio website for the AspireAI final year project — an integrated AI platform helping Sri Lankan students make informed educational and career decisions.

</div>

---

## 📌 About the Project

**AspireAI** addresses a critical gap in Sri Lanka's educational landscape: the lack of data-driven, personalised career guidance for students navigating O/L → A/L → university → employment transitions.

The platform integrates four AI modules:

| Module | Technique | Key Result |
|---|---|---|
| 🎯 Stream Recommendation | XGBoost + RAG (FAISS) | **94.2% accuracy** |
| 📈 Z-Score Forecasting | ARIMA–Prophet Ensemble | **3.2% MAPE** |
| 🗺️ Career Pathway Generation | Hybrid Collaborative Filtering | **89.1% P@10** |
| 🎤 Soft-Skill Assessment | ASR + NLP + Neural Classifier | **86% accuracy** |

> **SUS Usability Score: 82.4 — classified as *Excellent***

---

## 🌐 Live Site

> 🔗 **[https://research-portfolio-theta.vercel.app/](https://research-portfolio-theta.vercel.app/)**

---

## 📂 Project Structure

```
research-portfolio/
├── index.html          # Main single-page application
├── styles.css          # All styles (glassmorphism, animations, responsive)
├── README.md           # This file
└── images/             # Team photos, slides, project images
    ├── member-ahamed.jpg
    ├── member-ahmed.jpg
    ├── member-bandara.jpg
    ├── member-areeb.jpg
    ├── supervisor-jenny.jpg
    ├── supervisor-poorna.jpg
    ├── slide-proposal.jpg
    ├── slide-pp1.jpg
    ├── slide-pp2.jpg
    ├── slide-final.jpg
    ├── supervisor-visit.jpg
    └── research-problem.jpg
```

---

## ✨ Website Features

- 🌌 **Cosmic animated background** — twinkling star field with floating neon orbs
- 🃏 **Glassmorphism cards** — `backdrop-filter: blur` throughout
- 🎨 **Animated gradient text** — cyan → purple → pink hero headline
- 📊 **Scroll-triggered performance bars** — IntersectionObserver animations
- 🔖 **Domain tab navigation** — 6 content tabs with fade-in transitions
- ⏱️ **Interactive milestone timeline** — alternating layout with dropdown filter
- 📸 **Smart team photo cards** — auto-fallback to initials if image is missing
- 📱 **Fully responsive** — mobile hamburger menu, stacked layouts
- 📨 **Contact form** — with simulated success feedback

---

## 🧠 Research Summary

**Dataset:** 7,094 student records from 15 schools across 3 Sri Lankan provinces  
**Evaluation:** 450 learners over 6 months  
**Languages:** English + Sinhala (bilingual support)  
**Deployment:** AWS EC2 · Docker · FastAPI · React + Material-UI

### Technology Stack

`XGBoost` `ARIMA` `Prophet` `LightGBM` `GPT-4` `FAISS` `FastAPI` `React.js`  
`PostgreSQL` `Redis` `Docker` `AWS EC2` `scikit-learn` `Transformers` `D3.js`

---

## 📅 Project Milestones

| Assessment | Date | Marks | Status |
|---|---|---|---|
| Project Proposal | Dec 2025 | 12% | ✅ Completed |
| Progress Presentation 1 | Jan 2026 | 15% | ✅ Completed |
| Research Paper | Feb 2026 | 10% | ✅ Completed |
| Progress Presentation 2 | Apr 2026 | 18% | ✅ Completed |
| Final Reports (Thesis) | Apr 2026 | 10% | ✅ Completed |
| Final Viva / Defence | May 2026 | 26% | ⏳ Upcoming |
| Website Development | May 2026 | 2% | ⏳ Upcoming |

---

## 👨‍💻 Team

| Name | Module | Role |
|---|---|---|
| Areeb Aflah N | Stream Recommendation | Researcher |
| Bandara R M M K T | Z-Score Forecasting | Researcher |
| Ahmed M A A | Career Pathway Generation | Researcher |
| Ahamed A L I | Soft-Skill Assessment | Researcher |

**Supervisors:** Ms. Jenny Krishara · Ms. Poorna Panduwawala  
**Institution:** SLIIT Faculty of Computing, Malabe, Sri Lanka

---

## 🚀 Running Locally

This is a **pure static site** — no build step required.

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/aspireai-portfolio.git

# Open in browser
# Just open index.html directly, or use Live Server in VS Code
```

> **VS Code:** Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension → Right-click `index.html` → **Open with Live Server**

---

## 📦 Deployment

| Platform | Steps |
|---|---|
| **Netlify Drop** | Drag & drop the folder at [netlify.com/drop](https://app.netlify.com/drop) |
| **GitHub Pages** | Settings → Pages → Branch: `main` → Save |
| **Vercel** | Import repo → Deploy |
| **SLIIT CDAP** | Upload via student portal at [cdap.sliit.lk](http://cdap.sliit.lk) |

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).  
© 2025 Team AspireAI · SLIIT Faculty of Computing · Sri Lanka

---

<div align="center">
  <sub>Built with ❤️ using HTML · CSS · JavaScript — No frameworks, no dependencies.</sub>
</div>
