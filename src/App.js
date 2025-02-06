import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Homepage from './Components/Pages/Homepage';
import OurCEO from './Components/Pages/OurCEO';
import OurFounder from './Components/Pages/OurFounder';
import Whoweare from './Components/Pages/Whoweare';
import VirtualTour from './Components/Pages/VirtualTour';
import ContactUs from './Components/Pages/Contactus'

const App = () => {
  return (
    <Router>
      <div className="relative">
        <Header />
        
        {/* Routes */}
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/our-founder" element={<OurFounder />} />
        <Route path="/our-ceo" element={<OurCEO />} />
        <Route path="/who-we-are" element={<Whoweare />} />
        <Route path="/virtual-tour" element={<VirtualTour />} />
        <Route path="/contact-us" element={<ContactUs />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;

