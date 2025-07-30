import Nav from '../../Components/Nav';
import Footer from '../../Components/footer';
import Contactus from './contactus';
import FirstSection from './first-section';
import SecondSection from './second-section';
import ThirdSection from './third-section';

export default function Aboutus() {
  return <>
      <Nav/>
  <div className=" px-[160px] ">
   <FirstSection/>
   <SecondSection/>
   <ThirdSection/>
   <Contactus/>
   <Footer/>
  </div>
  </>
}
