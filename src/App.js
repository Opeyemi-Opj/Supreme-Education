// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Homepage from './Components/Pages/Homepage';
import OurCEO from './Components/Pages/OurCEO';
import OurFounder from './Components/Pages/OurFounder';
import Whoweare from './Components/Pages/Whoweare';
import VirtualTour from './Components/Pages/VirtualTour';
import ContactUs from './Components/Pages/Contactus'
import Howtoapply from './Components/Pages/Howtoapply';
import Enquiry from './Components/Pages/Enquiry';
import Faqs from './Components/Pages/Faqs';
import Eyfs from './Components/Pages/Eyfs';
import Juniorschool from './Components/Pages/Juniorschool';
import Highschool from './Components/Pages/Highschool';
import Teacherscollege from './Components/Pages/Teacherscollege';
import Academiccalendar from './Components/Pages/Academiccalendar';
import Schoolcurriculum from './Components/Pages/Schoolcurriculum';
import Boardingschool from './Components/Pages/Boardingschool';
import Cocurricularactivities from './Components/Pages/Cocurricularactivities';
import Facilities from './Components/Pages/Facilities';
import NewsEvents from './Components/Pages/NewsEvents';
import Gallery from './Components/Pages/Gallery';



const App = () => {


return (
<Router>
<div className="relative">


<Header  />

{/* Routes */}
<Routes>
<Route path="/" element={<Homepage />} />
<Route path="/our-founder" element={<OurFounder />} />
<Route path="/our-ceo" element={<OurCEO />} />
<Route path="/who-we-are" element={<Whoweare />} />
<Route path="/virtual-tour" element={<VirtualTour />} />
<Route path="/contact-us" element={<ContactUs />} />
<Route path="/how-to-apply" element={<Howtoapply />} />
<Route path="/enquiry" element={<Enquiry />} />
<Route path="/faqs" element={<Faqs />} />
<Route path="/eyfs" element={<Eyfs />} />
<Route path="/junior-school" element={<Juniorschool />} />
<Route path="/high-school" element={<Highschool />} />
<Route path="/teachers-college" element={<Teacherscollege />} />
<Route path="/academic-calendar" element={<Academiccalendar />} />
<Route path="/School-curriculum" element={<Schoolcurriculum />} />
<Route path="/boarding-school" element={<Boardingschool />} />
<Route path="/co-curricular-activities" element={<Cocurricularactivities />} />
<Route path="/facilities" element={<Facilities />} />
<Route path="/news-events" element={<NewsEvents />} />
<Route path="/gallery" element={<Gallery />} />
</Routes>

<Footer />
</div>
</Router>
);
};

export default App;

