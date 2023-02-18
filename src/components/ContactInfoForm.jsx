const ContactInfoForm = () => {
  return (
    <form className='p-2 md:p-8'>
      <label htmlFor='gender'>Gender *</label>
      <select
        name='gender'
        id='gender'
        className='bg-white rounded-3xl mt-2 form-select appearance-none block w-full px-4 py-1 h-[48px] text-base text-gray-700 disabled:bg-gray-100 bg-clip-padding bg-no-repeat transition border-none ease-in-out max-w-[319px] m-0 focus:text-gray-700 focus:outline-none'
      >
        <option value='male'>Male</option>
        <option value='female'>Female</option>
      </select>

      <div className='flex mt-4 gap-4 flex-wrap lg:flex-nowrap'>
        <div>
          <label htmlFor='firstName'>First name *</label>
          <input
            id='firstName'
            type='text'
            autoCapitalize='first-name'
            className='w-full py-3 mt-2 px-4 rounded-3xl bg-white'
            name='firstName'
            placeholder='first name'
            required
          />
        </div>
        <div>
          <label htmlFor='lastName'>Last name *</label>
          <input
            id='lastName'
            type='text'
            autoCapitalize='last-name'
            className='w-full py-3 mt-2 px-4 rounded-3xl bg-white'
            name='lastName'
            placeholder='last name'
            required
          />
        </div>
      </div>

      <div className='mt-4'>
        <label htmlFor='lastName'>Email *</label>
        <input
          type='email'
          autoCapitalize='email'
          className='w-full py-3 mt-2 px-4 rounded-3xl bg-white'
          name='email'
          id='email'
          placeholder='email'
          required
        />
      </div>

      <div className='flex mt-4 gap-4 flex-wrap md:flex-nowrap'>
        <div className='w-full'>
          <label htmlFor='address'>Address *</label>
          <input
            type='address'
            autoCapitalize='last-name'
            className='w-full mt-2 py-3 px-4 rounded-3xl bg-white'
            name='address'
            placeholder='address'
            required
          />
        </div>
        <div className='md:w-1/3'>
          <label htmlFor='zipcode'>Zip code *</label>
          <input
            type='number'
            required
            id='zipcode'
            className='w-full mt-2 py-3 px-4 rounded-3xl bg-white'
            name='zipcode'
            placeholder='zip code'
          />
        </div>
      </div>
      <button type='button' className='btn btn-primary mt-4 mr-4 ml-2'>
        Save
      </button>
    </form>
  );
};

export default ContactInfoForm;
