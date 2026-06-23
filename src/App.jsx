import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ReactiveEffects from './components/ReactiveEffects';
import Seo from './components/Seo';
import About from './pages/About';
import Clientele from './pages/Clientele';
import Contact from './pages/Contact';
import Home from './pages/Home';
import OurWork from './pages/OurWork';
import Services from './pages/Services';

export default function App() {
  return (
    <>
      <Seo />`r`n      <ReactiveEffects />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/clientele" element={<Clientele />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}
