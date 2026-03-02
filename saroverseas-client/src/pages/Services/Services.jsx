import "./Services.css"
import Hero from "../../components/Hero/Hero"


export default function Services(){
  return (
    <>
    
    <Hero image="/images/services-banner.jpg" alt="Services Banner" mobilePosition="40% center" />
    
    <main >
      <section className="ra-section">
      <div className="ra-container">

        {/* Top: Heading + decorative arc/dots */}
        <div className="ra-top">
          <div className="ra-heading-block">
            <h1 className="ra-title">Rest assured,</h1>
            <p className="ra-subtitle">Excellence is delivered with SAR</p>
          </div>

          <div className="ra-decoration">
            <img src="/images/Half-circle3-1.png" alt="Circle" className="decor-image" loading="lazy" />
          </div>
        </div>

        {/* Bottom: two-column layout */}
        <div className="ra-body">
          {/* Left: text content */}
          <div className="ra-content">
            <div className="ra-block">
              <h2 className="ra-block-title">TRADING</h2>
              <p className="ra-block-text">
                Equipped with a quality-oriented buying process, a thorough
                knowledge of polymers and chemicals, an ever-growing
                distribution chain, and a diligent understanding of the buyers'
                mindset, we strategically work to deliver the best trading
                solutions.
              </p>
              <div className="ra-block-rule" />
            </div>

            <div className="ra-block">
              <h2 className="ra-block-title">MARKET INTELLIGENCE</h2>
              <p className="ra-block-text">
                20 years of handling customers from across geographies and
                numerous markets equips us with unique insights that allow us to
                identify opportunities and provide valuable solutions. For a
                wide variety of products and various applications.
              </p>
            </div>
          </div>

          {/* Right: images stacked */}
          <div className="ra-images">
            <img
              src="/images/services-img-1.jpg"
              alt="Trading"
              className="ra-img"
              loading="lazy"
            />
            <img
              src="/images/services-img-2.jpg"
              alt="Market Intelligence"
              className="ra-img"
              loading="lazy"
            />
          </div>
        </div>

        <div className="sec-sep">
          <img src="/images/Grey-dots-1.png" alt="" loading="lazy" />
        </div>

        <div className="ra-body revert">
          {/* Left: text content */}
          <div className="ra-content">
            <div className="ra-block">
              <h2 className="ra-block-title">LOGISTICS</h2>
              <p className="ra-block-text">
                Logistics is a core competence at SAR. The one we constantly keep
strengthening. We work at the core of this intricate system to ensure that all raw materials are delivered on time, every single time. Our expertise covers multiple modes of transport, barges, and more.
              </p>
              <div className="ra-block-rule" />
            </div>

            <div className="ra-block">
              <h2 className="ra-block-title">RISK MANAGEMENT</h2>
              <p className="ra-block-text">
                With experience, expertise, and discipline, we’ve mastered the art of managing the varied risks across operations, price, credit, liquidity, and operational. We manoeuver through it all to reduce uncertainties before they reach you.
              </p>
            </div>
          </div>

          {/* Right: images stacked */}
          <div className="ra-images revert-imgs">
            <img
              src="/images/services-img3.jpg"
              alt="Logistics"
              className="ra-img"
              loading="lazy"
            />
            <img
              src="/images/service-img4.jpg"
              alt="Risk Management"
              className="ra-img"
              loading="lazy"
            />
          </div>
        </div>

        <div className="sec-sep lower">
          <img src="/images/Circle3-1.png" alt="" loading="lazy" />
        </div>

      </div>
    </section>
    </main>
    </>
  )
}
