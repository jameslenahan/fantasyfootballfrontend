
export const loadingPlayers = () => {
    return {
        type: 'LOADING_PLAYERS'
    }
}

export const resetPlayers = () => {
    return {
        type: 'RESET_PLAYERS'
    }
}

export const sendingPlayers = players => {
    let playerData;
    if (players.length === 0) {
        playerData = null
    }

    else {


        playerData = players.forEach(player => {
                return {

                    name: player.player_name,
                    ratings: player.projection,
                    playerId: player.team
                }
            }


        )
    }
    return {

        type: 'FETCH_PLAYER',
        payload: playerData
    }
}

export const fetchPlayers = () => {
    return (dispatch) => {
        fetch(`https://www.fantasyfootballdatapros.com/api/projections`)
            .then(resp => resp.json())
            .then(playerGroup => dispatch(sendingPlayers((playerGroup))))
    }
}

export const searchPlayers = () => {
    return (dispatch) => {
        fetch(`https://www.fantasyfootballdatapros.com/api/players/2019/all`)
            .then(resp => resp.json())
            .then(playerGroup => dispatch(sendingPlayers(console.log(playerGroup))))
    }
}
