import React from "react";
import "./IndustriesGrid.css";
import Hero from "../../components/Hero/Hero";

const iconImages = {
  // ── Active (shown in grid) ──
  "Woven":             "/images/Textiles.png",
  "Blow Film":         "/images/Consumer-Durables.png",
  "Water Tanks":       "/images/Water-Management.png",
  "Packaging":         "/images/Food-Beverages.png",
  "Pharma":            "/images/Medical-1.png",
  "Automotive":        "/images/Automotive.png",
  "Kitchenware":       "/images/Cutlery.png",
  "Cables":            "/images/Electricals.png",
  "Pipes & Fittings":  "/images/Sanitary-Equipment.png",
  "Rigid Containers":  "/images/Consumer-Durables.png",
  "Textiles":          "/images/Textiles.png",
  "Agriculture":       "/images/Horticulture.png",
  "Infrastructure":    "/images/Infrastructure.png",
  "Residential":       "/images/Home-Decor.png",
  "Renewable":         "/images/Energy-Generation.png",

  // ── Commented out (available for future use) ──
  // "Medical":              "/images/Medical-1.png",
  // "Furniture":            "/images/Furniture.png",
  // "Electronics":          "/images/Electronics.png",
  // "Horticulture":         "/images/Horticulture.png",
  // "Transportation":       "/images/Transportation.png",
  // "Luggage Industry":     "/images/Luggage-Industry-1.png",
  // "Consumer Durables":    "/images/Consumer-Durables.png",
  // "Sanitary Equipment":   "/images/Sanitary-Equipment.png",
  // "Office Supplies":      "/images/Office-Supplies.png",
  // "Media":                "/images/Media.png",
  // "Writing Instrument":   "/images/Writing-Instruments.png",
  // "Military":             "/images/Military.png",
  // "Energy Generation":    "/images/Energy-Generation.png",
  // "Footwear":             "/images/Footwear.png",
  // "Safety Equipment":     "/images/Safety-Equipment.png",
  // "Heavy Machinery":      "/images/Heavy-Machinery.png",
  // "Electricals":          "/images/Electricals.png",
  // "Food & Beverages":     "/images/Food-Beverages.png",
  // "Cutlery":              "/images/Cutlery.png",
  // "Aerospace":            "/images/Aerospace.png",
  // "Sports":               "/images/Sports.png",
  // "Scientific Equipment": "/images/Scientific-Equipment.png",
  // "Water Management":     "/images/Water-Management.png",
  // "Home Decore":          "/images/Home-Decor.png",
};

const industries = [
  "Woven", "Blow Film", "Water Tanks", "Packaging", "Pharma",
  "Automotive", "Kitchenware", "Cables", "Pipes & Fittings", "Rigid Containers",
  "Textiles", "Agriculture", "Infrastructure", "Residential", "Renewable",
];

// ── Commented out industries ──
// "Medical", "Furniture", "Electronics", "Horticulture", "Transportation",
// "Luggage Industry", "Consumer Durables", "Sanitary Equipment", "Office Supplies",
// "Media", "Writing Instrument", "Military", "Energy Generation", "Footwear",
// "Safety Equipment", "Heavy Machinery", "Electricals", "Food & Beverages",
// "Cutlery", "Aerospace", "Sports", "Scientific Equipment", "Water Management", "Home Decore"

const COLS = 5;

// Split into rows of COLS
const rows = [];
for (let i = 0; i < industries.length; i += COLS) {
  rows.push(industries.slice(i, i + COLS));
}

const IndustriesGrid = () => {
  return (
<>
    <Hero image="/images/industries-banner.jpeg" />

    <section className="ig-section">
      <div className="ig-container">

        {/* Heading */}
        <div className="ig-heading">
          <span className="ig-title">Percolating</span>
          <span className="ig-subtitle">across industries, with the same Excellence</span>
        </div>

        {/* Grid + decoration column */}
        <div className="ig-layout">

          {/* Industry grid — left side */}
          <div className="ig-grid">
            {rows.map((row, rowIdx) => (
                <div key={rowIdx} className="ig-row">
                {row.map((name) => (
                    <div key={name} className="ig-item">
                    <div className="ig-icon">
                      <img src={iconImages[name]} alt={name} loading="lazy" />
                    </div>
                    <p className="ig-label">{name}</p>
                    <div className="ig-rule" />
                  </div>
                ))}
                {/* If last row is incomplete, pad empty cells so decoration aligns */}
                {rowIdx === rows.length - 1 &&
                  Array.from({ length: COLS - row.length }).map((_, i) => (
                      <div key={`empty-${i}`} className="ig-item ig-item--empty" />
                    ))
                }
              </div>
            ))}
          </div>
        </div>

            {/* ...and many more */}
          <div className="ig-more">...and many more</div>

      </div>
    </section>
            </>
  );
};

export default IndustriesGrid;