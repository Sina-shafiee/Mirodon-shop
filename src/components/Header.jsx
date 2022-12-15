import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { BsCart2, BsHeart } from 'react-icons/bs';
import { RxHamburgerMenu, RxPerson } from 'react-icons/rx';
import { MdOutlineClose } from 'react-icons/md';

import useWindowWidth from '../hooks/use-windowWidth';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const windowWidth = useWindowWidth();

  const navLinks = [
    { title: 'Favorites', icon: <BsHeart />, id: 1, link: '/favorites' },
    { title: 'Your Cart', icon: <BsCart2 />, id: 2, link: 'cart' },
    { title: 'Sign In', icon: <RxPerson />, id: 3, link: 'sign-in' }
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

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (windowWidth > 768) {
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
    }
  }, [windowWidth]);

  return (
    <header className='p-4 md:py-8'>
      <div className='relative container p-2 mx-auto flex items-center justify-between'>
        <h1 className='text-2xl font-semibold lg:text-2xl'>MIRODON</h1>

        <button
          onClick={handleMenuToggle}
          className={`text-3xl md:hidden ${
            isMenuOpen ? 'active:rotate-45' : 'active:-rotate-45'
          } transition-all duration-300`}
        >
          {isMenuOpen ? <MdOutlineClose /> : <RxHamburgerMenu />}
        </button>

        <nav
          className={`${
            isMenuOpen
              ? 'translate-x-0'
              : 'translate-x-full invisible opacity-0'
          } absolute top-12 right-5 md:static md:transition-none rounded-lg overflow-hidden transition-all duration-500 `}
        >
          <ul className='flex flex-col md:gap-8 md:flex-row bg-white backdrop-blur-sm bg-opacity-80 pr-11 pl-4 py-4 gap-4 md:p-0'>
            {navLinks.map(({ title, icon, link }) => {
              return (
                <li className='min-w-[90px]'>
                  <Link
                    className='flex gap-2 md:hover:bg-gray-100 p-2 md:rounded-lg md:gap-0 md:flex-col items-center'
                    to={link}
                  >
                    <span className='text-xl'>{icon}</span>
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <ul className='container scrollbar-hidden mx-auto flex items-center gap-4 justify-between overflow-scroll'>
        {pagesLinks.map(({ link, title, id }) => {
          return (
            <Link
              className='whitespace-nowrap p-2 rounded-lg'
              key={id}
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
