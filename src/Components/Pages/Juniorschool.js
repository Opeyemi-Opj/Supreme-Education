import React from 'react'
import { useEffect } from 'react';
import Image1 from '../../assets/images/IMG_jun.png'
import Image2 from '../../assets/images/IMG_5031.png'
import Image3 from '../../assets/images/IMG_5033.png'
import Image4 from '../../assets/images/IMG_5034.png'
import Image5 from '../../assets/images/ImageN(8).png'
import Arrowlft from '../../assets/images/arrow-left.png'
import { Link } from 'react-router-dom'; // ✅ Correct Import
import Mapl from '../../assets/images/Map-location-marker.png'

const Juniorschool = () => { 

 useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when page loads
  }, []);


  return (
    <div className='max-w-full'>
    <img src={Image1} alt='Our Founder' className='w-full' />
    
    <p className='text-center font-cormorant text-white text-[32px] sm:text-[48px] md:text-[56px] lg:text-[72px] font-bold leading-tight mt-[-50px] sm:mt-[-80px] md:mt-[-100px] lg:mt-[-130px]'>
    Junior School
    </p>
    
    <div className="flex flex-wrap  px-4 sm:px-8 md:px-[5%] pt-[5%] pb-[3%] lg:pb-[2%] bg-[#F6F8F5] gap-3 sm:gap-6 md:gap-12 lg:gap-16 items-center text-center">
      
      <Link to="/eyfs" className="text-[#292D32] text-[16px] sm:text-[16px] font-medium border-b-2 border-transparent hover:text-[#DD3333] hover:border-[#DD3333] transition-all duration-300">
      EYFS
      </Link>

      <p className='w-[200px] bg-[#DD3333] rounded-md font-raleway text-[#FFFFFF] text-[18px] font-medium leading-[21.13px] px-5 py-3 transition duration-300  '>Junior School</p>
      
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
    <p className='font-raleway text-[#292D32] text-[14px] font-bold leading-[16.44px]'> JUNIOR SCHOOL </p>
    </div>

    <div className="flex flex-col md:flex-row gap-6 p">
     {/* First Column - Larger */}
     <div className="w-full md:w-[65%] bg-white">
     <p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[40xp]'> Supreme Education School is a Sunshine school where everyone is valued and included. Shaping and inspiring children for the future has always been a critical part of the Supreme Education Foundation School vision, and our curriculum brings it to life. We are here to care for, educate and encourage your child to do more and be more always.
        <br/><span className='block mt-5'></span>Our children are secured right from the start of life as we run the full Early Years Foundation Stage curriculum. No child is left behind at Supreme as all the learning goals in the seven (7) areas of the children’s development matters are carefully monitored by qualified early years practitioners.<br/><span className='block mt-5'></span> After-school program at Supreme caters for all children. We offer a conducive environment for them to relax, eat, do homework, extracurricular activities like music and movement, painting, and swimming. We provide critical pathways into key stage 1 that will best suit the needs and skills of each child. <br/><span className='block mt-5'></span> Inclusion is an integral part of the school. Learning is differentiated to ensure all the children are achieving. Children with special education needs are well provided for with an individual education plan to guarantee progression.
     </p>
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
    <img src={Image2} alt='/' className='rounded-lg' />
    </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
    <div className=''>
    <p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[40px]'>
    At the junior school, we run a broad and balanced curriculum that caters for all students. To bridge the gap in the Nigerian Curriculum, there is an infusion of the British curriculum. We follow the English National Curriculum for literacy, numeracy and science. We apply 21st Century researches and intervention methods through visual, auditory and kinesthetic experiences in everyday life, which help to enhance students’ strengths and building blocks that will afford them a functional and independent life.
    </p>
    </div>
   <div className=''>
   <img src={Image3} alt='Our Founder' className='rounded-lg' />
   </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
    <div className=''>
    <img src={Image4} alt='Our Founder' className='rounded-lg' />
    
    </div>
   <div className=''>
    <p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[40px]'>Imagination and creativity are two of the greatest gifts children have. Our children’s views and ideas are sought at every opportunity, as we attach a great deal of importance to developing confident children who can contribute fully to the life of the school. We work hard to develop self-assurance, self-belief, independence with a strong commitment to safeguarding and promoting the over wellbeing of our pupils. Students take responsibility for their learning.</p>
   </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 mt-4 gap-1">
    <div className='md:col-span-2 p-4'>

    <div className=''> 
    <p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[40px]'> Students are encouraged to develop self-respect and confidence, to think independently and to value others, strive for excellence, and above all, to have the fear of God. These are imbedded in our core values. We have a team of committed, experienced, qualified and highly talented teachers that drive our academic excellence and co- curricular activities. <br/><span className='block mt-[5%]'></span> Supreme recognises parents, as the first educators of a child and so we actively seek and value your contribution and commitment in working with us to give your child the best education they deserve.
    We hope that you enjoy your visit to our website, and that you find the information you are looking for.</p>
    </div>
    
    <div className=' mt-16'>
    <h2 className='font-raleway text-[#292D32] text-[34px] font-semibold leading-[39.92xp] mb-6 '>Head, Junior School</h2>
    <img src={Image5} alt='/' className='h-[429px] w-[396px]' />
    <p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[21.13xp] mt-4'> Adebukunola Kay-Dawodu</p>
    </div>
    </div>
    </div>
    </div>
    
  </div>
  )
}

export default Juniorschool
