import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom'; // ✅ Correct Import
import Image1 from '../../assets/images/imageslider1.png'
import Image2 from '../../assets/images/imageslider2.png';
import Image3 from '../../assets/images/imageslider3.png';
import Image4 from '../../assets/images/Imageslider4.png';
import Image5 from '../../assets/images/imageslider5.png';
import Image6 from '../../assets/images/Vector1.png';
import Image7 from '../../assets/images/StImages.png';
import Image8 from '../../assets/images/Ftimages.png';
import Image9 from '../../assets/images/TdImage.png';
import Image10 from '../../assets/images/SdnewImage.png';
import Image11 from '../../assets/images/NewImage.png'; 
import Image12 from '../../assets/images/building-3.png'; 
import Image13 from '../../assets/images/document-text.png';
import Image14 from '../../assets/images/teacher.png';
import Image15 from '../../assets/images/people.png';
import Image16 from '../../assets/images/Left.png'; 
import Image17 from '../../assets/images/Image(5).png'; 
import Image18 from '../../assets/images/Right.png'; 
import Image19 from '../../assets/images/Textwrap.png';
import Image20 from '../../assets/images/Textwrap(1).png';
import Image21 from '../../assets/images/export.png';
import CustomLeftIcon from '../../assets/icons/VectorLeft.svg'; // Your custom left arrow icon 
import CustomRightIcon from '../../assets/icons/VectorRight.svg'; // Your custom right arrow icon
import CustomDotIcon from '../../assets/icons/ert-dot.svg'; // Your custom dot icon*/
import Footerfl from '../../assets/images/facebook.png'
import  bg1  from '../../assets/images/image13.png';
import  bg2  from '../../assets/images/image57.png';
import  bg3  from '../../assets/images/image56.png';
import  bg4  from '../../assets/images/image69.png'; 
import  bg5  from '../../assets/images/image65.png'; 
import  bg6  from '../../assets/images/image67.png';
import  bg7  from '../../assets/images/image68.png';
import  bg8  from '../../assets/images/image89.png';
import  bg9  from '../../assets/images/image18.png';
import  bg10  from '../../assets/images/Image.png';
import  bg11  from '../../assets/images/image55.png';
import  bg12  from '../../assets/images/image90.png';
import  bg13  from '../../assets/images/Newimage55(1).png';



const slides = [
  { url: Image1 },
  { url: Image2 },
  { url: Image3 },
  { url: Image4 },
  { url: Image5 },
];

