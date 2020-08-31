import React, { Component } from 'react';

class User extends Component {




    render() {
        const user = this.props.user
        return (
            <div className="MyAccount">
                {user ? <div><h1>Hello, {user.username}</h1><h2>Your Team:</h2></div> : null}
            </div>
        )
    }
}

export default User;