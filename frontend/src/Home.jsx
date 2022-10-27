import React from "react";

const Home = () => {
  return (
    <section className="relative bg-[url(https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2018_11/2361841/ss-9-180314-stephen-hawking-obit-ac-139a.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25" />
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className=" text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            the theory of
            <strong className="block font-extrabold text-blue-500 text-7xl">
              Everything
            </strong>
          </h1>
          <p className="mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
            The Beautiful Universe is on an Endless Journey of Perfection. <br />
            We all companions ought to associate each other to Advance. <br />
            The more we unite, the faster we Advance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
