import { useGetSingleCategoryProdcutsQuery } from '../store';
import ProductCard from './ProductCard';
import Skeleton from './Skeleton';
import { useSelector } from 'react-redux';

// single category products component
const SingleCategoryProducts = ({ activeTab }) => {
  const datas = useSelector((state) => state.categories.queries);
  console.log(datas);

  const { data, error, isFetching } =
    useGetSingleCategoryProdcutsQuery(activeTab);
  let content;
  if (isFetching) {
    content = (
      <div className='flex justify-around flex-wrap'>
        <Skeleton times={4} className='w-full max-w-[300px] mt-4 h-96' />
      </div>
    );
  } else if (error) {
    content = <p className='text-center'>Error</p>;
  } else {
    content = (
      <section className='flex mt-4 gap-4 justify-around flex-wrap'>
        {data.map((product) => {
          return (
            <div key={product.id} className='min-w-[300px]'>
              <ProductCard data={product} />
            </div>
          );
        })}
      </section>
    );
  }

  return <div>{content}</div>;
};

export default SingleCategoryProducts;
