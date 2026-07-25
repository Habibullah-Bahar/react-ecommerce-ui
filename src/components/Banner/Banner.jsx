import React from "react";
import BannerImage from "../../assets/women2.jpg";
import { easeOut, motion } from "motion/react";
import { Hamburger, ShieldKeyhole, Truck } from "lucide-react";
import { FaFreebsd, FaPaypal } from "react-icons/fa";
import { IoCloudOfflineSharp, IoHappy, IoMicOffCircle } from "react-icons/io5";

const Banner = () => {
  return (
    <>
      <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 px-5 bg-gray-100 dark:bg-gray-900 dark:text-white  ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          <motion.div
            initial={{
              scale: 0.3,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              ease: easeOut,
            }}
          >
            <img
              src={BannerImage}
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover rounded-lg "
            />
          </motion.div>

          <div className="flex flex-col justify-center gap-6 sm:pt-0 ">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
              {" "}
              Winter Sale upto 50% Off
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm text-gray-500 tracking-wide leading-5 dark:text-gray-100"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              reiciendis inventore iste ratione ex alias quis magni at optio
            </p>
            <div className="flex flex-col gap-4 ">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <ShieldKeyhole className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>Quality Products</p>
              </div>

              <div data-aos="fade-up" className="flex items-center gap-4">
                <Truck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400"/>
                <p>Fast Delivery</p>
              </div>

              <div data-aos="fade-up" className="flex items-center gap-4">
                <FaPaypal className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                <p>Easy Payment method</p>
              </div>

              <div data-aos="fade-up" className="flex items-center gap-4">
                <IoHappy className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400"/>
                <p>Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
