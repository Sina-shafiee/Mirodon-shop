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
    <div>
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
