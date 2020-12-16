<template>
  <div class="negocios-consulta">
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
    <v-progress-circular v-show="negocios == undefined"
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
        this.$router.push({name: 'detalharNegocio', params: { id:negocio.id}}) 
      }
    },
     created(){
       this.$http.get('negocios')
				.then(resp => {
					this.negocios = resp.data
				})
      }
  }
</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>