<template>
  <div class="players-container">
      <PlayersList :players="players" :initialPlayers="initialPlayers" />
  </div>
</template>

<script>
import PlayersList from '../components/PlayersList'
import { fetchDataAllPlayers } from '../api/index'

export default {
    name: 'Players',
    components: {
        PlayersList
    },
    data() {
        return {
            players: []
        }
    },
    async mounted() {
       const receivedData = await fetchDataAllPlayers()
       
       this.players = receivedData.data.data;
    },
}
</script>

<style>

</style>