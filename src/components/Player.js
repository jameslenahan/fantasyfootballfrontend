import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  displayReview  } from '../actions/playerActions.js';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Fab from '@material-ui/core/Fab';
import MoodIcon from '@material-ui/icons/Mood';
import CreateIcon from '@material-ui/icons/Create';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

class Player extends Component {
    state = {
        review: ""
    }
    componentDidMount() {
        this.props.loadingFavorite(this.props.player.playerId)
    }
    handleClick = (player, userId) => {
        this.props.clickLike(player, userId, this.state.review)
    }
    handleInputChange = (event) => {
        this.setState({
            review: event.target.value
        })
    }
    handleSubmit = (event, player, userId) => {
        event.preventDefault()
        this.props.clickLike(player, userId, this.state.review, this.props.history)
        this.props.displayReview(this.state.review)
        this.setState({
            review: ""
        })
    }
    render() {
        return (
            <div className="Player">
                <GridList cellHeight={400} cols={1} style={{marginBottom: "3%"}}>
                    <GridListTile>
                        <GridListTileBar name={this.props.player.name} titlePosition="top"
                                         actionIcon={
                                             <IconButton>
                                                 <StarBorderIcon style={{color: "#FCF3F3"}}/>
                                             </IconButton>
                                         }
                                         actionPosition="left"> </GridListTileBar>

                        }</GridListTile>
                </GridList>
                <IconButton onClick={() => this.handleClick(this.props.player, this.props.userId, this.state.review)} style={{color: "#e91e63"}}><Fab style={{backgroundColor: "#f8bbd0", color: "#e91e63"}}><FavoriteBorderIcon /></Fab><span style={{fontSize: "1.2rem"}}>&nbsp;Like:&nbsp;{this.props.favorite}</span></IconButton>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        player: state.playerReducer.player,
        userId: state.currentUsersReducer.id,
        favorite: state.playerReducer.favorite,
        reviews: state.playerReducer.reviews,
        review: state.playerReducer.review,
        currentUser: state.currentUsersReducer.username

    }
}
export default connect(mapStateToProps, {  displayReview })(Player);