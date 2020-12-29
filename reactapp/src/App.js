
import React, { Component } from 'react'
import Users from'./component/User';
import User from'./component/User';
//import Navbar from './component/Navbar'
import './App.css';


class App extends Component {
  state={
  users:[
    {
      id:1,
      name:"ali",
      salary:"5000",
      department:"Bilisim"
    },
    {
      id:2,
      name:"ayse",
      salary:"5000",
      department:"Bilisim"
    }
  ]
  }
  deleteUser=(id)=>{
    this.setState({
      users:this.state.users.filter(user=>id!==user.id)
    })
    
  }
  render(){
  return (
    <div className="container">
      <h4 style={{color:"red",fontSize:"30px"}}>Husniye</h4>
     <Users deleteUser={this.deleteUser} users={this.state.users}/>
     <Users/>
     <User/>
    </div>
  );
  }
}

export default App;
