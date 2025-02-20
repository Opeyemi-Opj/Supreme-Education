import React, { useState, } from 'react'; // ✅ Add useState, useEffect and useRef
import { Link } from 'react-router-dom';
//import ReactDOM from "react-dom";
import bg1 from '../../assets/images/image3.png';
import bg2 from '../../assets/images/image6.png';
import bg3 from '../../assets/images/image-8.png';
import CloseIcon from '../../assets/icons/close.svg.svg'; // Import close icon

const PopupMenu = ({ onClose }) => {  
  
  


  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

   const titles = [
     "About Supreme",
     "Admissions",
     "Academics",
     "Student Life",
     "Media",
   ];
   const contentLinks = [
     [
       { text: "Our Founder", path: "/our-founder" },
       { text: "Our CEO", path: "/our-ceo" },
       { text: "Who we are", path: "/who-we-are" },
       { text: "Virtual Tour", path: "/virtual-tour" },
       { text: "Contact us", path: "/contact" },
     ],
     [
       { text: "How to Apply", path: "/how-to-apply" },
       { text: "Registration form", path: "/registration-form" },
       { text: "SMC registration form", path: "/smc-registration-form" },
       { text: "Enquiry", path: "/enquiry" },
       { text: "FAQs", path: "/faqs" },
     ],

     [
       { text: "EYFs", path: "/eyfs" },
       { text: "Junior School", path: "/junior-school" },
       { text: "High School", path: "/high-school" },
       { text: "Teachers College", path: "/teachers-college" },
       { text: "Academic Calendar", path: "/academic-calendar" },
       { text: "School Curriculum", path: "/school-curriculum" },
     ],

     [
       { text: "Boarding School", path: "/boarding-school" },
       { text: "Co-curricular Activities", path: "/co-curricular-activities" },
       { text: "Facilities", path: "/facilities" },
     ],
     [
       { text: "News & Events", path: "/news-events" },
       { text: "Gallery", path: "/gallery" },
     ],
   ];

  return (
    <div className='fixed inset-0 w-full shadow-md bg-white'>
        <div className='grid grid-cols-3 gap-2'>
            <div className='bg-[#F6F6F6] p-5 space-y-6 py-[10%]'>
            <div className='bg-cover bg-center h-[159.33px] flex justify-center items-center rounded-lg ' style={{ backgroundImage: `url(${bg1})` }}>
            <button className="flex font-raleway text-[#FFFFFF] text-[14px] font-medium leading-[16.44px] 
        border border-[#C6C5C5] rounded-[8px] px-[25px] py-[15px] items-center gap-5 transition duration-300
        hover:bg-white hover:text-[#006011] hover:border-[#006011] group">Enquire
        <svg className="w-[31px] h-[8px] transition duration-300 fill-current text-white group-hover:text-[#006011]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 8">
    <   path d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.84171 30.3536 3.64645L27.1716 0.464466C26.9763 0.269204 26.6597 0.269204 26.4645 0.464466C26.2692 0.659728 26.2692 0.976311 26.4645 1.17157L29.2929 4L26.4645 6.82843C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.7308 26.9763 7.7308 27.1716 7.53553L30.3536 4.35355ZM0 4.5H30V3.5H0V4.5Z" fill="currentColor"/>
        </svg>
        </button>
        </div>

        <div className='bg-cover bg-center h-[159.33px] flex justify-center items-center rounded-lg ' style={{ backgroundImage: `url(${bg2})` }}>
            <button className="flex font-raleway text-[#FFFFFF] text-[14px] font-medium leading-[16.44px] 
        border border-[#C6C5C5] rounded-[8px] px-[25px] py-[15px] items-center gap-5 transition duration-300
        hover:bg-white hover:text-[#006011] hover:border-[#006011] group">Apply
        <svg className="w-[31px] h-[8px] transition duration-300 fill-current text-white group-hover:text-[#006011]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 8">
    <   path d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.84171 30.3536 3.64645L27.1716 0.464466C26.9763 0.269204 26.6597 0.269204 26.4645 0.464466C26.2692 0.659728 26.2692 0.976311 26.4645 1.17157L29.2929 4L26.4645 6.82843C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.7308 26.9763 7.7308 27.1716 7.53553L30.3536 4.35355ZM0 4.5H30V3.5H0V4.5Z" fill="currentColor"/>
        </svg>
        </button>
        </div>

        <div className='bg-cover bg-center h-[159.33px] flex justify-center items-center rounded-lg ' style={{ backgroundImage: `url(${bg3})` }}>
            <button className="flex font-raleway text-[#FFFFFF] text-[14px] font-medium leading-[16.44px] 
        border border-[#C6C5C5] rounded-[8px] px-[25px] py-[15px] items-center gap-5 transition duration-300
        hover:bg-white hover:text-[#006011] hover:border-[#006011] group">Visit
        <svg className="w-[31px] h-[8px] transition duration-300 fill-current text-white group-hover:text-[#006011]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 8">
    <   path d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.84171 30.3536 3.64645L27.1716 0.464466C26.9763 0.269204 26.6597 0.269204 26.4645 0.464466C26.2692 0.659728 26.2692 0.976311 26.4645 1.17157L29.2929 4L26.4645 6.82843C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.7308 26.9763 7.7308 27.1716 7.53553L30.3536 4.35355ZM0 4.5H30V3.5H0V4.5Z" fill="currentColor"/>
        </svg>
        </button>
        </div>
        </div>

        <div className='content-center pl-10'>
        <div className=" border-r-2 border-[#C4C4C4] space-y-[12%]">
        {titles.map((title, index) => (
          <h2
            key={index}
            className={`font-cormorant text-[32px] font-bold leading-[38.75px] cursor-pointer transition duration-300 ${
              index === activeIndex ? "text-[#DD3333]" : "text-[#292D32]"
            }`}
            onMouseEnter={() => setActiveIndex(index)}
            onClick={() => setActiveIndex(index)}
          >
            {title}
          </h2>
        ))}
      </div>
      </div>
            <div className=' pt-10 '>
            <div className='flex gap-2 justify-start pl-5'>
            <button className='font-raleway text-[#FFFFFF] text-[14px] font-medium leading-[16.44px] bg-[#006011] border border-[#C6C5C5] rounded-[8px] px-[24px] py-[12px] items-center gap-5 transition duration-300
            hover:bg-[#C8352E] '>Portal</button>
         {/* Search Bar */}
        <div className='relative flex items-center pr-[5%]'>
              {/* Search Icon */}
              <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="p-2 rounded-full hover:bg-gray-200">
                <svg
                  className="w-6 h-6 text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"/>
                </svg>
              </button>

              {/*Expanding Search Input*/}
              <input
                type="text"
                placeholder="Search..."
                className={`absolute right-0 top-0 h-10 max-w-0 px-4 border border-gray-300 rounded-full transition-all duration-300 ${
                  isSearchOpen
                    ? "max-w-[130px] opacity-100 px-4"
                    : "max-w-0 opacity-0 px-0"
                }`}/>
              </div>
        
          {/* Side Menu */}
        <div className='border-l-2 border-[#1E1E1E]  content-center pl-5'>
          {/* Close Button */}
        <button onClick= {onClose} className="">
          <img src={CloseIcon} alt="Close" className="w-[100px] h-[30px] cursor-pointer" />
        </button>
        
        </div>
      
        </div>

        <div className="pl-4">
        {contentLinks.map((links, index) => (
          <div key={index} className={`mt-[30px] space-y-[8%] ${ index === activeIndex ? "block" : "hidden" }`}>
            {links.map((link, idx) => (
              <p key={idx} className="w-[235px] rounded-md font-raleway text-[18px] font-medium leading-[21.13px] px-5 py-3 transition duration-300 text-[#292D32] hover:bg-[#E9FBE0]" >
                <Link to={link.path}>{link.text}</Link></p>
            ))}
          </div>
        ))}
      </div>
        </div> 
        </div>
    </div>

  

  )
}

export default PopupMenu
