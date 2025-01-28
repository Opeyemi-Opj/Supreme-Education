import React, { useState } from 'react';
import Image1 from '../../assets/images/imageslider1.png'
import Image2 from '../../assets/images/imageslider2.png';
import Image3 from '../../assets/images/imageslider3.png';
import Image4 from '../../assets/images/Imageslider4.png';
import Image5 from '../../assets/images/imageslider5.png';
import Image6 from '../../assets/images/Vector1.png';
import Image7 from '../../assets/images/image8.png';
import Image8 from '../../assets/images/Image(1).png';
import Image9 from '../../assets/images/image5.png';
import Image10 from '../../assets/images/Image.png';
import Image11 from '../../assets/images/Image(1).png';
import CustomLeftIcon from '../../assets/icons/VectorLeft.svg'; // Your custom left arrow icon
import CustomRightIcon from '../../assets/icons/VectorRight.svg'; // Your custom right arrow icon
import CustomDotIcon from '../../assets/icons/ert-dot.svg'; // Your custom dot icon*/



const Homepage = () => {

  const slides = [
    { url: Image1 },
    { url: Image2 },
    { url: Image3 },
    { url: Image4 },
    { url: Image5 },
  ];


  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className=''>
      <div className=' -z-10  -mt-[200px] max-w-[1440px] h-[820px] w-full m-auto py-0 px-0 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-0xl bg-center bg-cover duration-500'>
        </div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <img src={CustomLeftIcon} alt="Left Arrow" className="w-8 h-8" onClick={prevSlide} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <img src={CustomRightIcon} alt="Right Arrow" className="w-8 h-8" onClick={nextSlide} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slides, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer' >
            <img src={CustomDotIcon} alt="Dot Icon" className="w-6 h-6" /> {/* Your custom dot icon */}
          </div> ))}
      </div>
      </div>
      
        <div className='px-[5%] py-[5%]'>
        <div className='text-center'>
             <h1 className='font-cormorant text-[#292D32] text-[72px] font-bold leading-[87.19px] '>Welcome to Supreme</h1>
             <p class="font-raleway text-[#292D32] text-[18px] leading-[40px] pl-[20%] pr-[20%]">Supreme Education Foundation School is a centre of excellence designed to provide world-class education in an exciting learning environment for students between the ages of 3 months to 18 years. </p> 
             <button className='font-raleway text-[#FFFFFF] text-[14px] font-medium leading-[16.44px] 
         bg-[#006011] border border-[#C6C5C5] rounded-[8px] px-[24px] py-[12px] items-center gap-5 transition duration-300
        hover:bg-[#C8352E] '>Learn more </button>
        </div>

        <div className='grid grid-cols-3 gap-0 mt-[5%]'>
          <img src={Image6 } alt="" className= 'w-[200px] h-[242px] ml-[100px]' />
          <img src={Image7 } alt="" className= 'w-[360px] h-[226px] ml-[100px]' />
          <img src={Image8 } alt="" className= 'w-[313px] h-[316px] ml-[100px]' />
        </div>

        <div className='grid grid-cols-3 gap-0 mt-[2%]'>
          <img src={Image9 } alt="" className= 'w-[392px] h-[238px]' />
          <img src={Image10 } alt="" className= 'w-[292px] h-[316px]' />
          <img src={Image11 } alt="" className= 'w-[464px] h-[238x]' />
        </div>
        </div>

        <div className=' bg-[#326F14] px-[5%] py-[5%]'>
          <div className='grid grid-cols-2 gap-2' >
            <div>
            <h1 className='font-cormorant text-[#FFFFFF] text-[72px] font-bold leading-[87.19px]'>A lifetime learning environment</h1>
            </div>
            <div>
            <p>This is second one option</p>
            </div>

          </div>

        </div>
      
    </div>
  )
}

export default Homepage
