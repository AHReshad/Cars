import firstm from '../../../public/images/aboutpage/firstperson.png'
import secondtm from '../../../public/images/aboutpage/secondperson.png'
import thirdtm from '../../../public/images/aboutpage/thirdperson.png'
import fourthtm from '../../../public/images/aboutpage/fourperson.png'

    const teamMembers = [
  {
    id: 1,
    name: "Amelia Hayes",
    job: "Co-Founder & CEO",
    image: firstm
  },
  {
    id: 2,
    name: "Ethan Carter",
    job: "Co-Founder & COO",
    image: secondtm
  },
  {
    id: 3,
    name: "Sophia Bennett",
    job: "Head of Customer Relations",
    image: thirdtm
  },
  {
    id: 4,
    name: "Oliver Reed",
    job: "Chief Mechanic",
    image: fourthtm
  }
];

export default function Fourthsection() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {teamMembers.map((member) => (
        <div key={member.id} className="border p-4 rounded shadow">
          <img src={member.image} alt={member.name} className="w-full h-48 object-cover rounded" />
          <h2 className="text-xl font-bold mt-2">{member.name}</h2>
          <p className="text-[#99734D]">{member.job}</p>
        </div>
      ))}
    </div>
  );
}
