import React from 'react'
import { Link } from 'react-router-dom'; // ✅ Correct Import
import Image1 from '../../assets/images/image79.png'
import Image2 from '../../assets/images/ImageAdew.png'
import  bg1  from '../../assets/images/Creed.png';
import  bg2  from '../../assets/images/Building-image.png';
import Arrowlft from '../../assets/images/arrow-left.png'


const OurCEO = () => {
return (

<div className='max-w-full'>
<img src={Image1} alt='Our Founder' className='w-full' />

<p className='text-center font-cormorant text-white text-[32px] sm:text-[48px] md:text-[56px] lg:text-[72px] font-bold leading-tight mt-[-50px] sm:mt-[-80px] md:mt-[-100px] lg:mt-[-130px]'>
Our CEO
</p>




<div className="flex flex-wrap  px-4 sm:px-8 md:px-[5%] pt-[5%] pb-[3%] lg:pb-[2%] bg-[#F6F8F5] gap-3 sm:gap-6 md:gap-12 lg:gap-28 items-center text-center">

<Link to="/our-founder" className="text-[#292D32] text-[16px] sm:text-[16px] font-medium border-b-2 border-transparent hover:text-[#DD3333] hover:border-[#DD3333] transition-all duration-300">
Our Founder
</Link>

<p className='w-[200px] bg-[#DD3333] rounded-md font-raleway text-[#FFFFFF] text-[18px] font-medium leading-[21.13px] px-5 py-3 transition duration-300  '>Our CEO</p>

<Link to="/who-we-are" className="text-[#292D32] text-[16px] sm:text-[16px] font-medium border-b-2 border-transparent hover:text-[#DD3333] hover:border-[#DD3333] transition-all duration-300">
Who We Are
</Link>

<Link to="/virtual-tour" className="text-[#292D32] text-[16px] sm:text-[16px] font-medium border-b-2 border-transparent hover:text-[#DD3333] hover:border-[#DD3333] transition-all duration-300">
Virtual Tour
</Link>

<Link to="/contact-us" className="text-[#292D32] text-[16px] sm:text-[16px] font-medium border-b-2 border-transparent hover:text-[#DD3333] hover:border-[#DD3333] transition-all duration-300">
Contact Us
</Link>
</div>

<div className='pl-[5%] pr-[5%] pb-[5%]'>
<div className='flex gap-2 pt-7 pb-16 items-center'>
<   Link to='/' className='font-raleway text-[#292D32] text-[14px] font-bold leading-[16.44px]'> HOME</Link>
<img src={Arrowlft} alt="" className="w-[14px] h-[14px]" />
<p className='font-raleway text-[#292D32] text-[14px] font-bold leading-[16.44px]'> ABOUT US</p>
<img src={Arrowlft} alt="" className="w-[14px] h-[14px]" />
<p className='font-raleway text-[#292D32] text-[14px] font-bold leading-[16.44px]'> OUR FOUNDER </p>
</div>

<div className="flex flex-col md:flex-row gap-6 p">
{/* First Column - Larger */}
<div className="w-full md:w-[65%] bg-white">
<p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[40px]'> 
You are welcome to this exciting world of learners. Supreme Education Foundation is born from a strong partnership between our families, our community, and the professional educators that make us up.<br/><span className='block mt-[7%]'></span>

The world is fast changing and the new generation is resilient at keeping up. You will agree with me that globalization, the advent of information technology and of course the development of a knowledge-based economy are leading to change in an unprecedented rate and scale.<br/><span className='block mt-[7%]'></span>

At Supreme, we have carefully integrated the Nigeria curriculum with the British curriculum. Our lessons are delivered using the British methodology of critical thinking and problem solving. Educators at SEF have hereby inspired a deeper learning culture by focusing on children’s ability to provide solutions with acquired knowledge and not just memorizing facts, but doing so in the context and curiosity of the world children live in and making meaningful connections that help learning become a transformational process.<br/><span className='block mt-[7%]'></span>

Through the years from Creche to Year 12 (senior secondary school 3), our children experience a balanced curriculum that prepares them for the world at large. No wonder our alumni are everywhere in the world and thriving because they have been upstretched with a learning culture that builds on prior knowledge, hence they are equipped to be lifelong learners.
Our facilities are constantly updated to accommodate our learning adventures. The children are motivated to learn and the educators are excited to impact knowledge.<br/><span className='block mt-[7%]'></span>

Supreme is a purposeful and progressive educational institution. I am happy to be a part of the most dynamic and transformative Education organisation. Join us today and you will agree with me that our learning system is indeed SUPREME!
</p>
</div>

{/* Second Column - Smaller */}
<div className="w-full md:w-[35%] p-4">
<img src={Image2} alt='/' className='' />
<h2 className='font-raleway text-[#292D32] text-[22px] font-bold leading-[25.83xp] text-center'>ADEWUYI OLUBUKOLA</h2>
</div>
</div>
</div>


<div className="flex flex-col sm:flex-row gap-5 mb-[5%] px-[5%]">
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
hover:bg-white hover:text-[#006011] hover:border-[#006011]">
Learn more
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

export default OurCEO
