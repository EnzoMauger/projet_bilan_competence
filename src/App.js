import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './assets/Home/Home';
import Header from './assets/Header/Header';
import About from './assets/About/About';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
