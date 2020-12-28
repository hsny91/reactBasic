import React, { Component } from 'react'

 class User extends Component {
    render() {
        const {name,salary}=this.props;  //destructing
        return (
            <div>
                <ul>
                    <li>adi:{name}</li>
                    <li>salary:{salary}</li>
                </ul>
            </div>
        )
    }
}

export default User;