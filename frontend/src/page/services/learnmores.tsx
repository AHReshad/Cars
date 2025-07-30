import car1 from '/images/services/first.png'
import car2 from '/images/services/second.png'
import car3 from '/images/services/third.png'




const items = [
    {
        h1: 'Classic Car Rental for Special Events',
        p: 'Make your special occasion truly memorable with our classic car rental service. Perfect for weddings, anniversaries, and other celebrations, our vintage cars add a touch of elegance and nostalgia to any event.',
        image: car1,
        id: 1,
    },
        {
        h1: 'Self-Drive Tours',
        p: 'Experience the thrill of driving a classic car with our self-drive tour packages. Choose from a selection of iconic vintage vehicles and explore scenic routes at your own pace.',
        image: car2,
        id: 2,
    },
      {
        h1: 'Chauffeur-Driven Tours',
        p: 'Relax and enjoy the ride with our chauffeur-driven tour service. Our professional drivers will take you on a journey through time, showcasing the  and history of our vintage cars.',
        image: car3,
        id: 3,
    }
]


export default function Learnmores() {
  return (
    <>
    <div className='mt-[40px] mb-[24px]'>
        <h1 className=' text-[32px] font-bold'>Rental Packages</h1>
    </div>

    {items.map((member) => (
      
        <div key={member.id} className="border p-4 rounded border-[#E8DBCF] mt-[26px] flex gap-2">
        <div className='content-start '>
          <h1 className="text-xl font-bold mt-2">{member.h1}</h1>
          <h2  className=' text-[#99734D] pt-[10px]'>{member.p}</h2>
          <button className="px-[18px] cursor-pointer py-[5px] rounded-[4px] mt-[16px] bg-[#F2EDE8]">Learn more</button>
          </div>
          <img src={member.image} alt="" />
        </div>
      ))}
    </>
  )
}
 