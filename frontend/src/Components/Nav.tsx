import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
      <div className="w-full px-[40px] py-[20px] shadow-sm bg-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo and Brand Name */}
          <div className="flex items-center gap-2">
            <img
              src="/images/navimg/logo.svg"
              alt="Classic Rides Logo"
              className="w-8 h-8"
            />
            <h1 className="text-lg font-bold">Classic Rides</h1>
          </div>

          {/* Navigation Menu */}
          <ul className="flex items-center gap-6 text-sm font-medium">
              <Link to="/" className="cursor-pointer hover:text-blue-600">Home</Link>
              <Link to="/about" className="cursor-pointer hover:text-blue-600">About Us</Link>
              <Link to="/services" className="cursor-pointer hover:text-blue-600">Services</Link>
              <Link to="/contact" className="cursor-pointer hover:text-blue-600">contact</Link>


            {/* Icons */}
            <li>
              <img
                src="/images/navimg/search.svg"
                alt="Search"
                className="w-5 h-5 cursor-pointer"
              />
            </li>
            <li>
              <img
                src="/images/navimg/shop.svg"
                alt="Shopping Cart"
                className="w-5 h-5 cursor-pointer"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
