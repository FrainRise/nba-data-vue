<template>
    <div class="players">
        <div class="search">
            <h2 class="search__title">All players cards</h2>
            <input type="text" class="search-player" placeholder="Enter player name . . ." v-model="userSearchString">
        </div>
        <div class="players-list">
            <div class="player-card" v-for="player in filteredPlayerName" :key="player.id">
                <div class="card-header" :class="player.team.abbreviation ? `header__abbr-${player.team.abbreviation.toLowerCase()}`: 'header__abbr-none'">
                    <span class="header-info team-abbr">{{player.team.abbreviation}}</span>
                    <span class="header-info player-position">{{player.position}}</span>
                </div>
                <div class="card-body" :class="player.team.abbreviation ? `body__abbr-${player.team.abbreviation.toLowerCase()}`: 'body__abbr-none'">
                    <p class="player-name">{{player.first_name}} {{player.last_name}}</p>
                    <p class="player-team">{{player.team.city}} {{player.team.name}}</p>
                </div>
            </div>    
        </div>
        
        <!-- <div class="player-card" v-for="(player, index) in players" :key="player.id">
            <div class="card-header">
                <span class="index">{{index + 1}}</span>
                <span class="name">{{player.first_name}} {{player.last_name}}</span>
            </div>
            <div class="card-body">
                
            </div>
            
        </div> -->
    </div>
</template>

<script>
export default {
    name: 'PlayersList',
    props: {
        players: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            // teams: ['ATL', 'BKN', 'BOS', 'CHI', 'CHA', 'DEN', 'CLE', 'DET', 'MIA', 'GSW', 'DAL', 'MIL', 'HOU', 'LAL', 'IND', 
            // 'NYK', 'LAC', 'OKC', 'ORL', 'PHX', 'MIN', 'MEM', 'NOP', 'PHI', 'WAS', 'TOR', 'UTA', 'SAC', 'SAS', 'POR'],
            userSearchString: ''
        }
    },
    computed: {
        filteredPlayerName() {
            let players = this.players,
                userSearchString = this.userSearchString.trim().toLowerCase()

            if(!userSearchString) {
                return players
            }    

            players = players.filter((player) => {
                let fullname = `${player.first_name} ${player.last_name}`

                if(fullname.toLowerCase().indexOf(userSearchString) !== -1) {
                    return player
                }
            })

            return players
        }
    },
    mounted() {
        console.log(this.userSearchString)
    },
}
</script>

<style scoped>
.players {
    padding: 0 5%;
}

.search__title {
    margin: 100px 0 50px 0;
    font-size: 50px;
    text-transform: uppercase;
}

.search-player {
    width: 100%;
    max-width: 600px;
    padding: 15px 35px;
    margin: 50px 0 100px 0;
    color: #2c3e50;
    background-color: rgb(231, 182, 165);
    border: 2px solid rgb(231, 182, 165);
    font-weight: bold;
}

.search-player:focus{
    border: 2px solid #2c3e50;
}   

.players-list {
    width: 100%;
    display: flex;
    flex-flow: wrap;
}
.player-card {
    width: 100%;
    height: 300px;
    max-width: 320px;
    margin: 10px auto;
    cursor: pointer;
    flex: 1 1 25%;
}

.card-header {
    width: 100%;
    padding: 25px;
    display: flex;
    justify-content: space-between;
    border-radius: 15px 15px 0 0;
}

.header-info  {
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.card-body p {
    text-transform: uppercase;
}

.card-body {
    width: 100%;
    height: 60%;
    padding: 25px;
    border-radius: 0 0 15px 15px;
}
.player-name {
    font-size: 25px;
    margin: 20px 0;
    text-transform: uppercase;
    letter-spacing: 2px;
}
</style>