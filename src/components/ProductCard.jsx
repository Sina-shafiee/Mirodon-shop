import { LazyLoadImage } from 'react-lazy-load-image-component';
import { BsCart } from 'react-icons/bs';

import { useNavigate } from 'react-router-dom';

// product card component
const ProductCard = ({ data: { image, title, id, price, description } }) => {
  const navigate = useNavigate();
  return (
    <article className='max-w-[300px] p-4 rounded-md transition-all duration-500 hover:shadow'>
      <section className='relative min-h-[11rem]'>
        <LazyLoadImage
          src={image}
          alt={title}
          className='w-full max-h-44 object-contain'
        />
        <button className='absolute -bottom-4 hover:bg-gray-100 right-5 text-2xl shadow-sm bg-gray-50 p-3 leading-3 w-12 h-12 rounded-full'>
          <BsCart />
        </button>
      </section>

      <section
        onClick={() => navigate(`/product/${id}`)}
        className='pt-8 pb-3 flex flex-col gap-2 cursor-pointer'
      >
        <h3 className='font-semibold'>{title.substring(0, 20).trim()}..</h3>
        <p className='text-gray-600'>{description.substring(0, 78).trim()}..</p>
        <p className='text-2xl font-semibold'>${price}</p>
      </section>
    </article>
  );
};

export default ProductCard;
