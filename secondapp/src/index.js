/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/


































import React from 'react';
import Balaji from 'react-dom/client';
//import './index.css';
//import Garage from './Apple.js';
//import Fruits from './App';
//import reportWebVitals from './reportWebVitals';
/*
const root = Balaji.createRoot(document.getElementById('root'));
root.render(<Fruits />);*/
//root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();



const fruitList = ['Apple', 'Bananas', 'Grapes', 'Pineapple'];   
const listItems = fruitList.map((myList)=>{   
    return <li>{myList}</li>;   
});   
   
const root = Balaji.createRoot(document.getElementById('root'));
root.render(<ol type="I"> {listItems} </ol>);

