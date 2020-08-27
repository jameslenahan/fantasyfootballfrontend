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
export const resetFavorite = () => {
    return {
        type: 'RESET_FAVORITE',
    }
}

export