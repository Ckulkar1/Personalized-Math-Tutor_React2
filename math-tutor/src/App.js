import Problem from './Problem.js';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home.js';
import Example from './Example.js';


function App() {
  return (
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="problem" element={<Problem />} />
        <Route path="example" element={<Example />} />
      </Routes>
);
}










export default App;
