import React from 'react'
import Image1 from '../../assets/images/image58.png'
import Image2 from '../../assets/images/Image(10).png'
import Image3 from '../../assets/images/Image(11).png'
import Image4 from '../../assets/images/Image(12).png'
import Image5 from '../../assets/images/Image(13).png'
import Image6 from '../../assets/images/Image(14).png'
import Image7 from '../../assets/images/image60.png'
import Image8 from '../../assets/images/image61.png'
import Image9 from '../../assets/images/image62.png'
import Arrowlft from '../../assets/images/arrow-left.png'
import { Link } from 'react-router-dom'; // ✅ Correct Import
import LeftArrow from '../../assets/icons/Arrowlt.svg'
import RightArrow from '../../assets/icons/Arrowrt.svg'
import Mapl from '../../assets/images/Map-location-marker.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";


const Highschool = () => {

  return (
    <div className='max-w-full'>
        <img src={Image1} alt='Our Founder' className='w-full' />
        
        <p className='text-center font-cormorant text-white text-[32px] sm:text-[48px] md:text-[56px] lg:text-[72px] font-bold leading-tight mt-[-50px] sm:mt-[-80px] md:mt-[-100px] lg:mt-[-130px]'>
        High School
        </p>
        
        <div className="flex flex-wrap  px-4 sm:px-8 md:px-[5%] pt-[5%] pb-[3%] lg:pb-[2%] bg-[#F6F8F5] gap-3 sm:gap-6 md:gap-12 lg:gap-16 items-center text-center">
          
          <Link to="/eyfs" className="text-[#292D32] text-[16px] sm:text-[16px] font-medium border-b-2 border-transparent hover:text-[#DD3333] hover:border-[#DD3333] transition-all duration-300">
          EYFS
          </Link>
    
          <Link to="/junior-school" className="text-[#292D32] text-[16px] sm:text-[16px] font-medium border-b-2 border-transparent hover:text-[#DD3333] hover:border-[#DD3333] transition-all duration-300">
          Junior School
          </Link>

          <p className='w-[200px] bg-[#DD3333] rounded-md font-raleway text-[#FFFFFF] text-[18px] font-medium leading-[21.13px] px-5 py-3 transition duration-300  '> High School </p>
          
          <Link to="/teachers-college" className="text-[#292D32] text-[16px] sm:text-[16px] font-medium border-b-2 border-transparent hover:text-[#DD3333] hover:border-[#DD3333] transition-all duration-300">
          Teachers College
          </Link>
          
          
          <Link to="/academic-calendar" className="text-[#292D32] text-[16px] sm:text-[16px] font-medium border-b-2 border-transparent hover:text-[#DD3333] hover:border-[#DD3333] transition-all duration-300">
          Academic Calendar
          </Link>
    
          <Link to="/school-curriculum" className="text-[#292D32] text-[16px] sm:text-[16px] font-medium border-b-2 border-transparent hover:text-[#DD3333] hover:border-[#DD3333] transition-all duration-300">
          School Curriculum
          </Link>
        </div>
    
        <div className='pl-[5%] pr-[5%] pb-[5%]'>
        <div className='flex gap-2 pt-7 pb-16 items-center'>
       <Link to='/' className='font-raleway text-[#292D32] text-[14px] font-bold leading-[16.44px]'> HOME</Link>
       <img src={Arrowlft} alt="" className="w-[14px] h-[14px]" />
        <p className='font-raleway text-[#292D32] text-[14px] font-bold leading-[16.44px]'> ACADEMICS </p>
        <img src={Arrowlft} alt="" className="w-[14px] h-[14px]" />
        <p className='font-raleway text-[#292D32] text-[14px] font-bold leading-[16.44px]'> HIGH SCHOOL </p>
        </div>
    
        <div className="flex flex-col md:flex-row gap-6">
         {/* First Column - Larger */}
         <div className="w-full md:w-[65%] bg-white">
         <p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[40xp]'> We are a co-educational private school located within a residential estate. The school welcomed its first set of students in October 1991. The school has thrived for more than three decades and celebrates continuous improvement. Supreme Schools currently enrols over 700 students across the primary, middle, and high schools from within and outside Nigeria.<br/><span className='block mt-[7%]'></span>Our academic programs are organized on a trimester schedule. Our students offered subjects such as
         </p>

    //     
    <div className="flex flex-wrap md:flex-nowrap gap-1">
   <div className="w-full md:w-[30%]">
    <div className="flex items-center gap-4 mt-5 mb-3">
      <img src={Mapl} alt="" className="w-10 h-10" />
      <p className="font-raleway text-[#292D32] text-lg font-medium leading-[21.13px]">
      Mathematics
      </p>
    </div>

    <div className="flex items-center gap-4 mt-5 mb-3">
      <img src={Mapl} alt="" className="w-10 h-10" />
      <p className="font-raleway text-[#292D32] text-lg font-medium leading-[21.13px]">
      English
      </p>
    </div>

    <div className="flex items-center gap-4 mt-5 mb-3">
      <img src={Mapl} alt="" className="w-10 h-10" />
      <p className="font-raleway text-[#292D32] text-lg font-medium leading-[21.13px]">
      Physics
      </p>
    </div>

    <div className="flex items-center gap-4 mt-5 mb-3">
      <img src={Mapl} alt="" className="w-10 h-10" />
      <p className="font-raleway text-[#292D32] text-lg font-medium leading-[21.13px]">
      Chemistry
      </p>
    </div>

    <div className="flex items-center gap-4 mt-5 mb-3">
      <img src={Mapl} alt="" className="w-10 h-10" />
      <p className="font-raleway text-[#292D32] text-lg font-medium leading-[21.13px]">
      Biology
      </p>
    </div>

    <div className="flex items-center gap-4 mt-5 mb-3">
      <img src={Mapl} alt="" className="w-10 h-10" />
      <p className="font-raleway text-[#292D32] text-lg font-medium leading-[21.13px]">
      Economics
      </p>
    </div>
  </div>

  <div className="w-full md:w-[30%]">
    <div className="flex items-center gap-4 mt-5 mb-3">
      <img src={Mapl} alt="" className="w-10 h-10" />
      <p className="font-raleway text-[#292D32] text-lg font-medium leading-[21.13px]">
      French
      </p>
    </div>

    <div className="flex items-center gap-4 mt-5 mb-3">
      <img src={Mapl} alt="" className="w-10 h-10" />
      <p className="font-raleway text-[#292D32] text-lg font-medium leading-[21.13px]">
      Photography
      </p>
    </div>

    <div className="flex items-center gap-4 mt-5 mb-3">
      <img src={Mapl} alt="" className="w-10 h-10" />
      <p className="font-raleway text-[#292D32] text-lg font-medium leading-[21.13px]">
     Food & Nutrition
      </p>
    </div>

    <div className="flex items-center gap-4 mt-5 mb-3">
      <img src={Mapl} alt="" className="w-10 h-10" />
      <p className="font-raleway text-[#292D32] text-lg font-medium leading-[21.13px]">
      Civic Education
      </p>
    </div>

    <div className="flex items-center gap-4 mt-5 mb-3">
      <img src={Mapl} alt="" className="w-10 h-10" />
      <p className="font-raleway text-[#292D32] text-lg font-medium leading-[21.13px]">
      Global Perspectives 
      </p>
    </div>

    <div className="flex items-center gap-4 mt-5 mb-3">
      <img src={Mapl} alt="" className="w-10 h-10" />
      <p className="font-raleway text-[#292D32] text-lg font-medium leading-[21.13px]">
      Global Perspectives 
      </p>
    </div>

  </div>
</div>
</div>
    
         {/* Second Column - Smaller */}
        <div className="w-full md:w-[35%] p-4">
        
        </div>
        </div>
    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <div className=''>
        <p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[40px]'>
        We run a blended curriculum that is centered on both the Nigerian and British curriculum. Hence, our students write Cambridge Checkpoint and BECE external examinations in Year 9. Supreme students typically graduate at the end of Year 12 after sitting for West African Senior School Certificate Examination (WASSCE)while few would proceed to A level schools across the globe. IGCSE and SAT are optional examinations.
        </p>
        </div>
       <div className=''>
       <img src={Image2} alt='Our Founder' className='' />
       </div>
        </div>
    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <div className=''>
        <img src={Image3} alt='Our Founder' className='rounded-lg' />
        
       </div>
       <div className=''>
        <h2 className='font-raleway text-[#006011] text-[34px] font-semibold leading-[40px]'>High Schools’ Curriculum</h2>
        <p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[40px] mt-10'>A blend of Nigerian and British curricula which prepare and equip students for higher education and entry into advanced level undergraduate programmes across the world.</p>
       </div>
        </div>


<div className="flex flex-wrap md:flex-nowrap gap-10 mt-[5%]">
  <div className="w-full md:w-1/2">
      <h2 className='font-raleway text-[#006011] text-[34px] font-semibold leading-[40px] mb-5'>Co-curricular Activities</h2>
      <p className="font-raleway text-[#292D32] text-[18px] font-medium leading-[40px]">
      Volleyball, Football, Table tennis, Badminton, Swimming, Dance, Basketball, Phonics, Music, Taekwondo, Athletics, Golf, Cheerleading, Igbo, Yoruba, Drama, French, Reading, Football, Chess, Robotics, Steam, Music, Go Techy (Animation), Athletics, ICT, STEAM, Coding, Fashion Club, Scrabble, Basketball, Public Speaking/Literary & Debating, Reading, Cooking Club, Model African Union, Phonics/Elocution, Young Writer’s Workshop, among others.<br/><span className='block mt-[7%]'></span>Our students have participated in programs like the Duke of Edinburgh Awards (International Award for Young People in Nigeria), Yale Young Global Scholars (YYGS), Yale Young African Scholars (YYAS) program, African Leadership Academy Model African Union (ALAMAU), Ashesi Innovation Experience, Junior Achievement Enterprise Challenge, TechGirls, Leadership camps, community service as well as individually driven social projects.
      </p>

      <h2 className='font-raleway text-[#006011] text-[34px] font-semibold leading-[40px] mt-16 mb-5'>College Application Policy</h2>
      <p className="font-raleway text-[#292D32] text-[18px] font-medium leading-[40px]">
      Students are well enlightened about the college application processes and expectations. Universities and colleges that receive applications can be assured that applicants have a good sense of what is expected of them.
      </p>
  </div>

  <div className="w-full md:w-1/2">
  <div className="mt-5 mb-3 flex-col md:flex-row items-center justify-center gap-4">
  <img src={Image4} alt="/" className="h-[360px] w-full max-w-[418px] md:ml-[150px]" />
  <img src={Image5} alt="Our Founder" className="h-[360px] w-full max-w-[418px] md:mt-[-120px]" />
   </div>
  </div>
</div>


    
        <div className="grid grid-cols-1 md:grid-cols-3 mt-4 gap-1">
        <div className='md:col-span-2 p-4'>
    
        <div className=''> 
        
        </div>
        
        <div className=' mt-5'>
        <h2 className='font-raleway text-[#292D32] text-[34px] font-semibold leading-[39.92xp] mb-6 '>Principal, High School</h2>
        <img src={Image6} alt='/' className='h-[429px] w-[396px]' />
        <p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[21.13xp] mt-4'> Mr. Yusuf Abubakar</p>
        </div>
        </div>
        </div>
        </div>

  <div className="flex flex-col items-center text-center justify-center mb-14">
  <h2 className="font-cormorant text-[#292D32] text-3xl md:text-5xl font-bold leading-tight mb-6">
    University Destinations
  </h2>
  <p className='font-raleway text-[#292D32] text-base md:text-lg font-medium leading-relaxed mr-[20%] ml-[20%] mb-[5%]'>
    Supreme has a proud record of producing graduates who have been admitted into prestigious universities around the world.
  </p>

  <Swiper
  slidesPerView={1}
  spaceBetween={10}
  pagination={{
  clickable: true,
  el: ".custom-pagination", // Custom dots pagination
  }}
  navigation={{
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  }}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  modules={[Navigation, Pagination, Autoplay]}
  className="relative w-full max-w-[1240px] mx-auto px-[5%]"
>
  {/* Custom Navigation Buttons (Outside but Visible) */}
  <button className="custom-prev absolute left-[-1px] top-1/2 transform -translate-y-1/2 z-50 bg-white p-2 rounded-full shadow-lg border border-gray-300">
    <img src={LeftArrow} alt="Previous" className="w-12 h-12" />
  </button>

  <button className="custom-next absolute right-[-1px] top-1/2 transform -translate-y-1/2 z-50 bg-white p-2 rounded-full shadow-lg border border-gray-300">
    <img src={RightArrow} alt="Next" className="w-12 h-12" />
  </button>

  {/* Slider Wrapper */}
  <div className="w-full h-auto">
    <SwiperSlide>
      <img src={Image7} alt="Slide 1" className="w-full h-[935px] object-cover rounded-lg shadow-lg" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={Image8} alt="Slide 2" className="w-full h-[935px] object-cover rounded-lg shadow-lg" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={Image9} alt="Slide 3" className="w-full h-[935px] object-cover rounded-lg shadow-lg" />
    </SwiperSlide>
  </div>

  {/* Custom Pagination */}
  <div className="custom-pagination flex justify-center gap-2 mt-4"></div>
</Swiper>

{/* Custom Styling for Pagination Dots */}
<style jsx>{`
  .swiper-pagination-bullet {
    width: 15px;
    height: 15px;
    background: #C3C3C3; /* Default dot color */
    opacity: 1;
    transition: all 0.3s ease-in-out;
  }
  .swiper-pagination-bullet-active {
    background: #DD3333 !important; /* Active dot color */
    width: 35px; /* Make active dot slightly larger */
    height: 10px;
  }`}</style>
  
</div>     
 </div>
  )
}

export default Highschool
