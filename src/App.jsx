import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Reservation from './pages/Reservation';
import Gallery from './pages/Gallery';
import Career from './pages/Career';
import Contact from './pages/Contact';

const Layout = ({ children }) => (
  <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-amber-500 selection:text-neutral-900 pt-20">
    
    {/* Clean & Fixed Transparent Custom Navbar integration */}
    <Navbar />

    <main>{children}</main>

    <footer className="bg-neutral-950 border-t border-neutral-900 py-10 text-center text-xs tracking-widest text-neutral-600 uppercase">
      <p>&copy; {new Date().getFullYear()} Ba Ba Reeba. All Rights Reserved.</p>
    </footer>
  </div>
);

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}