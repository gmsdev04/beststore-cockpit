<template>
  <div class="cadastros">
    <v-row>
      <v-layout column class="ml-3">
        <v-flex xs6 xs4 sm8 md6>
          Cadastros
        </v-flex>
      </v-layout>
      <v-spacer></v-spacer>
      <v-btn class="mb-2 mr-4" small right to="/cadastros/novo" color="green"> Novo</v-btn>

    </v-row>
    <v-divider></v-divider>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Nome
            </th>
            <th class="text-left">
              Descrição
            </th>
            <th class="text-left">
              Status
            </th>
            <th class="text-left">
              Ações
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cadastro in cadastros" :key="cadastro.name">
            <td>{{ cadastro.nome }}</td>
            <td>{{ cadastro.descricao }}</td>
            <td>{{ cadastro.ativo ? 'Sim' : 'Não' }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cadastros : []
    }
  }
}
</script>

<style scoped>

</style>