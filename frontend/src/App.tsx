import Contactus from "./page/contact us/contactus.tsx";
import Products from "./page/Products/products.tsx";
import Nav from "./Components/Nav.tsx";
<<<<<<< HEAD

import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Landingpage from './page/Landingpage/Landingpage';
import Aboutus from '../../frontend/src/page/Aboutus/Aboutus.tsx';
import Services from './page/services/Services.tsx';
import Create from './page/create-yours/Create.tsx';
import Notfount from "./page/404/Notfount.tsx";
import Faqs from "./page/Faqs/Faqs.tsx";

=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./page/Landingpage/Landingpage";
import Aboutus from "../../frontend/src/page/Aboutus/Aboutus.tsx";
import Services from "./page/services/Services.tsx";
import Create from "./page/create-yours/Create.tsx";
import Footer from "./Components/Footer.tsx";
import { AccordionDemo } from "./page/Faq/Faq.tsx";
>>>>>>> 236daf30e79d47bddb85cf71595e82b6e849bf3d

export default function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/products" element={<Products />} />
        <Route path='/services' element={<Services/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path="*" element={<Notfount />} />
        <Route path="/services" element={<Services />} />
        <Route path="/create" element={<Create />} />
<<<<<<< HEAD
        <Route path="/Faqs" element={<Faqs/>}/>
=======
        <Route path="/Faq" element={<AccordionDemo />} />
>>>>>>> 236daf30e79d47bddb85cf71595e82b6e849bf3d
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}
