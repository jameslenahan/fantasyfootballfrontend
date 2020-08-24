import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from '../components/User.js';
import { loadingUserInfo } from '../actions/userActions.js'

class teamContainer extends Component {

    componentDidMount(){
        this.props.loadingUserInfo(this.props.currentUser.id)
    }

    render() {
        return (
            <User user={this.props.currentUser} history={this.props.history} />
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUsersReducer,
    }
}

export default connect(mapStateToProps, { loadingUserInfo })(teamContainer);