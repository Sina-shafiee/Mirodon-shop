import { Link } from 'react-router-dom';

// wrapper for sections
const SectionWrapper = ({ children, title, btnText, link }) => {
  const headerContent = (
    <section className='flex justify-between items-center'>
      <h2 className='text-xl md:text-2xl font-semibold capitalize '>{title}</h2>
      <Link to={link} className='btn btn-primary'>
        {btnText}
      </Link>
    </section>
  );

  return (
    <section className='p-4 mt-6 container mx-auto'>
      {headerContent}
      {children}
    </section>
  );
};

export default SectionWrapper;
