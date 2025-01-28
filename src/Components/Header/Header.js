import React, { useState }from 'react'
import Vector from '../../assets/images/Vector.png'
import Sms from '../../assets/images/sms.png'
import Menu from '../../assets/images/Menu-lg.png'
import Logo from '../../assets/images/Site-logo.png'

const Header = () => {
const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <section className='  px-[5%] py-[3%] -mt-5 ' >
        <div className='flex gap-1 bg-[#ffffff] '>
      <div className='w-1/2 flex gap-10 items-center'>
      <div className="flex gap-2">
              <img src={Vector} alt="" className="w-5 h-5 object-contain" />
              <p className="font-raleway text-[#292D32] text-[14px] font-medium leading-[16.44px]">
                +(234) 8182984015
              </p>
            </div>
            <div className="flex gap-2">
              <img src={Sms} alt="" className="w-5 h-5 object-contain" />
              <p className="font-raleway text-[#292D32] text-[14px] font-medium leading-[16.44px]">
                info@supremeeducation.com
              </p>
            </div>
      </div>

      <div className='w-1/1'>

      </div>

      <div className='w-1/2 flex justify-end'>
        {/* Search Bar */}
        <div className='relative flex items-center pr-[5%]'>
              {/* Search Icon */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 rounded-full hover:bg-gray-200"
              >
                <svg
                  className="w-6 h-6 text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                  />
                </svg>
              </button>

              {/* Expanding Search Input */}
              <input
                type="text"
                placeholder="Search..."
                className={`absolute right-0 top-0 h-10 max-w-0 px-4 border border-gray-300 rounded-full transition-all duration-300 ${
                  isSearchOpen
                    ? "max-w-[120px] opacity-100 px-4"
                    : "max-w-0 opacity-0 px-0"
                }`}
              />
              </div>

      <div className='border-l-2 border-solid border-black pl-[3%]'>
    <img src={Menu} alt='' className='w-[100px]  h-[30px] ' />
    </div>
      </div>
    </div>

    <div className='-mt-[40px] bg-transparent'>
  <div className="flex flex-col md:flex-row md:space-x-6">
    {/* Column 1 */}
    <div className="flex-1 ">
    
      
    </div>

    {/* Column 2 */}
    <div className="flex-1 ">
    <img src={Logo} alt="" className= 'w-[200px] h-[200px] ml-[100px]' />
     
    </div>

    {/* Column 3 */}
    <div className="flex-1 ">
   
      
    </div>
  </div>
  </div>
  </section>
  )
}

export default Header
