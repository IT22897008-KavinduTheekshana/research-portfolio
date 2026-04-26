"use client";
import { useEffect } from "react";

export default function Animations() {
  useEffect(() => {
    const fadeObs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          e.target.style.animation = `fadeUp 0.55s ${(i % 6) * 0.06}s cubic-bezier(.16,1,.3,1) both`;
          e.target.style.opacity = '1';
          fadeObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.07 });

    const elements = document.querySelectorAll(
      '.method-item, .team-card, .doc-card, .slide-card, .perf-card, .tl-card, .tech-icon-item'
    );
    
    elements.forEach(el => {
      el.style.opacity = '0';
      fadeObs.observe(el);
    });

    return () => fadeObs.disconnect();
  }, []);

  return null;
}
