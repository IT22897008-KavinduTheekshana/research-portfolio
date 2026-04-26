export default function Documents() {
  return (
    <>
      <div className="sep"></div>
      <section id="documents" className="section-wrap">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-eyebrow">Documents</div>
            <h2 className="section-title">Project <span className="accent">Documents</span></h2>
            <p>All research documents produced throughout the project lifecycle. Click to download.</p>
          </div>
          <div className="doc-grid">
            <div className="doc-card doc-c-pink"><div className="doc-icon-wrap">📊</div><h4>Project Charter</h4><p>The document gives information regarding the statement of scope, objectives overview, an outline of scope, approximate schedule and people participating in the project.</p><a className="btn-doc" href="#">Download PDF</a></div>
            <div className="doc-card doc-c-blue"><div className="doc-icon-wrap">📄</div><h4>Project Proposal</h4><p>The document contains details like goals, objectives, important dates, milestones and requirements needed to start and complete the research project.</p><a className="btn-doc" href="#">Download PDF</a></div>
            <div className="doc-card doc-c-purple"><div className="doc-icon-wrap">📝</div><h4>Research Paper</h4><p>A research paper containing literature review, methodology, analysis, interpretation, and argument based on in-depth independent research. Published in IEEE.</p><a className="btn-doc" href="#">Download PDF</a></div>
            <div className="doc-card doc-c-green"><div className="doc-icon-wrap">📚</div><h4>Final Thesis (Main)</h4><p>The document contains the proposed solution to the research question, finalised after six months of longitudinal evaluation with 450 learners across Sri Lanka.</p><a className="btn-doc" href="#">Download PDF</a></div>
            <div className="doc-card doc-c-yellow"><div className="doc-icon-wrap">🎓</div><h4>Individual Documents (×4)</h4><p>Contains individual per-member component thesis documents — one for each of the four research modules developed by the AspireAI team.</p><a className="btn-doc" href="#">Download PDF</a></div>
            <div className="doc-card doc-c-orange"><div className="doc-icon-wrap">🗂️</div><h4>Check List Documents</h4><p>The document describes the progress of the project within specific time periods and compares it against the project plan milestone completion checklist.</p><a className="btn-doc" href="#">Download PDF</a></div>
            <div className="doc-card doc-c-teal"><div className="doc-icon-wrap">💼</div><h4>Business Plan</h4><p>The document outlines the commercialisation roadmap, revenue model, and go-to-market strategy for AspireAI as a scalable EdTech platform in Sri Lanka.</p><a className="btn-doc" href="#">Download PDF</a></div>
          </div>
        </div>
      </section>
    </>
  );
}
