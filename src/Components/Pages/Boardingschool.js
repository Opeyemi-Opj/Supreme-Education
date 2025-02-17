import React from 'react'
import Image1 from '../../assets/images/IMG_Board-S.png'
import Image2 from '../../assets/images/Image(18).png'
import Image3 from '../../assets/images/Meal.png'
import Image4 from '../../assets/images/Image(19).png'
import Image5 from '../../assets/images/Image(20).png'
import Image6 from '../../assets/images/Image(21).png'
import Image7 from '../../assets/images/Image(22).png'
import { Link } from 'react-router-dom'; // ✅ Correct Import
import Arrowlft from '../../assets/images/arrow-left.png'

const Boardingschool = () => {
  return (
    
<div className='max-w-full'>
<img src={Image1} alt='Our Founder' className='w-full' />

<p className='text-center font-cormorant text-white text-[32px] sm:text-[48px] md:text-[56px] lg:text-[72px] font-bold leading-tight mt-[-50px] sm:mt-[-80px] md:mt-[-100px] lg:mt-[-130px]'>
Boarding School
</p>

<div className="flex flex-wrap  px-4 sm:px-8 md:px-[5%] pt-[5%] pb-[3%] lg:pb-[2%] bg-[#F6F8F5] gap-3 sm:gap-6 md:gap-12 lg:gap-28 items-center text-center">

<p className='w-[200px] bg-[#DD3333] rounded-md font-raleway text-[#FFFFFF] text-[18px] font-medium leading-[21.13px] px-5 py-3 transition duration-300  '> Boarding School</p>

<Link to="/co-curricular-activities" className="text-[#292D32] text-[16px] sm:text-[16px] font-medium border-b-2 border-transparent hover:text-[#DD3333] hover:border-[#DD3333] transition-all duration-300">
Co-curricular Activities
</Link>

<Link to="/facilitiesl" className="text-[#292D32] text-[16px] sm:text-[16px] font-medium border-b-2 border-transparent hover:text-[#DD3333] hover:border-[#DD3333] transition-all duration-300">
Facilities
</Link>

</div>

<div className='pl-[5%] pr-[5%]'>
<div className='flex gap-2 pt-7 pb-16 items-center'>
<Link to='/' className='font-raleway text-[#292D32] text-[14px] font-bold leading-[16.44px]'> HOME</Link>
<img src={Arrowlft} alt="" className="w-[14px] h-[14px]" />
<p className='font-raleway text-[#292D32] text-[14px] font-bold leading-[16.44px]'> STUDENT LIFE </p>
<img src={Arrowlft} alt="" className="w-[14px] h-[14px]" />
<p className='font-raleway text-[#292D32] text-[14px] font-bold leading-[16.44px]'> BOARDING SCHOOL </p>
</div>

<div className="flex flex-col md:flex-row gap-6">
{/* First Column - Larger */}
<div className="w-full md:w-[65%] bg-white">

<h2 className='font-cormorant text-[#292D32] text-[34px] font-bold leading-[40px] mt-10 mb-10'>Boarding in Supreme is an amazing School Life Experience</h2>

<p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[40px]'>The school provides comfortable hostel accommodation under the supervision of experienced hostel parents. Students are taught to be independent as well as co-exist with one another. Boys and girls are housed in separate hostels. <br/><span className='block mt-7'></span>Each floor of the hostels has a common room, adequate sanitary facilities, and a hostel parent’s apartment. We have taken special care to ensure that the hostels are homes where students feel secure and happy.</p>
</div>

{/* Second Column - Smaller */}

<div className="w-full md:w-[35%] p-4">

</div>
</div>
</div>

<div className="flex flex-col md:flex-row gap-14 mt-[3%] px-[5%]">
  {/* First Column - Larger with Background Image */}
  <div className="w-full md:w-[63%] h-[413px] rounded-md p-1">
    <img src={Image2} alt='Our Founder' className='w-full h-full object-cover rounded-md' />
  </div>

  {/* Second Column - Smaller */}
  <div className="w-full md:w-[38%] bg-[#006011] rounded-md p-7 h-[413px] content-center">
  <img src={Image3} alt='/' className='w-[92px] h-[92px] mx-auto mb-4' />
  <p className='font-raleway text-[#FFFFFF] text-[18px] font-medium leading-[40px]'>
    Meals are served thrice a day in the dining hall based on a balanced diet. Snacks are served after night prep. No extra food or eating is allowed in the hostels.
  </p>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 px-[5%]">
{/* First Column - Larger */}
<div className="w-full md:w-[65%] bg-white">

<h2 className='font-cormorant text-[#292D32] text-[34px] font-bold leading-[40px] mt-10 mb-10'>Our Boarding makes you feel at home</h2>

<p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[40px]'>Being a boarder gives you the chance to make lifelong friends, learn other cultures, and customs. We want you to enjoy your stay at the boarding school and get a sense of belonging to a big, loving family. This is your home during the academic year. We want you to feel confident, content, and at ease.</p>
</div>

{/* Second Column - Smaller */}
<div className="w-full md:w-[35%] p-4">

</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[%]  pl-[3%] my-[5%]">
  {/* Box 1 */}
  <div className=" rounded-md p-5 h-[306px]  flex flex-col items-center">
    <img src={Image4} alt="/" className="/" />
  </div>

  {/* Box 2 */}
  <div className="rounded-md p-5 h-[306px] flex flex-col items-center">
    <img src={Image5} alt="/" className="" />
    
  </div>

  {/* Box 3 */}
  <div className=" rounded-md p-5 h-[306px] flex flex-col items-center">
    
  </div>

  {/* Box 4 */}
  <div className=" rounded-md p-5 h-[306px] flex flex-col items-center">
    <img src={Image6} alt="/" className="w-[]"/>
  </div>

  {/* Box 5 */}
  <div className=" rounded-md p-5 h-[306px] flex flex-col items-center">
    <img src={Image7} alt="/" className="w-[]" />
    
  </div>

  {/* Box 6 */}
  <div className=" rounded-md p-5 h-[306px] flex flex-col items-center">
    

  </div>
</div>



</div>

  )
}

export default Boardingschool
