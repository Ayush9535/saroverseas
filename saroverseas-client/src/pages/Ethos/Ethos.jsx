import "./Ethos.css";
import Hero from "../../components/Hero/Hero";

export default function Ethos() {

  const values = [
    {
      id: 1,
      icon: "/images/Icon3-1.png",
      iconAlt: 'Driven icon',
      title: 'Driven',
      desc: 'A passionate, hands-on team that goes the extra mile to deliver the best - every single time.',
    },
    {
      id: 2,
      icon: "/images/Icon3-2.png",
      iconAlt: 'Committed icon',
      title: 'Committed',
      desc: "We stand by our word. Every promise made is a promise kept - no matter what it takes.",
    },
    {
      id: 3,
      icon: "/images/Icon3-3.png",
      iconAlt: 'Excellence icon',
      title: 'Excellence',
      desc: "We work as one - pushing each other to deliver excellence every day.",
    },
    {
      id: 4,
      icon: "/images/Icon3-4.png",
      iconAlt: 'Teamwork icon',
      title: 'Teamwork',
      desc: "As committed we are to our clients, we are committed to each other as well. A team aligned as one to all the values of the company.",
    },
    {
      id: 5,
      icon: "/images/Icon3-5.png",
      iconAlt: 'Transparency icon',
      title: 'Transparent',
      desc: "We keep things clear and honest - because trust begins with transparency.",
    },
  ];

  
  return (
    <>
    <Hero image="/images/ethos-banner.jpeg" alt="Ethos Banner"/>
    <main style={{ padding: '48px' }}>
      <section className="sar-section">

        {/* Top row: decorative dots+circle image (left) | SAR heading (right) */}
        <div className="sar-top">
          <img
            className="sar-dots-image"
            src={"/images/Half-circle1-2.png"}
            alt="Decorative dots and circle"
            loading="lazy"
            />

          <div className="sar-heading-block">
            <h2 className="sar-title">SAR</h2>
            <p className="sar-tagline">Rooted in values, standing tall on Excellence.</p>
          </div>
        </div>

        {/* Values */}
        <div className="sar-values">
          {values.map((item) => (
            <div className="sar-value-item" key={item.id}>
              <img
                className="sar-icon"
                src={item.icon}
                alt={item.iconAlt}
                loading="lazy"
                />
              <div className="sar-value-text">
                <h3 className="sar-value-title">{item.title}</h3>
                <p className="sar-value-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <img
            className="long-dots-image"
            src={"/images/Circle2-3.png"}
            alt="Decorative dots and circle"
            loading="lazy"
            />

      </section>
    </main>
            </>
  )
}
