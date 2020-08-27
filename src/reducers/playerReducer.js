export default (state = {
    player: null,
    favorite: 0
}, action) => {
    switch(action.type) {
        case 'UPLOADING_PLAYER':
            return {...state, player: action.payload}

        case 'RESET_FAVORITE':
            return {favorite: 0}
    }
}