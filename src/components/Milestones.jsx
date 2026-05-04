"use client";
import { useState, useRef, useEffect } from "react";

export default function Milestones() {
  const [filter, setFilter] = useState("all");
  const timelineRef = useRef(null);

  useEffect(() => {
    const items = timelineRef.current?.querySelectorAll(".tl-item");
    if (!items) return;

    items.forEach(item => {
      const show = filter === "all" || item.getAttribute("data-id") === filter;
      item.style.display = show ? "" : "none";
      if (show && filter !== "all") {
        const card = item.querySelector(".tl-card");
        if (card) {
          card.classList.add("highlighted");
          setTimeout(() => card.classList.remove("highlighted"), 2500);
        }
      }
    });
  }, [filter]);

  return (
    <>
      <div className="sep"></div>
      <section id="milestones" className="section-wrap">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-eyebrow">MILESTONES</div>
            <h2 className="section-title">Project <span className="accent">Milestones</span></h2>
            <p>All research assessments with dates, mark allocations, and completion status.</p>
          </div>

          <div className="ms-filter-wrap">
            <label htmlFor="msSelect">Filter by Assessment</label>
            <select id="msSelect" className="ms-select" value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="all">— All Milestones —</option>
              <option value="proposal">Project Proposal</option>
              <option value="pp1">Progress Presentation 1</option>
              <option value="paper">Research Paper</option>
              <option value="pp2">Progress Presentation 2</option>
              <option value="final">Final Reports</option>
              <option value="viva">Viva / Defence</option>
              <option value="web">Website Development</option>
            </select>
          </div>

          <div className="timeline" id="timeline" ref={timelineRef}>
            <div className="tl-item tl-left" data-id="proposal">
              <div className="tl-card">
                <h3>Project Proposal (Presentation + Proposal Report)</h3>
                <div className="tl-date">📅 December 2025</div>
                <div className="tl-marks">Mark Allocation: <strong>12%</strong></div>
                <div className="tl-tags"><span className="tl-tag">Group</span><span className="tl-tag done">✓ Completed</span></div>
                <p className="tl-desc">Initial project scoping, problem definition, objectives, and proposal presentation to the panel. Project Charter signed by supervisors.</p>
              </div>
              <div className="tl-dot"><div className="tl-dot-inner"></div></div>
              <div className="tl-empty"></div>
            </div>

            <div className="tl-item tl-right" data-id="pp1">
              <div className="tl-empty"></div>
              <div className="tl-dot"><div className="tl-dot-inner"></div></div>
              <div className="tl-card">
                <h3>Progress Presentation – 1</h3>
                <div className="tl-date">📅 January 2026</div>
                <div className="tl-marks">Mark Allocation: <strong>15%</strong></div>
                <div className="tl-tags"><span className="tl-tag">Group</span><span className="tl-tag">Individual</span><span className="tl-tag done">✓ Completed</span></div>
                <p className="tl-desc">Literature review, data collection across 15 schools, architecture design, and initial XGBoost model prototypes demonstrated to the panel.</p>
              </div>
            </div>

            <div className="tl-item tl-left" data-id="paper">
              <div className="tl-card">
                <h3>Research Paper Publication</h3>
                <div className="tl-date">📅 February 2026</div>
                <div className="tl-marks">Mark Allocation: <strong>10%</strong></div>
                <div className="tl-tags"><span className="tl-tag">Group</span><span className="tl-tag done">✓ Completed</span></div>
                <p className="tl-desc">IEEE conference paper submitted and accepted, documenting the AspireAI methodology, datasets, and preliminary results across all four modules.</p>
              </div>
              <div className="tl-dot"><div className="tl-dot-inner"></div></div>
              <div className="tl-empty"></div>
            </div>

            <div className="tl-item tl-right" data-id="pp2">
              <div className="tl-empty"></div>
              <div className="tl-dot"><div className="tl-dot-inner"></div></div>
              <div className="tl-card">
                <h3>Progress Presentation – 2</h3>
                <div className="tl-date">📅 April 2026</div>
                <div className="tl-marks">Mark Allocation: <strong>18%</strong></div>
                <div className="tl-tags"><span className="tl-tag">Group</span><span className="tl-tag">Individual</span><span className="tl-tag done">✓ Completed</span></div>
                <p className="tl-desc">All four modules integrated and demonstrated. Interim: 91.8% stream accuracy, 4.6% MAPE. Full React + FastAPI system integration shown.</p>
              </div>
            </div>

            <div className="tl-item tl-left" data-id="final">
              <div className="tl-card">
                <h3>Final Reports (Thesis)</h3>
                <div className="tl-date">📅 April 2026</div>
                <div className="tl-marks">Mark Allocation: <strong>10%</strong></div>
                <div className="tl-tags"><span className="tl-tag">Group</span><span className="tl-tag">Individual</span><span className="tl-tag done">✓ Completed</span></div>
                <p className="tl-desc">Longitudinal study with 450 learners over 6 months. Final: 86.89% accuracy, 82.4 SUS score, 23% increase in informed enrollment decisions.</p>
              </div>
              <div className="tl-dot"><div className="tl-dot-inner"></div></div>
              <div className="tl-empty"></div>
            </div>

            <div className="tl-item tl-right" data-id="viva">
              <div className="tl-empty"></div>
              <div className="tl-dot tl-dot-gold"><div className="tl-dot-inner"></div></div>
              <div className="tl-card">
                <h3>Final Presentation • Viva</h3>
                <div className="tl-date">📅 May 2026</div>
                <div className="tl-marks">Mark Allocation: <strong>26%</strong></div>
                <div className="tl-tags"><span className="tl-tag">Group</span><span className="tl-tag">Individual</span><span className="tl-tag pend">⏳ Upcoming</span></div>
                <p className="tl-desc">Final oral examination and project defence. Each member defends their module contribution with a live demonstration.</p>
              </div>
            </div>

            <div className="tl-item tl-left" data-id="web">
              <div className="tl-card">
                <h3>Website Development</h3>
                <div className="tl-date">📅 May 2026</div>
                <div className="tl-marks">Mark Allocation: <strong>2%</strong></div>
                <div className="tl-tags"><span className="tl-tag">Group</span><span className="tl-tag pend">⏳ Upcoming</span></div>
                <p className="tl-desc">Research portfolio website development and deployment to the SLIIT CDAP portal. Built with HTML / CSS / JavaScript.</p>
              </div>
              <div className="tl-dot tl-dot-gold"><div className="tl-dot-inner"></div></div>
              <div className="tl-empty"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
