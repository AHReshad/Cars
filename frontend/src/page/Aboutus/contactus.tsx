import { CarFront, icons } from 'lucide-react';
import { Heart } from 'lucide-react';
import { UsersRound } from 'lucide-react';
import { ShieldCheck } from 'lucide-react';




    const teamMembers = [
  {
    icon: CarFront ,
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
  {
    icon: ShieldCheck,
    id: 4,
    name: "Safety",
    job: "We ensure the highest standards of safety and maintenance for all our vehicles.",
  }
];

export default function Fourthsection() {
  return (
    <div className='mt-[40px]'>
        <h1 className='text-[26px] font-bold'>our value</h1>
    <div className="grid grid-cols-4 gap-4 pt-4">
      {teamMembers.map((member) => (
        <div key={member.id} className="border p-4 rounded border-[E8DBCF] ">
       <h1>{<member.icon size={32} />}</h1>
          <h2 className="text-xl font-bold mt-2">{member.name}</h2>
          <p className="text-[E8DBCF]">{member.job}</p>
        </div>
      ))}
    </div>

    <div className='mt-[40px]'>
      <h1 className='text-[26px] font-bold'>Contact us</h1>
      <p>If you have any questions or would like to learn more about our services, please don't hesitate to contact us. Our team is always ready to assist you and help you find the perfect vintage car for your next adventure.</p>
      <button className='px-[16px] py-[9px] bg-[EB8012] rounded-2xl mt-[21px]'> Get in Touch</button>
    </div>

    </div>
  );
}
