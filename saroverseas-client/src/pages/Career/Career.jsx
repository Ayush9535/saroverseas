import Hero from "../../components/Hero/Hero"
import "./Career.css"
import { useState } from "react";

export default function Career() {

  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const items = [
    {
      Icon: "/images/CareerIcon1.png",
      title: "A value-driven organization",
      description:
        "SAR puts its commitment, transparency, and passion towards work at the topmost priority, towards clients and team members, alike.",
    },
    {
      Icon: "/images/CareerIcon2.png",
      title: "Empowerment",
      description:
        "The more empowered the team, the more likelihood of success for everyone. We encourage ideas, and solution-based thinking.",
    },
    {
      Icon: "/images/CareerIcon3.png",
      title: "Taking ownership",
      description:
        "An entrepreneurial spirit motivates each one, being responsible and taking decisions enables professional growth, which we thoroughly believe in.",
    },
    {
      Icon: "/images/CareerIcon4.png",
      title: "Unlimited learning opportunities",
      description:
        "Exposure to the entire trade lifecycle opens doors to great learning opportunities constantly and a multiplied career growth",
    },
  ];

  const positions = [
    {
      id: 1,
      title: "Manager - Business Development (Petrochemical Raw Material)",
      details: {
        education: "Master's in Business Administration",
        experience: "4 – 7 years",
        location: "West Sussex, England",
        skills: [
          "Experience in Trading activities or in commodity businesses like Petrochemicals, Metals, Food grains, Oil & Minerals",
          "Experienced in B2B Industrial Raw Material sales",
          "Having built / managed a Product / Region from scratch and scaled it up to Profitability",
          "Excellent command over English & Hindi, good persuasion skills, problem-solving approach, and time management skills",
        ],
      },
    },
    {
      id: 2,
      title: "Executive / Senior Executive - Inside Sales",
      details: {
        experience: "1–4 years",
        location: "West Sussex, England",
        skills: [
          "Experience in making effective sales pitches",
          "Identifying new business leads by market research",
          "Understanding customer needs and identifying sales opportunities",
          "Knack for understanding company's Digital presence and contributing to the same",
          "Excellent verbal, written communication skills, social media skills and PR skills",
          "Mastery over MS Office (MS Excel, Word & Powerpoint)",
          "Aligned towards people interaction, engagement and association building",
        ],
      },
    },
    {
      id: 3,
      title: "Executive / Senior Executive - Inside Sales",
      details: {
        experience: "1–4 years",
        location: "West Sussex, England",
        skills: [
          "Experience in making effective sales pitches",
          "Identifying new business leads by market research",
          "Understanding customer needs and identifying sales opportunities",
          "Knack for understanding company's Digital presence and contributing to the same",
          "Excellent verbal, written communication skills, social media skills and PR skills",
          "Mastery over MS Office (MS Excel, Word & Powerpoint)",
          "Aligned towards people interaction, engagement and association building",
        ],
      },
    },
  ];


  return (
    <>
      <Hero image="/images/career-banner.jpeg" alt="Career Banner" mobilePosition="30% center"/>

      <main >
        <section className="career-excellence-section">
          <div className="career-excellence-container">
            <h1 className="career-excellence-title">The search for Excellence</h1>
            <p className="career-excellence-subtitle">inspired individuals is constant.</p>
            <p className="career-excellence-body">
              At SAR, we are committed to our team members and their growth. Our
              dedication to work, entrepreneurial environment, well-placed
              hierarchies, and seamless processes ensure a smooth and fulfilling
              work culture.
            </p>
          </div>
        </section>

        <section className="career-sar-section">
          <div className="career-sar-container">
            <h2 className="career-sar-heading">
              What you get as being a part of the <strong>SAR</strong> team:
            </h2>

            <div className="career-sar-list">
              {items.map(({ Icon, title, description }, index) => (
                <div key={index} className="career-sar-item">
                  <div className="career-sar-icon-wrap">
                    <img src={Icon} alt={title} className="career-sar-icon" loading="lazy" />
                  </div>
                  <div className="career-sar-content">
                    <h3 className="career-sar-item-title">{title}</h3>
                    <p className="career-sar-item-desc">{description}</p>
                    <div className="career-sar-divider" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="career-section">
          <div className="career-container">
            <h2 className="career-heading">
              We are currently looking for the following{" "}
              <strong>positions</strong>
            </h2>

            <div className="career-accordion">
              {positions.map(({ id, title, details }) => {
                const isOpen = openId === id;
                return (
                  <div key={id} className={`career-item ${isOpen ? "career-item--open" : ""}`}>
                    <button
                      className="career-item-header"
                      onClick={() => toggle(id)}
                      aria-expanded={isOpen}
                    >
                      <span className="career-item-title">{title}</span>
                      <span className="career-item-chevron">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className={`career-chevron-icon ${isOpen ? "career-chevron-icon--open" : ""}`}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>

                    <div
                      className="career-item-body"
                      style={{ maxHeight: isOpen ? "200vh" : "0" }}
                    >
                      <div className="career-item-content">
                        {details.education && (
                          <p className="career-detail-line">
                            <strong>Educational Qualification</strong>: {details.education}
                          </p>
                        )}
                        {details.experience && (
                          <p className="career-detail-line">
                            <strong>Experience</strong>: {details.experience}
                          </p>
                        )}
                        {details.location && (
                          <p className="career-detail-line">
                            <strong>Job Location</strong>: {details.location}
                          </p>
                        )}
                        {details.skills && details.skills.length > 0 && (
                          <div className="career-skills-block">
                            <p className="career-skills-label">
                              <strong>Preferred Skills sets</strong>:
                            </p>
                            <ul className="career-skills-list">
                              {details.skills.map((skill, i) => (
                                <li key={i} className="career-skill-item">
                                  {skill}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="career-item-divider" />
                  </div>
                );
              })}
            </div>

            <p className="career-contact">
              Write to us at{" "}
              <a href="mailto:hr@saroverseas.com" className="career-email">
                hr@saroverseas.com
              </a>{" "}
              for opportunities
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
