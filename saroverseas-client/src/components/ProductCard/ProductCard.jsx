import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ image, abbr, name, href = "#" }) => {
  return (
    <div className="pc-card">
      <div className="pc-image-wrap">
        <img src={image} alt={name} className="pc-image" loading="lazy" />
      </div>
      <div className="pc-footer">
        <div className="pc-label">
          <span className="pc-abbr">{abbr} –&nbsp;</span>
          <span className="pc-name">{name}</span>
        </div>
        <Link to={href} className="pc-arrow" aria-label={`View ${name}`}>
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
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;