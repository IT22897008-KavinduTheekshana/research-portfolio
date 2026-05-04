"use client";
import { useState, useEffect, useRef } from "react";

const datacollectImages = [
  { src: "images/datacollect/image1.jpeg", alt: "External Supervisor Visit", caption: "External Supervisor Visit – School Data Collection" },
  { src: "images/datacollect/image2.jpeg", alt: "Data Collection Session", caption: "Data Collection Session – Student Interviews" },
  { src: "images/datacollect/image3.jpeg", alt: "School Visit", caption: "School Visit – Questionnaire Distribution" },
  { src: "images/datacollect/image4.jpeg", alt: "Field Research", caption: "Field Research – Rural School Engagement" },
];

export default function Domain() {
  const [activeTab, setActiveTab] = useState("lit");
  const [slideIndex, setSlideIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const timerRef = useRef(null);

  const goToSlide = (index) => {
    setFadeIn(false);
    setTimeout(() => {
      setSlideIndex(index);
      setFadeIn(true);
    }, 300);
  };

  const nextSlide = () => goToSlide((slideIndex + 1) % datacollectImages.length);
  const prevSlide = () => goToSlide((slideIndex - 1 + datacollectImages.length) % datacollectImages.length);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setSlideIndex(prev => {
        const next = (prev + 1) % datacollectImages.length;
        return next;
      });
      setFadeIn(false);
      setTimeout(() => setFadeIn(true), 300);
    }, 3000);
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <>
      <div className="sep"></div>
      <section id="domain" className="section-wrap">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-eyebrow">PROJECT DOMAIN</div>
            <h2 className="section-title">Research <span className="accent">Foundation</span></h2>
            <p>Explore the literature, problem, gap, objectives, methodology and technologies behind AspireAI.</p>
          </div>

          <div className="tab-bar">
            <button className={`tab-btn ${activeTab === 'lit' ? 'active' : ''}`} onClick={() => setActiveTab('lit')}>Literature Survey</button>
            <button className={`tab-btn ${activeTab === 'prob' ? 'active' : ''}`} onClick={() => setActiveTab('prob')}>Research Problem</button>
            <button className={`tab-btn ${activeTab === 'gap' ? 'active' : ''}`} onClick={() => setActiveTab('gap')}>Research Gap</button>
            <button className={`tab-btn ${activeTab === 'obj' ? 'active' : ''}`} onClick={() => setActiveTab('obj')}>Research Objective</button>
            <button className={`tab-btn ${activeTab === 'meth' ? 'active' : ''}`} onClick={() => setActiveTab('meth')}>Methodology</button>
            <button className={`tab-btn ${activeTab === 'tech' ? 'active' : ''}`} onClick={() => setActiveTab('tech')}>Technologies</button>
          </div>

          {/* Literature Survey */}
          <div className={`tab-panel ${activeTab === 'lit' ? 'active' : ''}`} id="tab-lit">
            <div className="domain-card">
              <h3>Literature Survey</h3>
              <p>Several AI tools have been developed to assist with educational recommendations. Existing systems using Random Forest achieved 89.5% accuracy while XGBoost ensemble approaches reached 91.3%, but lacked interactive curriculum validation. Z-score forecasting for university admission was largely unexplored in developing-country contexts. Studies on RAG-based LLM grounding show it minimises hallucination in educational settings, making it ideal for quiz generation and course advising. Collaborative filtering methods have been applied in e-commerce recommendation but rarely in structured career pathway contexts for students with non-traditional qualifications.</p>
            </div>
            {/* 2x2 Image Grid */}
            <div style={{
              display:'grid',
              gridTemplateColumns:'1fr 1fr 1fr 1fr',
              gap:'10px',
              marginTop:'16px'
            }}>
              {datacollectImages.map((img, i) => (
                <div key={i} style={{position:'relative', borderRadius:'10px', overflow:'hidden', background:'#0a0a0a', aspectRatio:'4/3'}}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    style={{
                      width:'100%',
                      height:'100%',
                      objectFit:'contain',
                      display:'block',
                      transition:'transform 0.3s ease'
                    }}
                    onError={(e) => { e.target.style.display='none'; }}
                    onMouseEnter={e => e.currentTarget.style.transform='scale(1.04)'}
                    onMouseLeave={e => e.currentTarget.style.transform='scale(1)'}
                  />
                  <div style={{
                    position:'absolute', bottom:0, left:0, right:0,
                    background:'linear-gradient(transparent, rgba(0,0,0,0.7))',
                    color:'#fff', fontSize:'0.72rem', padding:'18px 10px 8px',
                    textAlign:'center', letterSpacing:'.02em'
                  }}>{img.caption}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Research Problem */}
          <div className={`tab-panel ${activeTab === 'prob' ? 'active' : ''}`} id="tab-prob">
            <div className="domain-card">
              <h3>Research Problem</h3>
              <p>Sri Lankan students face critical educational transitions without integrated, data-driven guidance. Only 15–20% of approximately 300,000 annual Advanced Level candidates secure state university admission. The remaining majority must navigate fragmented, poorly documented alternatives — private universities, vocational courses, and overseas options — without systematic support. The lack of a holistic platform connecting O/L stream selection → A/L performance → Z-score forecasting → employment readiness creates a significant equity gap across income groups, geographic regions, and school quality tiers.</p>
            </div>
            <div className="domain-photo">
              <img src="images/datacollect/image2.jpeg" alt="Research" onError={(e) => { e.target.style.display='none'; e.target.nextElementSibling.style.display='flex'; }}/>
              <div className="domain-photo-placeholder" style={{display:'none'}}><span>📊</span><p>Add photo at: images/datacollect/image2.jpeg</p></div>
              <div className="domain-photo-caption">Sri Lanka University Admission Statistics</div>
            </div>
          </div>

          {/* Research Gap */}
          <div className={`tab-panel ${activeTab === 'gap' ? 'active' : ''}`} id="tab-gap">
            <div className="domain-card">
              <h3>Research Gap</h3>
              <p>A review of 47 peer-reviewed publications revealed no existing platform integrating all of the following:</p>
              <ul style={{marginTop: '12px'}}>
                <li>Predictive stream selection with curriculum-aligned validation quizzes</li>
                <li>Z-score forecasting with ROI and scholarship estimation</li>
                <li>Career pathway visualisation for non-traditional (non-university) learners</li>
                <li>Objective, automated soft-skill assessment using speech analysis</li>
                <li>All designed specifically for Sri Lanka&apos;s bilingual, multi-stream, UGC-regulated ecosystem</li>
              </ul>
              <p style={{marginTop: '14px'}}>International platforms (Khan Academy, Naviance) address some of these individually but are not contextualised for Sri Lanka&apos;s unique Z-score system, district-based university allocation, or local labour market conditions.</p>
            </div>
          </div>

          {/* Research Objective */}
          <div className={`tab-panel ${activeTab === 'obj' ? 'active' : ''}`} id="tab-obj">
            <div className="domain-card">
              <h3>Research Objectives</h3>
              <ul>
                <li>Design and implement a hybrid XGBoost + RAG pipeline that recommends optimal A/L academic streams based on O/L results, subject interests, and career goals, with interactive curriculum-aligned quiz validation.</li>
                <li>Develop an ARIMA–Prophet weighted ensemble model that forecasts district-specific university admission Z-scores and estimates ROI for different degree programs.</li>
                <li>Build a collaborative filtering + content-based hybrid system that generates personalised career pathways for learners entering non-traditional post-secondary routes (TVEC, NIBM, private, overseas).</li>
                <li>Create an ASR + NLP soft-skill assessment pipeline that transcribes student speech samples, extracts fluency and coherence features, and classifies proficiency with adaptive recommendations.</li>
              </ul>
            </div>
          </div>

          {/* Methodology */}
          <div className={`tab-panel ${activeTab === 'meth' ? 'active' : ''}`} id="tab-meth">
            <div className="domain-card">
              <h3>System Methodology</h3>
              <p>AspireAI is built as a four-module integrated platform using microservices architecture deployed on AWS EC2 with FastAPI backends and a React + Material-UI frontend.</p>
            </div>
            <div className="method-grid">
              <div className="method-item"><h4>Module 1 · Stream Recommendation</h4><p>XGBoost multi-class classifier (η=0.05, depth=6, n=200) with RAG pipeline (FAISS + all-MiniLM-L6-v2). Trained on 7,094 records from 15 schools across 3 provinces. Oversampled with SMOTE.</p></div>
              <div className="method-item"><h4>Module 2 · Z-Score Forecasting</h4><p>ARIMA–Prophet weighted ensemble (w=0.6/0.4) on 3,847 course-district-year UGC records. Weighted scoring: Z-score compatibility (50%), subject alignment (30%), interest match (20%).</p></div>
              <div className="method-item"><h4>Module 3 · Career Pathway Generator</h4><p>Hybrid SVD collaborative filtering + cosine-similarity content filtering (Score = 0.6·CF + 0.4·CB). LightGBM ranking with GPT-4 narrative generation grounded in local labour market data.</p></div>
              <div className="method-item"><h4>Module 4 · Soft Skill Assessment</h4><p>ASR transcription (13.2% WER) with NLP feature extraction: fluency, lexical richness, coherence, sentiment. 2-layer neural classifier (ReLU, dropout=0.3) maps to 3 proficiency levels.</p></div>
            </div>
          </div>

          {/* Technologies */}
          <div className={`tab-panel ${activeTab === 'tech' ? 'active' : ''}`} id="tab-tech">
            <div className="domain-card">
              <h3>Technologies Used</h3>
              <p>AspireAI integrates state-of-the-art tools across ML, NLP, backend, and frontend domains.</p>
            </div>
            <div style={{textAlign: 'center', margin: '24px 0 12px'}}>
              <div style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '100px', height: '72px', background: 'var(--glass)', borderRadius: '36px', border: '1px solid var(--border)', fontSize: '2.2rem', animation: 'heroFloat 5s ease-in-out infinite'}}>☁️</div>
              <p style={{color: 'var(--muted)', fontSize: '.8rem', marginTop: '8px', letterSpacing: '.15em', textTransform: 'uppercase'}}>Technologies</p>
            </div>
            <div className="tech-icons-grid">
              <div className="tech-icon-item"><div className="ti-icon">⚛️</div><span>React.js</span></div>
              <div className="tech-icon-item"><div className="ti-icon">🔶</div><span>XGBoost</span></div>
              <div className="tech-icon-item"><div className="ti-icon">🐍</div><span>Python</span></div>
              <div className="tech-icon-item"><div className="ti-icon">🌊</div><span>FastAPI</span></div>
              <div className="tech-icon-item"><div className="ti-icon">🤖</div><span>GPT-4</span></div>
              <div className="tech-icon-item"><div className="ti-icon">🔍</div><span>FAISS</span></div>
              <div className="tech-icon-item"><div className="ti-icon">🔥</div><span>LightGBM</span></div>
              <div className="tech-icon-item"><div className="ti-icon">🐘</div><span>PostgreSQL</span></div>
              <div className="tech-icon-item"><div className="ti-icon">⚡</div><span>Redis</span></div>
              <div className="tech-icon-item"><div className="ti-icon">🐳</div><span>Docker</span></div>
              <div className="tech-icon-item"><div className="ti-icon">☁️</div><span>AWS EC2</span></div>
              <div className="tech-icon-item"><div className="ti-icon">📊</div><span>D3.js</span></div>
            </div>
            <div className="tech-tags">
              <span className="tech-tag">XGBoost</span><span className="tech-tag">ARIMA–Prophet</span>
              <span className="tech-tag">LightGBM</span><span className="tech-tag">GPT-4</span>
              <span className="tech-tag">RAG / FAISS</span><span className="tech-tag">FastAPI</span>
              <span className="tech-tag">React + MUI</span><span className="tech-tag">PostgreSQL</span>
              <span className="tech-tag">Redis</span><span className="tech-tag">Docker / K8s</span>
              <span className="tech-tag">AWS EC2</span><span className="tech-tag">Transformers</span>
              <span className="tech-tag">scikit-learn</span><span className="tech-tag">SMOTE</span>
              <span className="tech-tag">D3.js</span><span className="tech-tag">NVIDIA V100</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
