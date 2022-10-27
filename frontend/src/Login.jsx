import React from "react";
import { Link } from "react-router-dom";

const Login = (props) => {
  return (
    <div className="flex justify-center bg-[url(https://egymerch.com/site_assets/assets/imgs/login/login.png)] bg-contain bg-[center_right_8rem] bg-no-repeat my-24 ">
      <div className="h-[90%] w-full md:w-3/4 m-4">
        <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0">
          <h1 className="font-semibold text-3xl text-gray-700 m-2">Log In</h1>
        </div>

        <form onSubmit={props.submit}>
          <div className="flex flex-col justify-center items-center mt-10 md:mt-4 space-y-6 md:space-y-8">
            <div className="">
              <input
                type="text"
                placeholder="Email"
                name={props.email}
                className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-500 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
              />
            </div>
            <div className="">
              <input
                type="password"
                placeholder="Password"
                name={props.password}
                className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-500 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
              />
            </div>
            <div className="flex space-x-2 -ml-28 md:-ml-40  lg:-ml-52">
              <input
                className=""
                type="checkbox"
                id="checkbox"
                name="checkbox"
              />
              <h3 className="text-sm font-semibold text-gray-400 -mt-1 cursor-pointer">
                Remember Me
              </h3>
            </div>
          </div>
          <div className="text-center mt-7">
            <Link to="/greet" >
            <button type="submit" className="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600  font-medium ">
              login
            </button>
            </Link>
          </div>
        </form>

        <div className="text-center my-6 flex flex-col">
          <a
            href="#"
            className="text-sm font-medium text-gray-400 hover:text-blue-500 m-1"
          >
            Forgot Password ?
          </a>
          <Link
            to="/"
            className="text-sm font-bold text-gray-400 hover:text-blue-500 m-1"
          >
            Not a User? Create New Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
