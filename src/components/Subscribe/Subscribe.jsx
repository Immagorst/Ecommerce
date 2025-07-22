import React from "react";
import Banner from "../../assets/website/orange-pattern.jpg";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-[var(--primary)] text-white rounded-2xl shadow-xl px-2 sm:px-6"
      style={{}}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Nhập email của bạn"
            className="w-full p-3 rounded-full border-none shadow-md text-gray-700 focus:ring-2 focus:ring-[var(--primary)] bg-white/90"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
