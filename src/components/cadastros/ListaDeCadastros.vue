<template>
  <div class="lsitaDeCadastros">
      <v-simple-table>
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
        <!-- <tr
          v-for="negocio in negocios"
          :key="negocio.name"
          @click="detalhesDoNegocio(negocio)"
        >
          <td>{{ negocio.nome }}</td>
          <td>{{ negocio.descricao }}</td>
           <td>{{ negocio.ativo ? 'Sim' : 'Não' }}</td>
        </tr> -->
      </tbody>
    </template>  
  </v-simple-table>
  </div>
</template>

<script>

export default {
    data(){
        return {
            showDialog : false
        }
    }
}
</script>

<style>

</style>