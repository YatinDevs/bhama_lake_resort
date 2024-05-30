import React from "react";
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
} from "../../constants";
import { FiArrowRight } from "react-icons/fi"; // Importing the FiArrowRight icon from react-icons

function Rooms() {
  const rooms = [
    {
      src: locationImg9,
      roomType: "Deluxe Room",
      subtitle: "Bhama Lake Resort",
    },
    {
      src: locationImg10,
      roomType: "Super Deluxe Room",
      subtitle: "Bhama Lake Resort",
    },
    {
      src: locationImg14,
      roomType: "Suite Room",
      subtitle: "Bhama Lake Resort",
    },
    {
      src: locationImg15,
      roomType: "Lake View Suite",
      subtitle: "Bhama Lake Resort",
    },
  ];

  return (
    <div className="container mx-auto ">
      <h1 className="text-3xl mb-2 text-center text-gray-700 font-thin">
        Our Rooms
      </h1>
      <div className="flex h-8 flex-col gap-2">
        <div className="border-b-4 border-red-200 "></div>
        <div className="border-b border-red-200 "></div>
      </div>

      <div className="mx-2 grid grid-cols-2  md:grid-cols-2 lg:grid-cols-4 gap-6">
        {rooms.map((room, index) => (
          <div
            key={index}
            className="bg-white shadow-md flex flex-col justify-between active:scale-95 overflow-hidden"
          >
            <img
              src={room.src}
              alt={room.roomType}
              className="w-full h-32 md:h-64 object-cover"
            />
            <div className="p-4 h-35">
              <h2 className="text-md mb-2 font-serif md:text-xl">
                {room.roomType}
              </h2>
              <p className="text-gray-700 text-xs md:text-xl">
                {room.subtitle}
              </p>
            </div>
            <div className="flex justify-center items-center p-2 border">
              View Details
              <FiArrowRight className="ml-2" /> {/* Adding FiArrowRight icon */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rooms;
