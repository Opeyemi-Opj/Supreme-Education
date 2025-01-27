import React from 'react'
import Image1 from '../../assets/images/image19.png'
import Image2 from '../../assets/images/image20.png'
import Image3 from '../../assets/images/image21.png'
import Image4 from '../../assets/images/image51.png'
import Image5 from '../../assets/images/image52.png'
import EducareLogo from '../../assets/images/Educare-Logo.png'
import Vector from '../../assets/images/Vector.png'
/*import Arrow1 from '../../assets/images/Arrow1.png'*/
/*import ArrowIcon from '../../assets/icons/Arrow1.svg'*/
import Sms from '../../assets/images/sms.png'
import location from '../../assets/images/location.png'
import bgImage1 from '../../assets/images/Footerbgi.png'
import Footerl from '../../assets/images/Site-logo.png'
import Footeril from '../../assets/images/instagram.png'
import Footerfl from '../../assets/images/facebook.png'

const Footer = () => {
  return (
<div>
    <section className='w-full bg-[#F9F9F9] pl-[5%]'>
        <div className='flex gap-10'>
        <div className='pt-[1%]'>
         <img src={Footerl} alt="" className= 'w-[157px] h-[155px]' />
        <div className='flex gap-5 justify-center' >
        <img src={Footeril} alt="" className= 'w-[30.28px] h-[30.28px]' />
         <img src={Footerfl} alt="" className= 'w-[30.28px] h-[30.28px]' />
         </div>
         </div>
         <div className='pt-[2%]'>
         <div className='flex gap-2 mb-6'>
         <img src={location} alt="" className="w-[22px] h-[22px]" />
         <p className='font-raleway text-[#292D32] text-[14px] font-medium leading-[16.44px]'>23, Emmanuel Keshi Road, Magodo G.R.A. Phase 2, Lagos, Nigeria.</p>
         </div>
         <div className='mb-6'>
         <div className='flex gap-2 mb-2 '>
         <img src={Vector} alt="" className='w-[22px] h-[22px]' />
         <p className="font-raleway text-[#292D32] text-[14px] font-medium leading-[16.44px]">+(234) 8182984015</p>
         </div>
         <div className='mb-2 '>
         <p className='font-raleway text-[#292D32] text-[14px] font-medium leading-[16.44px] mb-2 ml-7'>+(234) 8182984015</p>
         <p className='font-raleway text-[#292D32] text-[14px] font-medium leading-[16.44px] ml-7'>+(234) 8182984015</p>
         </div>
         </div>
         <div className="flex gap-2">
         <img src={Sms} alt="" className='w-[22px] h-[22px]' />
         <p className="font-raleway text-[#292D32] text-[14px] font-medium leading-[16.44px]">info@supremeeducation.com</p>
         </div>   
         </div>

         <div className='w-[916px] h-[px] bg-cover bg-center pt-[5%] pb-[5%] pr-[5%] text-right' style={{ backgroundImage: `url(${bgImage1})` }}>
        <div className='flex gap-10 ml-auto w-max pb-[5%]'>
        <button className="flex font-raleway text-[#FFFFFF] text-[14px] font-medium leading-[16.44px] 
        border border-[#C6C5C5] rounded-[8px] px-[25px] py-[15px] items-center gap-5 transition duration-300
        hover:bg-white hover:text-[#006011] hover:border-[#006011] group">Enquire
        <svg className="w-[31px] h-[8px] transition duration-300 fill-current text-white group-hover:text-[#006011]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 8">
    <   path d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.84171 30.3536 3.64645L27.1716 0.464466C26.9763 0.269204 26.6597 0.269204 26.4645 0.464466C26.2692 0.659728 26.2692 0.976311 26.4645 1.17157L29.2929 4L26.4645 6.82843C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.7308 26.9763 7.7308 27.1716 7.53553L30.3536 4.35355ZM0 4.5H30V3.5H0V4.5Z" fill="currentColor"/>
        </svg>
        </button>
        <button className="flex font-raleway text-[#FFFFFF] text-[14px] font-medium leading-[16.44px] 
        border border-[#C6C5C5] rounded-[8px] px-[25px] py-[15px] items-center gap-5 transition duration-300
        hover:bg-white hover:text-[#006011] hover:border-[#006011] group">Apply
        <svg className="w-[31px] h-[8px] transition duration-300 fill-current text-white group-hover:text-[#006011]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 8">
    <   path d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.84171 30.3536 3.64645L27.1716 0.464466C26.9763 0.269204 26.6597 0.269204 26.4645 0.464466C26.2692 0.659728 26.2692 0.976311 26.4645 1.17157L29.2929 4L26.4645 6.82843C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.7308 26.9763 7.7308 27.1716 7.53553L30.3536 4.35355ZM0 4.5H30V3.5H0V4.5Z" fill="currentColor"/>
        </svg>
        </button>
        <button className="flex font-raleway text-[#FFFFFF] text-[14px] font-medium leading-[16.44px] 
        border border-[#C6C5C5] rounded-[8px] px-[25px] py-[15px] items-center gap-5 transition duration-300
        hover:bg-white hover:text-[#006011] hover:border-[#006011] group">Visit
        <svg className="w-[31px] h-[8px] transition duration-300 fill-current text-white group-hover:text-[#006011]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 8">
    <   path d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.84171 30.3536 3.64645L27.1716 0.464466C26.9763 0.269204 26.6597 0.269204 26.4645 0.464466C26.2692 0.659728 26.2692 0.976311 26.4645 1.17157L29.2929 4L26.4645 6.82843C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.7308 26.9763 7.7308 27.1716 7.53553L30.3536 4.35355ZM0 4.5H30V3.5H0V4.5Z" fill="currentColor"/>
        </svg>
        </button>
         </div>
         <h1 className='font-raleway text-[#FFFFFF] text-[14px] font-bold leading-[16.44px]'>Sign up to our newsletter to get updated</h1>
         </div>
         </div>
         
         <section className='flex  justify-between pr-[5%] pt-[3%] pm-[3%]'>
         <img src={Image1} alt="" className='w-[82px] h-[82px]' />
         <img src={Image2} alt="" className='w-[139px] h-[49px]' />
         <img src={Image3} alt="" className='w-[149px] h-[92px]' />
         <img src={Image4} alt="" className='w-[83px] h-[106px]' />
         <img src={Image5} alt="" className='w-[103px] h-[103px]' />
         </section>
         </section>

    <section className='flex bg-[#006011] px-[5%] py-[2%] justify-between'>
         <div className='content-center w-[35%]'>
         <p className='font-raleway text-[#C6C5C5] text-[14px] font-medium leading-[16.44px]'>© 2023 SEF Schools. All Rights reserved.</p>
         </div>

         <div className='flex gap-0 w-[50%]'>
         <div className=' w-[20%]    content-center justify-center'>
          <p className='font-raleway text-[#FFFFFF] text-[14px] font-medium leading-[16.44px]  .w-full pl-[5%] pr-[5%]'>Privacy Policy</p>
         </div>
         <div className='w-[20%] border-r-2 border-l-2 border-solid border-white px-[5%] content-center'> 
         <p className='font-raleway text-[#FFFFFF] text-[14px] font-medium leading-[16.44px]'>Sitemap</p>
         </div>
         <div className='border-r-2 border-solid border-white px-[5%] content-center'>
         <p className='font-raleway text-[#FFFFFF] text-[14px] font-medium leading-[16.44px] pl-[5%] pr-[5%]'>Careers</p>
         </div>
         <div className='content-center  px-[5%] '>
         <p className='font-raleway text-[#FFFFFF] text-[14px] font-medium leading-[16.44px]'>Contact us</p>
         </div>
         </div>

         <div className='flex gap-5  justify-end  w-[25%]'>
            <p className='content-center font-raleway text-[#929C93] text-[14px] font-medium leading-[16.44px]'>Powered by</p>
            <img src={EducareLogo} alt="" className='w-[114px] h-[45px]' />
         </div>
    </section>
      
    </div>
  )
}

export default Footer