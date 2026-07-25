import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://images.pexels.com/photos/27684728/pexels-photo-27684728.jpeg",
  },
  {
    id: 2,
    name: "Satya Nadella",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZRMTWH-JCMFtzTUJ6X1aiD62B1lis9essPArBOt74kbGOwgMNqWPO5SKdnOO7WvUrgibA&s",
  },
  {
    id: 3,
    name: "Virat Kohli",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1lKH9EbWJC_pCNYK-HjfploTD7P0SH8xaa5bW1f4fLRJoHujHUOT5SHnao9NOx7BJWXSaMa1pMeaNGeVKd4XihKat0QTAkKfGQ9nLpnAZ&s=10",
  },
  {
    id: 5,
    name: "Sachin Tendulkar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0rfGP24Q5LMz1oQ23BKuVAo-9NS_512kG7Hbh1K_0BXgIc-qCHiq07vsee2NMGzUDRly9Z8r75K49l4fcS9262DPM8_AEbwf5YA_bK_an&s=10",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 dark:text-white pb-10 pt-10">
      <div className="text-center mb-10 max-w-[600px] mx-auto ">
        <p data-aos="fade-up" className="text-sm text-primary">
          What our customers are saying
        </p>

        <h1 data-aos="fade-up" className="text-3xl font-bold">
          Testimonials
        </h1>

        <p data-aos="fade-up" className="text-xs text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
          asperiores modi Sit asperiores modi
        </p>
      </div>

      <div data-aos="zoom-in">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            320:{
              slidesPerView:1,
            },
            640:{
              slidesPerView:1,
            },
            768:{
              slidesPerView:2,
            },
            1024:{
              slidesPerView:3,
            },

          }}
          loop={true}
          className="[--swiper-theme-color:#fff] "
        >
          {TestimonialData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col gap-4 shadow-lg py-8 px-6 rounded-xl dark:bg-gray-800 bg-primary/10 relative max-w-[300px] mx-auto ">
                <div>
                  <img
                    src={item.img}
                    className="rounded-full w-20 h-20 object-cover ml-16"
                  />
                </div>
                <div className="flex flex-col items-center gap-4">
                  <p className="text-xs text-gray-500">{item.text} </p>
                  <h1 className="text-xl font-bold text-black/80 dark:text-white">
                    {item.name}{" "}
                  </h1>
                </div>
                <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                  ,,
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
