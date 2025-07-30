import { Twitter } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Facebook } from 'lucide-react';



export default function footer() {
  return (
    <div className="my-[40px]">
        <div className=" flex justify-between">
            <h1 className="99734D">Home</h1>
            <h1 className="99734D">Vehicles</h1>
            <h1 className="99734D">About us</h1>
            <h1 className="99734D">contact</h1>
        </div>
        <div className='flex justify-center mt-[24px] gap-[16px]'>
            <Twitter color='99734D'/>
            <Instagram color='99734D' />
            <Facebook color='99734D'/>
        </div>
        <h1 className=' text-center mt-[24px] text-[99734D]'>@2024 Classic Rides. All rights reserved.</h1>
    </div>
  )
}
