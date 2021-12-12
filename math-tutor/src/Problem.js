import logo from './logo.svg';
import './App.css';
import theorem from './SimilarityTheorem.svg';
import { Link } from "react-router-dom";


function Problem() {
  return (
    <div>
    <h1>The Theorem of Areas of <span id="ST">Similar Triangles</span></h1>

        <img src={theorem} alt="Similarity Theorem"/>

        <Link to="/example">
         <button>Start Solving</button>
        </Link>


        </div>
);
}








export default Problem;
