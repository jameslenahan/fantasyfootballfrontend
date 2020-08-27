import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetFavorite } from '../actions/playerActions.js'
import TextField from '@material-ui/core/TextField';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

class Players extends Component {
    state ={
        name: "",
        rating: ""
    }

    componentDidMount(){
        this.props.resetFavorite()
    }
    handleInputChange = event => {
        this.setState({
            name: event.target.value
        })
    }
    handleSubmit = event => {
        event.preventDefault()
        this.props.searchPlayers(this.state)
    }
    handleClick = (apiId, history) => {
        this.props.playerShow(apiId, history)
    }

    render() {
        return(
            <div className="Players">
                <h1 style={{color: "#555"}}>Player Search</h1>

                <form onSubmit={this.handleSubmit} style={{margin: "6% auto"}}>
                    Search:
                    <TextField type="text" name="name" value={this.state.name} placeholder="ex. Tom Brady" onChange={this.handlePlayerChange} style={{marginLeft: "10px"}, marginRight: "10px"}} />
                    <input type="submit" value="Add" className="btn btn-full" style={{marginLeft: "15px"}} />
                </form>

            <GridList cols={2}>
            {this.props.players!== null ? this.props.players.map(player => <GridListTile key={player.playerId}><GridListTileBar title={player.name}  actionIcon={
                <IconButton onClick={() => this.handleClick(player.playerId, this.props.history)}>
                    <MoreHorizIcon style={{color: "#FCF3F3"}}/>
                </IconButton>
            }                  /></GridListTile>) : <p>No palyer found. Please try with another keyword.</p>}
            </GridList>
        </div>



        )
    }
}
export default connect(null, {searchPlayers, playerShow, resetFavorite})(Songs);