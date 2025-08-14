import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Experience from './pages/Experience';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Experience />} />      {/* Root is Experience */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/aboutme" element={<AboutMe />} /> 

      </Routes>

    </BrowserRouter>
  );
}

export default App;