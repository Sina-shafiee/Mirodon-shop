import { LazyLoadImage } from 'react-lazy-load-image-component';

const PostCard = ({
  data: {
    imgUrl,
    title,
    desc,
    date: { year, mm, dd }
  }
}) => {
  return (
    <article className='min-w-[300px] bg-gray-100 shadow-md max-w-xs xl:max-w-sm rounded-lg overflow-hidden'>
      <div className='h-48 overflow-hidden'>
        <LazyLoadImage src={imgUrl} className='max-h-48 w-full object-cover' />
      </div>
      <section className='p-4 xl:p-6'>
        <h3 className='font-semibold pt-8'>{title}</h3>
        <p className='mt-4'>{desc}</p>
        <section>
          <p className='flex justify-between items-center mt-4'>
            <span>
              {dd}.{mm}.{year}
            </span>
            <button className='text-sm btn btn-primary !py-2 !px-3 !rounded-lg'>
              Read more
            </button>
          </p>
        </section>
      </section>
    </article>
  );
};

export default PostCard;
