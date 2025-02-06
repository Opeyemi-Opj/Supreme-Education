import React from 'react'
import { Link } from 'react-router-dom'; // ✅ Correct Import
import Image1 from '../../assets/images/imagewhow.png'
import Image2 from '../../assets/images/Imagels.png'


const Whoweare = () => {
  return (
    <div className='max-w-full'>
          <img src={Image1} alt='Our Founder' className='w-full' />
          
          <p className='text-center font-cormorant text-white text-[32px] sm:text-[48px] md:text-[56px] lg:text-[72px] font-bold leading-tight mt-[-50px] sm:mt-[-80px] md:mt-[-100px] lg:mt-[-130px]'>
          Who we are
          </p>
          
          
    
          
          <div className="flex flex-wrap  px-4 sm:px-8 md:px-[5%] pt-[5%] pb-[3%] lg:pb-[2%] bg-[#F6F8F5] gap-3 sm:gap-6 md:gap-12 lg:gap-28 items-center text-center">
    
            <Link to="/our-founder" className="text-[#292D32] text-[16px] sm:text-[16px] font-medium border-b-2 border-transparent hover:text-[#DD3333] hover:border-[#DD3333] transition-all duration-300">
            Our Founder
            </Link>
    
            <Link to="/our-ceo" className="text-[#292D32] text-[16px] sm:text-[16px] font-medium border-b-2 border-transparent hover:text-[#DD3333] hover:border-[#DD3333] transition-all duration-300">
            Our CEO
            </Link>

            <p className='w-[200px] bg-[#DD3333] rounded-md font-raleway text-[#FFFFFF] text-[18px] font-medium leading-[21.13px] px-5 py-3 transition duration-300  '>Who We Are</p>
            
            
            <Link to="/virtual-tour" className="text-[#292D32] text-[16px] sm:text-[16px] font-medium border-b-2 border-transparent hover:text-[#DD3333] hover:border-[#DD3333] transition-all duration-300">
              Virtual Tour
            </Link>
            
            <Link to="/contact-us" className="text-[#292D32] text-[16px] sm:text-[16px] font-medium border-b-2 border-transparent hover:text-[#DD3333] hover:border-[#DD3333] transition-all duration-300">
              Contact Us
            </Link>
          </div>
    
          <div className='pl-[5%] pr-[5%] pb-[5%]'>
          <div className='flex gap-4 pt-7 pb-16 items-center'>
      <   Link to='/' className='font-raleway text-[#292D32] text-[14px] font-bold leading-[16.44px]'> HOME &gt;</Link>
          <p className='font-raleway text-[#292D32] text-[14px] font-bold leading-[16.44px]'> ABOUT US &gt; </p>
          <p className='font-raleway text-[#292D32] text-[14px] font-bold leading-[16.44px]'> OUR FOUNDER </p>
          </div>
    
          <div className="flex flex-col md:flex-row gap-20">
           {/* First Column - Larger */}
           <div className="w-full md:w-[65%] bg-white">
           <p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[40xp]'> 
           Supreme Education Foundation Schools is a centre of excellence designed to provide world-class education in an exciting learning environment for students between the ages of 3 months to 18 years. Our structure begins with the Junior School comprising of the Crèche; the Early Years Foundation Stage, Key Stages 1 & 2. The High School comprises of Key Stages 3 & 4 (Years 7 – 12).<br/><span className='block mt-[7%]'></span>

The School is located in Magodo G.R.A Phase 2, Lagos; about 30 minutes’ drive from the Murtala Mohammed International Airport.
The serene setting provides a stimulating environment for learning. Established in 1991, the school is co-educational and multi-cultural, providing access to day, partial and full boarding options for students.<br/><span className='block mt-[7%]'></span>

Supreme Education Foundation School is a centre of excellence designed to provide world-class education in an exciting learning environment for students between the ages of 3 months to 18 years. Our structure begins with the Junior School comprising of the Crèche; the Early Years Foundation Stage, Key Stages 1 & 2. The High School comprises of Key Stages 3 & 4 (Years 7 – 12).
           </p>
           <div className='mt-10'>
            <h2 className='font-cormorant text-[#629948] text-[48px] font-bold leading-[58.13px]'>Mission</h2>
            <p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[40xp] mt-5'>To model an educational system that collaborates with various stakeholders to discover, develop and deploy positive influencers who transform societies.</p>
            <h2 className='font-cormorant text-[#629948] text-[48px] font-bold leading-[58.13px] mt-14'>Our Vision</h2>
            <p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[40xp] mt-5'>To raise a tribe of positive influencers who transform every culture in service to God and humanity.</p>

           </div>
            </div>
    
           {/* Second Column - Smaller */}
          <div className="w-full md:w-[35%] p-4">
          <img src={Image2} alt='/' className='' />
          </div>
          </div>
          </div>

          <div className='pl-[5%] pr-[5%]'>
          <div className="justify-center items-center bg-[#006011] min-h-[50vh] sm:min-h-[40vh] p-10 rounded-md text-center">
           <h2 className="text-[#FFFFFF] text-2xl font-bold">Creed</h2>
           <p className="font-raleway text-[#FFFFFF] text-[22px] font-medium leading-[40px] italic mt-5 pl-[14%] pr-[14%]">
           "I am a symbol of creative intelligence because I influence positively. I collaborate to serve with competence and integrity because I care. I am Supreme! and I am the standard."
           </p>
           </div>
          </div>


          <div className='p-[5%] mb-[10px]'>
          <h1 className='font-cormorant text-[#629948] text-[48px] font-bold leading-[58.13px]'>Our School Anthem</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mt-6">
          <div className='min-h-[250px]  flex-col'>
          <h2 className='font-raleway text-[#292D32] text-[18px] font-bold leading-[21.13xp] mb-3'>Anthem </h2>
          <p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[40xp]'>Lord of life one voice we raise<br/><span className='block mt-3'></span>For our dear school we give you praise.<br/><span className='block mt-3'></span>Strength for the challenges of our days<br/><span className='block mt-3'></span>And light to guide our path we pray.<br/><span className='block mt-3'></span>No other foundation can be laid<br/><span className='block mt-3'></span>Supreme Education Foundation.</p>
          </div>

          <div className="min-h-[250px]  flex-col">
          <h2 className='font-raleway text-[#292D32] text-[18px] font-bold leading-[21.13xp] mb-3'>Chorus</h2>
           <p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[40xp]'>Supreme!,<br/><span className='block mt-3'></span>Supreme!<br/><span className='block mt-3'></span>Supreme Education Foundation<br/><span className='block mt-3'></span>Supreme!,<br/><span className='block mt-3'></span>Supreme!<br/><span className='block mt-3'></span>Supreme Education Foundation</p>
         </div>

        <div className='min-h-[250px]'>
        
       </div>

       </div>
       </div>

   
    </div>
  )
}

export default Whoweare
