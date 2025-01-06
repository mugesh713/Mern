import './App.css';
import About from './Components/FunctionalComponents/About';
import Home from './Components/FunctionalComponents/Home';
import Contact from './Components/FunctionalComponents/Contact';
import Gallery from './Components/FunctionalComponents/Gallery';
import NavBar from './Components/FunctionalComponents/NavBar';
import Footer from './Components/FunctionalComponents/Footer';
import UseEffect from './Components/FunctionalComponents/UseEffect';
import UseRef from './Components/FunctionalComponents/UseRef';
import UseContext from './Components/FunctionalComponents/UseContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UseMemo from './Components/FunctionalComponents/UseMemo';
import Signup from './Components/FunctionalComponents/signup';
import Login from './Components/FunctionalComponents/login';
import FAQ from './Components/FunctionalComponents/FAQ';


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/useeffect" element={<UseEffect />} />
          <Route path="/useref" element={<UseRef />} />
          <Route path="/usecontext" element={<UseContext />} />
          <Route path="/usememo" element={<UseMemo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;