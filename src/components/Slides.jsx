"use client";
import slides from "../../public/documents/slides.json";

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
            {slides.map((slide) => {
              const filename = slide.file ? slide.file.split("/").pop() : "";
              return (
                <div className="slide-card" key={slide.id}>
                  <div className="slide-thumb">
                    <div
                      className="slide-thumb-placeholder"
                      style={{ background: slide.gradient }}
                    >
                      {slide.icon}
                    </div>
                  </div>
                  <div className="slide-info">
                    <h4>{slide.title}</h4>
                    <span className="slide-sub">{slide.sub}</span>
                    <span className="slide-date">{slide.date}</span>
                    {slide.available ? (
                      <a
                        className="btn-slide"
                        href={`/api/download/${encodeURIComponent(filename)}`}
                      >
                        Download
                      </a>
                    ) : (
                      <a className="btn-slide disabled">Coming Soon</a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
