import PropTypes from "prop-types";
import CartItem from "./cartItem";
import { Link } from "react-router-dom";
import { useState } from "react";

const Cart = ({ productList, handleSort, deleteCartList, handlePurchase }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const toggleDisabled = () => {
    setIsDisabled(!isDisabled);
  };

  const listOfProducts = productList;

  let sum = 0;
  listOfProducts.forEach((product) => {
    sum = sum + product.price;
  });

  console.log(listOfProducts, sum);

  return (
    <div className="w-10/12 mx-auto mt-20">
      {/* modal */}

      {/* <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button> */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box text-center">
          <img
            className="w-24 mx-auto"
            src="https://img.icons8.com/?size=100&id=63312&format=png&color=000000"
            alt=""
          />
          <h3 className="font-bold text-lg">Payment SuccessFully</h3>
          <p className="py-4 text-[#09080F99]">Thanks for purchasing</p>
          {/* <p>Total:{sum}</p> */}
          <div className="">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to={"/"}>
                <button className="btn bg-[#11000008] px-5 py-2 rounded-4xl w-full ">
                  Close
                </button>
              </Link>
            </form>
          </div>
        </div>
      </dialog>

      <div className="lg:flex justify-between items-center">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="lg:flex gap-20 items-center">
          <h1 className="font-bold text-2xl">Total cost: {sum}$</h1>
          <div className="">
            <button
              onClick={handleSort}
              className="btn px-6 py-4 text-lg font-bold border-2 border-[#9538E2]  text-[#9538E2] rounded-4xl mr-3"
            >
              Sort By Price
              <img
                className="w-11"
                src="https://img.icons8.com/?size=100&id=112244&format=png&color=9538E2"
                alt=""
              />
            </button>

            <button
              onClick={() => {
                document.getElementById("my_modal_1").showModal();
                handlePurchase();
                toggleDisabled();
              }}
              className="btn px-6 py-4 bg-[#9538E2] text-white text-lg font-medium rounded-4xl"
              disabled={isDisabled}
            >
              Purchase
            </button>
          </div>
        </div>
      </div>
      <div className="">
        {listOfProducts.map((product) => (
          <CartItem
            deleteCartList={deleteCartList}
            key={product.product_id}
            product={product}
          ></CartItem>
        ))}
      </div>
    </div>
  );
};
Cart.propTypes = {
  productList: PropTypes.array,

  deleteCartList: PropTypes.func,
  handleSort: PropTypes.func,
  handlePurchase: PropTypes.func,
};

export default Cart;
