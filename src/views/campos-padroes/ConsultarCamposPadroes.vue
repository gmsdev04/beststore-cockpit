<template>
    <div class="campos-padroes">
        
        <v-row>
            <v-layout column class="ml-3">
                <v-flex xs6 xs4 sm8 md6>
                    Campos padrões
                </v-flex>
            </v-layout>
            <v-spacer></v-spacer>
            <v-btn class="mb-2 mr-7" small right color="green" to="/campos-padroes/novo"> Novo</v-btn>
       
        </v-row>
        <v-divider></v-divider>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left">
                            Nome do campo
                        </th>
                        <th  class="text-left">
                            Tipo
                        </th>
                        <th v-show="!$vuetify.breakpoint.xs" class="text-left">
                            Produtivo
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="campoDaVez in camposPadroes" :key="campoDaVez.nome" @click="detalhes(campoDaVez._id)">
                        <td>{{ campoDaVez.nome }}</td>

                        <td >
                            {{ campoDaVez.tipo.alias }}
                        </td>
                        <td v-show="!$vuetify.breakpoint.xs">
                            {{ campoDaVez.produtivo ? 'Sim' : 'Não' }}
                            </td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>

        <!-- CINCULAR LOAD -->
        <div class="text-center">
            <v-progress-circular indeterminate v-show="camposPadroes == undefined"
                color="green"
            ></v-progress-circular>
            </div>
        </div>
  
</template>

<script>
export default {
    data(){
        return {
            camposPadroes : undefined
        }
    },
    methods: {
        detalhes(id){
            this.$router.push({name:'camposPadroes.detalhes',params:{id}})
        }
    },
    created(){
        this.$http.get("campos-padroes")
        .then(res => {
            this.camposPadroes = res.data.data
        })

    }
}
</script>

<style>

</style>