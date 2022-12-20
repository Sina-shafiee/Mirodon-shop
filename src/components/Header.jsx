import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { BsCart2, BsHeart, BsThreeDots } from 'react-icons/bs';
import { RxPerson } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';
import useAuth from '../hooks/useAuth';

import useWindowWidth from '../hooks/use-windowWidth';

// header section component

const Header = () => {
  const user = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const windowWidth = useWindowWidth();

  const navLinks = [
    { title: 'Favorites', icon: <BsHeart />, id: 1, link: '/favorites' },
    { title: 'Your Cart', icon: <BsCart2 />, id: 2, link: 'cart' },
    {
      title: user ? 'Profile' : 'Sign In',
      icon: <RxPerson />,
      id: 3,
      link: user ? 'profile' : 'sign-in'
    }
  ];

  const pagesLinks = [
    { title: 'About Company', link: '/about-company', id: 1 },
    { title: 'About Esse', link: '/about-Esse', id: 2 },
    { title: 'Products', link: '/products', id: 3 },
    { title: 'Education', link: '/education', id: 4 },
    { title: 'Publications', link: '/publications', id: 5 },
    { title: 'Projects', link: '/projects', id: 6 },
    { title: 'Contacts', link: '/contacts', id: 7 }
  ];

  useEffect(() => {
    if (isMenuOpen && windowWidth < 640) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'scroll';
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (windowWidth < 640) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  }, [windowWidth]);

  return (
    <header className='p-4 z-30'>
      <div className='relative container p-2 mx-auto flex items-center justify-between'>
        <h1 className='text-2xl tracking-wider select-none font-semibold lg:text-3xl'>
          <Link to='/'>MIRODON</Link>
        </h1>

        <nav
          className={`
            fixed w-full sm:w-max bottom-0 left-0 sm:static md:transition-none rounded-lg overflow-hidden transition-all duration-500 z-30`}
        >
          <ul className='flex flex-row items-center justify-around bg-white py-2 md:p-0'>
            {navLinks.map(({ title, icon, link, id }) => {
              return (
                <li key={id} className='sm:min-w-[90px]'>
                  <Link
                    className='flex p-1 py-2 sm:min-w-[6rem] justify-center md:p-3 md:hover:bg-gray-100 md:rounded-lg md:gap-0 flex-col text-center items-center'
                    to={link}
                  >
                    <span className='text-2xl sm:text-xl'>{icon}</span>
                    <p className='text-sm sm:text-base font-normal sm:font-light'>
                      {title}
                    </p>
                  </Link>
                </li>
              );
            })}
            <li
              className='sm:hidden'
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <button className='flex p-1 py-2 sm:min-w-[6rem] justify-center md:p-3 md:hover:bg-gray-100 md:rounded-lg md:gap-0 flex-col text-center items-center'>
                <span className='text-2xl'>
                  <BsThreeDots />
                </span>
                <p className='text-sm font-normal'>Menu</p>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <ul
        className={`${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } container fixed right-0 top-0 flex-col z-40 shadow-sm transition-transform duration-500 sm:transition-none bg-white w-[299px] items-start p-8 h-screen scrollbar-hidden mx-auto flex sm:items-center gap-4 sm:justify-between overflow-y-scroll sm:static sm:shadow-none sm:flex-row sm:h-max sm:w-auto sm:p-4`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className='text-3xl fixed top-6 left-4 sm:hidden'
        >
          <IoMdClose />
        </button>
        <h2 className='text-2xl pb-8 font-semibold self-center sm:hidden'>
          MIRODON
        </h2>
        {pagesLinks.map(({ link, title, id }) => {
          return (
            <Link
              className='whitespace-nowrap p-2 rounded-lg'
              key={id}
              onClick={() => windowWidth < 640 && setIsMenuOpen(false)}
              to={link}
            >
              {title}
            </Link>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
