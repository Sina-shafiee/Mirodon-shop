import { Link } from 'react-router-dom';

import { BsCart2, BsHeart } from 'react-icons/bs';
import { RxPerson } from 'react-icons/rx';
import useAuth from '../hooks/useAuth';

// header section component

const Header = () => {
  const user = useAuth();

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
          <ul className='flex flex-row justify-around bg-white py-2 gap-4 md:p-0'>
            {navLinks.map(({ title, icon, link, id }) => {
              return (
                <li key={id} className='min-w-[90px]'>
                  <Link
                    className='flex p-2 gap-1 sm:min-w-[6rem] justify-center md:p-3 md:hover:bg-gray-100 md:rounded-lg md:gap-0 flex-col text-center items-center'
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
      <ul className=' container scrollbar-hidden mx-auto flex items-center gap-4 justify-between overflow-scroll'>
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
