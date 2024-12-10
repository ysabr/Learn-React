// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     // <h1>Hello worlddddd</h1>
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import {useEffect , useState} from "react";

export default function App() {
  
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  async function getadvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) =>c+ 1);
  }
  useEffect(function(){
    getadvice();
  }, [])
  return (
    <div>
      <h1> {advice} </h1>
      <button onClick={getadvice}>Get advice</button>
      <Message count={count} />
    </div>
  );
}



function Message(props){
  return (
    <p>You have read <strong> {props.count} </strong> pieaces of adivces</p>
  )
}