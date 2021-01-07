<template>
    <div class="campos-padroes-detalhes">
        <v-row>
        <v-layout column >
            <v-flex xs12 sm8 md6 class="ml-3"> 
                Detalhes
            </v-flex>
        </v-layout>
        <v-btn text color="green" @click="readonly = !readonly">
            {{ readonly ? 'Editar' : 'Parar de editar'}}
        </v-btn>
        
        </v-row>
        <v-divider/>
        <v-form  :readonly="readonly">
            <!-- NOME -->
            <v-row>
                <!-- NOME -->
                <v-col cols="12" md="4">
                    <v-text-field 
                        v-model="campoPadrao.nome"
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
                       append-icon=""
                    ></v-autocomplete>
                </v-col>
            </v-row>
            
            <!-- CONFIGURACAO TIPO DE DADO -->
            <v-configuracao-tipo-de-dado :tipoDeDado="campoPadrao.tipo" :readonly="readonly"/>

            <!-- PRODUTIVO -->
            <v-row>
                <v-col cols="6" md="4">
                     <v-checkbox label="Produtivo" color="success" v-model="campoPadrao.produtivo"
                        hide->
                    </v-checkbox>
                </v-col>
            </v-row>

            <!-- SALVAR -->
            <v-row v-show="!readonly">
               <v-btn
                    class="ma-2"
                    :loading="loadingSalvando"
                    color="success"
                    block
                    @click="salvarCampoPadrao"
                >
                    Salvar
                    <template v-slot:loader>
                        <span>Salvando...</span>
                    </template>
                </v-btn>
            </v-row>
        </v-form>
    </div>
</template>

<script>
import bus from '@/eventBus.js'
import ConfiguracaoTipoDeDado from '@/components/tipos-de-dados/configuracao/ConfiguracaoTipoDeDado.vue'

export default {
    components:{'v-configuracao-tipo-de-dado':ConfiguracaoTipoDeDado},
    props:['id'],
    data(){
        return {
            campoPadrao : {tipo:{}},
            tiposDeDados: [],
            readonly : true,
            loadingSalvando : false,
        }
    },
    methods : {
        selecionarNovoTipoDeDados(valorSelecionado){
            console.log(valorSelecionado)

            const encontrarTipoSelecionado = function(tipoDaVez){
                return tipoDaVez.alias == valorSelecionado
            }

            this.campoPadrao.tipo = this.tiposDeDados.filter(encontrarTipoSelecionado)
        },
        salvarCampoPadrao(){
            this.loadingSalvando = true

            //CHAMA API DE PATCH
            this.$http.patch("campos-padroes/"+this.id, this.campoPadrao).then(() => {})

            this.readonly = true;

            this.loadingSalvando = false;
        }
    },
    created(){
        this.$http.get("campos-padroes/"+this.id)
        .then(res => {
            this.campoPadrao = res.data.data
        })

        this.$http.get("tipos-de-dados")
        .then(res => {
            this.tiposDeDados = res.data.data
        })

        bus.listenEvent("tipoCampoUpdateValues",data => {
            this.campoPadrao.tipo = data
        })

    }
}
</script>

<style>

</style>