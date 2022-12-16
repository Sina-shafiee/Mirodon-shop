import { useState } from 'react';
import { useGetAllCategoriesQuery } from '../store';
import SingleCategoryProducts from './SingleCategoryProducts';
import Skeleton from './Skeleton';

// production section component

const Production = () => {
  const { data, error, isLoading } = useGetAllCategoriesQuery();

  const [activeTab, setActiveTab] = useState('electronics');

  const isActive = (name) => {
    return name === activeTab;
  };

  let tabsContent;
  if (isLoading) {
    tabsContent = (
      <Skeleton times={1} className='w-full sm:w-3/4 md:w-1/2 h-10' />
    );
  } else if (error) {
    tabsContent = <p className='text-center'>Error </p>;
  } else {
    tabsContent = (
      <div className='flex gap-6 items-center overflow-scroll scrollbar-hidden'>
        {data.map((category, index) => {
          return (
            <button
              onClick={() => setActiveTab(category)}
              className={`${
                isActive(category) ? 'text-black' : 'text-gray-400'
              } capitalize transition-all duration-700 whitespace-nowrap text-lg`}
              key={index}
            >
              {category}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <section className='mt-4'>
      <div>{tabsContent}</div>
      <SingleCategoryProducts activeTab={activeTab} />
    </section>
  );
};

export default Production;
