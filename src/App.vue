<template>
  <v-app>

    <NavBar   :darkTheme="darkTheme" :store="store" />

    <LeftMenu :darkTheme="darkTheme"/>

    <v-main>
      <div class="mainSpace">
    </div>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './templates/NavBar.vue'
import LeftMenu from './templates/LeftMenu.vue'

export default {
  name: 'App',

  components: {NavBar, LeftMenu},
  
  data(){ 
    return { 
        store : 'Belcks Pizzas 1',
        darkTheme :false
    
     }
  }
};
</script>

<style>

</style>