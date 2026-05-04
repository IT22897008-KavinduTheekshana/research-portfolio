"use client";
import { useState } from "react";

export default function Contact() {
  const [btnText, setBtnText] = useState("Send Message");
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [showMsg, setShowMsg] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBtnText("Sending…");
    setBtnDisabled(true);
    setIsError(false);
    setShowMsg(false);

    const formData = new FormData(e.target);
    // Use the Web3Forms access key from the environment variables
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setShowMsg(true);
        setBtnText("Send Message");
        setBtnDisabled(false);
        e.target.reset();

        setTimeout(() => setShowMsg(false), 5000);
      } else {
        console.error("Web3Forms Error:", data);
        setIsError(true);
        setBtnText("Send Message");
        setBtnDisabled(false);
        setShowMsg(true);
        setTimeout(() => setShowMsg(false), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsError(true);
      setBtnText("Send Message");
      setBtnDisabled(false);
      setShowMsg(true);
      setTimeout(() => setShowMsg(false), 5000);
    }
  };

  return (
    <>
      <div className="sep"></div>
      <section id="contact" className="section-wrap">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-eyebrow">Contact Us</div>
            <h2 className="section-title">Get in <span className="accent">Touch</span></h2>
            <p>Got a technical issue? Want to send feedback? Need details about collaboration or our research? Let us know.</p>
          </div>

          <div className="contact-grid">
            <div>
              <h3 className="contact-heading">We&apos;d love to hear from you</h3>
              <p className="contact-para">For inquiries about the AspireAI research project, collaboration opportunities, or general questions, feel free to reach out through the form or via the details below.</p>
              <div className="c-detail"><div className="c-icon">🏛️</div><div className="c-text"><strong>Institution</strong>Sri Lanka Institute of Information Technology (SLIIT), Malabe, Sri Lanka</div></div>
              <div className="c-detail"><div className="c-icon">🎓</div><div className="c-text"><strong>Faculty</strong>Faculty of Computing</div></div>
              <div className="c-detail"><div className="c-icon">📞</div><div className="c-text"><strong>Phone</strong>+94 11 254 4801 (SLIIT Main)<br/>+94 11 254 4802 (Faculty of Computing)</div></div>
              <div className="c-detail"><div className="c-icon">📧</div><div className="c-text"><strong>Supervisor Emails</strong>jenny.k@sliit.lk &nbsp;·&nbsp; poorna.p@sliit.lk</div></div>
              <div className="c-detail"><div className="c-icon">🌐</div><div className="c-text"><strong>Project Portal</strong><a href="http://cdap.sliit.lk/" target="_blank" rel="noopener noreferrer" style={{color: 'var(--cyan)', textDecoration: 'none'}}>cdap.sliit.lk</a></div></div>
            </div>

            <form className="contact-form-wrap" id="contactForm" onSubmit={handleSubmit} noValidate>
              <div className="form-group"><label className="form-label" htmlFor="cemail">Your email</label><input id="cemail" name="email" type="email" placeholder="name@gmail.com" required/></div>
              <div className="form-row">
                <div className="form-group"><label className="form-label" htmlFor="cfname">First Name</label><input id="cfname" name="first_name" type="text" placeholder="John" required/></div>
                <div className="form-group"><label className="form-label" htmlFor="clname">Last Name</label><input id="clname" name="last_name" type="text" placeholder="Doe" required/></div>
              </div>
              <div className="form-group"><label className="form-label" htmlFor="cphone">Phone (Optional)</label><input id="cphone" name="phone" type="tel" placeholder="+94 XX XXX XXXX"/></div>
              <div className="form-group"><label className="form-label" htmlFor="csubject">Subject</label>
                <select id="csubject" name="subject">
                  <option>Research Collaboration</option>
                  <option>General Inquiry</option>
                  <option>Media / Press</option>
                  <option>Academic Partnership</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group"><label className="form-label" htmlFor="cmsg">Your message</label><textarea id="cmsg" name="message" rows="5" placeholder="Leave a comment..." required></textarea></div>
              
              {/* Spam Protection for Web3Forms */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

              <button type="submit" className="btn-submit" disabled={btnDisabled}>{btnText}</button>
              <div className="form-success" style={{display: showMsg ? 'block' : 'none', color: isError ? 'var(--red, #ff4c4c)' : 'var(--cyan)'}}>
                {isError ? "✖ Failed to send message. Please try again." : "✓ Message sent! We'll get back to you soon."}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
