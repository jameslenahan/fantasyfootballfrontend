import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        //when logged in, log out renders, otherwise renders login and signup button
        const renderBtn = this.props.loggedin ? <div><button><Link to="/logout" className="btn btn-full">Log Out</Link></button></div> : <div><button><Link to="/login" className="btn btn-full">Login</Link></button><button><Link to="/signup" className="btn btn-ghost">Sign Up</Link></button></div>
        return(
            <div className="Home">
                <h1>Fantasy Football Player Rankings</h1>
                <h3>Find out which players to start!</h3>
                {renderBtn}
            </div>
        )
    }
}


export default Home;