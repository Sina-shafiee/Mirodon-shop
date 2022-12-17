import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './index.css';

// import required modules
import { Pagination } from 'swiper';

import { useGetSingleCategoryProdcutsQuery } from '../store';
import ProductCard from './ProductCard';
import Skeleton from './Skeleton';
import useWindowWidth from '../hooks/use-windowWidth';

// single category products component
const SingleCategoryProducts = ({ activeTab }) => {
  const windowWidth = useWindowWidth();

  const { data, error, isFetching } =
    useGetSingleCategoryProdcutsQuery(activeTab);

  let content;
  if (isFetching) {
    if (windowWidth < 620) {
      content = (
        <div className='flex justify-center items-center flex-wrap'>
          <Skeleton times={1} className='w-full max-w-[300px] mt-4 h-96' />
        </div>
      );
    } else if (windowWidth < 930) {
      content = (
        <div className='flex justify-between items-center flex-wrap'>
          <Skeleton times={2} className='w-full max-w-[300px] mt-4 h-96' />
        </div>
      );
    } else if (windowWidth < 1340) {
      content = (
        <div className='flex justify-between items-center flex-wrap'>
          <Skeleton times={3} className='w-full max-w-[300px] mt-4 h-96' />
        </div>
      );
    } else {
      content = (
        <div className='flex justify-between items-center flex-wrap'>
          <Skeleton times={4} className='w-full max-w-[300px] mt-4 h-96' />
        </div>
      );
    }
  } else if (error) {
    content = <p className='text-center'>Error</p>;
  } else {
    content = (
      <Swiper
        slidesPerView={1}
        spaceBetween={1}
        pagination={{
          clickable: true
        }}
        // centeredSlides={true}
        breakpoints={{
          620: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          930: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          1340: {
            slidesPerView: 4,
            spaceBetween: 50
          }
        }}
        modules={[Pagination]}
        className='cursor-grab mt-4'
      >
        {data.map((product) => {
          return (
            <SwiperSlide
              key={product.id}
              className='flex justify-center items-center'
            >
              <ProductCard data={product} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  }

  return <div>{content}</div>;
};

export default SingleCategoryProducts;
