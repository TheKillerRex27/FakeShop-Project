import React from 'react';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import NotFound from './pages/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/:id' element={<ProductDetails />} />
        <Route path='/*' element={<NotFound/>} />
      </Routes>
    </Router>
  )
}

export default App;
