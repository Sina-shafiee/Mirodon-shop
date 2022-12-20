import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';

import { useDispatch } from 'react-redux';
import { removeUser } from '../store';

import useAuth from '../hooks/useAuth';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const user = useAuth();
  const { firstName, lastName, email, gender } = user;
  const [editable, setEditAble] = useState(false);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName,
    lastName,
    email,
    gender
  });

  const handleFormChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    alert('Sorry dear visitor this option is not available right now');
  };

  const handleLogOut = () => {
    navigate('/');
    setTimeout(() => dispatch(removeUser()), 1000);
  };

  return (
    <motion.main
      className='container p-4 mb-16 mx-auto'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <section className=' text-indigo-600  flex gap-2 items-center'>
        <Link to='/'>Home</Link>
        <span>
          <IoIosArrowForward className='text-sm text-black' />
        </span>
        <p className='text-black'>Profile</p>
      </section>

      <h2 className='text-center mt-8 text-2xl'>
        Welcome back{' '}
        <strong>
          {firstName} {lastName}
        </strong>
      </h2>

      <form onSubmit={handleFormSubmit} className='max-w-3xl mt-12 mx-auto'>
        <div className='flex flex-wrap sm:flex-nowrap gap-4'>
          <input
            type='text'
            autoCapitalize='first-name'
            disabled={!editable}
            className='w-full py-3 px-4 disabled:bg-gray-100 rounded-3xl bg-gray-50'
            value={formData.firstName}
            name='firstName'
            onChange={handleFormChange}
          />
          <input
            type='text'
            autoCapitalize='first-name'
            disabled={!editable}
            className='w-full py-3 px-4 rounded-3xl disabled:bg-gray-100 bg-gray-50'
            value={formData.lastName}
            name='lastName'
            onChange={handleFormChange}
          />
        </div>
        <div className='flex flex-wrap sm:flex-nowrap gap-4 mt-4 items-center'>
          <input
            type='text'
            autoCapitalize='first-name'
            disabled={!editable}
            className='w-full py-3 px-4 rounded-3xl disabled:bg-gray-100 bg-gray-50'
            value={formData.email}
            name='email'
            onChange={handleFormChange}
          />
          <select
            value={formData.gender}
            name='gender'
            onChange={handleFormChange}
            disabled={!editable}
            className='bg-gray-50 rounded-3xl form-select appearance-none block w-full px-3 py-1 h-[48px] text-base text-gray-700 disabled:bg-gray-100 bg-clip-padding bg-no-repeat transition border-none ease-in-out max-w-[129px] m-0 focus:text-gray-700 focus:outline-none'
          >
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select>
        </div>

        <div className='flex justify-between'>
          <div>
            <button
              onClick={() => setEditAble((prev) => !prev)}
              type='button'
              className='btn btn-primary mt-6 mr-4'
            >
              {editable ? 'Cancel' : 'Edit your info'}
            </button>
            <button
              onClick={handleLogOut}
              type='button'
              className='btn btn-secondary mt-6'
            >
              Logout
            </button>
          </div>
          {editable && (
            <button type='submit' className='btn !shadow-none mt-6'>
              Save
            </button>
          )}
        </div>
      </form>
    </motion.main>
  );
};

export default Profile;
