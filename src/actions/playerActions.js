//const HEROKU_URL = 'https://limitless-woodland-46121.herokuapp.com'
const HEROKU_URL = 'http://localhost:3000'
export const sendingPlayerDetails = player => {
    let x = 0
     const playerData =  {

         name: player[x].player_name,
         rating: player[x].projection
     }

    return {
        type: 'UPLOADING_PLAYER',
        payload: playerData
    }
}
export const incrementFavorite = () => {
    return {
        type: 'INCREMENT_FAVORITE',
    }
}



export const settingFavorite = (numberOfLikes) => {
    return {
        type: 'LOADING_NUMBER_OF_LIKES',
        payload: numberOfLikes
    }
}

export const settingReviews = (reviewArray) => {
    return {
        type: 'LOADING_REVIEWS',
        payload: reviewArray
    }
}
export const resetFavorite = () => {
    return {
        type: 'RESET_FAVORITE',
    }
}
export const displayReview = (review) => {
    return {
        type: 'DISPLAY_REVIEW',
        payload: review
    }
}


export const playerShow = ( apiId, history) => {

    return (dispatch) => {
        fetch(`https://www.fantasyfootballdatapros.com/api/projections`)
            .then(resp => resp.json())
            .then(player => {

                dispatch(sendingPlayerDetails(player))
                history.push(`/players/${player.id}`)
            })
    }
}
export const clickLike = (player, userId, review) => {
    return (dispatch) => {
        const apiData = {
            name: player.name,
            rating: player.rating,
            api_id: player.playerId,
            favorite: {like: true, review: review,user_id: userId}
        }
        return fetch(`${HEROKU_URL}/api/v1/players` ,{
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(apiData)
        })
            .then(resp => resp.json())
            .then(player => {
                dispatch(incrementFavorite())
            })
    }
}



export const loadingFavorite = (apiId) => {

    return (dispatch) => {
        return fetch(`${HEROKU_URL}/api/v1/players`, {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(resp => resp.json())
            .then(players => {
                players.map(player => {
                    if (player.api_id === apiId) {
                        const numberOfLikes = player.favorite.filter(fav => fav.like).length

                        let reviewArray = [];

                        player.favorite.forEach(fav => {
                            reviewArray.push({review: fav.review, username: fav.user_name})
                        })


                        dispatch(settingFavorite(numberOfLikes))
                        dispatch(settingReviews(reviewArray))
                    } else {
                        console.log("there is no matching")
                    }
                })
            })
    }
}

