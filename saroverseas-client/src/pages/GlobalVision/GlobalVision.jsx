import React from "react"
import "./GlobalVision.css"
import Hero from "../../components/Hero/Hero"

export default function GlobalVision() {
  return (
    <>
      <Hero image="/images/global-banner.jpeg" alt="Global Vision Banner" mobilePosition="90% center" />
      <main style={{ padding: '48px' }}>
        <section className="global-vision-section">

          {/* Title */}
          <div className="global-vision-title">
            <span className="title-main">Global Vision</span>
            <span className="title-sub">of Excellence for the world</span>
          </div>

          {/* Description */}
          <p className="global-vision-desc">
            Enabling the businesses of the world to move forward with vigour by
            offering them excellence with our uncompromising services.
          </p>

          {/* Image + Decorative Dots */}
          <div className="global-vision-bottom">
            <img
              className="global-vision-image"
              src={"/images/global-img1.jpeg"}
              alt="Global business vision - professionals and city skyline"
              loading="lazy"
            />

            <img
              className="circle-img-about"
              src={"/images/Circle2-2.png"}
              alt="Global business vision - professionals and city skyline"
              loading="lazy"
            />
          </div>

        </section>
      </main>
    </>
  )
}
