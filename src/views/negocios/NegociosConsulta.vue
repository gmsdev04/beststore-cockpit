<template>
  <div class="negocios-consulta">
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
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  </div>
</template>

<script>
 export default {
    data () {
      return {
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          }
        ],
      }
    },
    methods : {
     
    },
     mounted(){
        console.log('mounted')
      }
  }
</script>

<style scoped>

</style>