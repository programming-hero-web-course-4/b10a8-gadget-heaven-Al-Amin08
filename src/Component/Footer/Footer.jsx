const Footer = () => {
  return (
    <div className="  bg-white">
      <div className="text-center w-8/12 mx-auto border-b-2 border-dashed border-b-gray-300 pb-5 pt-20 space-y-3">
        <h1 className="font-bold text-3xl text-[#09080F]">Gadget Heaven</h1>
        <p className="font-medium text-[#09080F99]">
          Leading the way in cutting-edge technology and innovation
        </p>
      </div>
      <div className="lg:ml-70 w-10/12 mx-auto">
        <footer className="footer sm:footer-horizontal  text-base-content p-10 lg:w-3/5 mx-auto">
          <nav className="text-[#09080F99]">
            <h6 className="text-[#09080F] font-bold text-lg">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Company</a>
          </nav>
          <nav className="text-[#09080F99]">
            <h6 className="text-[#09080F] font-bold text-lg">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav className="text-[#09080F99]">
            <h6 className="text-[#09080F] font-bold text-lg">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
