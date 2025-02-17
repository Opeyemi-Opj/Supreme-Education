import React from 'react'
import { Link } from 'react-router-dom'; // ✅ Correct Import
import { useForm } from 'react-hook-form';
import Image1 from '../../assets/images/image73.png'
import Arrowlft from '../../assets/images/arrow-left.png'
import  bg1  from '../../assets/images/Creed.png';
import  bg2  from '../../assets/images/Building-image.png';

const Enquiry = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        console.log("Form Submitted:", data);
      };

  return (
    <div className='max-w-full'>
        <img src={Image1} alt='Our Founder' className='w-full' />
                      
                      <p className='text-center font-cormorant text-white text-[32px] sm:text-[48px] md:text-[56px] lg:text-[72px] font-bold leading-tight mt-[-50px] sm:mt-[-80px] md:mt-[-100px] lg:mt-[-130px]'>
                      Enquiry
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

                        <p className='w-[200px] bg-[#DD3333] rounded-md font-raleway text-[#FFFFFF] text-[18px] font-medium leading-[21.13px] px-5 py-3 transition duration-300  '>Enquiry</p>
                        
                        <Link to="/faq" className="text-[#292D32] text-[16px] sm:text-[16px] font-medium border-b-2 border-transparent hover:text-[#DD3333] hover:border-[#DD3333] transition-all duration-300">
                         FAQs
                        </Link>
                      </div>

                      <div className='pl-[5%] pr-[5%]'>
                      <div className='flex gap-2 pt-7 pb-16 items-center'>
                      <Link to='/' className='font-raleway text-[#292D32] text-[14px] font-bold leading-[16.44px]'> HOME</Link>
                      <img src={Arrowlft} alt="" className="w-[14px] h-[14px]" />
                      <p className='font-raleway text-[#292D32] text-[14px] font-bold leading-[16.44px]'> ADMISSIONS </p>
                      <img src={Arrowlft} alt="" className="w-[14px] h-[14px]" />
                      <p className='font-raleway text-[#292D32] text-[14px] font-bold leading-[16.44px]'> ENQUIRY </p>
                      </div>
                     </div>

 <div className="max-w-lg mx-auto bg-white p-6 md:p-10 rounded-lg shadow-lg border-2 mb-8">
  <h2 className="text-[24px] font-raleway font-semibold text-[#474545] mb-10 text-center">
    Kindly drop your information
  </h2>

  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
    {/* Prefix (Dropdown) */}
    <div>
      <label className="block font-raleway text-[#334155] text-[14px] font-normal mb-3">
        Prefix <span className="text-red-500">*</span>
      </label>
      <select {...register("prefix", { required: "Please select your status" })} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#CBD5E1] bg-white">
        <option value="">Kindly state your status</option>
        <option value="Mr.">Mr.</option>
        <option value="Mrs.">Mrs.</option>
        <option value="Miss">Miss</option>
      </select>
      {errors.prefix && <p className="text-red-500 text-sm">{errors.prefix.message}</p>}
    </div>

    {/* First & Last Name */}
    <div>
      <label className="block font-raleway text-[#334155] text-[14px] font-normal mb-3">
        First and Last Name <span className="text-red-500">*</span>
      </label>
      <input type="text" {...register("fullName", { required: "Full name is required" })} className="w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#CBD5E1]" />
      {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
    </div>

    {/* Email Address */}
    <div>
      <label className="block font-raleway text-[#334155] text-[14px] font-normal mb-3">
        Email Address <span className="text-red-500">*</span>
      </label>
      <input type="email" {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email format" } })} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#CBD5E1]" />
      {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
    </div>

    {/* Mobile Number */}
    <div>
      <label className="block font-raleway text-[#334155] text-[14px] font-normal mb-3">
        Mobile Number <span className="text-red-500">*</span>
      </label>
      <input type="tel" {...register("mobile", { required: "Mobile number is required" })} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#CBD5E1]" />
      {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile.message}</p>}
    </div>

    {/* Grade Level of Interest (Checkboxes) */}
    <div>
      <label className="block font-raleway text-[#334155] text-[14px] font-normal mb-3">
        Grade Level of Interest <span className="text-red-500">*</span>
      </label>
      <div className="flex-wrap gap-3">
        <label className="flex items-center font-raleway text-[#334155] text-[14px] font-normal">
          <input type="checkbox" value="EYFS" {...register("gradeLevel", { required: "Please select a grade level" })} className="w-6 h-6 mr-2 border-gray-400 rounded-md focus:ring-0" />
          EYFS
        </label>
        <label className="flex items-center font-raleway text-[#334155] text-[14px] font-normal">
          <input type="checkbox" value="Junior School" {...register("gradeLevel")} className="w-6 h-6 mr-2 border-gray-400 rounded-md focus:ring-0 mt-2 mb-2" />
          Junior School
        </label>
        <label className="flex items-center font-raleway text-[#334155] text-[14px] font-normal">
          <input type="checkbox" value="High School" {...register("gradeLevel")} className="w-6 h-6 mr-2 border-gray-400 rounded-md focus:ring-0" />
          High School
        </label>
      </div>
      {errors.gradeLevel && <p className="text-red-500 text-sm">{errors.gradeLevel.message}</p>}
    </div>

    {/* Inquiry Message */}
    <div>
      <label className="block font-raleway text-[#334155] text-[14px] font-normal mb-3">
        State Your Inquiry <span className="text-red-500">*</span>
      </label>
      <textarea {...register("inquiry", { required: "Please enter your message" })} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#CBD5E1]" rows="4"></textarea>
      {errors.inquiry && <p className="text-red-500 text-sm">{errors.inquiry.message}</p>}
    </div>

    {/* Submit Button */}
    <div className="flex justify-end">
      <button type="submit" className="bg-[#21549E] font-semibold text-white text-[14px] py-3 px-12 rounded-lg hover:bg-[#DD3333] transition duration-200">
        Submit
      </button>
    </div>
  </form>
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

export default Enquiry
