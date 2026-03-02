import { useState, useEffect } from "react";
import "./Chemicals.css";
import Hero from "../../components/Hero/Hero";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function Chemicals() {
  const COLS = 3;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.filter((p) => p.type === "chemicals")))
      .catch((err) => console.error("Failed to load products:", err));
  }, []);

  const remainder = products.length % COLS;
  const lastRowCount = remainder === 0 ? COLS : remainder;

  const fullRows = products.slice(0, products.length - lastRowCount);
  const lastRow = products.slice(products.length - lastRowCount);

  return (
    <>
      <Hero image="/images/polymers-banner.jpg" alt="Chemicals Banner" mobilePosition="30% center" />
      <main>
        <section className="rp-section">
          <div className="rp-container">
            <div className="rp-content">
              <h1 className="rp-title">A Reliable Partner</h1>
              <p className="rp-subtitle">for a variety of Industrial Chemicals</p>
            </div>
            <div className="rp-dots">
              <img src="/images/3-dots-222.png" alt="" loading="lazy" />
            </div>
          </div>
        </section>

        <section className="pg-section">
          <div className="pg-container">
            {fullRows.length > 0 && (
              <div className="pg-grid">
                {fullRows.map((product) => (
                  <ProductCard
                    key={product.id}
                    {...product}
                    href={`/products/chemicals/${product.slug}`}
                  />
                ))}
              </div>
            )}

            <div
              className="pg-grid pg-grid--centered"
              style={{ "--last-row-count": lastRowCount }}
            >
              {lastRow.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  href={`/products/chemicals/${product.slug}`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
