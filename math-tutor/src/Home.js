import logo from './logo.svg';
import './App.css';
import bgImage from './Herobackground.jpg.jpg';
import { Link } from "react-router-dom";


function App() {
  return (
    <div className ="Hero">
<h1>Learning Math step by step</h1>
<img src={bgImage} alt="A math prodigy" width="100%" height="20%"/>

<Link to="/problem"><button type="submit">Get Started</button>
</Link>


</div>
);
}











export default App;
