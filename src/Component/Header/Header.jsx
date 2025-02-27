import banner from "../../assets/banner.jpg";
const Header = () => {
  return (
    <div>
      <div className="hero  bg-[#9538E2] w-11/12 mx-auto lg:h-[694px] text-white lg:mb-130 rounded-b-4xl">
        <div className="hero-content lg:-mt-58 text-center flex-col lg:relative ">
          <div>
            <h1 className="text-5xl font-bold">
              Upgrade Your Tech Accessorize with <br /> Gadget Heaven
              Accessories
            </h1>
            <p className="py-6">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to
              <br /> the coolest accessories, we have it all!
            </p>
            <button className="btn rounded-4xl text-[#9538E2] font-bold text-xl px-8 py-4 ">
              Shop Now
            </button>
          </div>

          {/* <img
            src={banner}
            className="lg:w-[1062px] w-sm h-[563px]   absolute top-87 object-cover p-6 bg-[#ffffff38] border-2
            rounded-4xl "
          /> */}
          <div className="lg:absolute hidden lg:flex   top-95  border-2 border-base-300 border-solid p-6 rounded-3xl bg-[#FFFFFF26]  object-cover">
            <div
              className="hero bg-white lg:w-[1062px] md:w-150 w-90 h-82  md:h-[563px] rounded-3xl"
              style={{
                backgroundImage: `url(${banner})`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
