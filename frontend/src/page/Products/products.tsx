import { Search } from "lucide-react";
import img1 from "/images/imgproduct/img1.svg";
export default function Products() {
  return (
    <div className="px-[176px] pt-[36px]">
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

        <div className="mt-[20px] flex gap-[12px]">
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

      <div>
        <h1 className="font-bold text-[18px] leading-[23px] mt-[20px]">
          Available Cars
        </h1>
      </div>

      <div>
        <div>
          <img src={img1} alt="" />
        </div>
      </div>
    </div>
  );
}
