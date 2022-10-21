import React from "react";

const Home = () => {
  return (
    <div>
      <div className="flex justify-center bg-black">
        <nav className="self-center w-full max-w-7xl  ">
          <div className="flex flex-col lg:flex-row justify-around items-center text-white">
            <h1 className="uppercase pl-5 py-4 text-lg font-sans font-bold">
              hero
            </h1>
            <ul className="hidden lg:flex items-center text-[18px] font-semibold pl-32">
              <li className="hover:underline  underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <a href="#">Home</a>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <a href="#">Contact</a>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <a href="#">Services</a>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <a href="#">About</a>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <a href="#">Pricing</a>
              </li>
            </ul>
            <div className="text-white text-center text-base pr-5  inline-flex">
              {" "}
              <a
                href="#"
                className="w-8 h-8 inline-block rounded-full pt-[6px] hover:text-blue-500"
              >
                <i className="fa fa-twitter" />
              </a>{" "}
              <a
                href="#"
                className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"
              >
                <i className="fa fa-instagram" />
              </a>{" "}
              <a
                href="#"
                className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"
              >
                <i className="fa fa-facebook" />
              </a>{" "}
              <a
                href="#"
                className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"
              >
                <i className="fa fa-google" />
              </a>{" "}
              <a
                href="#"
                className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"
              >
                <i className="fa fa-linkedin" />
              </a>{" "}
            </div>
          </div>
        </nav>
      </div>
      <div className="flex justify-center bg-black p-8 ">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col lg:flex-row max-w-7xl justify-center items-center p-2 space-y-3 w-full">
            <div className="flex flex-col  text-white md:items-start items-center justify-between  space-y-3 px-8">
              <div className="text-5xl md:text-7xl font-bold ">
                The Theory of Everything{" "}
              </div>
              <div className="text-lg uppercase md:text-3xl   ">
                Interactive Components
              </div>
              <div className="text-xl md:text-3xl   ">@tailblocks.org</div>
            </div>
            <div className="flex space-x-2 md:space-x-6 md:m-4">
              <div className="md:w-20 w-10 h-60 md:h-96  overflow-hidden rounded-xl">
                <img
                  src="https://source.unsplash.com/100x400/?man"
                  className="h-full w-full"
                  alt=""
                />
              </div>
              <div className="md:w-60 w-28 h-60 md:h-96  overflow-hidden rounded-xl">
                <img
                  src="https://source.unsplash.com/200x400/?girl"
                  className="h-full w-full"
                  alt=""
                />
              </div>
              <div className="md:w-28  w-16 h-60 md:h-96  overflow-hidden rounded-xl">
                <img
                  src="https://source.unsplash.com/100x400/?boy"
                  className="h-full w-full"
                  alt=""
                />
              </div>
              <div className="md:w-20 w-10 h-60 md:h-96  overflow-hidden rounded-xl">
                <img
                  src="https://source.unsplash.com/100x400/?women"
                  className="h-full w-full"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
