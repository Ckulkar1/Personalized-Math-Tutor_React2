import logo from './logo.svg';
import './App.css';
import example from './Example1-02.svg';
import { Link } from "react-router-dom";
import React, { useState } from 'react';

const steps = [
  {question: "What ratio can we use from similarity theorem to find the answer?",
  responses: ["We don't know what is AB/PQ.","", "We don't know what is AC/PR."],
  answers: ["AB/PQ = BC/QR", "A(ABC)/A(PQR) = BC/QR", "BC/QR = AC/PR"]},

  {
    question: "What is the correct ratio according to the given values?",
    responses: ["","Check your values again!","Check your values again",],
    answers: ["288sq.m/800sq.m", "800sq.m/288sq.m", "142sq.m/400sq.m"]
  },

  {
    question: "What is the smallest ratio of 288sq.m/800sq.m?",
    responses: ["You can go lower!", "You can still go lower!",""],
    answers: ["144sq.m/400sq.m", "36sq.m/100sq.m", "3sq.m/5sq.m"]
  }
]



function App() {
  const [response, setResponse] = useState("");
  const [stepIndex, setStepIndex] = useState(0);
  const correctAnswers = ["A(ABC)/A(PQR) = BC/QR","288sq.m/800sq.m", "3sq.m/5sq.m"]
  console.log();

  return (
<div>
    <h1>All the Best!</h1>
    <h2>Problem 1</h2>

    <img src={example} alt="Problem 1" width="100%" height="20%"/>

{correctAnswers.slice(0, stepIndex).map(answer => <p>{answer}</p>)}

{stepIndex == 3 ? <div><p>Congrats!</p>
  <Link to="/"><button type="submit">Find a new topic</button>
  </Link>

                  </div>  : <div>


        <h3>{steps[stepIndex].question} </h3>


          <p>{response}</p>

        <button  onClick={() => {
          if (steps[stepIndex].responses[0] == ''){
            setStepIndex(stepIndex + 1)
            setResponse("");


            }
            else {
              setResponse(steps[stepIndex].responses[0])
            }

        }}> {steps[stepIndex].answers[0]}</button>
        <button  onClick={() =>{
          if (steps[stepIndex].responses[1] == ''){
            setStepIndex(stepIndex + 1)
            setResponse("");

            }
            else {
              setResponse(steps[stepIndex].responses[1])
            }
        }}> {steps[stepIndex].answers[1]}</button>

        <button onClick={() => {
          if (steps[stepIndex].responses[2] == ''){
            setStepIndex(stepIndex + 1)
            setResponse("");

            }
            else {
              setResponse(steps[stepIndex].responses[2])
            }
        }
        }> {steps[stepIndex].answers[2]}</button>

  </div>}

    </div>


);
}





export default App;
