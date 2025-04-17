import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Graphic from './pages/Graphic';
import Video from './pages/Video';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/graphic" element={<Graphic />} />
            <Route path="/video" element={<Video />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;