const Homepage = () => {

  
   useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top when page loads
    }, []);



  const [activeTab, setActiveTab] = useState("latestNews");

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

 

  return (
    <div className='w-full'>
      {/* Slider*/}
      <div className="relative group w-full max-w-[1440px] h-[50vh] sm:h-[50vh] md:h-[60vh] lg:h-[820px] m-auto">
  {/* ✅ Image Background */}
  <div
    style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
    className="w-full h-full bg-center bg-cover duration-500"
  ></div>

  {/* ✅ Arrows - Positioned 5% (Mobile) & 10% (Desktop) */}
  <div className="absolute bottom-[15%] sm:bottom-[15%] md:bottom-[15%] lg:bottom-[15%] right-5 md:right-10 flex items-center gap-2">
    {/* Left Arrow */}
    <div
      className="bg-black/20 text-white rounded-full p-2 cursor-pointer flex justify-center items-center"
      onClick={prevSlide}
    >
      <img src={CustomLeftIcon} alt="Left Arrow" className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8" />
    </div>

    {/* Right Arrow */}
    <div
      className="bg-black/20 text-white rounded-full p-2 cursor-pointer flex justify-center items-center"
      onClick={nextSlide}
    >
      <img src={CustomRightIcon} alt="Right Arrow" className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8" />
    </div>
  </div>

  {/* ✅ Dots - Positioned 5% (Mobile) & 10% (Desktop) */}
  <div className="absolute bottom-[5%] sm:bottom-[5%] md:bottom-[10%] lg:bottom-[7%] right-5 md:right-10 flex gap-2 bg-black/50 p-2 rounded-lg">
    {slides.map((_, slideIndex) => (
      <div
        key={slideIndex}
        onClick={() => goToSlide(slideIndex)}
        className={`cursor-pointer ${currentIndex === slideIndex ? "opacity-100" : "opacity-50"}`}
      >
        <img src={CustomDotIcon} alt="Dot Icon" className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5" />
      </div>
    ))}
  </div>

  {/* ✅ Title - Positioned 5% (Mobile) & 10% (Desktop) */}
  <div className="absolute bottom-[5%] sm:bottom-[5%] md:bottom-[10%] lg:bottom-[5%] left-4 sm:left-6 md:left-10 lg:left-20">
    <h1 className="text-[24px] sm:text-[28px] md:text-[48px] lg:text-[88px] leading-[1.1] font-cormorant text-white font-bold">
      A Place of Care <br /> and Excellence
    </h1>
  </div>
</div>



      
        <div className='px-[5%] py-[5%]'>
        <div className='text-center space-y-[3%]'>
             <h1 className='font-cormorant text-[#292D32] text-[72px] font-bold leading-[87.19px] '>Welcome to Supreme</h1>
             <p class="font-raleway text-[#292D32] text-[18px] font-medium leading-[40px] pl-[17%] pr-[17%]">Supreme Education Foundation School is a centre of excellence designed to provide world-class education in an exciting learning environment for students between the ages of 3 months to 18 years. </p> 
             <Link to="/our-founder">
  <button className='font-raleway text-[#FFFFFF] text-[14px] font-medium leading-[16.44px] 
    bg-[#006011] border border-[#C6C5C5] rounded-[8px] px-[24px] py-[12px] items-center gap-5 transition duration-300
    hover:bg-[#C8352E]'>
    Learn more
  </button>
</Link>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-[7%] sm:mx-auto md:mx-0">
  <img src={Image6} alt="/" className="w-[150px] sm:w-[180px] md:w-[200px] h-auto sm:h-[220px] md:h-[242px] mt-[-100px] sm:mt-[-150px] md:mt-[-200px]" />
  <img src={Image7} alt="/" className="w-[280px] sm:w-[320px] md:w-[360px] h-auto sm:h-[200px] md:h-[226px]" />
  <img src={Image8} alt="/" className="w-[250px] sm:w-[290px] md:w-[313px] h-auto sm:h-[280px] md:h-[316px]" />
</div>


<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-[3%]">
  <img src={Image9} alt="/" className="w-[392px] h-[238px]" />
  <img src={Image10} alt="/" className="w-[375px] h-316px]" />
  <img src={Image11} alt="/" className="w-[464px] h-[238px]" />
</div>
</div>

        <div className=' bg-[#326F14] px-[5%] py-[5%]'>  
        <div className="flex flex-col gap-20  mb-20 sm:flex-row">
        <div className='w-[439px] h-[422px] rounded-md sm:w-1/2 '>
        <h1 className='font-cormorant text-[#FFFFFF] text-[70px] font-bold leading-[87.19px]'>A lifetime learning environment</h1>
        <p className='font-raleway text-[#E5E5E5] text-[18px] font-medium leading-[40px] px-[]'>Your child will embark on an exciting journey with an Alex education. She will excitedly arrive at school at three, carrying her bag. She will be begging for her own space when she is twelve. She'll take on the world at eighteen.</p>
       </div>

       <div className="w-[439px] h-[422px] rounded-md sm:w-1/2 text-center grid place-items-center group overflow-hidden relative"
     style={{ backgroundImage: `url(${bg1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
     
  {/* Background Overlay (Hidden by Default) */}
  <div className="absolute inset-0 bg-[#00000066] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

  {/* Content Wrapper with Hover Effect */}
  <div className="relative w-full px-5 flex flex-col items-center space-y-[5%] transition-transform duration-[1.2s] ease-in-out translate-y-[103%] group-hover:translate-y-0">
    <h2 className='font-cormorant text-[#FFFFFF] text-[40px] font-medium leading-[48.44px]'>EYFS</h2>
    <p className="font-raleway text-[#FFFFFF] text-[14px] font-medium leading-[26px] px-[15%]">
      A blend of Nigerian and British curricula which prepare and equip students for higher education and entry into advanced level undergraduate programmes across the world.
    </p>
    
    <Link to="/eyfs">
  <button className="flex mx-auto font-raleway text-[#FFFFFF] text-[14px] font-medium leading-[16.44px] 
    border border-[#C6C5C5] rounded-[8px] px-[25px] py-[15px] items-center gap-5 transition duration-300
    hover:bg-white hover:text-[#006011] hover:border-[#006011]">
    Learn more
    <svg className="w-[31px] h-[8px] transition duration-300 fill-current text-white hover:text-[#006011]" 
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 8">
      <path d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.84171 30.3536 3.64645L27.1716 0.464466C26.9763 0.269204 26.6597 0.269204 26.4645 0.464466C26.2692 0.659728 26.2692 0.976311 26.4645 1.17157L29.2929 4L26.4645 6.82843C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.7308 26.9763 7.7308 27.1716 7.53553L30.3536 4.35355ZM0 4.5H30V3.5H0V4.5Z" fill="currentColor"/>
    </svg>
  </button>
</Link>
  </div>
</div>

</div>


  <div className="flex flex-col gap-20  sm:flex-row">
  <div className="w-[439px] h-[422px] rounded-md sm:w-1/2 text-center grid place-items-center group overflow-hidden relative"
  style={{ backgroundImage: `url(${bg2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
  
  {/* Background Overlay */}
  <div className="absolute inset-0 bg-[#00000066] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

  {/* Content Wrapper with Hover Effect */}
  <div className="relative z-10 w-full px-5 flex flex-col items-center space-y-[5%] transition-transform duration-[1.2s] ease-in-out translate-y-[102%] group-hover:translate-y-0">
    <h2 className='font-cormorant text-[#FFFFFF] text-[40px] font-medium leading-[48.44px]'>Junior School</h2>
    <p className="font-raleway text-[#FFFFFF] text-[14px] font-medium leading-[26px] px-[15%]">
      Imagination and creativity are two of the greatest gifts children have. Our children’s views and ideas 
      are sought at every opportunity, as we attach a great deal of importance to developing confident children.
    </p>

    {/* Button */}
    <Link to='/junior-school'>
    <button className="flex mx-auto font-raleway text-[#FFFFFF] text-[14px] font-medium leading-[16.44px] 
      border border-[#C6C5C5] rounded-[8px] px-[25px] py-[15px] items-center gap-5 transition duration-300
      hover:bg-white hover:text-[#006011] hover:border-[#006011] group">
      Learn more
      <svg className="w-[31px] h-[8px] transition duration-300 fill-white group-hover:fill-[#006011]" 
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 8">
        <path d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.84171 30.3536 3.64645L27.1716 0.464466C26.9763 0.269204 26.6597 0.269204 26.4645 0.464466C26.2692 0.659728 26.2692 0.976311 26.4645 1.17157L29.2929 4L26.4645 6.82843C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.7308 26.9763 7.7308 27.1716 7.53553L30.3536 4.35355ZM0 4.5H30V3.5H0V4.5Z" />
      </svg>
    </button>
    </Link>
  </div>
</div>

<div className="w-[439px] h-[422px] rounded-md sm:w-1/2 text-center grid place-items-center group overflow-hidden relative"
  style={{ backgroundImage: `url(${bg3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
  
  {/* Background Overlay (Hidden by Default) */}
  <div className="absolute inset-0 bg-[#00000066] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

  {/* Content Wrapper with Hover Effect */}
  <div className="relative w-full px-5 flex flex-col items-center space-y-[5%] transition-transform duration-[1.2s] ease-in-out translate-y-[103%] group-hover:translate-y-0">
    <h2 className='font-cormorant text-[#FFFFFF] text-[40px] font-medium leading-[48.44px]'>High School</h2>
    <p className="font-raleway text-[#FFFFFF] text-[14px] font-medium leading-[26px] px-[15%]">A blend of Nigerian and British curricula which prepare and equip students for higher education and entry into advanced level undergraduate programmes across the world.</p>
    
    {/* Button */}
    <Link to='/high-school'>
    <button className="flex mx-auto font-raleway text-[#FFFFFF] text-[14px] font-medium leading-[16.44px] 
      border border-[#C6C5C5] rounded-[8px] px-[25px] py-[15px] items-center gap-5 transition duration-300
      hover:bg-white hover:text-[#006011] hover:border-[#006011]">
      Learn more
      <svg className="w-[31px] h-[8px] transition duration-300 fill-current text-white hover:text-[#006011]" 
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 8">
        <path d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.84171 30.3536 3.64645L27.1716 0.464466C26.9763 0.269204 26.6597 0.269204 26.4645 0.464466C26.2692 0.659728 26.2692 0.976311 26.4645 1.17157L29.2929 4L26.4645 6.82843C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.7308 26.9763 7.7308 27.1716 7.53553L30.3536 4.35355ZM0 4.5H30V3.5H0V4.5Z" fill="currentColor"/>
      </svg>
    </button>
    </Link>
  </div>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5 sm:px-[5%] py-[5%]">
  
  {/* Column 1 */}
  <div className="bg-[#C8352E] max-w-[401px] w-full min-h-[704px] p-[5%] rounded-md flex flex-col justify-between h-full">
  {/* Top Title */}
  <h2 className="font-cormorant text-[#FFFFFF] text-[36px] sm:text-[48px] font-bold leading-[48px] sm:leading-[58.13px]">
    Explore Supreme Education
  </h2>

  {/* Bottom Title */}
  <h2 className="font-cormorant text-[#FFFFFF] text-[24px] sm:text-[34px] font-medium leading-[40px] sm:leading-[50px]">
    Explore all Supreme facilities
  </h2>
</div>



  {/* Column 2 */}
  <div className="rounded-md flex flex-col gap-5">
  <div className="relative max-w-[402px] w-full min-h-[341.5px] flex items-end rounded-md pb-[5%] overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 bg-cover bg-center transition-all duration-300" 
    style={{ backgroundImage: `url(${bg4})` }}>
  </div>

  {/* Overlay (appears on hover) */}
  <div className="absolute inset-0 bg-[#00000066] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

  {/* Text */}
  <h2 className="relative font-cormorant text-[#FFFFFF] text-[24px] sm:text-[30px] font-bold leading-[30px] sm:leading-[40px] px-5">
    Boarding
  </h2>
  </div>

  <div className="relative max-w-[402px] w-full min-h-[341.5px] flex items-end rounded-md pb-[5%] overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 bg-cover bg-center transition-all duration-300" 
    style={{ backgroundImage: `url(${bg6})` }}>
  </div>

  {/* Overlay (appears on hover) */}
  <div className="absolute inset-0 bg-[#00000066] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

  {/* Text */}
  <h2 className="relative font-cormorant text-[#FFFFFF] text-[24px] sm:text-[30px] font-bold leading-[30px] sm:leading-[40px] px-5">
  Library
  </h2>
  </div>
  </div>

  {/* Column 3 */}
  <div className="rounded-md flex flex-col gap-5">
  <div className="relative max-w-[402px] w-full min-h-[341.5px] flex items-end rounded-md pb-[5%] overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 bg-cover bg-center transition-all duration-300" 
    style={{ backgroundImage: `url(${bg5})` }}>
  </div>

  {/* Overlay (appears on hover) */}
  <div className="absolute inset-0 bg-[#00000066] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

  {/* Text */}
  <h2 className="relative font-cormorant text-[#FFFFFF] text-[24px] sm:text-[30px] font-bold leading-[30px] sm:leading-[40px] px-5">
  Medical
  </h2>
  </div>
 

  <div className="relative max-w-[402px] w-full min-h-[341.5px] flex items-end rounded-md pb-[5%] overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 bg-cover bg-center transition-all duration-300" 
    style={{ backgroundImage: `url(${bg7})` }}>
  </div>

  {/* Overlay (appears on hover) */}
  <div className="absolute inset-0 bg-[#00000066] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

  {/* Text */}
  <h2 className="relative font-cormorant text-[#FFFFFF] text-[24px] sm:text-[30px] font-bold leading-[30px] sm:leading-[40px] px-5">
  Sports
  </h2>
  </div>
  </div>

</div>

<div className='bg-[#F6F8F5] p-[5%] '>
<h2 className='font-cormorant text-[#292D32] text-[64px] font-bold leading-[77.5px] text-center'>Supreme Education at a glance</h2>

<div className="grid grid-cols-1 sm:grid-cols-4 gap-0 p-[5%]">
  {/* Column 1 */}
  <div className="flex flex-col items-center p-10 text-center border-r-2 border-t-2 border-red-500">
    <img src={Image12} alt="/" className="w-[96px] h-[96px]" />
    <h1 className="font-cormorant text-[#292D32] text-[72px] font-bold leading-[87.19px]">
      <CountUp start={0} end={4} duration={3} separator="," />
    </h1>
    <p className="font-raleway text-[#292D32] text-[18px] font-medium leading-[21.13px]">Certified schools</p>
  </div>

  {/* Column 2 */}
  <div className="flex flex-col items-center p-10 text-center border-b-2 border-r-2 border-red-500">
    <img src={Image13} alt="/" className="w-[91px] h-[91px]" />
    <h1 className="font-cormorant text-[#292D32] text-[72px] font-bold leading-[87.19px]">
      <CountUp start={0} end={1491} duration={3} separator="," />
    </h1>
    <p className="font-raleway text-[#292D32] text-[18px] font-medium leading-[21.13px]">Students enrolled to date</p>
  </div>

  {/* Column 3 */}
  <div className="flex flex-col items-center p-10 text-center border-t-2 border-red-500">
    <img src={Image14} alt="/" className="w-[99px] h-[99px]" />
    <h1 className="font-cormorant text-[#292D32] text-[72px] font-bold leading-[87.19px]">
      <CountUp start={0} end={100} duration={3} separator="," />%
    </h1>
    <p className="font-raleway text-[#292D32] text-[18px] font-medium leading-[21.13px]">Passing to universities</p>
  </div>

  {/* Column 4 */}
  <div className="flex flex-col items-center p-10 text-center border-l-2 border-b-2 border-red-500">
    <img src={Image15} alt="/" className="w-[91px] h-[91px]" />
    <h1 className="font-cormorant text-[#292D32] text-[72px] font-bold leading-[87.19px]">
      <CountUp start={0} end={100} duration={3} separator="," />%
    </h1>
    <p className="font-raleway text-[#292D32] text-[18px] font-medium leading-[21.13px]">Satisfied parents</p>
  </div>
</div>
</div>



<div className=' bg-blue-100 p-[5%] text-center'>
<h2 className='font-cormorant text-[#292D32] text-[64px] font-bold leading-[77.5px]'>Supreme Stories</h2>

<div className="flex flex-col sm:flex-row w-full gap-5 items-center sm:items-start">
  {/* Left Column (Smaller) */}
  <div className="w-1/6 sm:w-1/5 flex items-center justify-center">
    <img src={Image16} alt="/" className="w-[50px] h-[0px] sm:w-[75px] sm:h-[75px]" />
  </div>

  {/* Middle Column (Larger) */}
  <div className="w-full sm:w-3/5 h-auto sm:h-[350px] flex flex-col items-center justify-center text-center px-4 space-y-10">
    <p className='font-raleway text-[#292D32] text-[16px] sm:text-[20px] font-medium leading-[26px] sm:leading-[34px]'>
      Supreme is a great school! The teachers here are super about encouraging students to do their very best.
    </p>
    <img src={Image17} alt="/" className="w-[55px] h-[55px] sm:w-[75px] sm:h-[75px]" />
    <p className='font-raleway text-[#292D32] text-[16px] sm:text-[18px] font-medium leading-[20px] sm:leading-[22px]'>
      Oluchi
    </p>
</div>

  {/* Right Column (Smaller) */}
  <div className="w-1/6 sm:w-1/5 flex items-center justify-center">
    <img src={Image18} alt="/" className="w-[50px] h-[0px] sm:w-[75px] sm:h-[75px]" />
  </div>
</div>
</div>

<div className="bg-white p-[5%]">
      <h2 className="font-cormorant text-[#292D32] text-[64px] font-bold leading-[77.5px] text-center pb-10">
        News at Supreme
      </h2>

      {/* Tab Navigation */}
      <div className="flex gap-8 items-center justify-center mb-[5%]">
        <p className={`font-raleway text-[18px] font-semibold leading-[21.13px] cursor-pointer pb-5 ${
            activeTab === "latestNews" ? "border-b-4 border-[#C8352E]" : "text-[#525458]"}`}
          onClick={() => setActiveTab("latestNews")}>Latest News</p>
        <p className={`font-raleway text-[18px] font-semibold leading-[21.13px] cursor-pointer pb-5 ${ activeTab === "facebook" ? "border-b-4 border-[#C8352E]" : "text-[#525458]"}`}
          onClick={() => setActiveTab("facebook")}>Facebook </p>
        <p className={`font-raleway text-[18px] font-semibold leading-[21.13px] cursor-pointer pb-5 ${
          activeTab === "instagram" ? "border-b-4 border-[#C8352E]" : "text-[#525458]" }`}
          onClick={() => setActiveTab("instagram")}> Instagram </p>
           {/* X (Twitter) Link */}
      <a href="https://x.com/i/flow/login?redirect_after_login=%2Fiamsupremesch" target="_blank" 
        rel="noopener noreferrer">
        <img src={Image19} alt="X (Twitter)" className="w-[100px] h-[40px] cursor-pointer" /></a>
      {/* YouTube Link */}
      <a href="https://www.youtube.com/channel/UCS8z8ciwQSZmxAwTyxk2bOQ" target="_blank" 
        rel="noopener noreferrer">
        <img src={Image20} alt="YouTube" className="w-[90px] h-[45px] cursor-pointer" /></a>
      </div>

      {/* Latest News Section */}
      {activeTab === "latestNews" && (
        <div>
          
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-center w-full">
        {/* Column 1 */}
        <div className="relative h-[300px] bg-cover bg-center bg-no-repeat rounded-md p-[5%]" 
          style={{ backgroundImage: `url(${bg8})` }}>
        
        {/* Content Wrapper - Positioned at the Bottom */}
        <div className="absolute bottom-0 left-0 w-full p-[5%]">
        <div className="bg-[#629948D6] flex justify-start items-center gap-3 rounded-md p-[5%]">
        <p className="font-raleway text-[#FFFFFF] text-[18px] font-semibold leading-[24px] text-left">
          2022 Supreme Education Foundation Scholarship Entrance Examination into Year 7
        </p>
        <img src={Image21} alt="/" className="w-[20px] h-[20px]" />
        </div>
        </div>
      </div>
      
      
        {/* Column 2 */}
        <div className="relative h-[300px] bg-cover bg-center bg-no-repeat rounded-md p-[5%]" 
          style={{ backgroundImage: `url(${bg9})` }}>
        
        {/* Content Wrapper - Positioned at the Bottom */}
        <div className="absolute bottom-0 left-0 w-full p-[5%]">
        <div className="bg-[#629948D6] flex justify-between  items-center gap-3 rounded-md p-[5%]">
        <p className="font-raleway text-[#FFFFFF] text-[18px] font-semibold leading-[24px] text-left">
        Supreme Leverage Every Friday by 5:00pm
        </p>
        <img src={Image21} alt="/" className="w-[20px] h-[20px]" />
        </div>
        </div>
      </div>
      </div>
      
      <div className="flex justify-center items-center w-full mt-10">
        <button className='font-raleway text-[#FFFFFF] text-[14px] font-medium leading-[16.44px] 
               bg-[#006011] border border-[#C6C5C5] rounded-[8px] px-[24px] py-[12px] items-center gap-5 transition duration-300
              hover:bg-[#C8352E]'>Learn more 
        </button>
      </div>
      </div>
      )}

      {/* Facebook Section */}
      {activeTab === "facebook" && (
        <div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4  w-full mb-10 mt-10'>
          <div className='relative bg-cover bg-center bg-no-repeat rounded-md bg-gray-200 p-4 'style={{ backgroundImage: `url(${bg10})` }}>
          </div>
        
          <div className='bg-[#FFFFFF] p-4 rounded-md border-2 border-solid border-[#E6E3E3]'>
          <p className='className="font-raleway text-[#525458] text-[14px] font-medium  leading-[19px] mb-4'>Taekwondo Club had their annual promotion and grading ceremony where children were rewarded for their hard work and resilience during the academic session.</p>
          <p className='className="font-raleway text-[#525458] text-[14px] font-medium  leading-[19px] break-words'>
          #Supremecares,#iamsupremesch,#Bestschoolinlagos,#Bestschoolinnigeria,#Britishcurriculum,#Nigeriancurriculum,#Schoolsinlagos,#Schoolsinnigeria,#playmatters,#playbasedlearning,#earlychildhood,#earlychildhoodeducation,#earlylearning,#childcare,#learning,#eyfsideas,#childdevelopment
          </p>
          <div className='flex justify-between items-center mt-5'>
           <img src={Footerfl} alt="" className= 'w-[30.28px] h-[30.28px]' />
           <p className='font-raleway text-[#525458] text-[14px] font-medium  leading-[19px]'>July 8, 2023</p>
         </div>
          </div>
        
          <div className='relative  bg-cover bg-center bg-no-repeat rounded-md bg-gray-200 p-4 'style={{ backgroundImage: `url(${bg11})` }}>
          </div>
        
          <div className='bg-[#FFFFFF] p-4 rounded-md border-2 border-solid border-[#E6E3E3]'>
          <p className='className="font-raleway text-[#525458] text-[14px] font-medium  leading-[19px] mb-4'>We had our very own student at Business Morning.</p>
          <p className='className="font-raleway text-[#525458] text-[14px] font-medium  leading-[19px] break-words'>
          #Supremecares,#iamsupremesch,#Bestschoolinlagos,#Bestschoolinnigeria,#Britishcurriculum,#Nigeriancurriculum,#Schoolsinlagos,#Schoolsinnigeria,#playmatters,#playbasedlearning,#earlychildhood,#earlychildhoodeducation,#earlylearning,#childcare,#learning,#eyfsideas,#childdevelopment
          </p>
         <div className='flex justify-between items-center mt-[70px]'>
           <img src={Footerfl} alt="" className= 'w-[30.28px] h-[30.28px]' />
           <p className='font-raleway text-[#525458] text-[14px] font-medium  leading-[19px]'>July 8, 2023</p>
         </div>
          </div>
         </div>
         <div className="flex justify-center items-center w-full mt-10">
          <button className='font-raleway text-[#FFFFFF] text-[14px] font-medium leading-[16.44px] 
                 bg-[#006011] border border-[#C6C5C5] rounded-[8px] px-[24px] py-[12px] items-center gap-5 transition duration-300
                hover:bg-[#C8352E]'>Find us on Facebook 
          </button>
        </div>
         </div>
      )}

      {/* Instagram Section */}
      {activeTab === "instagram" && (
        <div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4  w-full mb-10 mt-10'>
        <div className='relative bg-cover bg-center bg-no-repeat rounded-md bg-gray-200 p-4 'style={{ backgroundImage: `url(${bg12})` }}>
        </div>
      
        <div className='bg-[#FFFFFF] p-4 rounded-md border-2 border-solid border-[#E6E3E3]'>
        <p className='className="font-raleway text-[#525458] text-[14px] font-medium  leading-[19px] mb-4'>Taekwondo Club had their annual promotion and grading ceremony where children were rewarded for their hard work and resilience during the academic session.</p>
        <p className='className="font-raleway text-[#525458] text-[14px] font-medium  leading-[19px] break-words'>
        #Supremecares,#iamsupremesch,#Bestschoolinlagos,#Bestschoolinnigeria,#Britishcurriculum,#Nigeriancurriculum,#Schoolsinlagos,#Schoolsinnigeria,#playmatters,#playbasedlearning,#earlychildhood,#earlychildhoodeducation,#earlylearning,#childcare,#learning,#eyfsideas,#childdevelopment
        </p>
        <div className='flex justify-between items-center mt-5'>
         <img src={Footerfl} alt="" className= 'w-[30.28px] h-[30.28px]' />
         <p className='font-raleway text-[#525458] text-[14px] font-medium  leading-[19px]'>July 8, 2023</p>
       </div>
        </div>
      
        <div className='relative bg-cover bg-center bg-no-repeat rounded-md bg-gray-200 p-4 'style={{ backgroundImage: `url(${bg13})` }}>
        </div>
      
        <div className='bg-[#FFFFFF] p-4 rounded-md border-2 border-solid border-[#E6E3E3]'>
        <p className='className="font-raleway text-[#525458] text-[14px] font-medium  leading-[19px] mb-4'>We had our very own student at Business Morning.</p>
        <p className='className="font-raleway text-[#525458] text-[14px] font-medium  leading-[19px] break-words'>
        #Supremecares,#iamsupremesch,#Bestschoolinlagos,#Bestschoolinnigeria,#Britishcurriculum,#Nigeriancurriculum,#Schoolsinlagos,#Schoolsinnigeria,#playmatters,#playbasedlearning,#earlychildhood,#earlychildhoodeducation,#earlylearning,#childcare,#learning,#eyfsideas,#childdevelopment
        </p>
       <div className='flex justify-between items-center mt-[70px]'>
         <img src={Footerfl} alt="" className= 'w-[30.28px] h-[30.28px]' />
         <p className='font-raleway text-[#525458] text-[14px] font-medium  leading-[19px]'>July 8, 2023</p>
       </div>
        </div>
       </div>
       <div className="flex justify-center items-center w-full mt-10">
        <button className='font-raleway text-[#FFFFFF] text-[14px] font-medium leading-[16.44px] 
               bg-[#006011] border border-[#C6C5C5] rounded-[8px] px-[24px] py-[12px] items-center gap-5 transition duration-300
              hover:bg-[#C8352E]'>Follow us on Instagram
        </button>
       
        
      </div>
       </div>
      )}
    </div>


    </div>
  )
}

export default Homepage
