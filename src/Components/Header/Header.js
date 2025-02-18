import React, { useState, useEffect } from "react";
import Vector from "../../assets/images/Vector.png";
import Sms from "../../assets/images/sms.png";
import MenuIcon from "../../assets/icons/menu.svg.svg";
import EnqIcon from "../../assets/icons/information.svg";
import VisitIcon from "../../assets/icons/map.svg";
import ApplyIcon from "../../assets/icons/message-edit.svg";  
import Logo from "../../assets/images/Site-logo.png";
import { Link } from 'react-router-dom';

const Header = ({ onMenuClick }) => {

  //const [isMenuOpen, setIsMenuOpen] = useState(false);

const [isSearchOpen, setIsSearchOpen] = useState(false);
const [showFirstHeader, setShowFirstHeader] = useState(true);
const [showSecondHeader, setShowSecondHeader] = useState(false);



// Handle scroll to show/hide headers
const handleScroll = () => {
if (window.scrollY > 100) {
setShowFirstHeader(false);  // Hide the first header when scrolling
setShowSecondHeader(true);  // Show the second header when scrolling
} else {
setShowFirstHeader(true);   // Show the first header when at the top
setShowSecondHeader(false); // Hide the second header when at the top
}
};

// Add scroll event listener on mount and cleanup on unmount
useEffect(() => {
window.addEventListener("scroll", handleScroll);
return () => window.removeEventListener("scroll", handleScroll);
}, []);

return (
<section className="fixed top-0 left-0 w-full z-50">
{/* Desktop and Tablet Header - Hide when scrolling */}
{showFirstHeader && (
<div className="hidden md:flex flex-col w-full">
{/* Top Section (Contact & Search) */}
<div className="bg-white px-[5%] py-[1.5%] flex justify-between items-center">
{/* Left Section (Phone & Email) */}
<div className="flex gap-10 items-center">
  <div className="flex gap-2">
    <img src={Vector} alt="Phone Icon" className="w-5 h-5 object-contain" />
    <p className="font-raleway text-[#292D32] text-[14px] font-medium leading-[16.44px]">
      +(234) 8182984015
    </p>
  </div>
  <div className="flex gap-2">
    <img src={Sms} alt="Email Icon" className="w-5 h-5 object-contain" />
    <p className="font-raleway text-[#292D32] text-[14px] font-medium leading-[16.44px]">
      info@supremeeducation.com
    </p>
  </div>
</div>

{/* Right Section (Search & Menu) */}
<div className="flex items-center">
  {/* Search Bar */}
  <div className="relative flex items-center pr-4">
    <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="p-2 rounded-full hover:bg-gray-200">
      <svg className="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
      </svg>
    </button>

    {/* Expanding Search Input */}
    <input type="text" placeholder="Search..." 
      className={`absolute right-0 top-0 h-10 max-w-0 px-4 border border-gray-300 rounded-full transition-all duration-300 ${isSearchOpen ? "max-w-[120px] opacity-100 px-4" : "max-w-0 opacity-0 px-0"}`}
    />
  </div>


  <div className="border-l-2 border-solid border-black pl-4 ml-3">
{/* Menu Icon */}
<button onClick={onMenuClick} className="cursor-pointer">
        <img src={MenuIcon} alt="Menu" className="[100px] h-[30px]" />
      </button>



  </div>
</div> 
</div> 

{/* Centered Logo Section */}
<div className="flex justify-center mt-[-85px] bg-transparent md:ml-0 tablet:ml-[25%]">
<Link to="/"> 
  <img src={Logo} alt="Site Logo" className="w-[200px] h-[200px] md:w-[130px] md:h-[130px] sm:w-[120px] sm:h-[120px] cursor-pointer" />
</Link>
</div>
</div>
)}

{/* Second Header - Sticky on Scroll */}
{showSecondHeader && (
<div className="hidden md:flex w-full bg-white sticky top-0 h-[107px] shadow-md">
{/* Two Equal Columns */}
<div className="w-full flex justify-between px-[5%] py-[1.5%]">
{/* Left Column */}
<div className="flex items-center gap-4 w-1/2">
<Link to='/'><img src={Logo} alt="Site Logo" className="w-[86px] h-[94px]" /></Link>
</div>

{/* Right Column */}
<div className="flex items-center justify-end gap-6 w-1/2">
<div className="flex gap-2 items-center">
    <img src={EnqIcon} alt="Phone Icon" className="w-5 h-5 object-contain" />
    <Link to='/enquiry'>
    <p className="font-raleway text-[#292D32] text-[14px] font-medium leading-[16.44px]">
    Inquire
    </p>
    </Link>
  </div>

  <div className="flex gap-2 items-center">
    <img src={VisitIcon} alt="Phone Icon" className="w-5 h-5 object-contain" />
    <Link to='/virtual-tour'>
    <p className="font-raleway text-[#292D32] text-[14px] font-medium leading-[16.44px]">
    Visit
    </p>
    </Link>
    
  </div>

  <div className="flex gap-2 items-center">
    <img src={ApplyIcon} alt="Phone Icon" className="w-5 h-5 object-contain" />
    <Link to='/how-to-apply#'>
    <p className="font-raleway text-[#292D32] text-[14px] font-medium leading-[16.44px]">
    Apply 
    </p>
    </Link>
  </div>

<div className="flex items-center">
  {/* Search Bar */}
  <div className="relative flex items-center pr-4">
    <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="p-2 rounded-full hover:bg-gray-200">
      <svg className="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
      </svg>
    </button>

    {/* Expanding Search Input */}
    <input type="text" placeholder="Search..." 
      className={`absolute right-0 top-0 h-10 max-w-0 px-4 border border-gray-300 rounded-full transition-all duration-300 ${isSearchOpen ? "max-w-[120px] opacity-100 px-4" : "max-w-0 opacity-0 px-0"}`}
    />
  </div>

 <div className="flex justify-between items-center p-4 border-l-2 border-solid border-black ml-3">
      {/* Menu Icon */}
      <button onClick={onMenuClick} className="cursor-pointer">
        <img src={MenuIcon} alt="Menu" className="[100px] h-[30px]" />
      </button>

</div>
</div>

</div>
</div>
</div>
)}


{/* Mobile Header */}
<div className="flex md:hidden px-5 py-3 items-center justify-between bg-white">
{/* Left Section (Logo) */}
<div className="flex items-center">
<Link to='/'>
<img src={Logo} alt="Site Logo" className="w-[70px] h-[70px]" />
</Link>
</div>

{/* Right Section (Search & Menu) */}
<div className="flex items-center">
{/* Search Icon */}
<button onClick={() => setIsSearchOpen(!isSearchOpen)} className="p-2 rounded-full hover:bg-gray-200">
<svg className="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
</svg>
</button>

{/* Menu Icon */}
<div className="border-l-2 border-solid border-black pl-4 ml-3">
<img src={MenuIcon} alt="Menu" className="w-[40px] h-[40px]" />
</div>
</div>
</div>
</section>
);
};

export default Header;
