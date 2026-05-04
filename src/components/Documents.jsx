import docs from "../../public/documents/documents.json";

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
            {docs.map((doc) => {
              // Extract just the filename from the path e.g. "documents/Research_Paper.pdf" → "Research_Paper.pdf"
              const filename = doc.file.split("/").pop();
              return (
                <div key={doc.id} className={`doc-card ${doc.color}`}>
                  <div className="doc-icon-wrap">{doc.icon}</div>
                  <h4>{doc.title}</h4>
                  <p>{doc.description}</p>
                  <a
                    className="btn-doc"
                    href={`/api/download/${encodeURIComponent(filename)}`}
                  >
                    Download PDF
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
