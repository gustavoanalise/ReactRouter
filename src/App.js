import './App.css';
// 1 - Config React Router 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
// Components
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* 4 - Rota dinâmica */}
          <Route path='/products/:id' element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
