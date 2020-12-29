import React, { Component } from 'react'

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