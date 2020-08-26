import React, { Component } from 'react';
import { connect } from 'react-redux';
import Player from '../components/User.js';
import { loadingUserInfo } from '../actions/userActions.js'

class teamContainer extends Component {

    componentDidMount(){
        this.props.loadingUserInfo(this.props.currentUser.id)
    }

    render() {
        return (
            <Player player={this.props.players} history={this.props.history} />
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUsersReducer,
    }
}

export default connect(mapStateToProps, { loadingUserInfo })(teamContainer);