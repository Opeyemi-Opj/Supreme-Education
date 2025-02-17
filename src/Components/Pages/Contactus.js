import React from 'react'
import { Link } from 'react-router-dom'; // ✅ Correct Import
import Image1 from '../../assets/images/image11(1).png'
import Sms from '../../assets/images/sms.png'
import location from '../../assets/images/location.png'
import Vector from '../../assets/images/Vector.png'
import Arrowlft from '../../assets/images/arrow-left.png'

const Contactus = () => {
  return (
    
 <div className='max-w-full'>
          <img src={Image1} alt='Our Founder' className='w-full' />
          
          <p className='text-center font-cormorant text-white text-[32px] sm:text-[48px] md:text-[56px] lg:text-[72px] font-bold leading-tight mt-[-50px] sm:mt-[-80px] md:mt-[-100px] lg:mt-[-130px]'>
          Contact us
          </p>
          
          <div className="flex flex-wrap  px-4 sm:px-8 md:px-[5%] pt-[5%] pb-[3%] lg:pb-[2%] bg-[#F6F8F5] gap-3 sm:gap-6 md:gap-12 lg:gap-28 items-center text-center">
          <Link to="/our-founder" className="text-[#292D32] text-[16px] sm:text-[16px] font-medium border-b-2 border-transparent hover:text-[#DD3333] hover:border-[#DD3333] transition-all duration-300">
            Our Founder
            </Link>
            
            <Link to="/our-ceo" className="text-[#292D32] text-[16px] sm:text-[16px] font-medium border-b-2 border-transparent hover:text-[#DD3333] hover:border-[#DD3333] transition-all duration-300">
              Our CEO
            </Link>
            
            <Link to="/who-we-are" className="text-[#292D32] text-[16px] sm:text-[16px] font-medium border-b-2 border-transparent hover:text-[#DD3333] hover:border-[#DD3333] transition-all duration-300">
              Who We Are
            </Link>

            <Link to="/virtual-tour " className="text-[#292D32] text-[16px] sm:text-[16px] font-medium border-b-2 border-transparent hover:text-[#DD3333] hover:border-[#DD3333] transition-all duration-300">
            Virtual Tour 
            </Link>

            <p className='w-[200px] bg-[#DD3333] rounded-md font-raleway text-[#FFFFFF] text-[18px] font-medium leading-[21.13px] px-5 py-3 transition duration-300  '> Contact Us </p>

          </div>

          <div className='px-[5%] mb-[5%]'>
             <div className='flex gap-2 pt-7 pb-16 items-center'>
                  <Link to='/' className='font-raleway text-[#292D32] text-[14px] font-bold leading-[16.44px]'> HOME </Link>
                  <img src={Arrowlft} alt="" className="w-[14px] h-[14px]" />
                  <p className='font-raleway text-[#292D32] text-[14px] font-bold leading-[16.44px]'> ABOUT US</p>
                  <img src={Arrowlft} alt="" className="w-[14px] h-[14px]" />
                  <p className='font-raleway text-[#292D32] text-[14px] font-bold leading-[16.44px]'> OUR FOUNDER </p>
              </div>
              <p  className='font-raleway text-[#292D32] text-[18px] font-medium leading-[40px] '>For any inquiry, please visit us today. You may also contact us via email or give us a call.</p>

            <h2 className='font-raleway text-[#292D32] text-[34px] font-bold leading-[39.92px] text-center mt-10 mb-10'>SUPREME EDUCATION FOUNDATION SCHOOLS</h2>

        <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32482.65893251266!2d3.3715238253272592!3d6.645251843190561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93a84416230b%3A0xc5baa26ec7dcd095!2sSupreme%20Education%20Foundation%20Schools!5e0!3m2!1sen!2sng!4v1738924208638!5m2!1sen!2sng"
        width="100%"
        height="504"
        style={{ border: 0, borderRadius: "15px"  // Adding rounded corners 
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
        </iframe>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
        <div className="min-h-[150px] flex flex-col justify-center items-center rounded-md p-5 text-center text-white">
       <div className='flex gap-2 mb-6'>
                <img src={location} alt="" className="w-[22px] h-[22px]" />
                <p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[24px]'>23, Emmanuel Keshi Road, Magodo G.R.A. Phase 2, Lagos, Nigeria.</p>
                </div>
        </div>

        <div className="min-h-[150px] flex flex-col justify-center items-center rounded-md p-5 text-center text-white">
        <div className='flex gap-2 mb-2 '>
                 <img src={Vector} alt="" className='w-[22px] h-[22px]' />
                 <p className="font-raleway text-[#292D32] text-[18px] font-medium leading-[21.13px]">+(234) 8182984015</p>
                 </div>
                 <div className='mb-2 '>
                 <p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[21.13px] mb-2 ml-7'>+(234) 8182984015</p>
                 <p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[21.13px] ml-7'>+(234) 8182984015</p>
                 </div>
        </div>

        <div className=" min-h-[150px] flex flex-col justify-center items-center rounded-md p-5 text-center text-white">
        <div className="flex gap-2">
                 <img src={Sms} alt="" className='w-[22px] h-[22px]' />
                 <p className="font-raleway text-[#292D32] text-[18px] font-medium leading-[21.13px]">info@supremeeducation.com</p>
                 </div>  
        </div>
        </div>

        </div>
        </div>

  )
}

export default Contactus
