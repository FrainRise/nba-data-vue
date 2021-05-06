import axios from 'axios'

const URL = `https://www.balldontlie.io/api/v1`

export const fetchDataAllPlayers = async () => {
    try {
        const { data } = await axios.get(`${URL}/players`)
        const recievedDataPlayers = { data }

        return recievedDataPlayers
    } catch(err) {
        console.log(err)
    }
}

export const fetchDataAllTeams = async () => {
    try {
        const { data } = await axios.get(`${URL}/teams`)
        const recievedDataTeams = { data }
        
        return recievedDataTeams
    } catch(err) {
        console.log(err)
    }
}