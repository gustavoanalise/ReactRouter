import './App.css';
// 1 - Config React Router 
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// Pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import Search from './pages/Search';
// Components
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar />
        {/* 9 - Search */}
        <SearchForm />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* 4 - Rota dinâmica */}
          <Route path='/products/:id' element={<Product />} />
          {/* 6 - Nested routes */}
          <Route path='/products/:id/info' element={<Info />} />
          {/* 9 - Search */}
          <Route path='/search' element={<Search />} />
          {/* 10 - Redirect */}
          <Route path='/company' element={<Navigate to="/about" />} />
          {/* 7 - 404 notFound */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
