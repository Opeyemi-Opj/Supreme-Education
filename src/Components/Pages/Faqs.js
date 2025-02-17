import React from 'react'
import Image1 from '../../assets/images/Faqsimg.png'
import Arrowlft from '../../assets/images/arrow-left.png'
import { Link } from 'react-router-dom'; // ✅ Correct Import
import  bg1  from '../../assets/images/Creed.png';
import  bg2  from '../../assets/images/Building-image.png'
import FAQAccordion from '../../Components/FAQAccordion '

const Faqs = () => {


  return (
<div>
<img src={Image1} alt='Our Founder' className='w-full' />

<p className='text-center font-cormorant text-white text-[32px] sm:text-[48px] md:text-[56px] lg:text-[72px] font-bold leading-tight mt-[-50px] sm:mt-[-80px] md:mt-[-100px] lg:mt-[-130px]'>
FAQs
</p>

<div className="flex flex-wrap  px-4 sm:px-8 md:px-[5%] pt-[5%] pb-[3%] lg:pb-[2%] bg-[#F6F8F5] gap-3 sm:gap-6 md:gap-12 lg:gap-28 items-center text-center">


<Link to="/how-to-apply" className="text-[#292D32] text-[16px] sm:text-[16px] font-medium border-b-2 border-transparent hover:text-[#DD3333] hover:border-[#DD3333] transition-all duration-300">
How to apply
</Link>

<Link to="/" className="text-[#292D32] text-[16px] sm:text-[16px] font-medium border-b-2 border-transparent hover:text-[#DD3333] hover:border-[#DD3333] transition-all duration-300">
Registration form
</Link>

<Link to="/" className="text-[#292D32] text-[16px] sm:text-[16px] font-medium border-b-2 border-transparent hover:text-[#DD3333] hover:border-[#DD3333] transition-all duration-300">
SMC Registration form
</Link>


<Link to="/enquiry" className="text-[#292D32] text-[16px] sm:text-[16px] font-medium border-b-2 border-transparent hover:text-[#DD3333] hover:border-[#DD3333] transition-all duration-300">
    Enquiry
</Link>

<p className='w-[200px] bg-[#DD3333] rounded-md font-raleway text-[#FFFFFF] text-[18px] font-medium leading-[21.13px] px-5 py-3 transition duration-300  '>Faqs</p>

</div>

<div className='pl-[5%] pr-[5%]'>
<div className='flex gap-2 pt-7 pb-16 items-center'>
<Link to='/' className='font-raleway text-[#292D32] text-[14px] font-bold leading-[16.44px]'> HOME</Link>
<img src={Arrowlft} alt="" className="w-[14px] h-[14px]" />
<p className='font-raleway text-[#292D32] text-[14px] font-bold leading-[16.44px]'> ADMISSIONS </p>
<img src={Arrowlft} alt="" className="w-[14px] h-[14px]" />
<p className='font-raleway text-[#292D32] text-[14px] font-bold leading-[16.44px]'> FAQs </p>
</div>
</div>

<div className='px-[5%] ' >
  <FAQAccordion />

</div>

<div className="flex flex-col sm:flex-row gap-5 mb-[5%] px-[5%] pt-[5%]"> 
    {/* Column 1 */}
<div className="flex-1 min-h-[314px] rounded-md text-center grid place-items-center group overflow-hidden relative"
style={{ backgroundImage: `url(${bg1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        
                        {/* Background Overlay */}
<div className="absolute inset-0 bg-[#00000066] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    
                        {/* Content */}
<div className="relative z-10 w-full px-5 flex flex-col items-center space-y-5 transition-transform duration-[1.2s] ease-in-out translate-y-[126%] group-hover:translate-y-0">
<h2 className="font-cormorant text-white text-[40px] font-medium leading-[48.44px]">Who we are</h2>
                        
                        {/* Button */}
<button className="flex mx-auto font-raleway text-white text-[14px] font-medium leading-[16.44px] 
border border-[#C6C5C5] rounded-[8px] px-[25px] py-[15px] items-center gap-5 transition duration-300
hover:bg-white hover:text-[#006011] hover:border-[#006011]">Learn more
<svg className="w-[31px] h-[8px] transition duration-300 fill-white group-hover:fill-[#006011]" 
xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 8">
<path d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.84171 30.3536 3.64645L27.1716 0.464466C26.9763 0.269204 26.6597 0.269204 26.4645 0.464466C26.2692 0.659728 26.2692 0.976311 26.4645 1.17157L29.2929 4L26.4645 6.82843C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.7308 26.9763 7.7308 27.1716 7.53553L30.3536 4.35355ZM0 4.5H30V3.5H0V4.5Z" />
</svg>
</button>
</div>
</div>
{/* Column 2 */}
<div className="flex-1 min-h-[314px] rounded-md text-center grid place-items-center group overflow-hidden relative"
style={{ backgroundImage: `url(${bg2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

{/* Background Overlay */}
<div className="absolute inset-0 bg-[#00000066] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

{/* Content */}
<div className="relative z-10 w-full px-5 flex flex-col items-center space-y-5 transition-transform duration-[1.2s] ease-in-out translate-y-[126%] group-hover:translate-y-0">
<h2 className="font-cormorant text-white text-[40px] font-medium leading-[48.44px]">Take a virtual Tour</h2>

{/* Button */}
<button className="flex mx-auto font-raleway text-white text-[14px] font-medium leading-[16.44px] 
border border-[#C6C5C5] rounded-[8px] px-[25px] py-[15px] items-center gap-5 transition duration-300
hover:bg-white hover:text-[#006011] hover:border-[#006011]">
Learn more
<svg className="w-[31px] h-[8px] transition duration-300 fill-white group-hover:fill-[#006011]" 
xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 8">
<path d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.84171 30.3536 3.64645L27.1716 0.464466C26.9763 0.269204 26.6597 0.269204 26.4645 0.464466C26.2692 0.659728 26.2692 0.976311 26.4645 1.17157L29.2929 4L26.4645 6.82843C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.7308 26.9763 7.7308 27.1716 7.53553L30.3536 4.35355ZM0 4.5H30V3.5H0V4.5Z" />
</svg>
</button>
</div>
</div>
</div>   
      
    </div>
  )
}

export default Faqs
