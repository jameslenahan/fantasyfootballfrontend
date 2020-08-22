

import { Client } from 'espn-fantasy-football-api';


export const leagueData = () => {
    const leagueId = '370236'
    const myClient = new Client({leagueId})
    myClient.setCookies({espnS2: 'AECGhQwrZIXbjjKwglJ36l8DSOzUh50MrPV5AVORYgctyP1xu6BFWrO%2BDNne113GiGZNvudA706h6hEVjSx4ecXbyLH%2FpoyQayPuTOZayWjjfZq%2B3YmHG%2F2J3jR7uKMuLDIlcOF4qO881UIvBJD6%2B9CzX8uvCtuU0oWxSNP96Yw1oT9WRjRbjt9mTsvmUzv8muRo1EIq5VdxoptvL0qCVaaNLXy9PHYwa3kXj5wB2brKcYV56UTPe9z%2BCUZki599Qkc%3D', SWID: '{21094F36-FFBD-49CC-B805-D04DBD82EB16}'});
//figuring out this api

    return{
    

    }

}