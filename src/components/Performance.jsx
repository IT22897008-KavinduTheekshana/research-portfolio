"use client";
import { useEffect, useRef } from "react";

export default function Performance() {
  const barsRef = useRef([]);

  useEffect(() => {
    const barObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.width = e.target.getAttribute("data-width") + "%";
            barObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    barsRef.current.forEach((b) => {
      if (b) barObs.observe(b);
    });

    return () => barObs.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !barsRef.current.includes(el)) {
      barsRef.current.push(el);
    }
  };

  return (
    <>
      <div className="sep"></div>
      <section id="performance" className="section-wrap">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-eyebrow">Results</div>
            <h2 className="section-title">System <span className="accent">Performance</span></h2>
            <p>Validated on 450 learners over 6 months across four AI modules.</p>
          </div>
          <div className="perf-grid">
            <div className="perf-card shimmer-wrap"><div className="perf-metric">Stream Recommendation</div><div className="perf-val">86.89%</div><div className="perf-comp">↑ from baseline 89.5%</div><div className="bar-wrap"><div className="bar-fill" data-width="86.89" ref={addToRefs}></div></div></div>
            <div className="perf-card shimmer-wrap"><div className="perf-metric">Z-Score MAPE Error</div><div className="perf-val">3.2%</div><div className="perf-comp">↓ from baseline 8.1%</div><div className="bar-wrap"><div className="bar-fill" data-width="60" ref={addToRefs}></div></div></div>
            <div className="perf-card shimmer-wrap"><div className="perf-metric">Course Recommendation</div><div className="perf-val">89.4%</div><div className="perf-comp">↑ from baseline 68.4%</div><div className="bar-wrap"><div className="bar-fill" data-width="89.4" ref={addToRefs}></div></div></div>
            <div className="perf-card shimmer-wrap"><div className="perf-metric">Career Pathways (P@10)</div><div className="perf-val">89.1%</div><div className="perf-comp">↑ from baseline 82.4%</div><div className="bar-wrap"><div className="bar-fill" data-width="89.1" ref={addToRefs}></div></div></div>
            <div className="perf-card shimmer-wrap"><div className="perf-metric">Soft Skill Accuracy</div><div className="perf-val">86%</div><div className="perf-comp">ASR WER: 13.2%</div><div className="bar-wrap"><div className="bar-fill" data-width="86" ref={addToRefs}></div></div></div>
            <div className="perf-card shimmer-wrap"><div className="perf-metric">SUS Usability Score</div><div className="perf-val">82.4</div><div className="perf-comp">Classified: Excellent</div><div className="bar-wrap"><div className="bar-fill" data-width="82.4" ref={addToRefs}></div></div></div>
          </div>
        </div>
      </section>
    </>
  );
}
