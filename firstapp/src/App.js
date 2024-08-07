/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}







import React, {component} from 'react';
class App extends React.Component{
  render(){
    return(
      <div>
      <First/>
      <Second/>
      </div>
      );
  }
}
class First extends React.Component{
  render(){
    return(
    <div>
    <h1>MongoDB</h1>
    </div>
    )
  }
}
class Second extends React.Component{
  render(){
    return(
    <div>
    <h1>www.MERNSTACK.com</h1>
    <p>this is a sample website</p>
    </div>
    )
  }
}
export default App;
*/


import React, {component} from 'react';
import logo from './11.jpg';
import bear from './Bear.mp4';
import capt from './Bear.ogv';
class Fruits extends React.Component{
  render(){
    return(
      <div className='container'>
      <Apple/>
      <Banana/>
      <Pineapple/>
      <Grapes/>
      </div>
      );
  }
}
class Apple extends React.Component{
  render(){
    return(
    <div>
    <img src={logo} className="Fruits-logo" alt="logo"  max-width='100%'/>
    </div>
    )
  }
}
class Banana extends React.Component{
  render(){
    return(
    <div>
    <video src={bear} className="Fruits-bear" alt="logo" controls />
    </div>
    )
  }
}
class Pineapple extends React.Component{
  render(){
    return(
    <div>
    <audio src={capt} className="Fruits-capt" alt="capt" controls/>  
    </div>
    )
  }
}
class Grapes extends React.Component{
  render(){

  return (
    <div>
    <h1>login form</h1>  
   <div className="form">
     <form>
       <div className="input-container">
         <label>Username </label>
         <input type="text" name="uname" required />
         
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password" name="pass" required />
        
       </div>
       <div className="button-container">
         <input type="submit" />
       </div>
     </form>
   </div>
        <hr></hr>
    </div>
    );
  }
}
export default Fruits;
