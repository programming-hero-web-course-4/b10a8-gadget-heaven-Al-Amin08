import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Product = ({ product }) => {
  const { price, product_image, product_title, product_id } = product;
  return (
    <div>
      <div className="card bg-base-100 w-82 pt-4 mx-auto  shadow-sm ">
        <figure className="w-71 mx-auto rounded-xl">
          <img
            className="w-full h-46 object-cover"
            src={product_image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{product_title}</h2>
          <p className="font-medium text-xl text-[#09080F99]">Price:{price}$</p>

          <div className="card-actions mt-2">
            <Link to={`/products/${product_id}`}>
              <button className="btn rounded-4xl text-[#9538E2] font-bold text-lg border border-[#9538E2] hover:text-white hover:bg-[#9538E2]">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object,
};
export default Product;
