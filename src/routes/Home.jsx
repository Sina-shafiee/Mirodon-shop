import { Fragment } from 'react';
import {
  Hero,
  Companies,
  SectionWrapper,
  Production,
  BlogBanner
} from '../components';

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Companies />
      <SectionWrapper
        title='Our Production'
        btnText='view all'
        link={'/products'}
      >
        <Production />
      </SectionWrapper>
      <BlogBanner />
    </Fragment>
  );
};

export default Home;
