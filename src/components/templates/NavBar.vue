<template>

<div>
   <v-app-bar app  :dark="darkTheme" dense  rounded clipped-left >
      <transition mode="out-in" enter-active-class="animate__animated animate__bounceInLeft"
        leave-active-class="animate__animated animate__backOutLeft">
        <div class="cockpit-text" v-show="$vuetify.breakpoint.lg || $vuetify.breakpoint.md || $vuetify.breakpoint.sm">Cockpit</div>
      </transition>
      <v-spacer></v-spacer>
      <div class="store-name" v-text="store"></div>
      <v-spacer></v-spacer>

      <v-icon @click="selectStore" large color="green darken-2" class="mr-5">
        mdi-store-outline
      </v-icon>

      <v-avatar size="36px">
        <img alt="Avatar"
          src="https://media-exp1.licdn.com/dms/image/C5103AQEpJ0LhWNvlNg/profile-displayphoto-shrink_200_200/0/1517283387584?e=1624492800&v=beta&t=iWesYrRUcRnc4Gzq_vdF2OUk3q7pLVd0uhxfU_2EArs">
      </v-avatar>
    </v-app-bar>
    
    <SelectStore/>
    
</div>


</template>

<script>
import bus from '@/eventBus'

import SelectStore from './SelectStore.vue'

    export default {
        components:{SelectStore},
        methods : {
            selectStore(){
                //EMITINDO EVENTO DE SELECIONAR LOJA
                bus.emitEvent('selectStore',true)
            }
        },
        props: {
            darkTheme: {
                type: Boolean,
                required: true
            },
            store: {
                type: String
            }
        },
        data(){ 
            return {
                title: 'Cockpit'
            }
        }
    } 
</script>

<style scoped>

.store-name{
    font-weight: bold;
    color: rgb(15, 134, 15);
    text-transform: uppercase;
}

.cockpit-text{
    font-weight: bold;
    color: rgb(15, 134, 15);
    
}

</style>