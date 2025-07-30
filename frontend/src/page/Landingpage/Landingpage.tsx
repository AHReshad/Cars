import React from "react";
import { Search } from "lucide-react";
import car1 from "../../../public/images/landing/car1.svg";
import car2 from "../../../public/images/landing/car2.svg";
import car3 from "../../../public/images/landing/car3.svg";
import Nav from "../../Components/Nav";

export default function Landingpage() {
  const cars = [
    {
      year: "1957",
      model: "Roadster",
      description:
        "Experience the thrill of open driving in this iconic American classic.",
      // image: "/roadster.jpg" - add your image path here
    },
    {
      year: "1962",
      model: "Sekan",
      description:
        "Travel in style and comfort with this elegant and sporting sedan.",
      // image: "/sekan.jpg"
    },
    {
      year: "1968",
      model: "Sports Coupe",
      description:
        "Feel the power and agility of this legendary British sports car.",
      // image: "/sportscoupe.jpg"
    },
  ];
  return (
    <div className="px-[176px]">
      <Nav/>
      {/* Hero Section */}
      <div className="relative w-full flex justify-center pb-14 mt-[36px] ">
        {/* Image */}
        <img
          src="/images/landing/image1.png"
          alt="Car"
          className="w-full max-w-[1280px] h-[480px] object-cover rounded-[12px]"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 rounded-[12px]">
          <h1 className="text-white font-extrabold text-[28px] sm:text-[36px] md:text-[48px] leading-tight">
            Experience the Golden Age of <br /> Motoring
          </h1>

          <p className="text-white text-[16px] sm:text-[18px] leading-[28px] max-w-[950px] mt-4 px-4 drop-shadow-md">
            Rent a meticulously restored classic car and relive the thrill of a
            bygone era. Our collection features iconic models from the 1950s to
            the 1970s, perfect for special occasions, weekend getaways, or
            simply indulging your passion for automotive history.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-[60px]">
            <button className="bg-[#D96B32] text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-[#c75f29] transition">
              Browse Our Collection
            </button>
            <button className="bg-white text-black px-6 py-3 rounded-full font-medium shadow-lg hover:bg-gray-200 transition">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Input Section */}

      {/* <div>
        <div className="w-full flex justify-center mt-[-20px]">
          <div className="flex items-center gap-2 bg-[#f5f1ec] text-[#7b4f2c] px-4 py-3 rounded-[12px] w-full max-w-lg">
            <Search size={20} className="text-[#7b4f2c]" />
            <input
              type="text"
              placeholder="Search for vintage cars or rental options"
              className="bg-transparent outline-none placeholder-[#7b4f2c] w-full text-sm sm:text-base"
            />
          </div>
        </div>

        <div>
          <h1 className="font-bold text-xl leading-[28px] mt-[40px] text-center md:text-2xl">
            Our Fleet
          </h1>

          <div className="flex flex-wrap justify-center gap-6 mt-[35px] w-full">
            <img
              src={car1}
              className="w-full max-w-xs h-[169px] object-cover sm:max-w-sm md:max-w-md"
              alt=""
            />
            <img
              src={car2}
              className="w-full max-w-xs h-[169px] object-cover sm:max-w-sm md:max-w-md"
              alt=""
            />
            <img
              src={car3}
              className="w-full max-w-xs h-[169px] object-cover sm:max-w-sm md:max-w-md"
              alt=""
            />
          </div>
        </div>
      </div> */}

      <div className="max-w-6xl mx-auto px- py-8  min-h-screen">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Our Fleet
        </h1>
        {/* Search Bar */}
        <div className="flex items-center bg-[#F2EDE8] py-2 px-3 rounded-lg mb-8">
          <Search size={20} className="text-[#7b4f2c]" />
          <input
            type="text"
            placeholder="Search for vintage cars or rental options"
            className="w-full py-2 px-1 bg-transparent border-none focus:outline-none focus:ring-0 focus:border-none"
          />
        </div>

        {/* Title */}

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1"
            >
              {/* Image Placeholder - Replace with your image */}
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Car Image</span>
                {/* <img src={car.image} alt={`${car.year} ${car.model}`} className="w-full h-full object-cover" /> */}
              </div>

              <div className="p-6">
                <div className="text-lg font-semibold text-gray-700">
                  {car.year}
                </div>
                <h2 className="text-2xl font-bold text-red-600 mb-2">
                  {car.model}
                </h2>
                <p className="text-gray-600">{car.description}</p>

                {/* Optional Button */}
                <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                  Rent Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
