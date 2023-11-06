import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Data from './Data'
import About from "./About";
import Contact from "./Contact";
import './App.css'


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" >
        <Route index element={<Data />} />
          <Route path="About" element={<About />} />
          <Route  path="Contact" element={<Contact />} />
       
        </Route>
      </Routes>
    </Router>
  );
}