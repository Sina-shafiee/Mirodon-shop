import { Fragment } from 'react';
import { Header, Hero } from '../components';

const Home = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Hero />
      </main>
    </Fragment>
  );
};

export default Home;
