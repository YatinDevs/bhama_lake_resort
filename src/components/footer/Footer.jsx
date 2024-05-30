import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";

import "./style.scss";
import ContentWrapper from "../ContentWrapper/ContentWrapper";

const Footer = () => {
  return (
    <footer className="footer flex justify-center items-center">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="m-5 flex text-center text-[#d4d1d1] gap-5 flex-col text-[] mx-4 w-full justify-center items-center">
          <div className="p-2 text-xs md:text-md  rounded-md w-full">
            Escape to serenity at Bhama Lake Resort, nestled in the heart of the
            breathtaking Bhama Dam area. Surrounded by picturesque natural
            beauty and an array of outdoor activities, our resort offers the
            perfect blend of relaxation and adventure. Indulge in our range of
            accommodations tailored to your preferences, from cozy cabins to
            spacious lakefront suites. Each room is thoughtfully designed with
            modern amenities and boasts captivating views of the tranquil lake
            and majestic mountains.
          </div>
          <div className="p-2  text-xs rounded-md w-full">
            At Bhama Lake Resort, we prioritize your comfort and satisfaction.
            Experience the ultimate getaway where every moment is a memory to
            cherish.
          </div>
        </div>
        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <CiYoutube />
          </span>
        </div>
        <div>
          <p className="w-full text-center max-w-[1280px] mx-auto my-2 py-2  text-xs lg:text-lg font-bold">
            {" "}
            © 2024 . All brands are trademarks of their respective owners.
          </p>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
