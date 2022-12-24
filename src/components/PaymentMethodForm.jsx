import { useState } from 'react';
import { FaCcMastercard, FaCcVisa } from 'react-icons/fa';
import { FaCcStripe } from 'react-icons/fa';

const PaymentMethodForm = () => {
  const [checkboxValue, setCheckboxValue] = useState('card');

  return (
    <section>
      <div className='flex'>
        <div className='flex mt-[1px] items-center h-5'>
          <input
            id='card'
            type='radio'
            name='payment-method'
            value='card'
            onChange={(e) => setCheckboxValue(e.target.value)}
            checked={checkboxValue === 'card'}
            className='w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300'
          />
        </div>
        <div className='ml-2 text-sm w-full'>
          <label
            htmlFor='card'
            className='font-medium text-gray-900 flex items-center justify-between w-full'
          >
            <span className='cursor-pointer'>Credit card</span>
            <div className='text-xl text-indigo-500 flex items-center gap-2'>
              <FaCcVisa />
              <FaCcMastercard />
            </div>
          </label>
          <p
            id='helper-radio-text'
            className='text-xs mt-2 font-normal text-gray-500 dark:text-gray-300'
          >
            Credit cards are one of the most popular methods of payment, and are
            used by millions of people around the world every day. Credit cards
            offer a convenient and secure way to make purchases, and can also be
            used to withdraw cash from ATMs.
          </p>
        </div>
      </div>
      <div className='flex mt-6'>
        <div className='flex mt-[1px] items-center h-5'>
          <input
            id='paypal'
            aria-describedby='helper-radio-text'
            type='radio'
            name='payment-method'
            onChange={(e) => setCheckboxValue(e.target.value)}
            value='stripe'
            className='w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300'
          />
        </div>
        <div className='ml-2 text-sm'>
          <label
            htmlFor='paypal'
            className='font-medium text-gray-900 flex justify-between items-center'
          >
            <span className='cursor-pointer'>Stripe</span>
            <FaCcStripe className='text-xl text-indigo-500' />
          </label>
          <p
            id='helper-radio-text'
            className='text-xs mt-2 font-normal text-gray-500 dark:text-gray-300'
          >
            Stripe is a popular payment gateway that allows businesses to easily
            accept credit card payments online. It is known for its simple and
            straightforward checkout process, as well as its competitive fees.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethodForm;
