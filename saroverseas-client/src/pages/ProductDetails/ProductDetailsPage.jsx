import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductDetails from "../../components/ProductDetails/ProductDetails";

export default function ProductDetailsPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.slug === slug);
        if (!found) {
          navigate("/products/polymers", { replace: true });
        } else {
          setProduct(found);
          document.title = `${found.abbr} - ${found.name} - SAR`;
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load products:", err);
        setLoading(false);
        navigate("/products/polymers", { replace: true });
      });
  }, [slug, navigate]);

  if (loading) return null;
  if (!product) return null;

  return (
    <ProductDetails
      images={product.images}
      abbr={product.abbr}
      name={product.name}
      description={product.description}
      applications={product.applications}
    />
  );
}
