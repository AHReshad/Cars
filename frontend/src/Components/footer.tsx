import { Twitter } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';



export default function footer() {
  return (
    <div className="my-[40px]">
        <div className=" flex justify-between">
            <Link className="text-[#99734D] " to={'/'}>Home</Link>
            <Link className="text-[#99734D] " to={'/product'}>Vehicles</Link>
            <Link className="text-[#99734D] " to={'/about'}>About us</Link>
            <Link className="text-[#99734D] " to={'/contact us'}>contact</Link>
        </div>
        <div className='flex justify-center mt-[24px] gap-[6px]'>
            <Twitter color='#99734D'/>
            <Instagram color='#99734D' />
            <Facebook color='#99734D'/>
        </div>
        <h1 className=' text-center mt-[24px] text-[#99734D]'>@2024 Classic Rides. All rights reserved.</h1>
    </div>
  )
}
