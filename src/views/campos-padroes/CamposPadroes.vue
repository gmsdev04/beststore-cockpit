<template>
    <div class="campos-padroes">
        <v-layout column justify-center align-center>
            <v-flex xs12 sm8 md6>
                Campos padrões
            </v-flex>
        </v-layout>
        <v-row>
            <v-spacer></v-spacer>
            <v-btn class="mb-2 mr-4" small right color="green"> Novo</v-btn>

        </v-row>
        <v-divider></v-divider>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left">
                            Nome do campo
                        </th>
                        <th class="text-left">
                            Tipo
                        </th>
                        <th class="text-left">
                            Produtivo
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="campoDaVez in camposPadroes" :key="campoDaVez.nome" @click="detalhes(campoDaVez.id)">
                        <td>{{ campoDaVez.nome }}</td>
                        <td>{{ campoDaVez.tipo.nome }}</td>
                        <td>{{ campoDaVez.produtivo ? 'Sim' : 'Não' }}</td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>

    </div>
</template>

<script>
export default {
    data(){
        return {
            camposPadroes : []
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
            this.camposPadroes = res.data
        })
    }
}
</script>

<style>

</style>