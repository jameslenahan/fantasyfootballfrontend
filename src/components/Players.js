import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchPlayers} from '../actions/playersActions.js';
import { playerShow, resetFavorite } from '../actions/playerActions.js'
import TextField from '@material-ui/core/TextField';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


class Players extends Component {
    state = {
        name: "",
        rating: "",
        playerId:""
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
    handleClick = (apiId, history, ) => {
        this.props.playerShow(apiId, history)
    }
    handleSortClick = (player) => {
        let playerInfo = player.slice();
        const sortedPlayerNames = playerInfo.sort(function (a, b) {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;

            }

        )

        this.setState({sortedPlayerNames})

        // this.forceUpdate();
    }

    render() {
        return(

            <div className="Players">
                <h1 style={{color: "#f9f3fc"}}>Player Search</h1>
 
                <button
                    onClick={() => this.handleSortClick(this.props.players)}
                    class="button"> Sort </button>
                <form onSubmit={this.handleSubmit} style={{margin: "6% auto"}}>

                    <TextField type="hidden" name="name" value={this.state.name} placeholder="ex. Tom Brady" onChange={this.handleInputChange} style={{marginLeft: "10px", marginRight: "10px"}} />
                    <input type="hidden" value="Add" className="btn btn-full" style={{marginLeft: "15px"}}/>
                </form>

                <GridList cols={2}>
                    {this.state.sortedPlayerNames!== null ?   this.props.players.map(player => <GridListTile key={player.playerId}><GridListTileBar title={player.name} actionicon={
                        // this.props.players!== null ?
                        <IconButton
                            onClick={() => this.handleClick((player.playerId), this.props.history)}>
                            <MoreHorizIcon style={{color: "#FCF3F3"}}/>
                        </IconButton>
                    }                   /></GridListTile>) :
                        this.props.players.map(player => <GridListTile key={player.playerId}><GridListTileBar title={player.name}  actionIcon={
                                // this.props.players!== null ?
                                <IconButton
                                    onClick={() => this.handleClick((player.playerId), this.props.history)}>
                                    <MoreHorizIcon style={{color: "#FCF3F3"}}/>
                                </IconButton>
                            }
                </GridList>
            </div>



        )
    }
}
export default connect(null, { searchPlayers, playerShow, resetFavorite})(Players);

            // do the exercise < bookmarked,  use prettier or beautifier, auto formatter