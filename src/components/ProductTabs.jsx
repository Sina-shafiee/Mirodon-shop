import { useState } from 'react';

const tabs = ['Description', 'About', 'Result', 'Note', 'Video', 'Review'];
const funFacts = [
  'The Dyson V11 is a cordless vacuum cleaner that is designed to be lightweight and easy to maneuver.',
  ' features a powerful digital motor that can spin up to 125,000 rpm, providing strong suction power to pick up dirt and debris.',
  'It  has an LCD screen that displays the current battery life and the performance of the vacuum, helping you to monitor its cleaning ability and optimize battery life.',
  'It has a high torque cleaner head that can automatically adjust its power to different floor types, ensuring optimal cleaning performance on carpets and hard floors.',
  'The iPhone 13 Pro and Pro Max have a ProMotion display with 120Hz refresh rate.'
];

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className='p-4 container mx-auto'>
      <section className='rounded-lg shadow-sm'>
        <section className='flex justify-between rounded-lg overflow-hidden bg-gray-100'>
          {tabs.map((tab) => (
            <button
              // onClick={() => setActiveTab(tab)}
              key={tab}
              className={`grow min-w-max py-5 inline-block rounded-t-lg ${
                activeTab === tab ? 'bg-[#212121] text-gray-50' : null
              } `}
            >
              {tab}
            </button>
          ))}
        </section>
        <section className='p-12'>
          <h2 className='text-2xl font-semibold'>5 Facts About Product </h2>
          <ul className='list-disc px-6 pt-2'>
            {funFacts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>

          <h2 className='text-2xl mt-4 font-semibold'>Versatile Design</h2>
          <p>
            The XYZ Widget is a highly versatile tool that can be used for a
            wide range of tasks. Whether you need to measure, cut, shape, or
            polish materials, the XYZ Widget is up to the task.
          </p>
          <p className='mt-2'>
            With its ergonomic design and comfortable grip, the XYZ Widget is
            easy to use for extended periods of time. Its lightweight
            construction and compact size make it the perfect tool to take on
            the go, whether you're working on a job site or completing a project
            at home.
          </p>
        </section>
      </section>
    </section>
  );
};

export default ProductTabs;
