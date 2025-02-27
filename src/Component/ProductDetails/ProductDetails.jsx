import { useLoaderData, useLocation, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { Helmet } from "react-helmet";
import { addToStoCartList } from "../utilites/addToDb";
import { addToWishList } from "../utilites/addAsWishlist";

import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

const ProductDetails = () => {
  const { productId } = useParams();
  const data = useLoaderData();
  const uniqueProduct = data.find(
    (product) => product.product_id === productId
  );

  //   console.log(param);
  const {
    rating,
    availability,
    Specification,
    description,
    price,
    product_id,
    product_image,
    product_title,
  } = uniqueProduct;

  // disabled the button
  const [isDisabled, setIsDisabled] = useState(false);
  const toggleDisabled = () => {
    setIsDisabled(!isDisabled);
  };

  const location = useLocation();
  console.log(location.pathname);

  const handleAddToCart = (id) => {
    addToStoCartList(id);
    toast.success("Successfully added to the cart!");
  };

  const handleAddWishList = (id) => {
    addToWishList(id);
    toast.success("Successfully added to the wishlist!");
  };

  return (
    <div className="mb-130 ">
      <Toaster position="top-center" reverseOrder={false} />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Details | Gadget Haven</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="bg-[#9538E2]  text-center flex-col lg:relative lg:pb-40">
        <div className="pt-16 text-white">
          <h1 className="text-3xl font-bold">Product Details</h1>
          <p className="py-6">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to
            <br /> the coolest accessories, we have it all!
          </p>
        </div>

        {/* <img
               src={banner}
               className="lg:w-[1062px] w-sm h-[563px]   absolute top-87 object-cover p-6 bg-[#ffffff38] border-2
               rounded-4xl "
             /> */}

        <div className="card lg:card-side bg-base-100 shadow-sm lg:w-[1280px] mx-auto lg:absolute top-50 lg:left-80">
          <figure className="lg:w-170 h-126">
            <img
              className=" p-6 rounded-4xl object-cover"
              src={product_image}
              alt="Album"
            />
          </figure>
          <div className=" px-2 py-6 text-start space-y-3">
            <h2 className="card-title font-bold text-[1.75rem]">
              {product_title}
            </h2>
            <h4 className="font-bold text-xl">Price:{price}$ </h4>
            {availability ? (
              <p className="font-medium bg-[#309C081A] w-21.75 text-center border border-[#309c08] text-[#309c08] rounded-4xl">
                In Stock
              </p>
            ) : (
              <p className="font-medium bg-[#9c08081A] w-28 text-center border border-[#9c0808] text-[#9c0808] rounded-4xl">
                Out of Stock
              </p>
            )}
            <p className="text-[#09080F99] text-lg">{description}</p>
            <ul className="">
              <li className="font-bold text-lg text-[#09080F]">
                Specification
                <ul className="list-decimal list-inside pl-3 text-[#09080F99] text-lg font-normal">
                  {Specification.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>
              </li>
            </ul>
            <p className="font-bold text-lg">Rating</p>
            <div className="flex items-center gap-5 ">
              <ReactStars
                count={5}
                // onChange={ratingChanged}
                value={rating}
                size={24}
                activeColor="#ffd700"
                isHalf={true}
                edit={false}
              />
              <span className="bg-[#09080F0D] rounded-4xl mt-0.75 py-1 font-medium w-12.5 text-center">
                {rating}
              </span>
            </div>
            <div className="card-actions items-center mt-5">
              <button
                onClick={() => handleAddToCart(product_id)}
                className="btn bg-[#9538E2] text-white text-lg font-bold rounded-4xl"
              >
                Add to Cart
                <img
                  className="w-7 "
                  src="https://img.icons8.com/?size=100&id=9671&format=png&color=FFFFFF"
                  alt=""
                />
              </button>
              <button
                onClick={() => {
                  handleAddWishList(product_id);
                  toggleDisabled();
                }}
                className="border-3 btn border-[#09080F0D] rounded-full p-2"
                disabled={isDisabled}
              >
                <img
                  className="w-5"
                  src="https://img.icons8.com/?size=100&id=86721&format=png&color=0B0B0B"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
