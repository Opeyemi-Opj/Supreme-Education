import React from 'react'
import { useEffect } from 'react';
import Image1 from '../../assets/images/image64.png'
import Image2 from '../../assets/images/NImage75.png'
import Image3 from '../../assets/images/image76.png'
import Image4 from '../../assets/images/image77.png'
import Image5 from '../../assets/images/Imagenew.png'
import Arrowlft from '../../assets/images/arrow-left.png'
import { Link } from 'react-router-dom'; // ✅ Correct Import
import Mapl from '../../assets/images/Map-location-marker.png'




const Eyfs = () => {

 useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when page loads
  }, []);

  return (
    <div className='max-w-full'>
      <img src={Image1} alt='Our Founder' className='w-full' />
      
      <p className='text-center font-cormorant text-white text-[32px] sm:text-[48px] md:text-[56px] lg:text-[72px] font-bold leading-tight mt-[-50px] sm:mt-[-80px] md:mt-[-100px] lg:mt-[-130px]'>
      EYFS
      </p>
      
      <div className="flex flex-wrap  px-4 sm:px-8 md:px-[5%] pt-[5%] pb-[3%] lg:pb-[2%] bg-[#F6F8F5] gap-3 sm:gap-6 md:gap-12 lg:gap-16 items-center text-center">

      <p className='w-[200px] bg-[#DD3333] rounded-md font-raleway text-[#FFFFFF] text-[18px] font-medium leading-[21.13px] px-5 py-3 transition duration-300  '>EYFS</p>
        
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
      <p className='font-raleway text-[#292D32] text-[14px] font-bold leading-[16.44px]'> EYFS </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 p">
       {/* First Column - Larger */}
       <div className="w-full md:w-[65%] bg-white">
       <p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[40xp]'> Our Early Years Foundation Stage is designed for children from three months to five years old, providing a structured approach to early childhood education. We focus on seven key areas of learning and development:</p>
         <div className='flex items-center gap-4 mt-5 mb-3 '>
           <img src={Mapl} alt="" className="w-[40px] h-[40px]" />
           <p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[21.13px]'>
           Personal, Social, and Emotional Development
           </p>
         </div>

         <div className='flex items-center gap-4  mb-3 '>
           <img src={Mapl} alt="" className="w-[40px] h-[40px]" />
           <p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[21.13px]'>
           Communication and Language
           </p>
         </div>

         <div className='flex items-center gap-4  mb-3 '>
           <img src={Mapl} alt="" className="w-[40px] h-[40px]" />
           <p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[21.13px]'>
           Physical Development
           </p>
         </div>

         <div className='flex items-center gap-4  mb-3 '>
           <img src={Mapl} alt="" className="w-[40px] h-[40px]" />
           <p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[21.13px]'>
           Literacy
           </p>
         </div>
         
         <div className='flex items-center gap-4  mb-3 '>
           <img src={Mapl} alt="" className="w-[40px] h-[40px]" />
           <p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[21.13px]'>
           Mathematics
           </p>
         </div>

         <div className='flex items-center gap-4  mb-3 '>
           <img src={Mapl} alt="" className="w-[40px] h-[40px]" />
           <p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[21.13px]'>
           Understanding the World
           </p>
         </div>

         <div className='flex items-center gap-4  mb-6 '>
           <img src={Mapl} alt="" className="w-[40px] h-[40px]" />
           <p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[21.13px]'>
           Expressive Arts and Design
           </p>
         </div>
         <p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[40xp]'> EYFS at Supreme Education Foundation School ensures that every child’s individual needs are met, fostering holistic development across various domains—physical, social, emotional, and cognitive. Every child is unique, and our EYFS program acknowledges this diversity. Teachers at Supreme Education Foundation School create individualized learning plans, catering to each child’s specific strengths and areas for improvement.<br/><span className='block mt-[7%]'></span>Recognizing the significance of play in a child’s development, our EYFS curriculum incorporates play-based learning strategies; hence, our beautiful environment for outdoor learning, which provides a natural and enjoyable way for children to explore, learn, and develop essential skills.</p>
        </div>

       {/* Second Column - Smaller */}
      <div className="w-full md:w-[35%] p-4">
      <img src={Image2} alt='/' className='' />
      </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
      <div className=''>
      <img src={Image3} alt='Our Founder' className='rounded-lg ' />
      </div>
     <div className=''>
     <img src={Image4} alt='Our Founder' className='rounded-lg' />
     </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 mt-4 gap-1">
      <div className='md:col-span-2 p-4'>
      <p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[40xp]'> In addition, as a parent at Supreme Education Foundation School, you are not left behind; we encourage active involvement from parents in their child’s learning journey and our signature events: Colour Day, Tea Party, and EYFS Production. Your role further keeps you grounded in our practices towards raising future leaders that will positively shape society. We keep you abreast of what’s happening in school via daily communication, parent-teacher conferences, and a family enrichment program to ensure a collaborative approach to your child’s education.<br/><span className='block mt-[7%]'></span> We warmly encourage you to visit us today to experience for yourself the ambience around the school, the health facilities, and the quality of education given to all our children. Together, let’s build a strong foundation for your child’s success!<br/><span className='block mt-[7%]'></span>We invite you to be a part of this transformative journey. Come, visit us, and let’s build the foundation for your child’s success together. We look forward to welcoming you into the Supreme Education Foundation School family, where every child’s potential is recognized, celebrated, and nurtured. Your child’s journey to success begins here.</p>
      <div className=' mt-16'>
      <h2 className='font-raleway text-[#292D32] text-[22px] font-bold leading-[25.83xp] mb-6 '>Principal of EYFS</h2>
      <img src={Image5} alt='/' className='h-[429px] w-[396px]' />
      <p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[21.13xp] mt-4'> Mrs. Olabisi Osibowale </p>
      </div>

      </div>
      
      </div>




      </div>

     

      
    </div>
  )
}

export default Eyfs
