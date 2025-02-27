import { useEffect } from "react";
import { useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [specificProduct, setSpecificProduct] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setSpecificProduct(data);
      });
  }, []);

  const getProductById = (productName) => {
    const product = products.filter(
      (product) => product.product_id.slice(0, 2) === productName
    );
    setSpecificProduct(product);
  };
  const getAllProduct = () => {
    setSpecificProduct(products);
  };
  return (
    <div className="w-11/12 mx-auto ">
      <div className="font-bold text-4xl text-[#0B0B0B] text-center my-20">
        Explore Cutting-Edge Gadgets
      </div>
      <div className="lg:flex space-y-5 ">
        <div className=" lg:w-3/12">
          <div className="flex flex-col gap-3 w-70 mx-auto">
            <button
              onClick={getAllProduct}
              className="btn rounded-4xl text-[#9538E2] font-bold text-lg border border-[#9538E2] hover:text-white hover:bg-[#9538E2]"
            >
              All Products
            </button>
            <button
              onClick={() => getProductById("LP")}
              className="btn rounded-4xl text-[#9538E2] font-bold text-lg border border-[#9538E2] hover:text-white hover:bg-[#9538E2]"
            >
              Laptops
            </button>
            <button
              onClick={() => getProductById("PH")}
              className="btn rounded-4xl text-[#9538E2] font-bold text-lg border border-[#9538E2] hover:text-white hover:bg-[#9538E2]"
            >
              Phones
            </button>
            <button
              onClick={() => getProductById("SW")}
              className="btn rounded-4xl text-[#9538E2] font-bold text-lg border border-[#9538E2] hover:text-white hover:bg-[#9538E2]"
            >
              Smart Watches
            </button>
          </div>
        </div>
        <div className="lg:w-8/12  mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {specificProduct.map((product) => (
            <Product
              product={product}
              specificProduct={specificProduct}
              key={product.product_id}
            ></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
