<template>
  <div class="header">
    <h2 class="header__title"> 
      Nba stats
    </h2>
    <div class="header__links-list">
      <router-link to="/" class="header__link" >Home</router-link>
      <router-link to="/players" class="header__link" >Players</router-link>
      <router-link to="/teams" class="header__link">Teams</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>

.header {
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
  text-align: center;
  background-color: rgb(233, 150, 122);
}

.header__title{
  padding: 15px;
  font-size: 40px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.header__links-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__link {
  color: inherit!important;
  font-weight: bold;
  font-size: 20px;
  margin: 0 25px;
  text-transform: uppercase;
  transition: color .5s ease-in;
}

.header__link:hover {
  color: #fff!important;
}

.router-link-active {
  color: #fff!important;
}

</style>
