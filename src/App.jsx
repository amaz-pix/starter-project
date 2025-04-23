import { Navigate, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Counter from './pages/Counter';

export default function App() {
  return (
    <div className="container mx-auto p-4">
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/co" element={<Counter />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}