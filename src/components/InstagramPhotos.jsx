import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { useFetchPhotosQuery } from '../store';
import Skeleton from './Skeleton';

const InstagramPhotos = () => {
  const { data, isLoading, error } = useFetchPhotosQuery();

  console.log(data);
  let content;
  if (isLoading) {
    content = <Skeleton times={6} className='w-[300px] h-96' />;
  } else if (error) {
    content = <p className='text-center'>internal Error</p>;
  } else {
    content = data.results.map(
      ({ urls: { regular, thumb }, alt_description, id }) => {
        return (
          <LazyLoadImage
            effect='blur'
            key={id}
            className='max-w-[300px] max-h-[300px] lg:min-h-[384px] object-cover rounded-md lg:max-w-sm min-h-[300px] min-w-[300px] lg:min-w-[24rem]'
            src={regular}
            alt={alt_description}
            placeholderSrc={thumb}
            placeholder={thumb}
          />
        );
      }
    );
  }

  return (
    <section className='mt-4 flex flex-wrap justify-center gap-2 md:gap-4'>
      {content}
    </section>
  );
};

export default InstagramPhotos;
