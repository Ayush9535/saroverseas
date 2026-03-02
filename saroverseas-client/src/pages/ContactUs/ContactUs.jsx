import "./ContactUs.css"
import Hero from "../../components/Hero/Hero";

export default function ContactUs(){
  return (
    <>
    
    <Hero image="/images/contact-banner.jpeg" alt="Contact Banner" mobilePosition="55% center" />
    
    <main>
      <section className="ci-section">
      <div className="ci-container">

        {/* Left: decorative image */}
        <div className="ci-decoration">
          <img
            src={"/images/Circle-dots2.png"}
            alt=""
            className="ci-decoration-img"
            aria-hidden="true"
            loading="lazy"
          />
        </div>

        {/* Right: contact details */}
        <div className="ci-content">

          <div className="ci-block">
            <p className="ci-line">
              Write to us at{" "}
              <a href="mailto:sar@saroverseas.com" className="ci-link">
                sar@saroverseas.com
              </a>
            </p>
          </div>

          <div className="ci-rule" />

          <div className="ci-block">
            <p className="ci-label">Call us on:</p>
            <p className="ci-strong">+44 – 748 888 3088</p>
            <p className="ci-strong">+44 – 129 322  7670</p>
          </div>

          <div className="ci-rule" />

          <div className="ci-block">
            <p className="ci-label">Registered Office:</p>
            <p className="ci-strong">
              Amelia House, Crescent Road, Worthing, UK,
            </p>
            <p className="ci-strong">
              <span className="ci-strong">Pin Code</span>
              {" – "}BN11 1RL
            </p>
          </div>

          <div className="ci-rule" />

          <div className="ci-block">
            <p className="ci-label">Corporate Office:</p>
            <p className="ci-strong">407, Kingdom Tower 1,</p>
            <p className="ci-strong">
              One Kingdom Street, Paddington, in Code– W2 6BD
            </p>
            <p className="ci-strong">UK</p>
          </div>

        </div>
      </div>
    </section>
    </main>
    </>
  )
}
