import { motion } from 'framer-motion';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import {
  ContactInfoForm,
  InfoTabs,
  CartBox,
  PaymentMethodForm
} from '../components';

const Cart = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <section className=' text-indigo-600 container mx-auto px-4 flex gap-2 items-center'>
        <Link to='/'>Home</Link>
        <span>
          <IoIosArrowForward className='text-sm text-black' />
        </span>
        <p className='text-black'>Cart</p>
      </section>

      <section className='flex gap-12 mt-4 flex-wrap-reverse xl:flex-nowrap container mx-auto'>
        <section className='w-full xl:w-2/3 shrink mb-12'>
          <InfoTabs title='- Contact information' isOpen={true}>
            <ContactInfoForm />
          </InfoTabs>
          <InfoTabs title='- Payment Method' isOpen={false}>
            <PaymentMethodForm />
          </InfoTabs>
        </section>
        <CartBox />
      </section>
    </motion.main>
  );
};

export default Cart;
