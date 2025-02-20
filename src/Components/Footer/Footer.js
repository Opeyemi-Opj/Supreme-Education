import React from 'react'
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import Image1 from '../../assets/images/image19.png'
import Image2 from '../../assets/images/image20.png'
import Image3 from '../../assets/images/image21.png'
import Image4 from '../../assets/images/image51.png'
import Image5 from '../../assets/images/image52.png'
import EducareLogo from '../../assets/images/Educare-Logo.png'
import Vector from '../../assets/images/Vector.png'
//import FormIcon from '../../assets/icons/direct-right.svg'
import { ReactComponent as DirectRightIcon } from "../../assets/icons/direct-right.svg"; // Import SVG as React component
import Sms from '../../assets/images/sms.png'
import location from '../../assets/images/location.png'
import bgImage1 from '../../assets/images/Footerbgi.png'
import Footerl from '../../assets/images/Site-logo.png'
import Footeril from '../../assets/images/instagram.png'
import Footerfl from '../../assets/images/facebook.png'
import { Link } from 'react-router-dom';

const Footer = () => {

  
 useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when page loads
  }, []);

   // useForm setup
   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle form submission
  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
<div>  
<section className='w-full bg-[#F9F9F9] pl-[5%]'>
<div className='flex flex-col md:flex-row gap-10'>

{/* First Column */}
<div className="pt-[1%] flex flex-col items-start">
  {/* Logo */}
  <Link to='/'>
  <img src={Footerl} alt="" className="w-[167px] h-[155px] max-w-[100%] md:max-w-[100%]" />
  </Link>
  {/* Social Icons */}
  <div className="flex gap-5 justify-center mt-4">
    <img src={Footeril} alt="" className="w-[30px] h-[30px] md:w-[35px] md:h-[35px]" />
    <img src={Footerfl} alt="" className="w-[30px] h-[30px] md:w-[35px] md:h-[35px]" />
  </div>
</div>


{/* Second Column */}
<div className='pt-[2%]'>
  <div className='flex gap-2 mb-6'>
    <img src={location} alt="" className="w-[22px] h-[22px]" />
    <p className='font-raleway text-[#292D32] text-[14px] font-medium leading-[16.44px]'>
      23, Emmanuel Keshi Road, Magodo G.R.A. Phase 2, Lagos, Nigeria.
    </p>
  </div>
  <div className='mb-6'>
    <div className='flex gap-2 mb-2'>
      <img src={Vector} alt="" className='w-[22px] h-[22px]' />
      <p className="font-raleway text-[#292D32] text-[14px] font-medium leading-[16.44px]">
        +(234) 8182984015
      </p>
    </div>
    <div className='mb-2'>
      <p className='font-raleway text-[#292D32] text-[14px] font-medium leading-[16.44px] mb-2 ml-7'>
        +(234) 8182984015
      </p>
      <p className='font-raleway text-[#292D32] text-[14px] font-medium leading-[16.44px] ml-7'>
        +(234) 8182984015
      </p>
    </div>
  </div>
  <div className="flex gap-2 items-center">
    <img src={Sms} alt="" className='w-[22px] h-[22px]' />
    <p className="font-raleway text-[#292D32] text-[14px] font-medium leading-[16.44px]">
      info@supremeeducation.com
    </p>
  </div>   
</div>

