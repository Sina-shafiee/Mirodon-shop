import { motion } from 'framer-motion';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <motion.main
      initial={{ opacity: 0, translateX: 999 }}
      animate={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0, translateX: 999 }}
      transition={{ duration: 0.4 }}
    >
      <section className='container text-indigo-600 p-4 mx-auto flex gap-2 items-center'>
        <Link to='/'>Home</Link>
        <span>
          <IoIosArrowForward className='text-sm text-black' />
        </span>
        <p className='text-black'>Not found</p>
      </section>
      <section className='flex items-center h-full p-16'>
        <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
          <div className='max-w-md text-center'>
            <h2 className='mb-8 font-extrabold text-9xl'>
              <span className='sr-only'>Error</span>404
            </h2>
            <p className='text-2xl font-semibold md:text-3xl'>
              Sorry, we couldn't find this page.
            </p>
            <p className='mt-4 mb-8'>
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <Link to='/' className='px-8 py-3 font-semibold rounded'>
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default NotFound;
