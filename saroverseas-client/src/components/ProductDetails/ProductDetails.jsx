import "./ProductDetails.css";
import Hero from "../Hero/Hero";

const ProductDetails = ({ images, abbr, name, description, applications }) => { 

    const [largeImage, ...smallImages] = images;


    return (
        <>
            <Hero image="/images/polymers-banner.jpg" alt="Polymers Banner" mobilePosition="30% center" />

            <section className="pd-section">
      <div className="pd-container">

        {/* Heading */}
        <div className="pd-heading">
          <span className="pd-abbr">{abbr}</span>
          <span className="pd-dash"> – </span>
          <span className="pd-name">{name}</span>
        </div>

        {/* Body: image mosaic + text */}
        <div className="pd-body">

          {/* Left: image mosaic */}
          <div className="pd-images">
            <div className="pd-img-large-wrap">
              <img src={largeImage} alt={name} className="pd-img" loading="lazy" />
            </div>
            {smallImages.length > 0 && (
              <div className="pd-img-row">
                {smallImages.map((src, i) => (
                  <div key={i} className="pd-img-small-wrap">
                    <img src={src} alt={`${name} ${i + 2}`} className="pd-img" loading="lazy" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: description + applications */}
          <div className="pd-content">
            <p className="pd-description">{description}</p>

            {applications.length > 0 && (
              <div className="pd-applications">
                <p className="pd-apps-label">Applications</p>
                <ul className="pd-apps-list">
                  {applications.map((item, i) => (
                    <li key={i} className="pd-apps-item">{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
        </>
    )
}

export default ProductDetails;