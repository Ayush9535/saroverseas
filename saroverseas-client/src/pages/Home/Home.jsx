import Hero from '../../components/Hero/Hero'
import './Home.css'
import React, {useState, useEffect, useLayoutEffect, useCallback, useRef} from 'react';

export default function Home(){

  const products = [
  { id: 1, name: "PET", image: "/images/pet.png" },
  { id: 2, name: "EVA", image: "/images/eva.png" },
  { id: 3, name: "CPVC", image: "/images/cpvc.png" },
  { id: 4, name: "PVC", image: "/images/pvc.jpeg" },
  { id: 5, name: "HDPE", image: "/images/hdpe.jpeg" },
  { id: 6, name: "LDPE", image: "/images/ldpe.png" },
  { id: 7, name: "PP", image: "/images/pp.png" },
  { id: 8, name: "LLDPE", image: "/images/lldpe.jpeg" },
];

  const getVisible = () => {
    if (window.innerWidth <= 480) return 1;
    if (window.innerWidth <= 768) return 2;
    return 3;
  };

  const [visible, setVisible] = useState(getVisible);
  const [startIndex, setStartIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const isSlidingRef = useRef(false);   // stable guard — avoids recreating doSlide
  const directionRef = useRef('next');
  const trackInnerRef = useRef(null);
  const intervalRef = useRef(null);

  // Update visible count on resize; abort any in-progress slide to stay consistent
  useEffect(() => {
    const onResize = () => {
      const next = getVisible();
      if (next !== visible) {
        isSlidingRef.current = false;
        setIsSliding(false);
        setVisible(next);
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [visible]);

  const getSlideWidth = () => {
    if (!trackInnerRef.current) return 0;
    const cards = trackInnerRef.current.querySelectorAll('.ps-card');
    if (cards.length < 2) return 0;
    const style = window.getComputedStyle(trackInnerRef.current);
    const gap = parseFloat(style.gap) || 0;
    return cards[0].offsetWidth + gap;
  };

  const doSlide = useCallback((dir) => {
    if (isSlidingRef.current) return;
    isSlidingRef.current = true;
    directionRef.current = dir;
    setIsSliding(true);
  }, []);   // no deps — always stable, interval never gets reset on render

  useEffect(() => {
    if (!isSliding) return;
    const inner = trackInnerRef.current;
    if (!inner) return;
    const w = getSlideWidth();
    if (directionRef.current === 'next') {
      inner.style.transition = 'none';
      inner.style.transform = 'translateX(0)';
      inner.offsetHeight; // force reflow
      inner.style.transition = 'transform 0.45s ease';
      inner.style.transform = `translateX(-${w}px)`;
    } else {
      inner.style.transition = 'none';
      inner.style.transform = `translateX(-${w}px)`;
      inner.offsetHeight; // force reflow
      inner.style.transition = 'transform 0.45s ease';
      inner.style.transform = 'translateX(0)';
    }
  }, [isSliding]);

  // Reset transform AFTER React has re-rendered the new cards, before the browser paints
  useLayoutEffect(() => {
    if (!isSliding) {
      const inner = trackInnerRef.current;
      if (inner) {
        inner.style.transition = 'none';
        inner.style.transform = 'translateX(0)';
      }
    }
  }, [isSliding]);

  const handleTransitionEnd = (e) => {
    // Ignore bubbled events from child elements (e.g. image hover scale/filter transitions)
    if (e.target !== trackInnerRef.current) return;

    if (directionRef.current === 'next') {
      setStartIndex(i => (i + 1) % products.length);
    } else {
      setStartIndex(i => (i - 1 + products.length) % products.length);
    }
    isSlidingRef.current = false;
    setIsSliding(false);
  };

  const resetInterval = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => doSlide('next'), 3000);
  }, [doSlide]);

  useEffect(() => {
    intervalRef.current = setInterval(() => doSlide('next'), 3000);
    return () => clearInterval(intervalRef.current);
  }, [doSlide]);

  const handlePrev = () => { doSlide('prev'); resetInterval(); };
  const handleNext = () => { doSlide('next'); resetInterval(); };

  // For 'next': render visible+1 cards starting at startIndex (extra card slides in from right)
  // For 'prev': render visible+1 cards starting at startIndex-1 (extra card slides in from left)
  const extendedProducts = isSliding
    ? directionRef.current === 'next'
      ? Array.from({ length: visible + 1 }, (_, i) => products[(startIndex + i) % products.length])
      : Array.from({ length: visible + 1 }, (_, i) => products[(startIndex - 1 + i + products.length) % products.length])
    : Array.from({ length: visible }, (_, i) => products[(startIndex + i) % products.length]);
  
  const stats = [
  {
    id: 1,
    icon: <img src="/images/Home-Icon1-1.png" alt="20+ years of experience" loading="lazy" />,
    label: (
      <>
        <span className="ss-gold">20+</span> years of<br />experience
      </>
    ),
  },
  {
    id: 2,
    icon: <img src="/images/Home-Icon1-2.png" alt="Largest distribution network in India" loading="lazy" />,
    label: (
      <>
        <span className="ss-gold">Largest</span><br />distribution<br />network in India
      </>
    ),
  },
  {
    id: 3,
    icon: <img src="/images/Home-Icon1-3.png" alt="Global clientele across 15+ countries" loading="lazy" />,
    label: (
      <>
        Global clientele<br />across<br /><span className="ss-gold">15+</span> countries
      </>
    ),
  },
  {
    id: 4,
    icon: <img src="/images/Home-Icon1-4.png" alt="7000+ customers served" loading="lazy" />,
    label: (
      <>
        <span className="ss-gold">7000+</span><br />customers<br />served
      </>
    ),
  },
];

const features = [
  {
    id: 1,
    icon: "/images/Home-i1.png",
    title: "HIGHLY EXPERIENCED",
    description:
      "Bolstering the industry's growth for over 20 years, equipped with the enriched portfolio of Sushila Parmar Group.",
  },
  {
    id: 2,
    icon: "/images/Home-i3.png",
    title: "EVER-GROWING",
    description:
      "Earned the title of the largest distribution network in India, and now spreading wings with SAR to achieve global milestones",
  },
  {
    id: 3,
    icon: "/images/Home-i4.png",
    title: "VALUE-DRIVEN",
    description:
      "Strong business values are at our core. Transparency, consistency, customer satisfaction, excellence, and long-term relationships",
  },
  {
    id: 4,
    icon: "/images/Home-i5.png",
    title: "TOTAL RELIABILITY",
    description:
      "Commitment to deliver on-time-every-time, going the extra mile for customer delight with a seamless sourcing experience.",
  },
  {
    id: 5,
    icon: "/images/Home-i2.png",
    title: "DISCIPLINED",
    description:
      "Financial discipline, keeping ahead in tech, and to keep innovating, Sushila Parmar Group, has an undeniable asset of discipline.",
  },
];

  return (
    <>
      <Hero image={"/images/banner.jpeg"} mobileImage={"/images/home-hero-mobile.jpeg"} alt="SAR banner" />

      <section className="intro-section">
        <div className="intro-inner">
          <div className="intro-left">
            <div className="intro-logo">SAR</div>
          </div>

          <div className="intro-right">
            <h2 className="intro-headline">We are driven by Excellence, every step of the way</h2>
            <img src={"/images/Circle1-1.png"} alt="decorative" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="ai-section">
      <div className="ai-container">

        {/* Left column */}
        <div className="ai-left">
          <p className="ai-intro-text">
            Experience, expertise, and excellence are the cornerstones of SAR
            Overseas. Experience hailing from the two-decade-old Sushila Parmar
            Group, expertise with our thorough business understanding, and
            excellence as an attitude in every single thing we do.
          </p>

          {/* 3 horizontal dots */}
          <div className="ai-dots-row">
            <span className="ai-dot" />
            <span className="ai-dot ai-dot--active" />
            <span className="ai-dot" />
          </div>

          <p className="ai-body-text">
            <strong>SAR Overseas</strong> is a global force taking businesses
            forward with polymers and chemicals' trading internationally.
            Superior logistics, uncompromising deliveries on-time-every-time,
            market intelligence and a value system that strengthens associations
            and businesses in equal measure are our core assets.
          </p>

          <a href="/about/ethos" className="ai-read-more">
            Read More
            <span className="ai-read-more-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#e6a817" />
                <path
                  d="M9 12h6M12 9l3 3-3 3"
                  stroke="#ffffff"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>

        {/* Right column */}
        <div className="ai-right">
          {/* Main image */}
          <div className="ai-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1605745341112-85968b19335b?w=900&q=80"
              alt="SAR Overseas global shipping"
              className="ai-image"
              loading="lazy"
            />
          </div>

          {/* Decoration image — arc + vertical dots with gold circle */}
          <div className="ai-deco-wrap">
            <img
              src="/images/Half-circle1-1.png"
              alt=""
              aria-hidden="true"
              className="ai-deco-img"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>

    <section className="eb-section">
      <div className="eb-container">
        <p className="eb-text">
          <span className="eb-gold">When Excellence is the way,&nbsp;</span>
          <span className="eb-light">the result shows</span>
        </p>
      </div>
    </section>

    <section className="ss-section">
      <div className="ss-container">
        {stats.map(({ id, icon, label }, index) => (
          <React.Fragment key={id}>
            <div className="ss-stat">
              <div className="ss-icon">{icon}</div>
              <p className="ss-label">{label}</p>
            </div>
            {/* Vertical divider between stats */}
            {index < stats.length - 1 && (
              <div className="ss-divider" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>

    <section className="bh-section">
      <div className="bh-container">

        <div className="bh-content">
          <p className="bh-top">A basket of</p>
          <h1 className="bh-title">Polymers and Chemicals,</h1>
          <p className="bh-bottom">your assurance to growth</p>
        </div>

        {/* 3 vertical dots — right side */}
        <div className="bh-dots">
          <span className="bh-dot" />
          <span className="bh-dot bh-dot--active" />
          <span className="bh-dot" />
        </div>

      </div>
    </section>

    <section className="ps-section">
      <div className="ps-container">

        {/* Prev button */}
        <button
          className="ps-btn ps-btn--prev"
          onClick={handlePrev}
          aria-label="Previous"
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#e6a817" />
            <path d="M14 8l-4 4 4 4" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Cards */}
        <div className="ps-track">
          <div
            className="ps-track-inner"
            ref={trackInnerRef}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedProducts.map((product, idx) => (
              <div key={`${product.id}-${idx}`} className="ps-card">
                <div className="ps-image-wrap">
                  <img src={product.image} alt={product.name} className="ps-image" loading="lazy" />
                </div>
                <div className="ps-label-wrap">
                  <span className="ps-label">{product.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next button */}
        <button
          className="ps-btn ps-btn--next"
          onClick={handleNext}
          aria-label="Next"
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#e6a817" />
            <path d="M10 8l4 4-4 4" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

      </div>
    </section>

    <section className="ce-section">
      <div className="ce-container">

        {/* Left: text */}
        <div className="ce-content">
          <p className="ce-top">Choose SAR.</p>
          <h1 className="ce-title">Choose Excellence</h1>
        </div>

        {/* Right: decoration image (arc + horizontal dots with gold dot) */}
        <div className="ce-deco-wrap">
          <img
            src="/images/Half-circle1-2.png"
            alt=""
            aria-hidden="true"
            className="ce-deco-img"
            loading="lazy"
          />
        </div>

      </div>
    </section>

    <section className="wc-section">
      <div className="wc-container">
        {features.map(({ id, icon, title, description }) => (
          <div key={id} className="wc-item">
            <div className="wc-icon-wrap">
              <img src={icon} alt={title} className="wc-icon" loading="lazy" />
            </div>
            <div className="wc-rule" />
            <h3 className="wc-title">{title}</h3>
            <p className="wc-desc">{description}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}
