<template>
  <div class="campos-padroes-novo">
       <v-row>
        <v-layout column >
            <v-flex xs12 sm8 md6 class="ml-3"> 
                Novo campo padrão
            </v-flex>
        </v-layout>
        
        </v-row>
        <v-divider/>
        <v-form 
            ref="form"
            v-model="valid">
            <!-- NOME -->
            <v-row>
                <!-- NOME -->
                <v-col cols="12" md="4">
                    <v-text-field 
                        v-model="campoPadrao.nome"
                        label="Nome do campo"
                        small        
                        required
                        >
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
            
            <!-- CONFIGURACAO TIPO DE DADO -->
            <v-configuracao-tipo-de-dado :tipoDeDado="campoPadrao.tipo" />

            <!-- PRODUTIVO -->
            <v-row>
                <v-col cols="6" md="4">
                     <v-checkbox label="Produtivo" color="success" v-model="campoPadrao.produtivo"
                        hide->
                    </v-checkbox>
                </v-col>
            </v-row>

            <!-- SALVAR -->
            <v-row>
               <v-btn
                    :disabled="!valid"
                    class="ma-2"
                    :loading="loadingSalvando"
                    color="success"
                    block
                    @click="validar"
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
import ConfiguracaoTipoDeDado from '@/components/tipos-de-dados/configuracao/ConfiguracaoTipoDeDado.vue'

export default {
    components:{'v-configuracao-tipo-de-dado':ConfiguracaoTipoDeDado},
    data(){
        return {
            valid : true,
            campoPadrao : {tipo:{} },
            tiposDeDados : [],
            loadingSalvando : false
        }
    },
    methods : {
        salvarCampoPadrao(){

        },
        validar(){
            this.$refs.form.validate()
        }
    },
    created(){
        this.$http.get("tipos-de-dados")
        .then(res => {
            this.tiposDeDados = res.data
        })
    },
    computed : {
        
    }
}
</script>

<style>

</style>