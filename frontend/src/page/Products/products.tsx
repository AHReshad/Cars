import { Search } from "lucide-react";
import img1 from "/images/imgproduct/img1.svg";
import img2 from "/images/imgproduct/img2.svg";
import img3 from "/images/imgproduct/img3.svg";
import img4 from "/images/imgproduct/img4.svg";
import img5 from "/images/imgproduct/img5.svg";
import img6 from "/images/imgproduct/img6.svg";
import img7 from "/images/imgproduct/img7.svg";
import img8 from "/images/imgproduct/img8.svg";
import img9 from "/images/imgproduct/img9.svg";
import Footer from "../../Components/Footer";

const carData = [
  { id: 1, name: "1967 Ford Mustang", image: img1 },
  { id: 2, name: "1955 Chevrolet Bel Air", image: img2 },
  { id: 3, name: "1961 Jaguar E-Type", image: img3 },
  { id: 4, name: "1963 Volkswagen Beetle", image: img4 },
  { id: 5, name: "1970 Dodge Charger", image: img5 },
  { id: 6, name: "1965 Aston Martin DB5", image: img6 },
  { id: 7, name: "1955 Mercedes 300SL", image: img7 },
  { id: 8, name: "1969 Pontiac GTO", image: img8 },
  { id: 9, name: "1957 Chevrolet Corvette", image: img9 },
];

export default function Products() {
  return (
    <div className="px-[176px] pt-[36px]">
      {/* Header and Search */}
      <div>
        <h1 className="font-bold text-[32px] leading-[40px]">
          Choose Your Classic Ride
        </h1>
        <p className="text-[14px] leading-[21px]">
          Select from our curated collection of vintage cars for an
          unforgettable experience.
        </p>

        <div className="flex bg-[#f5f1ec] text-[#7b4f2c] px-4 py-3 rounded-[12px] w-full mt-[30px]">
          <Search size={20} className="text-[#7b4f2c]" />
          <input
            type="text"
            placeholder="Search for vintage cars or rental options"
            className="bg-transparent outline-none placeholder-[#7b4f2c] w-full text-sm sm:text-base pl-2"
          />
        </div>

        <div className="mt-[20px] flex gap-[12px] flex-wrap">
          <button className="px-[16px] py-[5px] bg-[#F2EDEB] rounded-[16px] cursor-pointer">
            All
          </button>
          <button className="px-[16px] py-[5px] bg-[#F2EDEB] rounded-[16px] cursor-pointer">
            Convertibles
          </button>
          <button className="px-[16px] py-[5px] bg-[#F2EDEB] rounded-[16px] cursor-pointer">
            Sedans
          </button>
          <button className="px-[16px] py-[5px] bg-[#F2EDEB] rounded-[16px] cursor-pointer">
            Sports Cars
          </button>
        </div>
      </div>

      {/* Cars */}
      <div>
        <h1 className="font-bold text-[18px] leading-[23px] mt-[25px]">
          Available Cars
        </h1>
      </div>

      <div className="mt-[16px] space-y-6">
        {/* Top row: 5 cars */}
        <div className="flex flex-wrap gap-4">
          {carData.slice(0, 5).map((car) => (
            <div key={car.id} className="w-[180px]">
              <img src={car.image} alt={car.name} className="rounded-md" />
              <h1 className="font-medium leading-[24px] mt-[13px]">
                {car.name}
              </h1>
              <p className="text-[14px] leading-[21px] text-[#8A735C]">
                Iconic classic car with <br /> timeless style
              </p>
            </div>
          ))}
        </div>

        {/* Bottom row: 4 cars */}
        <div className="flex flex-wrap gap-4">
          {carData.slice(5).map((car) => (
            <div key={car.id} className="w-[180px]">
              <img src={car.image} alt={car.name} className="rounded-md" />
              <h1 className="font-medium leading-[24px] mt-[13px]">
                {car.name}
              </h1>
              <p className="text-[14px] leading-[21px] text-[#8A735C]">
                Iconic classic car with <br /> timeless style
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
