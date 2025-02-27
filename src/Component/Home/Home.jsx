import { Helmet } from "react-helmet";
import Header from "../Header/Header";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Gadget Haven</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Header></Header>
      <Products></Products>
    </div>
  );
};

export default Home;
