import { Link } from 'react-router-dom';

export default function Notfount() {
  return (
    <div className="h-screen pt-[24px]  px-[176px]">
      <img
        src="/images/landing/image1.png"
        alt="Not Found"
        className="w-full  h-[60vh] object-cover rounded-2xl"
      />
      <h1 className="text-[32px] font-bold text-center pt-[10px]">404 - Page Not Found</h1>

      <Link to={'/'}  className='w-full flex items-center justify-center  mt-[18px]' >
      <button className='py-[9px] px-[16px] bg-[#E8D9C7] cursor-pointer rounded-[10px] ' >return to home</button>
    </Link>
    </div>
  );
}
