<template>
  <v-app>

    <NavBar   :darkTheme="darkTheme" :store="store" />

    <LeftMenu :darkTheme="darkTheme"/>

    <v-main>

    </v-main>
  </v-app>
</template>

<script>
import NavBar from './templates/NavBar.vue'
import LeftMenu from './templates/LeftMenu.vue'
import bus from '@/eventBus'  

export default {
  name: 'App',

  components: {NavBar, LeftMenu},
  
  data(){ 
    return { 
        store : 'Belcks Pizzas 1',
        darkTheme :true
        
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