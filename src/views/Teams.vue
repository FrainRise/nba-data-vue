<template>
    <div class="teams-container">
        <TeamsList :teams="teams" />
    </div>
</template>

<script>
import TeamsList from '../components/TeamsList'
import { fetchDataAllTeams } from '../api/index'

export default {
    name: 'Teams',
    components: {
        TeamsList
    },
    data() {
        return {
            teams: []
        }
    },
    async mounted() {
        const receivedData = await fetchDataAllTeams()

        this.teams = receivedData.data.data
    },
}
</script>

<style>

</style>