import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ProductComponet from "./ProductComponet";
import { setProducts } from "../redux/actions/productActons";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products").catch((err) =>{
        console.log("Err", err);
    });
    dispatch(setProducts(response.data));
  };
  useEffect(()=> {
fetchProducts();
  },[]);
  console.log(products);
  return (
    <div className="ui grid container">
      <ProductComponet />
    </div>
  );
};

export default ProductListing;
