export default (state = {
    songs: []
}, action) => {
    switch (action.type) {
        case 'UPLOADING_FAVORITE':
            return {...state, players: action.payload}

        default:
            return state
    }
}