<template>
  <div class="negocios-consulta">
    <v-row>
      <v-layout column class="ml-3">
        <v-flex xs6 xs4 sm8 md6>
          Negócios
        </v-flex>
      </v-layout>
      <v-spacer></v-spacer>
     <v-btn class="mb-2 mr-4"  small right to="/negocios/novo" color="green" 
      > Novo</v-btn>
      
    </v-row>
    <v-divider></v-divider>
    <v-simple-table >
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Negócio
          </th>
          <th class="text-left">
            Descrição
          </th>
          <th class="text-left">
            Ativo
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="negocio in negocios"
          :key="negocio.name"
          @click="detalhesDoNegocio(negocio)"
        >
          <td>{{ negocio.nome }}</td>
          <td>{{ negocio.descricao }}</td>
           <td>{{ negocio.ativo ? 'Sim' : 'Não' }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>

  <!-- CINCULAR LOAD -->
  <div class="text-center">
    <v-progress-circular indeterminate v-show="negocios == undefined"
        color="green"
    ></v-progress-circular>
    </div>
  </div>
</template>

<script>
 export default {
    data () {
      return {
        negocios: undefined,
      }
    },
    methods:{
      detalhesDoNegocio(negocio){
        this.$router.push({name: 'detalharNegocio', params: { id:negocio._id}}) 
      }
    },
     created(){
       this.$http.get('/api/v1/negocios')
				.then(resp => {
					this.negocios = resp.data.data
				})
      }
  }
</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>