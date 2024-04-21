import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './scenes/home/Home';
import CategoryDetails from './scenes/categoryDetails/CategoryDetails';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div data-testid="app" className="app">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="item/:itemId" element={<CategoryDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
