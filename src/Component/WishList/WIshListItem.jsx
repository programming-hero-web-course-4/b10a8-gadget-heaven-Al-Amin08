import PropTypes from "prop-types";
import { addToStoCartList } from "../utilites/addToDb";
import toast, { Toaster } from "react-hot-toast";
// import { deleteWishList } from "../utilites/addAsWishlist";

const WIshListItem = ({ wishProduct, deleteWishList }) => {
  const { description, price, product_id, product_image, product_title } =
    wishProduct;

  const handleAddToCartFromWishList = (id) => {
    addToStoCartList(id);
    toast.success("Successfully added to the cart!");
  };
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />

      <div className=" my-20 flex justify-between items-center border border-solid border-[#1313131A] rounded-lg shadow-lg">
        <div className="lg:flex items-center py-4 px-8   space-x-7">
          <img
            className="w-100 h-64 rounded-lg  object-cover"
            src={product_image}
            alt=""
          />
          <div className="space-y-5">
            <h3 className="font-semibold text-2xl">{product_title} </h3>
            <p className="text-[#13131399]">{description}</p>
            <p className="text-xl font-semibold">Price: {price}$</p>
            <button
              onClick={() => handleAddToCartFromWishList(product_id)}
              className="btn text-lg font-medium bg-[#9538E2] text-white rounded-4xl"
            >
              Add to cart
            </button>
          </div>
        </div>
        <div className="mr-5">
          <button>
            <img
              className="w-10"
              onClick={() => deleteWishList(product_id)}
              src="https://img.icons8.com/?size=100&id=3062&format=png&color=FE0808"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

WIshListItem.propTypes = {
  wishProduct: PropTypes.object,
  deleteWishList: PropTypes.func,
};
export default WIshListItem;
