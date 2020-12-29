
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

/**
 * props drilling
 * import React, { Component } from 'react'

 class User extends Component {
     onDeleteUser=(e)=>{
        const{id,deleteUser}=this.props
        deleteUser(id)
     }

    render() {
        const {id,name,salary,department}=this.props;  //destructing
        console.log("calsi")
        return (
            <div className="col-md-8 mb-4">
                <div className="card">
                    <div className="card-header d-flex            justify-content-between">
                        <h4 className=" d-inline">{name}</h4>
                        <i onClick={this.onDeleteUser} className="fas fa-trash-alt" style={{cursor:"pointer"}}></i>
                    </div>
                    <div className="card-body">
                    <p className="card-text"> id:{id}</p>
                    <p className="card-text"> Name:{name}</p>
                        <p className="card-text"> Maas:{salary}</p>
                        <p className="card-text"> Deparment:{department}</p>
                    </div>
                </div>
               
                  
                
            </div>
        )
    }
}

export default User;
 */
