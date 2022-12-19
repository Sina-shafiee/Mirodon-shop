import { LazyLoadImage } from 'react-lazy-load-image-component';

import lacosteLogo from '../assets/images/company-1.jpg';
import superdryLogo from '../assets/images/company-2.jpg';
import theNorthFaceLogo from '../assets/images/company-3.jpg';
import reebookLogo from '../assets/images/company-4.jpg';
import mangoLogo from '../assets/images/company-5.jpg';
import addidasLogo from '../assets/images/company-6.jpg';

// compaines section component

const Companies = () => {
  const compainesData = [
    { title: 'lacoste', imgUrl: lacosteLogo, id: 1 },
    { title: 'superdry', imgUrl: superdryLogo, id: 2 },
    { title: 'the north face', imgUrl: theNorthFaceLogo, id: 3 },
    { title: 'reebok', imgUrl: reebookLogo, id: 4 },
    { title: 'mango', imgUrl: mangoLogo, id: 5 },
    { title: 'addidas', imgUrl: addidasLogo, id: 6 }
  ];
  return (
    <section className='container mx-auto p-4 mt-6'>
      <div className='grid grid-cols-2 align-middle sm:grid-cols-3 lg:grid-cols-6 place-items-center gap-4'>
        {compainesData.map(({ id, title, imgUrl }) => {
          return (
            <div key={id} className='min-h-[80px] min-w[126.4px]'>
              <LazyLoadImage className='max-h-20' src={imgUrl} alt={title} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Companies;
