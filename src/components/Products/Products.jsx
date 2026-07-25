import React from "react";
import img1 from "../../assets/women(1).png";
import img2 from "../../assets/women2.jpg";
import img3 from "../../assets/women3.jpg";
import img4 from "../../assets/women4.jpg";
import { Pointer, Star } from "lucide-react";
import { motion } from "motion/react";

const Products = () => {
  const ProductsData = [
    {
      id: 1,
      img: img1,
      title: "Women Ethnic",
      rating: 5.0,
      color: "White",
    },
    {
      id: 2,
      img: img2,
      title: "Women western",
      rating: 4.5,
      color: "Red",
    },
    {
      id: 3,
      img: img3,
      title: "Googles",
      rating: 4.7,
      color: "Brown",
    },
    {
      id: 4,
      img: img4,
      title: "Printed T Shirt",
      rating: 5.0,
      color: "Pink",
    },
    {
      id: 5,
      img: img2,
      title: "Fashin T Shirt",
      rating: 4.5,
      color: "Yellow",
    },
  ];
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const items = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        className=" dark:bg-gray-900 bg-gray-100 py-4 dark:text-white"
      >
        <div className="text-center flex flex-col gap-3 mb-10 max-w-[600px] mx-auto tex">
          <p className="text-sm text-primary">Top Selling Products for you</p>
          <h1 className="text-3xl font-bold ">Products</h1>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            facilis ipsa, quos fuga cumque beatae aspernatur magni unde
            asperiores fugiat.
          </p>
        </div>

        <motion.div
          transition={{
            type: "spring",
            duration: 1,
            stiffness: 300,
          }}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5 "
        >
          {ProductsData.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{
                scale: 1.05,
              }}
              variants={items}
              className="space-y-3"
            >
              <div>
                <motion.img
                  src={item.img}
                  whileHover={{
                    scale: 1.1,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="cursor-pointer h-[220px] w-[150px] object-cover rounded-md "
                />
              </div>

              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-200">
                  {" "}
                  {item.color}{" "}
                </p>
                <div className="flex items-center gap-1">
                  <Star className="text-yellow-400" />
                  <span>{item.rating} </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex justify-center">
          <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-lg shadow-md tracking-tight hover:scale-105 hover:bg-primary/80">
            View All Products
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default Products;
