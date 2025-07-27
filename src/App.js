import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Search from './Pages/Search';
import Category from './Pages/Category';
import About from './Pages/About';
import NewsForm from './Pages/NewsForm';
import NewsLayout from './Pages/NewsLayout';


function App() {
  return (
    <Router>
      <Navbar />
      <NewsLayout />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/category" element={<Category />} />
          <Route path="/about" element={<About />} />
          <Route path="/NewsForm" element={<NewsForm />} />
          <Route path="/NewsLayout" element={<NewsLayout />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
