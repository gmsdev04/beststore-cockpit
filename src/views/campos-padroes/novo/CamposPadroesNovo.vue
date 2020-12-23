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
            v-model="valid"
            >
            <!-- NOME -->
            <v-row>
                <!-- NOME -->
                <v-col cols="12" md="4">
                    <v-text-field
                        v-model="campoPadrao.nome"
                        :rules="nomeRules"
                        label="Nome do campo"
                        small
                        >
                    </v-text-field>
                </v-col>
            </v-row>

            <!-- TIPO DE DADO -->
            <v-row>
                <v-col cols="12" md="4">
                    <v-autocomplete
                       v-model="campoPadrao.tipo"
                       :items="tiposDeDados"
                       :rules="tipoRules"
                       item-text="alias"             
                       label="Tipo do campo"
                       return-object
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
            <v-divider></v-divider>
            <v-row>
                 <v-col cols="12" md="12">
               <v-btn
                    :disabled="!valid"
                    class="ma-2"
                    :loading="loadingSalvando"
                    color="success"
                    block
                    @click="salvar"
                >
                    Salvar
                    <template v-slot:loader>
                        <span>Salvando...</span>
                    </template>
                </v-btn>
                </v-col>
            </v-row>
        </v-form>
  </div>
</template>

<script>
import ConfiguracaoTipoDeDado from '@/components/tipos-de-dados/configuracao/ConfiguracaoTipoDeDado.vue'
import bus from '@/eventBus'
export default {
    components:{'v-configuracao-tipo-de-dado':ConfiguracaoTipoDeDado},
    data(){
        return {
            valid : true,
            campoPadrao : {tipo:{}},
            tiposDeDados : [],
            loadingSalvando : false,
            nomeRules: [
                v => !!v || 'Este campo é obrigatorio'
            ],
            tipoRules: [
                v => !!v.nome || 'Esta campo é obrigatorio'
            ],
        }
    },
    methods : {
        salvar(){
            this.loadingSalvando = true;
            this.$http.post('campos-padroes',this.campoPadrao).then(()=>{})
            this.loadingSalvando = false;

            //RESETA CAMPO E LIMPA VALIDATIONS
            this.campoPadrao = {tipo:{}}
            this.$refs.form.resetValidation()
        },
        
    },
    created(){
        this.$http.get("tipos-de-dados")
        .then(res => {
            this.tiposDeDados = res.data
        })

        //busão de atualização de tipo
        bus.listenEvent("tipoCampoUpdateValues",data => {
            this.campoPadrao.tipo = data
        })
    },
    computed : {
        
    }
}
</script>

<style>

</style>