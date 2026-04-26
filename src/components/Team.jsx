"use client";
export default function Team() {
  return (
    <>
      <div className="sep"></div>
      <section id="team" className="section-wrap">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-eyebrow">About Us</div>
            <h2 className="section-title">Meet the <span className="accent">Team</span></h2>
            <p>The researchers behind AspireAI, under the guidance of SLIIT Faculty of Computing.</p>
          </div>

          <div className="team-label">CHECK OUR TEAM</div>
          <div className="team-grid" style={{marginBottom: '40px'}}>

            <div className="team-card">
              <div className="team-photo">
                <img src="images/member-ahamed.jpeg" alt="Ahamed A L I" onError={(e) => { e.target.style.display='none'; e.target.nextElementSibling.style.display='flex'; }}/>
                <div className="team-photo-fallback" style={{background: 'linear-gradient(135deg,#0ea5e9,#6366f1)'}}>AA</div>
              </div>
              <div className="team-info">
                <h3>Ahamed A L I</h3>
                <div className="team-role">Researcher</div>
                <div className="team-degree">Bachelor of Science (Hons) in Information Technology<br/>Specialising in Information Technology</div>
                <div className="team-achievement">🏅 Module 4 – Soft Skill Assessment</div>
              </div>
            </div>

            <div className="team-card">
              <div className="team-photo">
                <img src="images/member-ahmed.jpg" alt="Ahmed M A A" onError={(e) => { e.target.style.display='none'; e.target.nextElementSibling.style.display='flex'; }}/>
                <div className="team-photo-fallback" style={{background: 'linear-gradient(135deg,#a855f7,#ec4899)'}}>AM</div>
              </div>
              <div className="team-info">
                <h3>Ahmed M A A</h3>
                <div className="team-role">Researcher</div>
                <div className="team-degree">Bachelor of Science (Hons) in Information Technology<br/>Specialising in Information Technology</div>
                <div className="team-achievement">🏅 Module 3 – Career Pathway</div>
              </div>
            </div>

            <div className="team-card">
              <div className="team-photo">
                <img src="images/member-kavindu.jpg" alt="Bandara R M M K T" onError={(e) => { e.target.style.display='none'; e.target.nextElementSibling.style.display='flex'; }}/>
                <div className="team-photo-fallback" style={{background: 'linear-gradient(135deg,#10b981,#0891b2)'}}>BK</div>
              </div>
              <div className="team-info">
                <h3>Bandara R M M K T</h3>
                <div className="team-role">Researcher</div>
                <div className="team-degree">Bachelor of Science (Hons) in Information Technology<br/>Specialising in Information Technology</div>
                <div className="team-achievement">🏅 Module 2 – Z-Score Forecasting</div>
              </div>
            </div>

            <div className="team-card">
              <div className="team-photo">
                <img src="images/member-areeb.jpg" alt="Areeb Aflah N" onError={(e) => { e.target.style.display='none'; e.target.nextElementSibling.style.display='flex'; }}/>
                <div className="team-photo-fallback" style={{background: 'linear-gradient(135deg,#f59e0b,#ef4444)'}}>NA</div>
              </div>
              <div className="team-info">
                <h3>Areeb Aflah N</h3>
                <div className="team-role">Researcher</div>
                <div className="team-degree">Bachelor of Science (Hons) in Information Technology<br/>Specialising in Information Technology</div>
                <div className="team-achievement">🏅 Module 1 – Stream Recommendation</div>
              </div>
            </div>

          </div>

          <div className="team-label" style={{color: 'var(--muted)'}}>SUPERVISORS</div>
          <div className="sup-grid">
            <div className="team-card">
              <div className="team-photo">
                <img src="images/supervisor-jenny.jpg" alt="Jenny Krishara" onError={(e) => { e.target.style.display='none'; e.target.nextElementSibling.style.display='flex'; }}/>
                <div className="team-photo-fallback" style={{background: 'linear-gradient(135deg,#f43f5e,#be185d)'}}>JK</div>
              </div>
              <div className="team-info">
                <h3>Jenny Krishara</h3>
                <div className="team-role">Supervisor</div>
                <div className="team-degree">Senior Lecturer<br/>Faculty of Computing, SLIIT</div>
                <div className="team-email">jenny.k@sliit.lk</div>
              </div>
            </div>
            <div className="team-card">
              <div className="team-photo">
                <img src="images/supervisor-poorna.jpg" alt="Poorna Panduwawala" onError={(e) => { e.target.style.display='none'; e.target.nextElementSibling.style.display='flex'; }}/>
                <div className="team-photo-fallback" style={{background: 'linear-gradient(135deg,#0ea5e9,#0369a1)'}}>PP</div>
              </div>
              <div className="team-info">
                <h3>Poorna Panduwawala</h3>
                <div className="team-role">Co-Supervisor</div>
                <div className="team-degree">Senior Lecturer<br/>Faculty of Computing, SLIIT</div>
                <div className="team-email">poorna.p@sliit.lk</div>
              </div>
            </div>
          </div>

          <div className="photo-hint">
            <strong>📸 Add your photos:</strong> Create an <code>public/images/</code> folder and add:
            <code>member-ahamed.jpg</code> <code>member-ahmed.jpg</code> <code>member-bandara.jpg</code>
            <code>member-areeb.jpg</code> <code>supervisor-jenny.jpg</code> <code>supervisor-poorna.jpg</code>
          </div>
        </div>
      </section>
    </>
  );
}
