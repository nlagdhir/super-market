import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import Button from './ui-kit/Button.js';
import Input from './ui-kit/Input.js';
import Header from './Header.js';
import Home from './components/pages/Home.js';
import About from './components/pages/About.js';
import Testimonials from './components/pages/Testimonials';
import Products from './components/pages/Products.js';
import ProductDetails from './components/ProductDetails.js';
import ProductDetailsData from './components/ProductDetailsData.js';
import ProductDetailsNutrition from './components/ProductDetailsNutrition.js';
import ProductDetailsStorage from './components/ProductDetailsStorage.js';
import Footer from './Footer.js';
import NotFound from './components/404/NotFound.js';
import './App.css';

function App() {

  function handleButtonClick() {
    alert('Button clicked');
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/about" element={<About /> } />
          <Route path="/testimonials" element={<Testimonials /> } />
          <Route path="/products" element={<Products /> } />
          <Route path="/product/:id" element={<ProductDetails /> }>
            <Route path="/product/:id" element={<ProductDetailsData /> } />
            <Route path="/product/:id/nutrition" element={<ProductDetailsNutrition /> } />
            <Route path="/product/:id/storage" element={<ProductDetailsStorage /> } />
          </Route>
          <Route path="/" element={<NotFound /> } />
        </Routes>
        <Footer />
      </div>

      
    </BrowserRouter>
  );
}

export default App;
