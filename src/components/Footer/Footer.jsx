import React from "react";
import footerLogo from "../../assets/logo.png";
import BannerImage from "../../assets/footer-pattern.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const Footer = () => {
  const FooterLinks = [
    {
      title: "Home",
      link: "/#",
    },
    {
      title: "About",
      link: "/#about",
    },
    {
      title: "Contact",
      link: "/#contact",
    },
    {
      title: "Blog",
      link: "/#blog",
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${BannerImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="text-white pt-16 pb-10"
    >
      <div
        data-aos="zoom-in"
        className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {/* Logo */}
        <div className="space-y-4 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <img src={footerLogo} alt="" className="w-12" />
            <h1 className="text-3xl font-bold">Shopsy</h1>
          </div>

          <p className="text-sm text-gray-200 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Labore maiores fuga explicabo suscipit autem voluptatem.
          </p>
        </div>

        {/* Links */}
        <div className="text-center sm:text-left">
          <h1 className="text-xl font-bold mb-5">Important Links</h1>

          <ul className="space-y-3">
            {FooterLinks.map((item) => (
              <li key={item.title}>
                <a
                  href={item.link}
                  className="inline-block hover:text-yellow-300 hover:translate-x-2 transition duration-300"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="text-center sm:text-left">
          <div className="flex justify-center sm:justify-start gap-5 mb-6">
            <a href="#">
              <FaInstagram className="text-2xl hover:scale-110 duration-300" />
            </a>

            <a href="#">
              <FaFacebook className="text-2xl hover:scale-110 duration-300" />
            </a>

            <a href="#">
              <FaLinkedin className="text-2xl hover:scale-110 duration-300" />
            </a>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <FaLocationArrow />
              <p>Dhaka, Bangladesh</p>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3">
              <FaMobileAlt />
              <p>+8801703-321082</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;