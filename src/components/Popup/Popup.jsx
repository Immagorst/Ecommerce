import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-[var(--bg-card)] dark:bg-gray-900 rounded-md duration-200 w-[300px]">
              {/* header */}
              <div className="flex items-center justify-between mb-2 px-2">
                <div>
                  <h1 className="text-xl font-bold" style={{ color: "var(--primary)" }}>Order Now</h1>
                </div>
                <div>
                  <IoCloseOutline
                    className="text-2xl cursor-pointer text-[var(--secondary)] hover:text-red-400 duration-200"
                    onClick={() => setOrderPopup(false)}
                  />
                </div>
              </div>
              {/* form section */}
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-full border border-[var(--border-main)] dark:border-gray-500 dark:bg-gray-800 px-3 py-2 mb-4 bg-white/90"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-full border border-[var(--border-main)] dark:border-gray-500 dark:bg-gray-800 px-3 py-2 mb-4 bg-white/90"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full rounded-full border border-[var(--border-main)] dark:border-gray-500 dark:bg-gray-800 px-3 py-2 mb-4 bg-white/90"
                />
                <div className="flex justify-center">
                  <button className="bg-[var(--primary)] hover:scale-105 duration-200 text-white py-2 px-6 rounded-full font-semibold shadow-md">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
