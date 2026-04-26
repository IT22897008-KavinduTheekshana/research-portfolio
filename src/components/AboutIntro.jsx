export default function AboutIntro() {
  return (
    <>
      <div className="sep"></div>
      <section id="about-intro">
        <div className="about-grid">
          <div className="about-text">
            <div className="about-tag">🎓 Research Project · SLIIT 2025</div>
            <h2 className="about-h">AspireAI</h2>
            <span className="about-system">About the System</span>
            <p>
              <span className="hl-blue">Career guidance challenges</span> such as uninformed stream selection, Z-score uncertainty, and lack of career visibility significantly impact Sri Lankan students&apos; academic performance, yet <span className="hl-purple">traditional advisory methods</span> often fail to address these effectively. This research proposes an integrated AI platform leveraging <span className="hl-green">machine learning, time series forecasting, collaborative filtering, and NLP</span> to identify optimal educational pathways. The platform analyses academic grades for stream selection, Z-score data for university admission forecasting, employment market data for career pathways, and speech features for soft-skill assessment. Trained on <span className="hl-blue">7,094 student records</span> from 15 schools across 3 provinces and evaluated with 450 learners over 6 months, AspireAI delivers <span className="hl-purple">94.2% stream accuracy</span>, 3.2% Z-score MAPE, and an 82.4 SUS usability score — classified as Excellent.
            </p>
          </div>
          <div className="about-visual">
            🧠
            <div className="about-visual-glow"></div>
          </div>
        </div>
      </section>
    </>
  );
}
