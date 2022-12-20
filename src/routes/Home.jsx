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
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
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
    </motion.main>
  );
};

export default Home;
