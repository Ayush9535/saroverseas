import "./Geography.css";
import Hero from "../../components/Hero/Hero";

export default function Geography() {
  return (
    <>
    <Hero image="/images/geo-banner.png" />
      <main style={{ padding: '48px' }}>
        <section className="excellence-section">

          {/* Top row */}
          <div className="excellence-top">
            <div className="excellence-title">
              <h2 className="excellence-title-main">Excellence,</h2>
              <span className="excellence-title-sub">going places</span>
            </div>

            <img
              className="excellence-dots-image"
              src={"/images/Half-circle1-2.png"}
              alt="Decorative dots and circle"
              loading="lazy"
            />
          </div>

          {/* Bottom row */}
          <div className="excellence-bottom">
            <img
              className="excellence-map"
              src={"/images/World-map.png"}
              alt="World map showing global presence"
              loading="lazy"
            />

            <div className="excellence-text">
              <p>
                <span className="highlight">15+</span> top global petrochemical
                manufacturers, that aren't just the best, but
                also the biggest, are our supply partners. We
                import from <span className="highlight">20+</span> countries and supply
                across <span className="highlight">4</span> continents to a customer base that
                is growing at a lightning speed.
              </p>
            </div>
          </div>

        </section>
      </main>
    </>
  )
}
