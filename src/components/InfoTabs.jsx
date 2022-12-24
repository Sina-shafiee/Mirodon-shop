import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const InfoTabs = ({ title, children, isOpen }) => {
  const [toggle, setToggle] = useState(isOpen);
  return (
    <section className='bg-gray-50 shadow-sm rounded-3xl mx-4 sm:mx-0 mt-6 py-6 px-8'>
      <div
        onClick={() => setToggle((prev) => !prev)}
        className='flex cursor-pointer justify-between items-center'
      >
        <h2 className='text-xl font-semibold'>{title}</h2>
        <IoIosArrowDown
          className={`transition-transform duration-200 ${
            toggle ? 'rotate-180' : 'rotate-0'
          } text-xl`}
        />
      </div>
      <div
        className={` ${
          toggle
            ? 'h-min overflow-auto opacity-100 mt-4'
            : 'h-0 overflow-hidden opacity-0'
        }`}
      >
        {children}
      </div>
    </section>
  );
};

export default InfoTabs;
