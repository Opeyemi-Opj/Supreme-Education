import React from 'react'
import { Link } from 'react-router-dom'; // ✅ Correct Import
import Image1 from '../../assets/images/image82.png'
import Dot from '../../assets/images/dot.png'
import Arrowlft from '../../assets/images/arrow-left.png'



const Howtoapply = () => {
  return (
    <div className='max-w-full'> 
        <img src={Image1} alt='Our Founder' className='w-full' />
              
              <p className='text-center font-cormorant text-white text-[32px] sm:text-[48px] md:text-[56px] lg:text-[72px] font-bold leading-tight mt-[-50px] sm:mt-[-80px] md:mt-[-100px] lg:mt-[-130px]'>
              How to apply
              </p>
              
              <div className="flex flex-wrap  px-4 sm:px-8 md:px-[5%] pt-[5%] pb-[3%] lg:pb-[2%] bg-[#F6F8F5] gap-3 sm:gap-6 md:gap-12 lg:gap-28 items-center text-center">
        
              <p className='w-[200px] bg-[#DD3333] rounded-md font-raleway text-[#FFFFFF] text-[18px] font-medium leading-[21.13px] px-5 py-3 transition duration-300  '>How to apply</p>
                
                <Link to="/our-ceo" className="text-[#292D32] text-[16px] sm:text-[16px] font-medium border-b-2 border-transparent hover:text-[#DD3333] hover:border-[#DD3333] transition-all duration-300">
                Registration form
                </Link>
                
                <Link to="/who-we-are" className="text-[#292D32] text-[16px] sm:text-[16px] font-medium border-b-2 border-transparent hover:text-[#DD3333] hover:border-[#DD3333] transition-all duration-300">
                SMC Registration form
                </Link>
                
                <Link to="/enquiry" className="text-[#292D32] text-[16px] sm:text-[16px] font-medium border-b-2 border-transparent hover:text-[#DD3333] hover:border-[#DD3333] transition-all duration-300">
                Enquiry
                </Link>
                
                <Link to="/faqs" className="text-[#292D32] text-[16px] sm:text-[16px] font-medium border-b-2 border-transparent hover:text-[#DD3333] hover:border-[#DD3333] transition-all duration-300">
                 FAQs
                </Link>
              </div>
        
              <div className='pl-[5%] pr-[5%] pb-[5%]'>
              <div className='flex gap-2 pt-7 pb-16 items-center'>
             <Link to='/' className='font-raleway text-[#292D32] text-[14px] font-bold leading-[16.44px]'> HOME</Link>
             <img src={Arrowlft} alt="" className="w-[14px] h-[14px]" />
              <p className='font-raleway text-[#292D32] text-[14px] font-bold leading-[16.44px]'> ADMISSIONS </p>
              <img src={Arrowlft} alt="" className="w-[14px] h-[14px]" />
              <p className='font-raleway text-[#292D32] text-[14px] font-bold leading-[16.44px]'> HOW TO APPLY </p>
              </div>
        
              <div className="flex flex-col md:flex-row gap-16 p">
               {/* First Column - Larger */}
               <div className="w-full md:w-[65%] bg-white">
               <p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[40xp]'>
                Admission is strictly by merit, without bias of sex, religion, ethnic or cultural background. Entry age into our crèche is from 3 months, Play Group is from 18 months, Nursery is from 2 years, Year 1 is from 5 years and Year 7 at least 10 years old as at December 31st of the admission year.
               </p>
               <h2 className='font-raleway text-[#292D32] text-[26px] font-semibold leading-[30.52px] mt-10'>Steps on how to apply</h2>
               <h2 className='font-raleway text-[#292D32] text-[18px] font-semibold leading-[40px] mt-5'>Step 1: Make payment online</h2>

               <div className='ml-[60px]'>
               <p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[40xp] mt-5'>
                Early Years Foundation Stage (EYFS) : N10,000<br/><span className='block mt-5'></span>
                Junior School (Primary Section): N15, 000<br/><span className='block mt-5'></span>
                High School (Secondary Section): N20, 000</p>
                </div>
                <h2 className='font-raleway text-[#292D32] text-[18px] font-semibold leading-[40px] mt-5'>Step 2: The following hard copies should be submitted to Admissions office or scanned to <span className="text-[#DD3333] underline decoration-[#DD3333]">admissions@supremeeducation.com</span></h2>

                <div className='ml-[60px]'>
                    <p className='space-x-3 font-raleway text-[#292D32] text-[18px] font-medium leading-[40xp] mt-5'><span>• </span> <span>2 recent Passport Photographs</span></p>
                    <p className='space-x-3 font-raleway text-[#292D32] text-[18px] font-medium leading-[40xp] mt-5'><span>• </span> <span>Birth certificate</span></p>
                    <p className='space-x-3 font-raleway text-[#292D32] text-[18px] font-medium leading-[40xp] mt-5'><span>• </span> <span>Immunization rec</span></p>
                    <p className='space-x-3 font-raleway text-[#292D32] text-[18px] font-medium leading-[40xp] mt-5'><span>• </span> <span>Immunization records</span></p>
                    <p className='space-x-3 font-raleway text-[#292D32] text-[18px] font-medium leading-[40xp] mt-5'><span>• </span> <span>Last result from present school</span></p>
                </div>
                <h2 className='font-raleway text-[#292D32] text-[18px] font-semibold leading-[40px] mt-5'>Step 3: An assessment for Junior School and a highly competitive entrance examination for High School is taken.</h2>
                <h2 className='font-raleway text-[#292D32] text-[18px] font-semibold leading-[40px] mt-5'>Step 4: An interview is conducted for successful candidates and their parents.</h2>
                <h2 className='font-raleway text-[#292D32] text-[18px] font-semibold leading-[40px] mt-5'>Step 5: A letter of offer of admission is issued and acceptance of offer communicated through the payment of acceptance fees.</h2>
                <h2 className='font-raleway text-[#292D32] text-[18px] font-semibold leading-[40px] mt-5'>Step 56: Evidence of payment should be brought to the Accounts department or scanned and mailed to <span className="text-[#DD3333] underline decoration-[#DD3333]"><a href="mailto:admissions@supremeeducation.com" target="_blank" rel="noopener noreferrer">admissions@supremeeducation.com</a></span> or send to <span className="text-[#DD3333] underline decoration-[#DD3333]">WhatsApp</span></h2>
               
                <div className='bg-[#ECECEC] rounded-md p-[5% border-2 border-black] p-5 mt-[5%]'>
               <p className='font-raleway text-[#292D32] text-[16px] font-medium leading-[32xp]'>
               Year 9 and Year 12 students are strongly advised to be in the hostel because of early morning and evening extra classes.
               </p>
               </div>

               <div className='bg-[#F3F8FF] rounded-md p-[5% border-2 border-black] p-5 mt-[5%]'>
               <p className='font-raleway text-[#0B50A8] text-[16px] font-normal leading-[32xp]'>
               You can Also make payment online <span className="text-[#0B50A8] underline decoration-[#0B50A8]"> <Link to="/">HERE</Link> </span> </p>
               <div className='pl-5'>
                <p className='font-raleway text-[#0B50A8] text-[16px] font-normal leading-[32xp]'><br/> 1. <span className="text-[#0B50A8] underline decoration-[#0B50A8]"><Link to='/'>Download </Link></span>Past Questions <br/>2. Complete Online form and submit. <span className="text-[#0B50A8] underline decoration-[#0B50A8]"><Link to='/'>(Click here</Link></span> for online admission form)
                </p>
               </div>
               </div>

               <div className='bg-[#FAFAFA] rounded-md p-10 mt-[5%]'>
               <p className='font-raleway text-[#525458] text-[16px] font-medium leading-[32xp]'>
               Requests for transfer to Years 8, 9, 10, 11, will be at the discretion of Management after consideration of transcripts and letters of reference from the applicant’s previous school. Further enquiries can be made at the school.
               </p>
               </div>
               </div>
              
                
               {/* Second Column - Smaller */}
              <div className="w-full md:w-[35%] p-4">
                <div className='bg-[#EAFFEE] rounded-md p-6'>
                <h2 className=' text-[#068A1D] font-raleway text-[24px] font-semibold leading-[41px] '>Supreme Exam Dates</h2>
                
                <div className="flex gap-2 items-center">
                <img src={Dot} alt="/" className="w-[10px] h-[10px]" />
                 <p className="font-raleway text-[#068A1D] text-[18px] font-medium leading-[32px]">
                Scholarship Entrance Examination into</p>
                </div>
                <p className="font-raleway text-[#068A1D] text-[18px] font-medium leading-[32px] pl-5">
                Year 7 (Saturday 9th March, 2024)</p>
                <div className="flex gap-2 items-center mt-5">
                <img src={Dot} alt="/" className="w-[10px] h-[10px]" />
                 <p className="font-raleway text-[#068A1D] text-[18px] font-medium leading-[32px]">
                Scholarship Entrance Examination into</p>
                </div>
                <p className="font-raleway text-[#068A1D] text-[18px] font-medium leading-[32px] pl-5">
                Year 7 (Saturday 9th March, 2024)</p>
                <div className="flex gap-2 items-center mt-5">
                <img src={Dot} alt="/" className="w-[10px] h-[10px]" />
                 <p className="font-raleway text-[#068A1D] text-[18px] font-medium leading-[32px]">
                 Transfer Examination to other Classes</p>
                </div>
                <p className="font-raleway text-[#068A1D] text-[18px] font-medium leading-[32px] pl-5">
                (July, 2024)</p>
                </div>

                <div className='bg-[#EAFFEE] rounded-md p-6 mt-10'>
                <h2 className=' text-[#068A1D] font-raleway text-[24px] font-semibold leading-[41px] '>Overseas Students</h2>
                
                
                <p className="font-raleway text-[#068A1D] text-[18px] font-medium leading-[32px] pl-5">
                Parents who live outside Nigeria are welcome to apply for admission for their children. We can schedule and administer entrance tests through the applicant’s current school.</p>
                
                <p className="font-raleway text-[#068A1D] text-[18px] font-medium leading-[32px] pl-5 mt-10">
                Admissions Forms can also be completed on-line on <span className="text-[#DD3333] underline decoration-[#DD3333]">www.supremeeducation.com</span></p>
                </div>
                
                <div className='bg-[#FFF5F5] rounded-md p-6 mt-10'>
                <p className="font-raleway text-[#DD3333] text-[18px] font-medium leading-[32px] pl-5">
                Kindly note that it is of importance that the current school gives Reference Letter.
               <br/><span className=' block mt-6'>Medical Reports ONLY from the school's recognised health facilities are also accepted.</span></p>
                </div>

                <div className='bg-[#006011] rounded-md p-8 mt-10'>
                
                <p className="font-raleway text-[#FFFFFF] text-[18px] font-medium leading-[32px] pl-5">
                For further enquiries, please call 08112390403, 08182984015 or 08112390396 </p>
        
                </div>

                
              </div>
            
              </div>
      
    </div>
    </div>
  )
}

export default Howtoapply
