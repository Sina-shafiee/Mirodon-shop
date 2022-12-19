import { useRef, Fragment } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { useFetchSmiliarProductsQuery } from '../store';
import Skeleton from './Skeleton';
import ProductCard from './ProductCard';
import useWindowWidth from '../hooks/use-windowWidth';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight
} from 'react-icons/md';

const ProductsCarousel = ({ categoryName }) => {
  const windowWidth = useWindowWidth();
  const swiperRef = useRef();
  const { data, error, isLoading } = useFetchSmiliarProductsQuery(categoryName);

  let content;
  if (isLoading) {
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
    content = (
      <div className='min-h-[49vh flex items-center justify-center]'>
        <p>Somthing went wrong..</p>
      </div>
    );
  } else {
    content = (
      <div className='relative'>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          pagination={{
            clickable: true
          }}
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
          modules={[Navigation]}
          className='rounded-xl relative w-full h-full cursor-grab max-h-[480px]'
        >
          {data.map((product) => {
            return (
              <SwiperSlide
                className='flex p-4 md:p-2 justify-center items-center'
                key={product.id}
              >
                <ProductCard data={product} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button
          className='absolute text-4xl z-10 top-[50%] translate-y-[-50%] right-0 md:-right-7 p-1 md:p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300'
          onClick={() => swiperRef.current?.slideNext()}
        >
          <MdOutlineKeyboardArrowRight />
        </button>
        <button
          className='absolute text-4xl z-10 top-[50%] translate-y-[-50%] left-0 md:-left-7 p-1 md:p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300'
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <MdOutlineKeyboardArrowLeft />
        </button>
      </div>
    );
  }
  return content;
};

export default ProductsCarousel;
