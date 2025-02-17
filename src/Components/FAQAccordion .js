import { useState } from 'react'
import plusIcon from '../assets/icons/Plus.svg'
import minusIcon from '../assets/icons/Minus.svg'

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-300">
      <button className="flex justify-between items-center w-full py-[20px] px-5 font-raleway text-[18px] font-medium leading-[21.13px] transition-colors"
        onClick={onClick}>
        <span className={`${isOpen ? "text-[#629948]" : "text-[#434547]"} transition-colors`}>
          {title}
        </span>
        <img src={isOpen ? minusIcon : plusIcon} alt="Toggle Icon" className="w-5 h-5" /></button>
        {isOpen && (
        <div className='px-5 pb-5 font-raleway text-[18px] text-[#434547] font-medium leading-[32px] '>{content}</div> )}
    </div>
  );
};

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { title: 'Does Supreme run shuttle bus services?', content: 'Yes, but lunch is optional for the Junior School pupils.' },
    { title: 'Does Supreme provide lunch for students?', content: 'Yes, but lunch is optional for the Junior School pupils.' },
    { title: 'How are parents made aware of their children’s progress at Supreme?', content: 'Teachers communicate with parents daily at drop-off and pick-up times. We also schedule regular parent’s-teacher’s conferences during which we review, discuss children’s progresses. And develop Individual Educational Plan as the need arise. Communication with parents is an important part of our program.' },
    { title: 'Does Supreme run creche services?', content: 'Yes. Supreme’s creche services provides early drop-off and late-pick up. Our babies are well taken care of by Certified Nannies and Resident Medical Practitioners.' },
    { title: 'Who are the Teachers?', content: 'Certified, Experienced and Committed professionals.' },
    { title: 'What curriculum do you offer?', content: 'British and Nigerian curriculum.' },
    { title: 'What is the enrollment process?', content: 'Parents purchase and fill out an enrollment form after touring the school and meeting with the admissions officer, who will answer questions and discuss availability of enrollment.' },
    { title: 'What is Supreme’s educational philosophy?', content: 'To attain the highest standards of excellence in academics and total development of our students.' },
    { title: 'What makes your school unique?', content: 'Global mindedness and tradition of excellence.' },
  ];

  return (
    <div className="max-w-[793px]  bg-white shadow-lg rounded-lg p-4">
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          title={faq.title}
          content={faq.content}
          isOpen={openIndex === index}
          onClick={() => toggleAccordion(index)}/>))}
    </div>
  );
};

export default FAQAccordion;
