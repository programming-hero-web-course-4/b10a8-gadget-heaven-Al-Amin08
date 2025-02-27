import PropTypes from "prop-types";

const CartItem = ({ product, deleteCartList }) => {
  const { description, price, product_id, product_image, product_title } =
    product;
  return (
    <div>
      <div className=" my-20 flex justify-between items-center border border-solid border-[#1313131A] rounded-lg shadow-lg">
        <div className="lg:flex items-center py-4 px-8   space-x-7">
          <img
            className="w-100 h-64 rounded-lg  object-cover"
            src={product_image}
            alt=""
          />
          <div className="space-y-3">
            <h3 className="font-semibold text-2xl">{product_title} </h3>
            <p className="text-[#13131399]">{description}</p>
            <p className="text-xl font-semibold">Price: {price}$</p>
          </div>
        </div>
        <div className="mr-5">
          <button>
            <img
              className="w-10"
              onClick={() => deleteCartList(product_id)}
              src="https://img.icons8.com/?size=100&id=3062&format=png&color=FE0808"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  product: PropTypes.object,
  deleteCartList: PropTypes.func,
};
export default CartItem;
