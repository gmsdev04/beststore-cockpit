<template>
  <v-app>

    <NavBar   :darkTheme="darkTheme" :store="store" />

    <LeftMenu :darkTheme="darkTheme"/>

    <v-main>
        <v-container fluid>
          <router-view/>
        </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/templates/NavBar.vue'
import LeftMenu from './components/templates/LeftMenu.vue'
import bus from '@/eventBus'  

export default {
  name: 'App',
  components: {NavBar, LeftMenu},
  
  data(){ 
    return { 
        store : 'Belcks Pizzas 1',
        darkTheme :false
     }
  },
  created(){
    bus.listenEvent('storeSelected',value  => {
        value == value
        this.store = 'Belcks Pizzas 2'
    })
  }
};
</script>

<style>

</style>