<template>
    <div class="teams-list">
        <h2 class="team-list__title">All recent NBA teams</h2>
        <div class="team-container">
            <div class="team-card" v-for="team in shownTeams" :key="team.id">
                <div class="card-header" :class="team.abbreviation ? `header__abbr-${team.abbreviation.toLowerCase()}`: 'header__abbr-none'" id="cardHeader">
                    <span class="header-info team-abbr">{{team.abbreviation}}</span>
                    <span class="header-info player-position">{{team.conference}}</span>
                </div>
                <div class="card-body" :class="team.abbreviation ? `body__abbr-${team.abbreviation.toLowerCase()}` : 'body__abbr-none'" id="cardBody">
                    <p class="team-name">{{team.full_name}}</p>
                    <p class="team-division">{{team.division}}</p>
                </div>
            </div>
        </div>
        
        <div class="pagination-group">
            <button 
                class="btn btn-back" 
                v-if="page != 1" 
                @click="page--"
            >
                <i class="fas fa-chevron-left"></i>
            </button>
            <button 
                class="btn btn-numbered" 
                v-for="(pageNumber, index) in pages"
                @click="page = pageNumber"
                :class="page == index + 1 ? 'active': null"
                :key="index"
            >{{pageNumber}}</button>
            <button 
                class="btn btn-forward" 
                v-if="page < pages.length" 
                @click="page++" 
            >
                <i class="fas fa-chevron-right"></i>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TeamsList',
    props: {
        teams: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            page: 1,
            amountOfItems: 5,
            pages: []
        }
    },
    methods: {
        setPages() {
            let pagesArray = Math.ceil(this.teams.length / this.amountOfItems)

            for(let i = 1; i <= pagesArray; i++) {
                this.pages.push(i)
            }
        },
        paginate(teams) {
            let page = this.page,
                amountOfItems = this.amountOfItems,
                from = (page * amountOfItems) - amountOfItems,
                to = (page * amountOfItems)
            
            return teams.slice(from, to)
        }
    },
    computed: {
        shownTeams() {
            return this.paginate(this.teams)
        }
    },
    watch: {
        teams() {
            this.setPages()
        }
    }
}
</script>

<style scoped>

.teams-list {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgb(236, 236, 236);
}

.team-list__title {
    margin: 100px 0;
    font-size: 50px;
    text-transform: uppercase;
}

.team-container {
    width: 100%;
    display: flex;
}

.team-card {
    width: 100%;
    height: 300px;
    max-width: 320px;
    margin: 10px auto;
    cursor: pointer;
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

.card-body {
    width: 100%;
    height: 60%;
    padding: 25px;
    border-radius: 0 0 15px 15px;
}

.team-name {
    font-size: 22px;
    margin: 20px 0;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.pagination-group {
    width: 100%;

}

.btn {
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 50%;
    font-size: 40px;
    font-weight: bold;
    color: #2c3e50;
    padding: 2px 20px;
    cursor: pointer;
    transition: all .2s ease-in;
}

.btn:hover,
.btn:active {
    background-color: rgb(233, 150, 122);
    border-color: rgb(233, 150, 122);
}

.active {
    background-color: rgb(233, 150, 122);
    border-color: rgb(233, 150, 122);
}

</style>