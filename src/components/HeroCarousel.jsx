import { useRef } from 'react';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';

import bannerOne from '../assets/images/banner-1.jpg';
import bannerTwo from '../assets/images/banner-2.jpg';
import bannerThere from '../assets/images/banner-3.jpg';

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight
} from 'react-icons/md';

// hero carusel component
const HeroCarousel = () => {
  // using ref for custom navigations
  const swiperRef = useRef(null);

  const slidesData = [
    {
      desc: 'Buy clothes that make you feel empowered and confident.',
      imgUrl: bannerOne,
      id: 1,
      off: 79
    },
    {
      desc: `Let's create fashion that isn't dictated by gender or beauty standards.`,
      imgUrl: bannerTwo,
      id: 2,
      off: 39
    },
    {
      desc: 'You deserve the best life - so go ahead and make that change.',
      imgUrl: bannerThere,
      id: 3,
      off: 49
    }
  ];

  return (
    <div className='container relative mx-auto p-4 md:p-8'>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[EffectFade, Navigation]}
        className='rounded-xl relative w-full h-full cursor-grab max-h-[480px]'
      >
        {slidesData.map(({ desc, imgUrl, id, off }) => {
          return (
            <SwiperSlide key={id}>
              <div
                className='flex justify-end md:text-2xl bg-black flex-col min-w-full px-6 py-2 backdrop-blur-lg md:p-20 min-h-[400px] md:gap-8 gap-4 md:min-h-[480px] bg-cover bg-center'
                style={{ backgroundImage: `url(${imgUrl})` }}
              >
                <div className='text-black bg-gray-200 pl-3 pb-3 rounded-lg bg-opacity-90 backdrop-blur-sm md:bg-transparent md:text-white md:backdrop-blur-0'>
                  <p className='p-2 mt-8 text-lg md:text-4xl max-w-md'>
                    {desc}
                  </p>
                  <p className='py-4'>- {off}% off</p>
                  <Link
                    className='px-4 py-1 md:px-6 md:py-2 max-w-max md:text-lg text-white bg-indigo-500 rounded-lg duration-150 transition-colors hover:bg-indigo-600'
                    to='/products'
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <button
        className='absolute text-4xl z-10 top-[50%] translate-y-[-50%] right-0 md:right-0 p-1 md:p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300'
        onClick={() => swiperRef.current?.slideNext()}
      >
        <MdOutlineKeyboardArrowRight />
      </button>
      <button
        className='absolute text-4xl z-10 top-[50%] translate-y-[-50%] left-0 md:left-0 p-1 md:p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300'
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <MdOutlineKeyboardArrowLeft />
      </button>
    </div>
  );
};

export default HeroCarousel;
