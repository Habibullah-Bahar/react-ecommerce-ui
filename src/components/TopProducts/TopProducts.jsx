import React from "react";
import img1 from "../../assets/shirt.png";
import img2 from "../../assets/shirt2.png";
import img3 from "../../assets/shirt3.png";
import { Star } from "lucide-react";
import { easeOut, motion } from "motion/react";

const TopProducts = ({ handleOrderPopup }) => {
  const ProductData = [
    {
      id: 1,
      img: img1,
      title: "Casual Wear",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      img: img2,
      title: "Printed Shirt",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      img: img3,
      title: "Women Shirt",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-20 bg-gray-100">
        <div className="text-left mb-14 flex flex-col gap-2 mx-10">
          <p className="text-sm text-primary">Top Rated Products For You </p>
          <h1 className="text-3xl font-bold">Best Products </h1>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            exercitationem voluptate cum beatae cumque quos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-5">
          {ProductData.map((items) => (
            <motion.div
              key={items.id}
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
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px] py-15 cursor-pointer mb-10 "
            >
              <div className="h-[100px]">
                <motion.img
                  src={items.img}
                  className="max-w-[140px] group-hover:scale-105 duration-300 drop-shadow-md -translate-y-25 translate-x-20"
                />
              </div>

              <div className="p-4 text-center">
                <div className="w-full flex items-center justify-center gap-1">
                  <Star className="text-yellow-500" />
                  <Star className="text-yellow-500" />
                  <Star className="text-yellow-500" />
                  <Star className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{items.title} </h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {items.description}{" "}
                </p>
                <button
                  onClick={() => handleOrderPopup()}
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary group-hover:cursor-pointer shadow-md rounded-lg"
                >
                  Order Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TopProducts;
