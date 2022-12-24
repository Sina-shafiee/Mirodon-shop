import { useSelector } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../store';

const CartBox = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.products);

  const countTotal = () => {
    return cart.reduce((prev, curr) => prev + curr.price, 0);
  };

  return (
    <div className='container shrink-0 w-full h-min xl:w-1/3 mb-8 xl:mb-12 mx-auto'>
      <section className='shadow-sm p-4 mt-6 rounded-3xl '>
        <h2 className='font-semibold uppercase text-xl text-center mt-4 mb-2'>
          Your Shipping Basket
        </h2>
        {cart.length ? (
          cart.map(({ id, image, title, price }) => {
            return (
              <section
                key={id}
                className='flex gap-2 sm:gap-12 cl:gap-4 mb-4 rounded-3xl p-2 '
              >
                <div className='max-w-[70px] xl:w-32'>
                  <LazyLoadImage
                    className='w-11/12 h-32 object-contain rounded-lg'
                    src={image}
                    alt={title}
                  />
                </div>
                <div className='flex flex-col w-full justify-between border-b pb-2'>
                  <h4 className='font-medium'>{title}</h4>
                  <div className='flex justify-between items-center'>
                    <p className='text-lg whitespace-nowrap sm:text-2xl mt-4 font-semibold'>
                      <span className='text-gray-700 text-base'>1x </span>/ $
                      {price}
                    </p>
                    <button
                      onClick={() => dispatch(removeFromCart(id))}
                      className='pl-2 pb-1 self-end'
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </section>
            );
          })
        ) : (
          <p className='text-center pt-4 pb-8'>Empty</p>
        )}
        <div className='flex px-4 pb-2 justify-between'>
          <p>Sum</p>
          <p>${countTotal()}</p>
        </div>
        <div className='flex px-4 pb-2 justify-between'>
          <p>Shipping</p>
          <p>$0</p>
        </div>
        <div className='flex text-xl font-semibold px-4 justify-between'>
          <p>Total</p>
          <p>${countTotal()}</p>
        </div>
        {cart.length ? (
          <button
            onClick={() =>
              alert('Sorry visitor this option is not available right now')
            }
            className='mt-6 mx-auto btn btn-primary block'
          >
            Continue to checkout
          </button>
        ) : null}
      </section>
    </div>
  );
};

export default CartBox;
