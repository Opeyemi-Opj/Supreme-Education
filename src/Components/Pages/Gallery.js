import React from 'react'
import Image1 from '../../assets/images/image90(1).png'
import Image2 from '../../assets/images/export.png';
import { Link } from 'react-router-dom'; // ✅ Correct Import
import Arrowlft from '../../assets/images/arrow-left.png'
import  bg1  from '../../assets/images/image16.png';
import  bg2  from '../../assets/images/image17.png';

const Gallery = () => {
  return (
    <div className='max-w-full'>

        
        <img src={Image1} alt='Our Founder' className='w-full' />
        
        <p className='text-center font-cormorant text-white text-[32px] sm:text-[48px] md:text-[56px] lg:text-[72px] font-bold leading-tight mt-[-50px] sm:mt-[-80px] md:mt-[-100px] lg:mt-[-130px]'>
        Gallery
        </p>
        
        <div className="flex flex-wrap  px-4 sm:px-8 md:px-[5%] pt-[5%] pb-[3%] lg:pb-[2%] bg-[#F6F8F5] gap-3 sm:gap-6 md:gap-12 lg:gap-20 items-center text-center">
        
        <Link to="/news-events" className="text-[#292D32] text-[16px] sm:text-[16px] font-medium border-b-2 border-transparent hover:text-[#DD3333] hover:border-[#DD3333] transition-all duration-300">
        News & Events
        </Link>

        <p className='w-[200px] bg-[#DD3333] rounded-md font-raleway text-[#FFFFFF] text-[18px] font-medium leading-[21.13px] px-5 py-3 transition duration-300  '> Gallery </p>
        
        </div>
        
        <div className='pl-[5%] pr-[5%]'>
        <div className="flex flex-wrap gap-2 pt-7 pb-3 items-center text-center md:text-left">
          <Link to="/" className="font-raleway text-[#292D32] text-[14px] font-bold leading-[16.44px]">
            HOME
          </Link>
          <img src={Arrowlft} alt="" className="w-[14px] h-[14px]" />
        
          <p className="font-raleway text-[#292D32] text-[14px] font-bold leading-[16.44px]">
          STUDENT LIFE
          </p>
          <img src={Arrowlft} alt="" className="w-[14px] h-[14px]" />
        
          <p className="font-raleway text-[#292D32] text-[14px] font-bold leading-[16.44px] text-center md:text-left">
          YEARBOOK
          </p>
        </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-center w-full p-[5%]">
                {/* Column 1 */}
                <div className="relative h-[342px] bg-cover bg-center bg-no-repeat rounded-md p-[5%]" 
                  style={{ backgroundImage: `url(${bg1})` }}>
                
                {/* Content Wrapper - Positioned at the Bottom */}
                <div className="absolute bottom-0 left-0 w-full p-[5%]">
                <div className="bg-[#629948D6] flex justify-start items-center gap-3 rounded-md p-[5%]">
                <p className="font-raleway text-[#FFFFFF] text-[18px] font-semibold leading-[24px] text-left">
                Supreme Education Yearbook
                </p>
                <img src={Image2} alt="/" className="w-[20px] h-[20px]" />
                </div>
                </div>
              </div>
              
              
                {/* Column 2 */}
                <div className="relative h-[343px] bg-cover bg-center bg-no-repeat rounded-md p-[5%]" 
                  style={{ backgroundImage: `url(${bg2})` }}>
                
                {/* Content Wrapper - Positioned at the Bottom */}
                <div className="absolute bottom-0 left-0 w-full p-[5%]">
                <div className="bg-[#629948D6] flex justify-between  items-center gap-3 rounded-md p-[5%]">
                <a 
  href="https://www.flickr.com/photos/154045882@N04/albums/" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <p className="font-raleway text-[#FFFFFF] text-[18px] font-semibold leading-[24px] text-left underline">
    Supreme Education Picture Gallery
  </p>
</a>

                <img src={Image2} alt="/" className="w-[20px] h-[20px]" />
                </div>
                </div>
              </div>
              </div>
      
    </div>
  )
}

export default Gallery
