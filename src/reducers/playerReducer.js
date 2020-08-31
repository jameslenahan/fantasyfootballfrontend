export default (state = {
    player: null,
    favorite: 0,
    reviews: [],
    review: ""
}, action) => {
    switch(action.type) {
        case 'UPLOADING_PLAYER':
            return {...state, player: action.payload}

        case 'INCREMENT_FAVORITE':
            return {...state, favorite: +1 }

        case 'RESET_PLAYER':
            return {player: null, favorite: 0}

        case 'LOADING_NUMBER_OF_LIKES':
            return {...state, favorite: action.payload}

        case 'LOADING_REVIEWS':
            return {...state, reviews: action.payload}

        case 'RESET_FAVORITE_AND_REVIEWS':
            return {favorite: 0, reviews: []}

        case 'DISPLAY_REVIEW':
            return {...state, review: action.payload}


        default:
            return state
    }
}