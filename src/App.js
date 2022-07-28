import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Button from './ui-kit/Button.js';
import Input from './ui-kit/Input.js';
import Header from './Header.js';
import Home from './components/pages/Home.js';
import About from './components/pages/About.js';
import Testimonials from './components/pages/Testimonials';
import Products from './components/pages/Products.js';
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
      </div>

      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/about" element={<About /> } />
        <Route path="/testimonials" element={<Testimonials /> } />
        <Route path="/products" element={<Products /> } />
        <Route path="/" element={<NotFound /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
