import React from 'react'
import Image1 from '../../assets/images/image84.png'
import Image2 from '../../assets/images/image63.png'
import Image3 from '../../assets/images/Image(16).png'
import Image4 from '../../assets/images/Image(17).png'
import Arrowlft from '../../assets/images/arrow-left.png'
import { Link } from 'react-router-dom'; // ✅ Correct Import
//import LeftArrow from '../../assets/icons/Arrowlt.svg'
//import RightArrow from '../../assets/icons/Arrowrt.svg'
import Mapl from '../../assets/images/Map-location-marker.png'

const Schoolcurriculum = () => {
  return (
    <div className='max-w-full'>
        <img src={Image1} alt='Our Founder' className='w-full' />
        
        <p className='text-center font-cormorant text-white text-[32px] sm:text-[48px] md:text-[56px] lg:text-[72px] font-bold leading-tight mt-[-50px] sm:mt-[-80px] md:mt-[-100px] lg:mt-[-130px]'>
        School Curriculum
        </p>
        
        <div className="flex flex-wrap  px-4 sm:px-8 md:px-[5%] pt-[5%] pb-[3%] lg:pb-[2%] bg-[#F6F8F5] gap-3 sm:gap-6 md:gap-12 lg:gap-20 items-center text-center">
          
          <Link to="/eyfs" className="text-[#292D32] text-[16px] sm:text-[16px] font-medium border-b-2 border-transparent hover:text-[#DD3333] hover:border-[#DD3333] transition-all duration-300">
          EYFS
          </Link>
    
          <Link to="/junior-school" className="text-[#292D32] text-[16px] sm:text-[16px] font-medium border-b-2 border-transparent hover:text-[#DD3333] hover:border-[#DD3333] transition-all duration-300">
          Junior School
          </Link>

          <Link to="/high-school" className="text-[#292D32] text-[16px] sm:text-[16px] font-medium border-b-2 border-transparent hover:text-[#DD3333] hover:border-[#DD3333] transition-all duration-300">
          High School
          </Link>

          <Link to="/teachers-college" className="text-[#292D32] text-[16px] sm:text-[16px] font-medium border-b-2 border-transparent hover:text-[#DD3333] hover:border-[#DD3333] transition-all duration-300">
          Teachers College
          </Link>
    
          <Link to="/academic-calendar" className="text-[#292D32] text-[16px] sm:text-[16px] font-medium border-b-2 border-transparent hover:text-[#DD3333] hover:border-[#DD3333] transition-all duration-300">
          Academic Calendar 
          </Link>

          <p className='w-[200px] bg-[#DD3333] rounded-md font-raleway text-[#FFFFFF] text-[18px] font-medium leading-[21.13px] px-5 py-3 transition duration-300  '> School Curriculum</p>

        </div>
    
        <div className='pl-[5%] pr-[5%]'>
        <div className='flex gap-2 pt-7 pb-16 items-center'>
       <Link to='/' className='font-raleway text-[#292D32] text-[14px] font-bold leading-[16.44px]'> HOME</Link>
       <img src={Arrowlft} alt="" className="w-[14px] h-[14px]" />
        <p className='font-raleway text-[#292D32] text-[14px] font-bold leading-[16.44px]'> ACADEMICS </p>
        <img src={Arrowlft} alt="" className="w-[14px] h-[14px]" />
        <p className='font-raleway text-[#292D32] text-[14px] font-bold leading-[16.44px]'> School Curriculum </p>
        </div>
    
        <div className="flex flex-col md:flex-row gap-6">
         {/* First Column - Larger */}
         <div className="w-full md:w-[65%] bg-white">
         <p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[40xp]'>We provide opportunities for students to study the broadest possible range of subjects and to acquire a variety of important practical and academic skills.</p>
        <h2 className='font-raleway text-[#292D32] text-[20px] font-semibold leading-[23.48px] mt-10 mb-10'>Dedicated Study to Encourage Successful Learning</h2>
        <p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[40xp]'>At Supreme Senior, we ensure all students follow a broad study programme, carefully designed to meet the requirements of the National Curriculum of England and Wales. Through our programme, we prepare our students for successful completion of their secondary education at IGCSE, AS and A level.<br/><span className='block mt-7'></span>At the end of Year 9, students sit the Key Stage 3 National Test Papers in selected core subjects – English, Mathematics and Science, providing the school with a useful benchmark in assessing the students’ progress. IGCSE selection <br/><span className='block mt-5'></span>These courses are carefully tailored to suit individual student needs and subjects offered may include: Art and Design, Biology ,Business Studies, Chemistry, Economics, English Language , English Literature, French, Geography, History, Mathematics, Information Technology , Music , Physics, Physical Education</p>

<div className="flex flex-wrap md:flex-nowrap gap-1">
   <div className="w-full md:w-[30%]">
    <div className="flex items-center gap-4 mt-5 mb-3">
      <img src={Mapl} alt="" className="w-10 h-10" />
      <p className="font-raleway text-[#292D32] text-lg font-medium leading-[21.13px]">
      Art and Design
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
      Business Studies
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
      Economics
      </p>
    </div>

    <div className="flex items-center gap-4 mt-5 mb-3">
      <img src={Mapl} alt="" className="w-10 h-10" />
      <p className="font-raleway text-[#292D32] text-lg font-medium leading-[21.13px]">
      English Language
      </p>
    </div>

    <div className="flex items-center gap-4 mt-5 mb-3">
      <img src={Mapl} alt="" className="w-10 h-10" />
      <p className="font-raleway text-[#292D32] text-lg font-medium leading-[21.13px]">
      English Literature
      </p>
    </div>

    <div className="flex items-center gap-4 mt-5 mb-3">
      <img src={Mapl} alt="" className="w-10 h-10" />
      <p className="font-raleway text-[#292D32] text-lg font-medium leading-[21.13px]">
      French
      </p>
    </div>
  </div>

  <div className="w-full md:w-[35%]">
    <div className="flex items-center gap-4 mt-5 mb-3">
      <img src={Mapl} alt="" className="w-10 h-10" />
      <p className="font-raleway text-[#292D32] text-lg font-medium leading-[21.13px]">
      Geography
      </p>
    </div>

    <div className="flex items-center gap-4 mt-5 mb-3">
      <img src={Mapl} alt="" className="w-10 h-10" />
      <p className="font-raleway text-[#292D32] text-lg font-medium leading-[21.13px]">
      History
      </p>
    </div>

    <div className="flex items-center gap-4 mt-5 mb-3">
      <img src={Mapl} alt="" className="w-10 h-10" />
      <p className="font-raleway text-[#292D32] text-lg font-medium leading-[21.13px]">
      Mathematics
      </p>
    </div>

    <div className="flex items-center gap-4 mt-5 mb-3">
      <img src={Mapl} alt="" className="w-10 h-10" />
      <p className="font-raleway text-[#292D32] text-lg font-medium leading-[21.13px]">
      Information Technology
      </p>
    </div>

    <div className="flex items-center gap-4 mt-5 mb-3">
      <img src={Mapl} alt="" className="w-10 h-10" />
      <p className="font-raleway text-[#292D32] text-lg font-medium leading-[21.13px]">
      Music
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
      Physical Education
      </p>
    </div>
  </div>
</div>
<img src={Image2} alt='/' className='w-full rounded-md mt-10' />

<h2 className='font-raleway text-[#292D32] text-[20px] font-semibold leading-[23.48px] mt-10 mb-10'>AS and A Level Selection</h2>

<p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[40xp]'>AS and A level courses are offered to students in Years 12 and 13 who have achieved a minimum of five C grades in their equivalent IGCSE subjects. These courses are tailored to suit student needs and subjects offered may include: Art and Design, Biology, Business Studies, Chemistry, Economics, English Language , English Literature, French, Geography, History, Mathematics, Information Technology , Music , Physics and Physical Education. 
<br/><span className='block mt-7'></span> Students buy their IGCSE text books through the school; this ensures resources are available for reference and revision while at the same time facilitating learning.</p>
<h2 className='font-raleway text-[#292D32] text-[20px] font-semibold leading-[23.48px] mt-10 mb-10'>Extra-Curricular Activities</h2>
<p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[40xp]'>At Supreme Senior we recognise strong academic performance alone is not enough. Which is why we invest in extra-curricula activities that help our students to develop and stimulate creativity, build confidence, learn life skills and create social awareness.
Activities include dance, drama, computer, chess and music. Students are also encouraged to take part in community activities such as visiting ages and fund-raising for charity.</p>
</div>
</div>
    
 {/* Second Column - Smaller */}
 <div className="w-full md:w-[35%] p-4">
        
</div>
 </div>

 <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-[5%] py-5">
  {/* First Column */}
  <div className="w-full md:w-1/2  rounded-lg">
  <img src={Image3} alt='Our Founder' className='w-full' />
  </div>

  {/* Second Column */}
  <div className="w-full md:w-1/2  rounded-lg">
  <img src={Image4} alt='Our Founder' className='w-full' />
  </div>
</div>


<div className="flex flex-col md:flex-row gap-6 px-[5%] py-5 mb-10">
  {/* First Column (65%) */}
  <div className="w-full md:w-[65%] ">
  <h2 className='font-raleway text-[#292D32] text-[20px] font-semibold leading-[23.48px] mt-10 mb-10'>School Trips</h2>
<p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[40xp]'>Student tours and excursions are also part of the Supreme School experience, with past locations ranging from places to places.</p>
<h2 className='font-raleway text-[#292D32] text-[20px] font-semibold leading-[23.48px] mt-10 mb-10'>Arts & Culture</h2>
<p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[40xp]'>Along with our excellent selection of clubs, sporting opportunities and organised day trips, we also encourage an appreciation of the Arts. Students are expected to engage in cultural activities during each academic term, with stimulating drama productions at special celebrations throughout the year.</p>
  </div>

  {/* Second Column (35%) */}
  <div className="w-full md:w-[35%] ">
  
  </div>
</div>



 </div>
  )
}

export default Schoolcurriculum