{/* Third Column */}
<div className="w-[916px] h-auto bg-cover bg-center pt-[5%] pb-[5%] pr-[5%] text-left md:text-rightt" 
  style={{ backgroundImage: `url(${bgImage1})` }}>
  
  {/* Buttons */}
  <div className="flex gap-10 ml-auto w-max pb-[5%] sm:w-full sm:justify-end">
    {["Enquire", "Apply", "Visit"].map((text) => (
      <button key={text}
        className="flex font-raleway text-white text-[14px] font-medium leading-[16.44px] 
        border border-[#C6C5C5] rounded-[8px] px-[25px] py-[15px] items-center gap-5 transition duration-300
        hover:bg-white hover:text-[#006011] hover:border-[#006011] group">
        {text}
        <svg className="w-[31px] h-[8px] transition duration-300 fill-current text-white group-hover:text-[#006011]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31 8">
          <path d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.84171 30.3536 3.64645L27.1716 0.464466C26.9763 0.269204 26.6597 0.269204 26.4645 0.464466C26.2692 0.659728 26.2692 0.976311 26.4645 1.17157L29.2929 4L26.4645 6.82843C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.7308 26.9763 7.7308 27.1716 7.53553L30.3536 4.35355ZM0 4.5H30V3.5H0V4.5Z"
            fill="currentColor"/>
        </svg>
      </button>
    ))}
  </div>

 {/* Newsletter Heading */}
 <h1 className="font-raleway text-white text-[14px] font-bold leading-[16.44px] mt-4 text-right">
    Sign up to our newsletter to get updated
  </h1>

  {/* Email Subscription Form */}
  <div className="w-[311px] mt-4 ml-auto bg-transparent border border-gray-300 rounded-lg overflow-hidden shadow-md">
    <form onSubmit={handleSubmit(onSubmit)} className="flex items-center gap-2">
      <input type="email" placeholder="Enter your email address" 
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email format",
          },
        })}
        className="flex-1 px-3 py-3 text-white bg-transparent focus:outline-none"/>
      <button type="submit" className="bg-[#C6C6C6] p-3 transition duration-200">
        <DirectRightIcon className="w-6 h-6 text-white" />
      </button>
    </form>
  </div>

  {/* Error Message Outside the Form Width */}
  {errors.email && (
    <p className="text-red-500 text-sm text-center mt-2 w-[311px] mx-auto">
      {errors.email.message}
    </p>
  )}
</div>
</div>

          
<section className="flex justify-between items-center px-[3%] py-[2%] md:px-[2%] md:py-[1%] gap-3 flex-wrap">
  <img src={Image1} alt="" className="w-[70px] h-[70px] md:w-[60px] md:h-[60px]" />
  <img src={Image2} alt="" className="w-[120px] h-[40px] md:w-[100px] md:h-[35px]" />
  <img src={Image3} alt="" className="w-[130px] h-[80px] md:w-[110px] md:h-[70px]" />
  <img src={Image4} alt="" className="w-[70px] h-[90px] md:w-[60px] md:h-[80px]" />
  <img src={Image5} alt="" className="w-[90px] h-[90px] md:w-[80px] md:h-[80px]" />
</section>
</section>

<section className="flex flex-wrap bg-[#006011] px-[5%] py-[2%] justify-between md:flex-nowrap">

{/* First Column */}
<div className="w-full md:w-[35%] text-center md:text-left content-center">
  <p className="font-raleway text-[#C6C5C5] text-[14px] font-medium leading-[16.44px]">
    © 2023 SEF Schools. All Rights reserved.
  </p>
</div>

{/* Second Column */}
<div className="w-full md:w-[50%] flex flex-wrap justify-center md:justify-start gap-2 md:gap-0 mt-3 md:mt-0">
  <div className="w-full md:w-[20%] text-center md:text-left">
    <p className="font-raleway text-[#FFFFFF] text-[14px] font-medium leading-[16.44px]">
      Privacy Policy
    </p>
  </div>
  <div className="w-full md:w-[20%] border-t md:border-t-0 md:border-r-2 md:border-l-2 border-solid border-white px-[5%] text-center md:text-left">
    <p className="font-raleway text-[#FFFFFF] text-[14px] font-medium leading-[16.44px]">
      Sitemap
    </p>
  </div>
  <div className="w-full md:w-auto border-t md:border-t-0 md:border-r-2 border-solid border-white px-[5%] text-center md:text-left">
    <p className="font-raleway text-[#FFFFFF] text-[14px] font-medium leading-[16.44px]">
      Careers
    </p>
  </div>
  <div className="w-full md:w-auto px-[5%] text-center md:text-left">
    <p className="font-raleway text-[#FFFFFF] text-[14px] font-medium leading-[16.44px]">
      Contact us
    </p>
  </div>
</div>

{/* Third Column */}
<div className="w-full md:w-[25%] flex flex-col md:flex-row items-center md:justify-end gap-3 mt-3 md:mt-0">
  <p className="font-raleway text-[#929C93] text-[14px] font-medium leading-[16.44px] text-center md:text-left">
    Powered by
  </p>
  <img src={EducareLogo} alt="" className="w-[114px] h-[45px]" />
</div>

</section>

      
    </div>
  )
}

export default Footer