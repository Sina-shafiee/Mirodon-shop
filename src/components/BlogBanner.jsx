import { Link } from 'react-router-dom';
import blogBannerBg from '../assets/images/blog-banner.jpg';

const BlogBanner = () => {
  return (
    <section className='container mt-6 p-4 mx-auto'>
      <div
        className=' min-h-[480px] bg-black flex flex-col bg-left px-8 md:px-14 justify-end pb-4 md:pb-12 rounded-xl md:bg-center bg-cover text-white'
        style={{ backgroundImage: `url(${blogBannerBg})` }}
      >
        <h2 className='text-xl md:text-2xl font-semibold max-w-xs md:max-w-lg'>
          What are some good tips for saving money while shopping?
        </h2>
        <p className=' max-w-xs md:max-w-lg mt-2'>
          There is no definitive answer to this question as everyone's
          preferences are..
        </p>

        <button className='btn self-start bg-white text-gray-900 mt-4 '>
          <Link to='/blog'>Read More</Link>
        </button>
      </div>
    </section>
  );
};

export default BlogBanner;
