import { Helmet } from "react-helmet";
import Cart from "../Cart/Cart";
import WishList from "../WishList/WishList";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCartList } from "../utilites/addToDb";
import { getStoredWishList } from "../utilites/addAsWishlist";

const Dashboard = () => {
  const [isActive, setActive] = useState({
    cart: true,
    status: "cart",
  });
  const [productList, setProductList] = useState([]);
  const [wishList, setWishList] = useState([]);

  // const [dataProduct, setDataProduct] = useState([]);

  // useEffect(() => {
  //   fetch("/data.json")
  //     .then((res) => res.json())
  //     .then((data) => setDataProduct(data));
  // }, []);

  const data = useLoaderData();

  // console.log(wishList);

  useEffect(() => {
    const storedCartList = getStoredCartList();
    const cartList = data.filter((product) =>
      storedCartList.includes(product.product_id)
    );
    setProductList(cartList);

    const storedWishList = getStoredWishList();
    const wishList = data.filter((product) =>
      storedWishList.includes(product.product_id)
    );
    // const remainingWishList = deleteWishList();
    setWishList(wishList);
  }, [data]);

  // when purchase delete data frm localStorage
  const handlePurchase = () => {
    localStorage.removeItem("cart-list");

    setProductList([]);
  };

  const deleteWishList = (id) => {
    // const storedList = getStoredWishList();
    // const wishList = wishList.filter((product) =>
    //   storedList.includes(product.product_id)
    // );
    // const itemRemove = wishList.filter((item) => item.product_id != id);
    // localStorage.setItem("wish-list", JSON.stringify(itemRemove.product_id));
    // setDeleteWish(itemRemove);
    const storedWishList = getStoredWishList();
    const updatedWishList = storedWishList.filter(
      (productId) => productId !== id
    );
    localStorage.setItem("wish-list", JSON.stringify(updatedWishList));
    const newWishList = data.filter((product) =>
      updatedWishList.includes(product.product_id)
    );
    setWishList(newWishList);
  };

  const deleteCartList = (id) => {
    const storedCartList = getStoredCartList();
    const updateCartList = storedCartList.filter(
      (productId) => productId !== id
    );

    localStorage.setItem("cart-list", JSON.stringify(updateCartList));

    const newCartList = data.filter((product) =>
      updateCartList.includes(product.product_id)
    );
    setProductList(newCartList);
  };

  const handleSort = () => {
    const sortList = [...productList].sort((a, b) => b.price - a.price);
    setProductList(sortList);
  };

  const handelIsActive = (status) => {
    if (status === "cart") {
      setActive({
        cart: true,
        status: "cart",
      });
    } else {
      setActive({ cart: false, status: "wishlist" });
    }
  };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dashboard | Gadget Haven</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className="pt-16 pb-5 text-white bg-[#9538E2]  text-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="py-6">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to
          <br /> the coolest accessories, we have it all!
        </p>
        <button
          onClick={() => handelIsActive("cart")}
          className={
            isActive.cart
              ? "btn rounded-4xl text-[#9538E2] font-extrabold text-lg px-16 py-4 mr-5"
              : "btn rounded-4xl  text-white bg-[#9538E2] font-extrabold text-lg px-16 py-4 mr-5"
          }
        >
          Cart
        </button>
        <button
          onClick={() => handelIsActive("wishlist")}
          className={
            isActive.cart
              ? "btn rounded-4xl  text-white font-extrabold text-lg px-16 py-4 bg-[#9538E2]"
              : "btn rounded-4xl text-[#9538E2] font-extrabold text-lg px-16 py-4 "
          }
        >
          Wishlist
        </button>
      </div>

      {isActive.cart ? (
        <Cart
          handleSort={handleSort}
          productList={productList}
          deleteCartList={deleteCartList}
          handlePurchase={handlePurchase}
        ></Cart>
      ) : (
        <WishList
          deleteWishList={deleteWishList}
          wishList={wishList}
        ></WishList>
      )}
    </div>
  );
};

export default Dashboard;
