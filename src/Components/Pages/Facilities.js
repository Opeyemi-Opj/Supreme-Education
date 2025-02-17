import React from 'react'
import Image1 from '../../assets/images/image2(1).png'
import Image2 from '../../assets/images/Image(26).png'
import Image3 from '../../assets/images/Image(27).png'
import Image4 from '../../assets/images/Image(28).png'
import Image5 from '../../assets/images/Image(25).png'
import { Link } from 'react-router-dom'; // ✅ Correct Import
import Arrowlft from '../../assets/images/arrow-left.png'

const Facilities = () => {
  return (

 <div className='News & Events'>

<img src={Image1} alt='Our Founder' className='w-full' />

<p className='text-center font-cormorant text-white text-[32px] sm:text-[48px] md:text-[56px] lg:text-[72px] font-bold leading-tight mt-[-50px] sm:mt-[-80px] md:mt-[-100px] lg:mt-[-130px]'>
Facilities
</p>

<div className="flex flex-wrap  px-4 sm:px-8 md:px-[5%] pt-[5%] pb-[3%] lg:pb-[2%] bg-[#F6F8F5] gap-3 sm:gap-6 md:gap-12 lg:gap-28 items-center text-center">

<Link to="/boarding-school" className="text-[#292D32] text-[16px] sm:text-[16px] font-medium border-b-2 border-transparent hover:text-[#DD3333] hover:border-[#DD3333] transition-all duration-300">
Boarding School
</Link>

<Link to="/co-curricular-activities" className="text-[#292D32] text-[16px] sm:text-[16px] font-medium border-b-2 border-transparent hover:text-[#DD3333] hover:border-[#DD3333] transition-all duration-300">
Co-curricular Activities
</Link>

<p className='w-[170px] bg-[#DD3333] rounded-md font-raleway text-[#FFFFFF] text-[18px] font-medium leading-[21.13px] px-5 py-3 transition duration-300  '> Facilities </p>

</div>

<div className='pl-[5%] pr-[5%]'>
<div className="flex flex-wrap gap-2 pt-7 pb-16 items-center text-center md:text-left">
  <Link to="/" className="font-raleway text-[#292D32] text-[14px] font-bold leading-[16.44px]">
    HOME
  </Link>
  <img src={Arrowlft} alt="" className="w-[14px] h-[14px]" />

  <p className="font-raleway text-[#292D32] text-[14px] font-bold leading-[16.44px]">
    STUDENT LIFE
  </p>
  <img src={Arrowlft} alt="" className="w-[14px] h-[14px]" />

  <p className="font-raleway text-[#292D32] text-[14px] font-bold leading-[16.44px] text-center md:text-left">
  Facilities
  </p>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-[5%] px-[5%] mb-[10%]">
  {/* Box 1 */}
  <div className="rounded-md">
    <p className='font-raleway text-[#292D32] text-[22px] font-bold leading-[40px]'>Library</p>
    <p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[40px]'>The Information Centre / Library in Supreme Education Foundation School is a storehouse of knowledge and diverse fields, definitely one of the best libraries in Lagos.Other than books, online resources covering science and technology, humanities and the social sciences, there are research materials and bibliographies chronicling different eras. <br/><span className='block mt-[3%]'></span>National and international dailies, magazines/periodicals, guides and reference services are available for students, staff and parents.</p>
  </div>

  {/* Box 2 */}
  <div className=" rounded-md">
    <img src={Image2} alt="/" className="w-full" />
  </div>

  {/* Box 3 */}
  <div className=" rounded-md">
  <img src={Image3} alt="/" className="w-full" />
  </div>

  {/* Box 4 */}
  <div className="rounded-md">
  <p className='font-raleway text-[#292D32] text-[22px] font-bold leading-[40px]'>Medical</p>
  <p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[40px]'>On admission into Supreme, new entrants are given the Student Medical Record form, to be completed by the parents; and the Physical Examination form, to be completed by a physician. Continuing students are required to update these records at the beginning of every session. This is essential for a thorough monitoring of the health condition of all our students.
  <br/><span className='block mt-[0%]'></span>The school operates a clinic managed by qualified resident nurses. Severe cases are referred to the hospital, and parents promptly informed.</p>
  </div>

  {/* Box 5 */}
  <div className=" rounded-md">
  <p className='font-raleway text-[#292D32] text-[22px] font-bold leading-[40px]'>Sports</p>
  <p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[40px] mb-8'>We recognize the impact of sports and exercise on the total mental and physical well-being of an individual. Therefore, sports is an integral part of the learning experience we offer. The first phase of our sports complex provided for a standard soccer pitch, a swimming pool, multi- court facility for basketball, lawn tennis and volleyball. <br/><span className='block mt-[0%]'></span>The second phase will provide a tartan finish to the athletics track and a spectator stand. Our annual inter-house athletics competition has been a breeding ground for acclaimed talents in track and field.</p>
  </div>

  {/* Box 6 */}
  <div className="rounded-md mb-[10%]"> 
  <img src={Image4} alt="/" className="w-full" />
  </div>
</div>

      
    </div>
  )
}

export default Facilities
