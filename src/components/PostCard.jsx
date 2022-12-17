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
    <article className='min-w-[300px] cursor-pointer max-w-xs rounded-lg overflow-hidden'>
      <LazyLoadImage src={imgUrl} className='max-h-44 w-full object-cover' />
      <h3 className='font-semibold pt-8'>{title}</h3>
      <p className='mt-4'>{desc}</p>
      <section>
        <p className='flex justify-between items-center mt-4'>
          <span>
            {dd}.{mm}.{year}
          </span>
          <button className='text-sm btn btn-primary !py-1 !px-3 !rounded-md'>
            Read more
          </button>
        </p>
      </section>
    </article>
  );
};

export default PostCard;
