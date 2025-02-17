import React from 'react'
import Image1 from '../../assets/images/image58(1).png'
import { Link } from 'react-router-dom'; // ✅ Correct Import
import Arrowlft from '../../assets/images/arrow-left.png'
import Downloadb from '../../assets/images/upload-cloud.png'
import SearchIcon from '../../assets/icons/search.svg'


const Academiccalendar = () => {
     // Sample event data
  
     const eventData = [
  { day: "Monday, September 4th", event: "Virtual Resumption" },
  { day: "Sunday, September 10th", event: "Boarders Resumes" },
  { day: "Monday, September 11th", event: "Whole School Resumes" },
  { day: "Whole School Resumes", event: "Junior School SRC Swearing In Ceremony" },
  { day: "Saturday, September 23rd", event: "Supreme Parenting Program 1" },
  { day: "Friday, September 29th", event: "Independence Assembly" },
  { day: "Monday, October 9th-18th", event: "1st C.A." },
  { day: "Friday, October 20th", event: "PTC" },
  { day: "Monday, October 23rd -<br>Friday, October 27th", event: "Mid-Term Break" },
  { day: "Sunday, October 29th", event: "Boarders Resumes from Mid-Term Break" },
  { day: "Monday, October 30th", event: "Whole School Resumes from Mid-Term Break" },
  { day: "Saturday, November 11th", event: "Parenting Program 2" },
  { day: "Friday, November 17th", event: "EYFS Colour Day" },
  { day: "Thursday, November 23rd", event: "Christmas Light On & Thanksgiving" },
  { day: "Several Days<br>November 27th - December 6th", event: "High School Exam" },
  { day: "Several Days<br>December 4th - December 7th", event: "Junior School Exam" },
  { day: "Thursday, December 14th", event: "Christmas Concert" },
  { day: "Friday, December 15th", event: "ARD/End of Term" },
];

  return (

<div className='max-w-full'>
<img src={Image1} alt='Our Founder' className='w-full' />

<p className='text-center font-cormorant text-white text-[32px] sm:text-[48px] md:text-[56px] lg:text-[72px] font-bold leading-tight mt-[-50px] sm:mt-[-80px] md:mt-[-100px] lg:mt-[-130px]'>
Academic Calendar
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

<p className='w-[210px] bg-[#DD3333] rounded-md font-raleway text-[#FFFFFF] text-[18px] font-medium leading-[21.13px] px-5 py-3 transition duration-300  '>Academic Calendar</p>


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
<p className='font-raleway text-[#292D32] text-[14px] font-bold leading-[16.44px]'> ACADEMIC CALENDAR</p>
</div>

<div className="flex flex-col md:flex-row gap-6 ">
{/* First Column - Larger */}
<div className="w-full md:w-[65%] bg-white">
<p className='font-raleway text-[#292D32] text-[20px] font-medium leading-[40xp]'> 
Key dates for Harvest Term 2023/2024 Academic Session
</p>

<div className="w-full max-w-full lg:max-w-5xl mx-auto p-2 mt-7">
  {/* Table Container */}
  <div className="overflow-x-auto border bg-white border-gray-400 rounded-lg">
    <table className="w-full border-collapse">
      <thead>
        {/* Search Row */}
        <tr>
          <th colSpan="2" className="border-b border-gray-400 p-3 bg-white text-left rounded-t-lg">
            <div className="flex flex-wrap gap-3 items-center justify-between">
              {/* Search Box */}
              <div className="relative w-full md:w-[70%] lg:w-[70%] pl-5">
                <img
                  src={SearchIcon}
                  alt="Search"
                  className="absolute left-7 top-1/2 transform -translate-y-1/2 w-5 h-5"
                />
                <input
                  type="text"
                  placeholder="Search..."
                  className="border border-gray-300 p-3 pl-10 rounded-md w-full md:w-[350px]"
                />
              </div>

              {/* Download Button */}
              <button className="flex items-center gap-4 bg-white text-[#344054] px-6 py-3 border border-[#D0D5DD] rounded-md transition-all font-raleway text-[16px] font-medium leading-[18.78px]">
                <img src={Downloadb} alt="Download Icon" className="w-[24px] h-[24px]" />
                <span>Download</span>
              </button>
            </div>
          </th>
        </tr>

        {/* Table Head */}
        <tr className="bg-white">
          <th className="border-b border-gray-400 pl-7 text-left font-raleway text-[#292D32] text-[14px] font-semibold leading-[18px]">Date</th>
          <th className="border-b border-gray-400 p-7 text-left font-raleway text-[#292D32] text-[14px] font-semibold leading-[18px]">Event</th>
        </tr>
      </thead>

      {/* Table Body */}
      <tbody>
        {eventData.map((item, index) => (
          <tr key={index} className="border-l border-r border-gray-400">
            <td className="border-b border-gray-400 p-7 text-left font-raleway text-[#434547] text-[14px] font-medium leading-[18px]" 
                dangerouslySetInnerHTML={{ __html: item.day }}></td>
            <td className="border-b border-gray-400 p-7 text-left font-raleway text-[#434547] text-[14px] font-medium leading-[18px]"
                dangerouslySetInnerHTML={{ __html: item.event }}></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>


</div>
    
    {/* Second Column - Smaller */}
    <div className="w-full md:w-[35%] p-4">

    </div>

    </div>
    </div>
    </div>
  )
}

export default Academiccalendar
