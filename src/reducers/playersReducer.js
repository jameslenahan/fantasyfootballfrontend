export default (state = {
    loading: false,
    players: null
}, action) => {

    switch (action.type) {
        case 'LOADING_PLAYERS':
            return {...state, loading: true}

        case 'FETCH_PLAYERS':
            return {loading: false, players: action.payload}

        case 'RESET_PLAYERS':
            return {loading: false, players: null}

        default:
            return state
    }
}