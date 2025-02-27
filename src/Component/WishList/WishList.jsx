import PropTypes from "prop-types";
import WIshListItem from "./WIshListItem";

const WishList = ({ wishList, deleteWishList }) => {
  return (
    <div className="w-10/12 mx-auto mt-20">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">WishList</h1>
      </div>
      {wishList.map((wishProduct) => (
        <WIshListItem
          wishProduct={wishProduct}
          key={wishProduct.product_id}
          deleteWishList={deleteWishList}
        ></WIshListItem>
      ))}
    </div>
  );
};
WishList.propTypes = {
  wishList: PropTypes.array,
  deleteWishList: PropTypes.func,
};

export default WishList;
