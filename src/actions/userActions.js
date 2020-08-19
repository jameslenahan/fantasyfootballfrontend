
//export const uploadingFavorite = songs => {
  //  return {
    //    type: 'UPLOADING_FAVORITE',
      //  payload: songs
    //}
//}

// My account page
export const loadingUserInfo = (currentUserId) => {
    //const HEROKU_URL = process.env.REACT_APP_HEROKU
    console.log(currentUserId)
    const HEROKU_URL = ''
    return (dispatch) => {
        return fetch(`${HEROKU_URL}/api/v1/users/${currentUserId}` ,{
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(resp => resp.json())
            .then(userData => {console.log("userData", userData)
              // players?  dispatch(uploadingFavorite((userData.songs)))
            })

    }
}