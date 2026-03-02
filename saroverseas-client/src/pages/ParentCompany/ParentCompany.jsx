import React from 'react'
import './ParentCompany.css'
import Hero from '../../components/Hero/Hero'

export default function ParentCompany() {
  return (
    <>
      <Hero image='/images/parent-comp-banner.png' alt='Parent Company' mobilePosition='20% center' />


      <main style={{ padding: '3.2vw' }}>

        <section className="about-intro-section">
          <div className="about-intro-inner">
            <div className="about-intro-left">
              <div className="about-intro-logo">An industry leader </div>
            </div>

            <div className="about-intro-right">
              <h2 className="about-intro-headline">making waves around the world</h2>
              <img src={"images/Circle1-1.png"} alt="decorative" loading="lazy" />
            </div>
          </div>
        </section>

        <section className="parmar-section">
          {/* Text Content */}
          <div className="parmar-content">
            <p>
              Sushila Parmar Group, our parent organization, has been heralded as one of the leading
              players in India's polymer trade market. In 20 years this name has become synonymous with
              Polymer Distribution in India and is known to Go for More, always.
            </p>
            <p>
              Having played a significant role in redefining the polymer raw material landscape with
              strategic solutions, multiple products, tech integration, and the warmth of values; Sushila
              Parmar Group has a reputation to create waves in every market it enters.
            </p>
            <p>
              Establishing SAR, in UK is just the beginning of creating many more milestones on the
              backdrop of the world.
            </p>

            <button className="read-more-btn">
              Read More
              <span className="arrow-circle">
                <svg viewBox="0 0 24 24">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </span>
            </button>
          </div>

          {/* Logo Side */}
          <div className="parmar-logo-side">
            {/*
          Replace the src below with your actual Parmar logo.
          The logo image should be the 3D red-and-gold 'S/P' mark from the screenshot.
          */}
            <img
              src={"/images/Parmar-logo.png"}
              alt="Parmar Logo"              loading="lazy"            />
            <span className="parmar-logo-name">PARMAR</span>
          </div>
        </section>
      </main>
    </>
  )
}
