import { Routes, Route } from 'react-router';
import { Header } from './components';
import Home from './routes/Home';
import ProductPage from './routes/ProductPage';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductPage />} />
      </Routes>
    </>
  );
};

export default App;
