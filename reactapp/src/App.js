
import React from 'react'
import User from'./component/User';
import Navbar from './component/Navbar'
import './App.css';


function App() {
  return (
    <div className="container">
      <h4 style={{color:"red",fontSize:"30px"}}>Husniye</h4>
     <User
     name="husniye"
     salary="5000"
     />
     <Navbar name="mehmet"/>
    </div>
  );
}

export default App;
