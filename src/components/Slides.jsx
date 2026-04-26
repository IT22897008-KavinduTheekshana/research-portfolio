"use client";
export default function Slides() {
  return (
    <>
      <div className="sep"></div>
      <section id="slides" className="section-wrap">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-eyebrow">PROJECT PRESENTATIONS</div>
            <h2 className="section-title">Presentation <span className="accent">Slides</span></h2>
            <p>Download slides from all past and upcoming presentations.</p>
          </div>
          <div className="slides-grid">

            <div className="slide-card">
              <div className="slide-thumb">
                <div className="slide-thumb-placeholder" style={{background: 'linear-gradient(135deg,#e8f0fe,#c6d8fe)'}}>📊</div>
              </div>
              <div className="slide-info"><h4>Proposal Presentation</h4><span className="slide-sub">Initial Presentation with Overview of Research Problem</span><span className="slide-date">December 2025</span><a className="btn-slide" href="#">Download</a></div>
            </div>

            <div className="slide-card">
              <div className="slide-thumb">
                <div className="slide-thumb-placeholder" style={{background: 'linear-gradient(135deg,#ecfce4,#c9f9e4)'}}>🔬</div>
              </div>
              <div className="slide-info"><h4>Progress Presentation-1</h4><span className="slide-sub">50% Project Completion</span><span className="slide-date">January 2026</span><a className="btn-slide" href="#">Download</a></div>
            </div>

            <div className="slide-card">
              <div className="slide-thumb">
                <div className="slide-thumb-placeholder" style={{background: 'linear-gradient(135deg,#fff8e8,#fde8b0)'}}>🤖</div>
              </div>
              <div className="slide-info"><h4>Progress Presentation-2</h4><span className="slide-sub">80% Project Completion</span><span className="slide-date">April 2026</span><a className="btn-slide" href="#">Download</a></div>
            </div>

            <div className="slide-card">
              <div className="slide-thumb">
                <div className="slide-thumb-placeholder" style={{background: 'linear-gradient(135deg,#f0f8e8,#c8f0b0)'}}>🏆</div>
              </div>
              <div className="slide-info"><h4>Final Presentation</h4><span className="slide-sub">100% Completion with deployed Solution</span><span className="slide-date">April 2026</span><a className="btn-slide" href="#">Download</a></div>
            </div>

            <div className="slide-card">
              <div className="slide-thumb">
                <div className="slide-thumb-placeholder" style={{background: 'linear-gradient(135deg,#f5f5ff,#e0e0f8)'}}>🎤</div>
              </div>
              <div className="slide-info"><h4>Viva / Defence</h4><span className="slide-sub">Final Oral Examination</span><span className="slide-date">May 2026 · TBD</span><a className="btn-slide disabled">Coming Soon</a></div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
