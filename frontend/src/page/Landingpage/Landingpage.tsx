import { Search, CarFront, Heart, UsersRound } from "lucide-react";
import { FaStar } from "react-icons/fa";
import car1 from "/images/landing/car1.svg";
import car2 from "/images/landing/car2.svg";
import car3 from "/images/landing/car3.svg";
import Nav from "../../Components/Nav";
import Footer from "@/Components/Footer";

// Move teamMembers array outside component to avoid runtime errors
const teamMembers = [
  {
    icon: CarFront,
    id: 1,
    name: "Passion",
    job: "We are driven by our love for vintage cars and their history. for vintage cars ",
  },
  {
    icon: Heart,
    id: 2,
    name: "Heritage",
    job: "We are committed to preserving the legacy of classic automobiles.",
  },
  {
    icon: UsersRound,
    id: 3,
    name: "Customer Focus",
    job: "We prioritize our customers' satisfaction and strive to exceed their expectations.",
  },
];

const testimonials = [
  {
    name: "Sophia Carter",
    date: "May 15, 2024",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    message:
      "Renting the 1957 Roadster was a dream come true! The car was in perfect condition, and the team at Classic Rides made the whole process seamless. I highly recommend them for anyone looking for a unique and memorable experience.",
  },
  {
    name: "James Anderson",
    date: "June 2, 2024",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    message:
      "I rented the 1962 Sedan for a weekend getaway, and it was fantastic. The car was comfortable and stylish, and it turned heads everywhere we went. The customer service was excellent, and I would definitely rent from them again.",
  },
  {
    name: "Emily Nguyen",
    date: "July 10, 2024",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    message:
      "The 1968 Sports Coupe was an absolute blast to drive! It handled beautifully, and the sound of the engine was exhilarating. Classic Rides provided a top-notch experience, and I can't wait to rent another car from them.",
  },
];

export default function Landingpage() {
  return (
    <>
      <Nav />
      <div className="px-4 md:px-[176px]">
        {/* Hero Section */}
        <div className="relative w-full flex justify-center pb-14 mt-[36px]">
          <img
            src="/images/landing/image1.png"
            alt="Car"
            className="w-full max-w-[1280px] h-[480px] object-cover rounded-[12px]"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 rounded-[12px]">
            <h1 className="text-white font-extrabold text-[28px] sm:text-[36px] md:text-[48px] leading-tight">
              Experience the Golden Age of <br /> Motoring
            </h1>
            <p className="text-white text-[16px] sm:text-[18px] leading-[28px] max-w-[950px] mt-4 px-4 drop-shadow-md">
              Rent a meticulously restored classic car and relive the thrill of
              a bygone era. Our collection features iconic models from the 1950s
              to the 1970s, perfect for special occasions, weekend getaways, or
              simply indulging your passion for automotive history.
            </p>

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

        <div className="max-w-7xl mx-auto py-8 min-h-screen">
          {/* Search Bar */}
          <div className="flex items-center bg-[#f5f1ec] text-[#7b4f2c] px-4 py-3 rounded-[12px] w-full max-w-xl mx-auto mb-8">
            <Search size={20} className="text-[#7b4f2c]" />
            <input
              type="text"
              placeholder="Search for vintage cars or rental options"
              className="bg-transparent outline-none placeholder-[#7b4f2c] w-full text-sm sm:text-base pl-2"
            />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
            Our Fleet
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[car1, car2, car3].map((src, idx) => (
              <div key={idx} className="rounded-lg">
                <img
                  src={src}
                  alt="1957 Roadster"
                  className="w-full h-auto rounded-md mb-4"
                />
                <h1 className="text-lg font-bold mb-2">1957 Roadster</h1>
                <p className="text-[14px] text-[#99734D]">
                  Experience the thrill of open-top driving in <br /> this
                  iconic American classic.
                </p>
              </div>
            ))}
          </div>

          <div>
            <h1 className="font-bold text-[22px] leading-[28px] my-[30px]">
              Why Choose US?
            </h1>

            <h1 className="font-black text-[36px] leading-[45px] tracking-[-1px]">
              Your Journey, Our Passion
            </h1>

            <p className="mt-[16px]">
              At Classic Rides, we are passionate about preserving automotive
              history and sharing the joy of <br /> driving these timeless
              machines. Our team of experts ensures that every vehicle is in
              pristine <br />
              condition, ready for your next adventure.
            </p>

            <div className="mt-[40px]">
              <h1 className="text-[26px] font-bold">our value</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                {teamMembers.map((member) => (
                  <div
                    key={member.id}
                    className="border p-4 rounded border-[#E8DBCF]"
                  >
                    <member.icon size={32} />
                    <h2 className="text-xl font-bold mt-2">{member.name}</h2>
                    <p className="text-[#e4b488]">{member.job}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mb-12">
          <h1 className="text-[22px] font-bold leading-[28px] mb-4">
            Customer Testimonials
          </h1>

          <div className="flex flex-col gap-8 mt-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="">
                <div className="flex gap-3 mb-2">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-neutral-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-neutral-500">
                      {testimonial.date}
                    </p>
                  </div>
                </div>

                <div className="flex text-orange-600 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <p className="text-sm text-neutral-800">
                  {testimonial.message}
                </p>
              </div>
            ))}
          </div>
        </div>

        <h1 className="text-[36px] leadig-[45px] tracking-[-1px] font-black text-center">
          Ready to make History?
        </h1>
        <p className="text-center">
          Browse our collection and reserve your dream car for an unforgettable
          experience.
        </p>
        <div className="flex justify-center mt-8">
          <button className=" bg-[#CF700F] py-3 px-6 rounded-3xl text-[#FCFAF7] leading-6 tracking-[0px] ">
            Book Your classic Ride today
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
}
