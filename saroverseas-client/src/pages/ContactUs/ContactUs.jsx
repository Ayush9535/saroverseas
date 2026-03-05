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
              <a href="mailto:connect@saroverseas.com" className="ci-link">
                connect@saroverseas.com
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
            <p className="ci-label">Our Offices:</p>
          </div>

          <div className="ci-block ci-address">
            <span className="ci-pin">&#9679;</span>
            <p className="ci-strong">
              Amelia House, Crescent Road, Worthing,
United Kingdom
            </p>
          </div>
          <div className="ci-block ci-address">
            <span className="ci-pin" style={{visibility: "hidden"}} >&#9679;</span>
            <p className="ci-strong">
              <span className="ci-strong">Pin Code</span>
              {" – "}BN111RL
            </p>
          </div>

          <div className="ci-block ci-address">
            <span className="ci-pin">&#9679;</span>
            <p className="ci-strong">
              LB03121 Jebel Ali Freezone Dubai, UAE
            </p>
          </div>

          <div className="ci-block ci-address">
            <span className="ci-pin">&#9679;</span>
            <p className="ci-strong">
              Shangri-La Centre, Hong Kong Middle Road,
Shinan District, Qingdao, China
            </p>
          </div>

        </div>
      </div>
    </section>
    </main>
    </>
  )
}
