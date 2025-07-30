import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Landingpage from './page/Landingpage/Landingpage';
import Aboutus from '../../frontend/src/page/Aboutus/Aboutus.tsx';
import Services from './page/services/Services.tsx';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path='/services' element={<Services/>}/>
      </Routes>
    </Router>
  );
}
