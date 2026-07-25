import React from "react";
import image1 from "../../assets/women.png";
import image2 from "../../assets/shopping.png";
import image3 from "../../assets/sale.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { easeOut, motion } from "motion/react";

const ImageList = [
  {
    id: 1,
    img: image1,
    title: "Up to 50% off on all Women's Wear",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cumque, repudiandae autem eligendi maxime consequuntur ex.",
  },
  {
    id: 2,
    img: image2,
    title: "Up to 50% off on all Shopping Customer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cumque, repudiandae autem eligendi maxime consequuntur ex.",
  },
  {
    id: 3,
    img: image3,
    title: "Up to 50% off on all Sale Products",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cumque, repudiandae autem eligendi maxime consequuntur ex.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 dark:bg-gray-900 dark:text-white">
      {/* Background */}
      <div className="absolute w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-primary/30 rounded-full -top-15 -right-15"></div>

      <motion.div
        initial={{
          scale: 0.8,
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
        className="container px-4 md:px-8"
      >
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          slidesPerView={1}
          loop={true}
          className="[--swiper-theme-color:#fff]"
        >
          {ImageList.map((item) => (
            <SwiperSlide key={item.id}>
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8  items-center min-h-[550px]">
                  <div className="space-y-5 text-center sm:text-left order-2 sm:order-1">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                      {item.title}
                    </h1>

                    <p className="text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>

                    <button
                      onClick={() => handleOrderPopup()}
                      className="bg-gradient-to-r from-primary to-secondary text-white px-5 py-2 sm:px-6 sm:py-3 rounded-full hover:scale-105 duration-300 cursor-pointer"
                    >
                      Order Now
                    </button>
                  </div>

                  <div className="flex justify-center order-1 sm:order-2">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-[220px] sm:w-[320px] md:w-[400px] lg:w-[450px] sm:scale-105 lg:scale-120 mx-auto  object-contain"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default Hero;
