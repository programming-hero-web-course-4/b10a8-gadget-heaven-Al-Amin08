import error from "../../assets/error.webp";

const ErrorPage = () => {
  return (
    <div className="mt-30">
      <div className="   flex justify-center  items-center">
        <img className="w-150 h-150" src={error} alt="" />
      </div>
      <h1 className="text-center font-extrabold text-4xl">
        404!!! Page Not Found <br />
        Try to type actual address where you want go
      </h1>
    </div>
  );
};

export default ErrorPage;
