import firstm from '/images/aboutpage/firstperson.png'
import secondtm from '/images/aboutpage/secondperson.png'
import thirdtm from '/images/aboutpage/thirdperson.png'
import fourthtm from '/images/aboutpage/fourperson.png'



const ThirdSection = () => {
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

    return (

        <section className="mt-[36px]">
            <div>
            <h1 className=" text-[32px] font-bold">Meet the Team</h1>
            <p className=" mt-[16px] text-[1C140D] ">
            Our team is composed of dedicated professionals and enthusiasts who share a deep appreciation for vintage cars. From our expert mechanics who meticulously maintain and restore each vehicle to our knowledgeable customer service representatives who assist with every booking, we are united by our passion and commitment to excellence. We believe in providing personalized service, ensuring that every client's experience is seamless and unforgettable.
            </p>
            </div>

            <div className='flex gap-[30px] justify-center'>
                {teamMembers.map((member) => (
        <div key={member.id} className=" p-4 rounded ">
          <img src={member.image} alt={member.name} className="w-full h-48 object-cover rounded" />
          <h2 className="text-xl font-bold mt-2 text-center">{member.name}</h2>
          <p className=" text-[99734D] text-center">{member.job}</p>
        </div>
        ))}
            </div>
        </section>
    );
};

export default ThirdSection;