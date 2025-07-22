import React from "react";
import footerLogo from "../../assets/logo.png";
import Banner from "../../assets/website/footer-pattern.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

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

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-[#F3B6B6] via-[#A89CC8] to-[#8CA6DB] text-white rounded-t-2xl shadow-2xl">
      <div className="container px-2 sm:px-6">
        <div data-aos="zoom-in" className="grid grid-cols-1 gap-8 pt-5 pb-24 md:grid-cols-3">
          {/* company details */}
          <div className="px-4 py-8">
            <h1 className="flex items-center gap-3 mb-3 text-xl font-bold text-justify sm:text-3xl sm:text-left">
              <img src={footerLogo} alt="" className="max-w-[50px]" />
              GeminiShop
            </h1>
            <p>
              GeminiShop - Nền tảng mua sắm hiện đại, đa dạng sản phẩm, dịch vụ tận tâm và trải nghiệm khách hàng tuyệt vời. Chúng tôi cam kết mang đến cho bạn sự hài lòng tối đa khi mua sắm trực tuyến.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 col-span-2 sm:grid-cols-3 md:pl-10">
            <div>
              <div className="px-4 py-8">
                <h1 className="mb-3 text-xl font-bold text-justify sm:text-xl sm:text-left">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="text-gray-200 duration-300 cursor-pointer hover:text-primary hover:translate-x-1"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="px-4 py-8">
                <h1 className="mb-3 text-xl font-bold text-justify sm:text-xl sm:text-left">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="text-gray-200 duration-300 cursor-pointer hover:text-primary hover:translate-x-1"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* social links */}

            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram className="text-3xl hover:text-[#A89CC8] duration-200" />
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebook className="text-3xl hover:text-[#8CA6DB] duration-200" />
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin className="text-3xl hover:text-[#F3B6B6] duration-200" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <FaLocationArrow />
                    <span>Tiên Sơn, Đà Nẵng</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaMobileAlt />
                    <span>0123 456 789</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold">Email:</span>
                    <span>support@geminishop.vn</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
