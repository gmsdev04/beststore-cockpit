<template>
    <div class="campos-padroes-detalhes">
        <v-layout column >
            <v-flex xs12 sm8 md6> 
                Detalhes
            </v-flex>
        </v-layout>
        <v-divider/>
        <v-form  :readonly="readonly">

            <!-- NOME -->
            <v-row>
                <!-- NOME -->
                <v-col cols="12" md="4">
                    <v-text-field 
                        v-model="campoPadrao.nome" 
                        :counter="10" 
                        label="Nome do campo" required
                        small>
                    </v-text-field>
                </v-col>
            </v-row>

            <!-- TIPO DE DADO -->
            <v-row>
                <v-col cols="12" md="4">
                    <v-autocomplete
                       return-object
                       :items="tiposDeDados"
                       v-model="campoPadrao.tipo"
                       item-text="alias"             
                       label="Tipo do campo"
                    ></v-autocomplete>
                </v-col>
            </v-row>
                    
            
            <v-tipo-de-dado 
                :tipoDeDado="campoPadrao.tipo"
                :readonly="readonly"/>

            

<!-- PRODUTIVO -->
            <v-row>
                <v-col cols="6" md="4">
                     <v-checkbox label="Produtivo" color="success" v-model="campoPadrao.produtivo"
                        hide->
                    </v-checkbox>
                </v-col>
            </v-row>
        </v-form> 
    </div>
</template>

<script>
import VtipoDeDado from '@/components/tipos-de-dados/TipoDeDado.vue'

export default {
    components:{'v-tipo-de-dado':VtipoDeDado},
    props:['id'],
    data(){
        return {
            campoPadrao : {tipo:{}},
            tiposDeDados: [],
            readonly : false
        }
    },
    methods : {
        selecionarNovoTipoDeDados(valorSelecionado){
            console.log(valorSelecionado)

            const encontrarTipoSelecionado = function(tipoDaVez){
                return tipoDaVez.alias == valorSelecionado
            }

            this.campoPadrao.tipo = this.tiposDeDados.filter(encontrarTipoSelecionado)
        }
    },
    created(){
        this.$http.get("campos-padroes/"+this.id)
        .then(res => {
            this.campoPadrao = res.data
        })

        this.$http.get("tipos-de-dados")
        .then(res => {
            this.tiposDeDados = res.data
        })
    }
}
</script>

<style>

</style>