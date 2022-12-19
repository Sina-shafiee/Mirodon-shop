import {
  BsFacebook,
  BsTelegram,
  BsInstagram,
  BsTwitter,
  BsPhone
} from 'react-icons/bs';
import { AiOutlineMail, AiOutlineCopyrightCircle } from 'react-icons/ai';
import { RiSendPlaneLine } from 'react-icons/ri';

import { Link } from 'react-router-dom';

const Footer = () => {
  const footerData = {
    socialMediaIcons: [
      {
        title: 'facebook',
        link: 'https://www.facebook.com/mirodon',
        icon: <BsFacebook />,
        id: 1
      },
      {
        title: 'instagram',
        link: 'https://www.instagram.com/mirodon',
        icon: <BsInstagram />,
        id: 2
      },
      {
        title: 'twitter',
        link: 'https://www.twitter.com/mirodon',
        icon: <BsTwitter />,
        id: 3
      },
      {
        title: 'telegram',
        link: 'https://www.telegram.com/mirodon',
        icon: <BsTelegram />,
        id: 4
      }
    ],
    mainLinks: [
      { title: 'Patients', link: '/patients', id: 1 },
      { title: 'About', link: '/about', id: 2 },
      { title: 'Products', link: '/products', id: 3 }
    ],
    clientLinks: [
      { title: 'Traning', link: '/traning', id: 1 },
      { title: 'Publishing', link: '/publishing', id: 2 },
      { title: 'Projects', link: '/projects', id: 3 }
    ],
    serviceLinks: [
      { title: 'Contact & Service', link: '/contact', id: 1 },
      { title: 'Job & Career', link: '/jobs', id: 2 },
      { title: 'Product Advisor', link: '/products', id: 3 }
    ],
    contactWays: [
      { title: 'phone', icon: <BsPhone />, id: 1, data: '+9891782412' },
      {
        title: 'email',
        icon: <AiOutlineMail />,
        id: 2,
        data: 'info@mirodon.com'
      }
    ]
  };

  return (
    <footer className='bg-stone-900 2xl:container mx-auto mb-[4.7rem] sm:mb-0 text-white'>
      <section className='mx-auto px-4 py-8 flex-wrap gap-4 container flex justify-between'>
        <div className='min-w-[300px]'>
          <h2 className='text-2xl uppercase font-semibold'>Mirodon</h2>
          <p className='mt-3'>Follow us</p>
          <ul className='flex text-lg gap-2 p-2 mt-1'>
            {footerData.socialMediaIcons.map(({ id, link, title, icon }) => {
              return (
                <li key={id} className='cursor-pointer'>
                  <a href={link} title={title}>
                    {icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='min-w-[200px]'>
          <h4 className='text-xl font-medium'>Main</h4>

          <ul className='mt-2'>
            {footerData.mainLinks.map(({ id, title, link }) => {
              return (
                <li key={id}>
                  <Link to={link}>{title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='min-w-[200px]'>
          <h4 className='text-xl font-medium'>Clients</h4>

          <ul className='mt-2'>
            {footerData.clientLinks.map(({ id, title, link }) => {
              return (
                <li key={id}>
                  <Link to={link}>{title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='min-w-[200px]'>
          <h4 className='text-xl font-medium'>Services</h4>

          <ul className='mt-2'>
            {footerData.serviceLinks.map(({ id, title, link }) => {
              return (
                <li key={id}>
                  <Link to={link}>{title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='min-w-[200px]'>
          <h4 className='text-xl font-medium'>Contacts</h4>

          <ul className='mt-2'>
            {footerData.contactWays.map(({ id, title, icon, data }) => {
              return (
                <li key={id} title={title} className='flex gap-2 items-center'>
                  <span>{icon}</span>
                  <p> {data}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <div className='container mx-auto h-[1px] bg-gray-300'></div>

      <section className='mx-auto px-2 sm:px-4 py-8 flex-wrap gap-4 container overflow-x-hidden flex justify-between'>
        <div className='flex gap-4 flex-wrap'>
          <button className='btn btn-primary whitespace-nowrap'>
            Show vacancy
          </button>
          <button className='btn btn-tertiary whitespace-nowrap'>
            Give feedback
          </button>
        </div>
        <div className='bg-white min-w-[310px] md:min-w-[412px] justify-between gap-2 text-black flex items-center rounded-3xl overflow-hidden py-2 px-4'>
          <AiOutlineMail className='text-xl' />
          <input
            className='flex-1 border-none outline-none sm:py-1'
            placeholder='Subscibe to our newsletter'
          />
          <RiSendPlaneLine className='text-xl text-indigo-400' />
        </div>
      </section>

      <div className='container mx-auto h-[1px] bg-gray-300'></div>

      <section className=' container mx-auto px-2 sm:px-4 py-8 flex flex-wrap justify-between items-center text-gray-400'>
        <p className='flex items-center gap-2'>
          <AiOutlineCopyrightCircle className='text-xl' /> 2022 SINA SHAFIEE.
          all rights reserved
        </p>
        <div className='flex items-center gap-4'>
          <Link to='/privacy-policy'>Privacy policy</Link>
          <Link to='/terms'>Terms of use</Link>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
