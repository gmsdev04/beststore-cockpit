<template>
  <v-dialog
      @click:outside.prevent="selectStore = !selectStore"
      :value="selectStore"
      scrollable
      max-width="300px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title>Selecione a loja</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
          <v-radio-group
            v-model="selectedStore"
            column
          >
            <v-radio v-for="store in stores" :key="store.id"
              :label="store.name"
              :value="store.id"
            ></v-radio>
          </v-radio-group>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            color="green darken-1"
            text
            @click="selectStore = !selectStore"
          >
            Fechar
          </v-btn>
          <v-btn
            @click="selecionar"
            color="green darken-1"
            text
          >
            Selecionar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import bus from '@/eventBus'

export default {
   data(){
        return {
            stores : [],
            dialogm1: '',
            selectStore : false,
            selectedStore : ''
        }
    },
    methods :{
        selecionar(){
            console.log('selecionando',this.selectedStore)
        }
    },
    created(){
        bus.listenEvent('selectStore',value  => {
            this.stores.push({name:'Belcks 1',id:1}) //vem da api
            this.selectStore = value;
        })
    }
}
</script>

<style>

</style>