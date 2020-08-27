export const sendingPlayerDetails = player => {
    const playerData = {

        name: player.name,
        rating: player.rating,

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


export const playerShow = (apiId, history) => {
    const API_KEY = 'jbne3aivvfc3'
    return (dispatch) => {
        fetch(`https://www.fantasyfootballdatapros.com/api/projections`)
            .then(resp => resp.json())
            .then(player => {
                dispatch(sendingPlayerDetails(console.log(player.name)))
                history.push(`/players/${player.id}`)
            })
    }
}