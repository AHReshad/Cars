import { useEffect, useState } from "react";
import axios from "axios";
import { Search } from "lucide-react";
import Footer from "../../Components/Footer";

interface Product {
  _id: string;
  myFile: string;
  name: string;
  description: string;
}

const skeletonItems = new Array(8).fill(0);

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/images");
        setProducts(res.data);
      } catch (error) {
        console.error("خطا در گرفتن محصولات:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="px-[176px] pt-[36px]">
      {/* Header and Search */}
      <div>
        <h1 className="font-bold text-[32px] leading-[40px]">
          Choose Your Classic Ride
        </h1>
        <p className="text-[14px] leading-[21px]">
          Select from our curated collection of vintage cars for an unforgettable experience.
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
          <button className="px-[16px] py-[5px] bg-[#F2EDEB] rounded-[16px] cursor-pointer">All</button>
          <button className="px-[16px] py-[5px] bg-[#F2EDEB] rounded-[16px] cursor-pointer">Convertibles</button>
          <button className="px-[16px] py-[5px] bg-[#F2EDEB] rounded-[16px] cursor-pointer">Sedans</button>
          <button className="px-[16px] py-[5px] bg-[#F2EDEB] rounded-[16px] cursor-pointer">Sports Cars</button>
        </div>
      </div>

      {/* Main Section */}
      <div className="mt-[25px]">
        <h1 className="font-bold text-[18px] leading-[23px]">Available Cars</h1>
      </div>

      <div className="mt-[16px] space-y-6">
        {/* Loading Skeleton */}
        {loading ? (
          <>
            <div className="flex flex-wrap gap-4">
              {skeletonItems.map((_, index) => (
                <div
                  key={index}
                  className="w-[180px] animate-pulse"
                >
                  <div className="h-[120px] bg-gray-300 rounded-md mb-3" />
                  <div className="h-[20px] bg-gray-300 rounded mb-2 w-3/4" />
                  <div className="h-[16px] bg-gray-200 rounded w-full" />
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Top row */}
            <div className="flex flex-wrap gap-4">
              {products.slice(0, 5).map((car) => (
                <div key={car._id} className="w-[180px]">
                  <img src={car.myFile} alt={car.name} className="rounded-md h-[120px] object-cover w-full" />
                  <h1 className="font-medium leading-[24px] mt-[13px]">
                    {car.name}
                  </h1>
                  <p className="text-[14px] leading-[21px] text-[#8A735C]">
                    {car.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom row */}
            <div className="flex flex-wrap gap-4">
              {products.slice(5).map((car) => (
                <div key={car._id} className="w-[180px]">
                  <img src={car.myFile} alt={car.name} className="rounded-md h-[120px] object-cover w-full" />
                  <h1 className="font-medium leading-[24px] mt-[13px]">
                    {car.name}
                  </h1>
                  <p className="text-[14px] leading-[21px] text-[#8A735C]">
                    {car.description}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}
