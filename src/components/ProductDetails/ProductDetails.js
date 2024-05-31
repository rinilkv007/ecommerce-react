import React, { useEffect, useState} from "react";
import { getProductId } from "../../ApiService/Api";
import { Link, useParams } from "react-router-dom";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();

  const [ProductDetails, setProductDetails] = useState({});

  useEffect(() => {
    const fetchProductDetails = async () => {
      const data = await getProductId(id);
      setProductDetails(data);
    };
    fetchProductDetails();
  }, [id]);
  const handleBuyNow = () => {
    window.confirm("OOPS...Out Of Stock");
  };

  return (
    <div className="product-container">
      <img src={ProductDetails.image} alt="image" className="product-image" />
      <div className="product-info">
        <h2 className="product-title">{ProductDetails.title}</h2>
        <p className="product-desc">{ProductDetails.description}</p>
        <p className="product-price">${ProductDetails.price}</p>
        <button className="buy-now" onClick={handleBuyNow}>Buy now</button>
        <Link to="/">
          <button className="go-home">Home</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetails;
