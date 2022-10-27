import React from "react";

const GrowWithUs = () => {
  return (
    <section className="bg-gray-50 bg-[url(https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg?cs=srgb&dl=pexels-alena-koval-886521.jpg&fm=jpg)] bg-cover bg-left bg-no-repeat">
      <div className="mx-auto max-w-screen-xl px-4 py-32  lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">


          <h1 className="text-3xl font-extrabold sm:text-5xl">
            <span className="font-extrabold text-blue-500 sm:block">Growth </span> is an
            <span className="font-extrabold text-blue-500 sm:block">inevitable</span> aspect of life.
          </h1>


          <p className="mt-4 sm:text-xl sm:leading-relaxed">
            We are growing. <br />
            We soon bring you an opportunity to grow with us.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-400 sm:w-auto"
              href="/get-started"
            >
              Get Notified
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowWithUs;
