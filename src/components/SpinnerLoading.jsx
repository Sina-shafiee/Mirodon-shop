import { CgSpinner } from 'react-icons/cg';

const SpinnerLoading = () => {
  return (
    <section className='min-h-[80vh] text-4xl flex items-center justify-center'>
      <CgSpinner className='animate-spin' />
    </section>
  );
};

export default SpinnerLoading;
