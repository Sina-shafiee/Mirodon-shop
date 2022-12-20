import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../store';
import { useDispatch } from 'react-redux';
import { addUser } from '../store';

import { FiEye, FiEyeOff } from 'react-icons/fi';
import { ImSpinner8 } from 'react-icons/im';
import useAuth from '../hooks/useAuth';
import { motion } from 'framer-motion';
import { IoIosArrowForward } from 'react-icons/io';

export default function SignIn() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const user = useAuth();

  const [login, result] = useLoginMutation();

  const onFormSubmit = (e) => {
    e.preventDefault();

    login({ username, password });
  };

  useEffect(() => {
    if (result.data) {
      dispatch(addUser(result.data));
      navigate('/');
    }
  }, [result]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className='relative flex flex-col justify-center min-h-[79vh] overflow-hidden'
    >
      <section className=' text-indigo-600 container mx-auto p-4 flex gap-2 items-center'>
        <Link to='/'>Home</Link>
        <span>
          <IoIosArrowForward className='text-sm text-black' />
        </span>
        <p className='text-black'>Sign In</p>
      </section>

      <div className='w-full p-6 m-auto bg-white rounded-md md:shadow-md lg:max-w-xl'>
        <h1 className='text-3xl font-semibold text-center text-purple-700'>
          Sign in
        </h1>
        <form onSubmit={onFormSubmit} className='mt-6'>
          <div className='mb-2'>
            <label
              htmlFor='username'
              className='block text-sm font-semibold text-gray-800'
            >
              User name
            </label>
            <input
              type='text'
              autoComplete='username'
              value={username}
              required
              onChange={(e) => setUserName(e.target.value)}
              className='block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40'
            />
          </div>
          <div className='mb-2'>
            <label
              htmlFor='password'
              className='block text-sm font-semibold text-gray-800'
            >
              Password
            </label>
            <div className='relative'>
              <input
                required
                autoComplete='current-password'
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40'
              />
              {password.length ? (
                <button
                  onClick={() => setShowPassword((prev) => !prev)}
                  type='button'
                  className='absolute right-4 top-1/2 text-xl translate-y-[-50%] z-10'
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              ) : null}
            </div>
          </div>

          <Link
            to='/forgot-password'
            className='text-sm mt-6 text-purple-600 hover:underline'
          >
            {result.isError && result?.error?.data?.message?.concat('.')} Forget
            Password?
          </Link>
          <div className='mt-6'>
            <button
              type='submit'
              className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600 flex items-center justify-center gap-4'
            >
              {result.isLoading ? (
                <ImSpinner8 className='animate-spin text-2xl' />
              ) : (
                'Login'
              )}
            </button>
          </div>
        </form>

        <p className='mt-4 text-sm font-light text-center text-gray-700'>
          {' '}
          Don't have an account?{' '}
          <Link
            to='/sign-up'
            className='font-medium text-purple-600 hover:underline'
          >
            Sign up
          </Link>
        </p>
        <p className='mt-2 text-sm text-center'>
          Please use this demo username:{' '}
          <span className='text-base cursor-text font-normal text-red-500'>
            "ckensleyk"
          </span>{' '}
          and password:{' '}
          <span className='text-base cursor-text font-normal text-red-500'>
            "tq7kPXyf"
          </span>
        </p>
      </div>
    </motion.main>
  );
}
