export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <a href="#home" className="f-logo"><span className="f-logo-icon">🎓</span>AspireAI</a>
          <p>Final Year Research Project<br/>AI-Powered Career Guidance for Sri Lanka<br/>Smart tool for identifying optimal educational pathways.</p>
          <p className="f-meta">Team AspireAI (2025–2026) · SLIIT<br/>Phone: +94 11 254 4801 · aspireai@sliit.lk</p>
          <div className="footer-socials">
            <a href="#" title="Twitter">🐦</a>
            <a href="#" title="Facebook">📘</a>
            <a href="#" title="Instagram">📷</a>
            <a href="#" title="LinkedIn">💼</a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about-intro">About us</a></li>
            <li><a href="#documents">Documents</a></li>
            <li><a href="#milestones">Milestones</a></li>
            <li><a href="#domain">Domain</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Our Services</h4>
          <ul>
            <li><a href="#domain">Stream Recommendation (XGBoost + RAG)</a></li>
            <li><a href="#domain">Z-Score Forecasting (ARIMA–Prophet)</a></li>
            <li><a href="#domain">Career Pathway Generation</a></li>
            <li><a href="#domain">Soft-Skill ASR Assessment</a></li>
            <li><a href="#domain">Personalised Learning Plans</a></li>
            <li><a href="#contact">Research Collaboration</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 AspireAI. All Rights Reserved. | SLIIT Faculty of Computing, Sri Lanka</p>
        <div className="f-built">Built with Next.js</div>
      </div>
    </footer>
  );
}
