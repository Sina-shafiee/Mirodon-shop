import { motion } from 'framer-motion';
import {
  Hero,
  Companies,
  SectionWrapper,
  Production,
  BlogBanner,
  InstagramPhotos,
  PostCardList
} from '../components';

const Home = () => {
  return (
    <div
    // initial={{ opacity: 0, translateX: -999 }}
    // animate={{ opacity: 1, translateX: 0 }}
    // exit={{ opacity: 0, translateX: -999 }}
    // transition={{ duration: 0.4 }}
    >
      <Hero />

      <Companies />

      <SectionWrapper
        title='Our Production'
        btnText='view all'
        link='/products'
      >
        <Production />
      </SectionWrapper>

      <BlogBanner />

      <SectionWrapper title='our instagram' btnText='Go to' link='/instagram'>
        <InstagramPhotos />
      </SectionWrapper>

      <SectionWrapper title='our articles' btnText='view all' link='/blog'>
        <PostCardList />
      </SectionWrapper>
    </div>
  );
};

export default Home;
