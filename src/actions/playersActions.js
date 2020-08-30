
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

        playerData = players.map(player => {
            console.log("player, ", player)
                return {

                    name: player.player_name,
                    playerId: 1
                }
            }


        )
    }

    return {

        type: 'FETCH_PLAYERS',
        payload: playerData
    }
}

export const fetchPlayers = () => {
   return (dispatch) => {
       dispatch(loadingPlayers())
        return fetch(`https://www.fantasyfootballdatapros.com/api/projections`)
            .then(resp => resp.json())
            .then(playerGroup => dispatch(sendingPlayers((playerGroup))))
    }
}

export const searchPlayers = state => {
    return (dispatch) => {
        fetch(`https://www.fantasyfootballdatapros.com/api/players/2019/all`)
            .then(resp => resp.json())
            .then(playerGroup => dispatch(sendingPlayers((playerGroup))))
    }
}
