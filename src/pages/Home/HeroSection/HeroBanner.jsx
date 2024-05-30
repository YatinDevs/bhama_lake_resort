import React, { useState, useEffect } from "react";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
import {
  locationImg1,
  locationImg2,
  locationImg3,
  locationImg4,
  locationImg5,
  locationImg6,
  locationImg7,
  locationImg8,
  locationImg9,
  locationImg10,
  locationImg11,
  locationImg12,
  locationImg13,
  locationImg14,
  locationImg15,
} from "../../../constants";
import "./style.css";

function HeroBanner() {
  const [background, setBackground] = useState("");
  const [textContent, setTextContent] = useState({ title: "", subtitle: "" });

  const images = [
    {
      src: locationImg1,
      title: "Welcome To Bhama",
      subtitle: "Lake Resorts",
    },
    {
      src: locationImg2,
      title: "Place Of Tranquility",
      subtitle: "Adventures",
    },
    {
      src: locationImg3,
      title: "Discover Beautiful Places",
      subtitle: "Travel With Comfort",
    },
    {
      src: locationImg4,
      title: "Welcome To Bhama",
      subtitle: "Lake Resorts",
    },
    {
      src: locationImg5,
      title: "Place Of Tranquility",
      subtitle: "Adventures",
    },
    {
      src: locationImg6,
      title: "Discover Beautiful Places",
      subtitle: "Travel With Comfort",
    },
    {
      src: locationImg7,
      title: "Welcome To Bhama",
      subtitle: "Lake Resorts",
    },
    {
      src: locationImg8,
      title: "Place Of Tranquility",
      subtitle: "Adventures",
    },
    {
      src: locationImg9,
      title: "Welcome To Bhama",
      subtitle: "Lake Resorts",
    },
    {
      src: locationImg10,
      title: "Place Of Tranquility",
      subtitle: "Adventures",
    },
    {
      src: locationImg11,
      title: "Welcome To Bhama",
      subtitle: "Lake Resorts",
    },
    {
      src: locationImg12,
      title: "Place Of Tranquility",
      subtitle: "Adventures",
    },
    {
      src: locationImg13,
      title: "Welcome To Bhama",
      subtitle: "Lake Resorts",
    },
    {
      src: locationImg14,
      title: "Place Of Tranquility",
      subtitle: "Adventures",
    },
    {
      src: locationImg15,
      title: "Welcome To Bhama",
      subtitle: "Lake Resorts",
    },
  ];

  useEffect(() => {
    const changeBackground = () => {
      const randomImage = images[Math.floor(Math.random() * images.length)];
      setBackground(randomImage.src);
      setTextContent({
        title: randomImage.title,
        subtitle: randomImage.subtitle,
      });
    };

    changeBackground(); // Set an initial image
    const intervalId = setInterval(changeBackground, 5000); // Change image every 10 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []); // Empty dependency array to run useEffect only once after initial render

  return (
    <section className="relative w-full h-[400px] md:h-[600px] mt-16">
      <div
        style={{
          background: `url(${background}) no-repeat center center / cover`,
        }}
        className="absolute top-0 left-0 w-full h-full"
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container relative mx-auto h-full flex items-center justify-center font-serif">
          <div className="text-center absolute top-14 text-white">
            <h1 className="mb-3 text-3xl md:text-6xl  font-serif">
              {textContent.title}
            </h1>
            <div className="flex flex-row justify-center items-center gap-2">
              <div className="border-b w-1/2 "></div>
              <div>
                <h2 className="text-xl md:text-2xl w-full flex-1">
                  {textContent.subtitle}
                </h2>
              </div>
              <div className="border-b w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
