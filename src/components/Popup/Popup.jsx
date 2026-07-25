import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div>
          <div className="h-screen w-full fixed top-0 left-0 bg-black/20 z-50 backdrop-blur-sm">
            <div
            data-aos="fade-up"
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 dark:text-white rounded-md transition-all duration-500 w-[300px] ">
              <div
              data-aos="zoom-in"
              className="flex flex-col items-center transition-all duration-500">
                
                <div className="flex justify-between gap-30">
                  <h1 className="text-xl font-bold">Order Now</h1>
                  <div>
                    <IoCloseOutline
                    onClick={()=> setOrderPopup(false)}
                    className="text-2xl cursor-pointer" />
                  </div>
                </div>
                <div className="flex flex-col gap-3 my-5">
                  <input
                    type="text"
                    className="text-center py-1 px-4 w-full border border-gray-400 rounded-full outline-none dark:bg-gray-500 dark:border-gray-100 focus:border-blue-600 focus:border-2 focus:bg-white/20"
                    placeholder="Name"
                  />

                  <input
                    type="email"
                    className="text-center py-1 px-4 w-full border border-gray-400 rounded-full outline-none dark:bg-gray-500 dark:border-gray-100  focus:border-blue-600 focus:border-2 focus:bg-white/20"
                    placeholder="Email"
                  />

                  <input
                    type="text"
                    className="text-center py-1 px-4 w-full border border-gray-400 rounded-full outline-none dark:bg-gray-500 dark:border-gray-100  focus:border-blue-600 focus:border-2 focus:bg-white/20"
                    placeholder="Address"
                  />
                </div>

                <div className="flex justify-center items-center shadow-md">
                  <button className="py-1 px-3 border rounded-full  bg-primary border-gray-400 cursor-pointer text-gray-200 hover:scale-109  hover:bg-primary/80 ">
                    Submit
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
