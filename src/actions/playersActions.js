
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
        let x = 1
        playerData = players.map(player => {

            return {

                name: player.player_name,
                rating: player.projection,
                playerId: x++
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

export const playerSort = players => {
    const playerData = players.map(player => {
        const playerNames = player.name
            playerNames.sort(function (a, b) {
                    return a.name - b.name;

                }
            )
        console.log(playerData)
        }

    )
}

// go back through React documentation, "Thinking in React", "Conditional Rendering" <Will be quizzed on this, class & functional components