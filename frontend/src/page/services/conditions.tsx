import Footer from '../../Components/Footer'
import car from '/images/landing/car1.svg'
import car2 from '/images/services/firstone.png'
import car3 from '/images/services/secondone.png'




export default function Conditions() {
  return (<>
    <div className="mt-[20px]">
        <h1 className="text-[32px] font-bold mb-[5px]">Terms and Conditions</h1>
        <p>Please review our terms and conditions before booking a rental. Our rental agreements include details on insurance, security deposits, mileage limits, and cancellation policies. We strive to provide a transparent and hassle-free rental experience for all our customers.</p>
    </div>
    <div>
        <h1 className="text-[32px] font-bold mb-[5px] mt-[20px]">Vehicle Selection</h1>
        <div className='flex justify-center gap-[20px]'>
            <img className='w-[350px]' src={car} alt="" />
            <img className='w-[350px]' src={car2} alt="" />
            <img className='w-[350px]' src={car3} alt="" />
        </div>
        <p className='mt-[5px]'>Our fleet includes a variety of meticulously maintained vintage cars, each with its own unique charm and history. From classic convertibles to elegant sedans, we have the perfect vehicle to match your style and preferences.</p>
    </div>
    <Footer/>
    </>
  )
}
