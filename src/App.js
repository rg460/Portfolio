// import {render} from "react-dom";
import {
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
        
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

    </div>
  );
}


export default App;
// This a comment