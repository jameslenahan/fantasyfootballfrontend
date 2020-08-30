import React, { Component } from 'react';
import { connect } from 'react-redux';
import Players from '../components/Players.js';
import { fetchPlayers } from '../actions/playersActions.js';


class teamContainer extends Component {
    componentDidMount(){
        this.props.fetchPlayers()
    }

    render() {
        return (

            <div>
                <Players players={this.props.players} history={this.props.history} />
            </div>
        )
    }
}


export default connect((state)=>({players: state.playersReducer.players}), { fetchPlayers })(teamContainer)