export default function Hero() {
  return (
    <section id="home">
      <div className="hero-etched"><span>ONLINE</span><span>EDUCATION</span></div>
      <div className="deco-cloud">📡</div>

      <div className="hero-desk">
        <div className="deco-globe"></div>
        <div className="deco-pencil"></div>
        <div className="desk-screen"></div>
        <div className="desk-stand"></div>
        <div className="desk-base"></div>
        <div className="deco-lamp"></div>
        <div className="deco-books">
          <div className="book book-1"></div>
          <div className="book book-2"></div>
          <div className="book book-3"></div>
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-badge"><span className="dot"></span>SLIIT Faculty of Computing · Research 2025</div>
        <h1>AspireAI<br /><span className="grad-text">Smart Career Guidance</span></h1>
        <p className="hero-sub">AI-Powered Career Guidance System for Sri Lanka</p>
        <div className="hero-metrics">
          <div className="metric"><div className="metric-val">86.8<span>%</span></div><div className="metric-label">Stream Accuracy</div></div>
          <div className="metric-divider"></div>
          <div className="metric"><div className="metric-val">3.2<span>%</span></div><div className="metric-label">Z-Score MAPE</div></div>
          <div className="metric-divider"></div>
          <div className="metric"><div className="metric-val">450<span>+</span></div><div className="metric-label">Learners Evaluated</div></div>
          <div className="metric-divider"></div>
          <div className="metric"><div className="metric-val">82.4</div><div className="metric-label">SUS Score</div></div>
        </div>
      </div>

      <div className="hero-features">
        <div className="hero-feat">
          <div className="feat-icon">🎯</div>
          <div className="feat-title">Stream Recommendation &amp; O/L Guidance</div>
          <div className="feat-desc">Hybrid XGBoost + RAG pipeline recommends the optimal A/L stream using student academic profiles.</div>
        </div>
        <div className="hero-feat">
          <div className="feat-icon">📈</div>
          <div className="feat-title">Z-Score Forecasting &amp; ROI Estimation</div>
          <div className="feat-desc">ARIMA–Prophet ensemble forecasts university admission cut-offs with only 3.2% MAPE error.</div>
        </div>
        <div className="hero-feat">
          <div className="feat-icon">🗺️</div>
          <div className="feat-title">Career Pathway Visualisation</div>
          <div className="feat-desc">Collaborative + content-based filtering generates personalised career pathways for every learner.</div>
        </div>
        <div className="hero-feat">
          <div className="feat-icon">🎤</div>
          <div className="feat-title">Soft-Skill Assessment</div>
          <div className="feat-desc">ASR + NLP evaluates speech fluency, coherence, and sentiment for interview readiness.</div>
        </div>
      </div>
    </section>
  );
}
