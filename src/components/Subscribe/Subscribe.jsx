import React from "react";
import Banner from "../../assets/orange-pattern.jpg";

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className=" bg-gray-100 dark:bg-gray-800 text-white px-4"
      style={{
        backgroundImage: `url(${Banner})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
      }}
    >
      <div className="backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>

          <input
            type="email"
            data-aos="fade-up"
            placeholder="Enter Your Email"
            className="w-full p-4 border border-white outline-none rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
