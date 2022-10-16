import React from "react";

const Register = (props) => {
  let buttonStyle =
    "uppercase lg:px-[10px] py-2 rounded-md text-white bg-red-500 hover:bg-red-600  font-medium ";

  let buttonText, passBoxType;

  if (props.showPass === true) {
    buttonStyle =
      "uppercase lg:px-[10px] py-2 rounded-md text-white bg-green-500 hover:bg-green-600  font-medium ";
    buttonText = "Hide Password";
    passBoxType = "text";
  } else {
    buttonText = "Show Password";
    passBoxType = "password";
  }

  return (
    <div className="md:container md:mx-auto px-40">
      <div className="flex justify-center">
        <div className="flex flex-col justify-center items-center md:flex-row shadow rounded-xl max-w-7xl w-[90%] h-[670px] md:h-[460px] m-2">
          <div
            className="h-[100%] w-full md:w-3/4  bg-center  bg-cover rounded-lg"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?cs=srgb&dl=pexels-cesar-perez-733745.jpg&fm=jpg)",
            }}
          >
            <div className="text-white text-base font-semibold text-center my-10 space-y-2">
              <h1 className="">Don't have an account ?</h1>
              <h3>
                {" "}
                <a
                  href="#"
                  className="underline underline-offset-4 tracking-wide hover:text-blue-400"
                >
                  Signup
                </a>{" "}
              </h3>
            </div>
          </div>
          <div className="h-[90%] w-full md:w-3/4">
            <form onSubmit={props.submit}>
              <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0">
                <h1 className="font-semibold text-gray-600">
                  Registration Form
                </h1>
              </div>
              <div className="flex flex-col justify-center items-center mt-10 md:mt-14 space-y-6 md:space-y-8">
                <div className="">
                  <input
                    type="text"
                    name="name"
                    placeholder="User Name"
                    className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                    required
                  />
                </div>
                <div className="">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                    required
                  />
                </div>
                <div className="">
                  <input
                    type={passBoxType}
                    name="password"
                    placeholder="Password"
                    className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                    required
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
                <div>
                  <button
                    className={buttonStyle}
                    type="button"
                    onClick={props.click}
                  >
                    {buttonText}
                  </button>
                </div>
              </div>
              <div className="text-center mt-7">
                <button className="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600  font-medium ">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <script
        src="https://kit.fontawesome.com/290d4f0eb4.js"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
};

export default Register;
