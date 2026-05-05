"use client";
import docs from "../../public/documents/documents.json";

export default function Documents() {
  const handleMultipleDownloads = (e, files) => {
    e.preventDefault();
    files.forEach((file, index) => {
      setTimeout(() => {
        // file is like "documents/Project Proposal/Proposal1.pdf"
        // we want everything after "documents/"
        const parts = file.split("/");
        const filename = parts.slice(parts.indexOf("documents") + 1).join("/");
        const link = document.createElement("a");
        link.href = `/api/download/${encodeURIComponent(filename)}`;
        link.download = filename.split("/").pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, index * 400); // Small delay to prevent browser blocking multiple downloads
    });
  };

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
              const filename = doc.file ? doc.file.split("/").pop() : "";
              return (
                <div key={doc.id} className={`doc-card ${doc.color}`}>
                  <div className="doc-icon-wrap">{doc.icon}</div>
                  <h4>{doc.title}</h4>
                  <p>{doc.description}</p>
                  {doc.available === false ? (
                    <span className="btn-doc disabled" style={{ background: 'rgba(255,255,255,0.2)', color: 'rgba(20,20,60,0.5)', boxShadow: 'none', pointerEvents: 'none' }}>
                      Coming Soon
                    </span>
                  ) : doc.files ? (
                    <a
                      className="btn-doc"
                      href="#"
                      onClick={(e) => handleMultipleDownloads(e, doc.files)}
                    >
                      Download All
                    </a>
                  ) : (
                    <a
                      className="btn-doc"
                      href={`/api/download/${encodeURIComponent(filename)}`}
                    >
                      Download PDF
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
