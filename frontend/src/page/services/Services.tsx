import Nav from "../../Components/Nav"
import Conditions from "./conditions"
import Learnmores from "./learnmores"

export default function Services() {
  return (
    <>
    <Nav/>
    <div className="px-[176px]">
      <div className="mt-[36px]">
        <h1 className="text-[32px] font-bold">Our Services</h1>
       <p className="text-[#99734D]">Explore our range of vintage car rental services, designed to provide you with an unforgettable experience. From classic car rentals for special events to self-drive tours, we offer a variety of options to suit your needs.</p>
     <Learnmores/> 
     <Conditions/>
      </div>
    </div>
    </>
  )
}
