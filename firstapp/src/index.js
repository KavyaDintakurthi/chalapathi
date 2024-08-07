import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Fruits from './App';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Fruits />
  </React.StrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
/*
const myElement=<h1>React is {15+5} times better with JSH</h1>
const container=document.getElementById("root");
const kavya=ReactDOM.createRoot(container);
kavya.render(myElement);

const myElement=(
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>cherries</li>
    </ul>
  );
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(myElement);

const myElement =<h1 className="myclass">welcome to SALEM city</h1>
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);

const x=50;
const myElement=<h1 className="myclass">{(x)<100? "Google":"Yahoo"}</h1>;
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(myElement);

const x=50;
let text="Google engine";
if(x<100){
  text="Yahoo Engine";
}
const myElement=<h1 className="myclass">{text}</h1>;
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(myElement);

function Mango(){
  return <h1>Welcome to mango cities</h1>;
}
const container=document.getElementById("root");
const root=ReactDOM.createRoot(container);
root.render(<Mango />);

const myelement=(
  <table className="myclass" width="50%" align="center">
  <tr className="my">
  <th>Name</th>
  <th>Price</th>
  <th>Address</th>
  </tr>
  <tr className="my1">
  <td>apple</td>
  <td>30</td>
  <td>Ooty</td>
  </tr>
  <tr className="my">
  <td>Mango</td>
  <td>20</td>
  <td>Salem</td>
  </tr>
  <tr className="my1">
  <td>Pineapple</td>
  <td>30</td>
  <td>Ooty</td>
  </tr>
  </table>
);
const container=document.getElementById("root");
const root=ReactDOM.createRoot(container);
root.render(myelement );
*/
