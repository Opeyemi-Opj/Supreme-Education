import React from 'react'
import { Link } from 'react-router-dom'; // ✅ Correct Import
import Image1 from '../../assets/images/image11(1).png'

const VirtualTour = () => {
  return (
    <div className='max-w-full'>
          <img src={Image1} alt='Our Founder' className='w-full' />
          
          <p className='text-center font-cormorant text-white text-[32px] sm:text-[48px] md:text-[56px] lg:text-[72px] font-bold leading-tight mt-[-50px] sm:mt-[-80px] md:mt-[-100px] lg:mt-[-130px]'>
          Virtual Tour
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

            <p className='w-[200px] bg-[#DD3333] rounded-md font-raleway text-[#FFFFFF] text-[18px] font-medium leading-[21.13px] px-5 py-3 transition duration-300  '> Virtual Tour</p>

            
            <Link to="/contact-us" className="text-[#292D32] text-[16px] sm:text-[16px] font-medium border-b-2 border-transparent hover:text-[#DD3333] hover:border-[#DD3333] transition-all duration-300">
              Contact Us
            </Link>
          </div>

          <div className='px-[5%] mb-[10%]'>
             <div className='flex gap-4 pt-7 pb-16 items-center'>
                  <Link to='/' className='font-raleway text-[#292D32] text-[14px] font-bold leading-[16.44px]'> HOME &gt;</Link>
                  <p className='font-raleway text-[#292D32] text-[14px] font-bold leading-[16.44px]'> ABOUT US &gt; </p>
                  <p className='font-raleway text-[#292D32] text-[14px] font-bold leading-[16.44px]'> OUR FOUNDER </p>
              </div>
              <p  className='font-raleway text-[#292D32] text-[18px] font-medium leading-[40px] '>Take a quick Tour through Supreme Education Foundation Schools.</p>

              <iframe className="w-full  rounded-md h-[698px] mt-6"
              src="https://www.youtube.com/embed/TyLPRyDUzqc"
             title="YouTube Video"
             allowFullScreen></iframe>


            <div className="justify-center items-center bg-[#006011] min-h-[50vh] sm:min-h-[40vh] p-10 rounded-md text-center mt-10 mb-10">
           <h2 className="text-[#FFFFFF] text-2xl font-bold">Creed</h2>
           <p className="font-raleway text-[#FFFFFF] text-[22px] font-medium leading-[40px] italic mt-5 pl-[14%] pr-[14%]">
           "I am a symbol of creative intelligence because I influence positively. I collaborate to serve with competence and integrity because I care. I am Supreme! and I am the standard."
           </p>
           </div>

           <iframe className="w-full  rounded-md h-[698px]"
               src="https://www.youtube.com/embed/kmZQb2xRTkw"
             title="YouTube Video"
             allowFullScreen></iframe>
          </div>
    

        </div>
  )
}

export default VirtualTour
