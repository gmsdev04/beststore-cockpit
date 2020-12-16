<template>
       <v-expansion-panels>
        <v-expansion-panel  >
        <v-expansion-panel-header>
            Detalhes
        </v-expansion-panel-header>
        
        <v-expansion-panel-content>
            <v-form>
                <v-row>
                    <v-col cols="12" sm="6" md="3">
                        <v-text-field label="Nome" v-model="negocio.nome">
                        </v-text-field>
                    </v-col>

                    <v-checkbox
                        label="Ativo para o mundo"
                        color="success"
                        v-model="negocio.ativo"
                        hide-details
                      ></v-checkbox>
                </v-row>

                <v-row>
                    <v-col
                        cols="12"
                        md="6"
                    >
                        <v-textarea
                        v-model="negocio.descricao"
                        name="input-7-1"
                        label="Descrição do negócio"
                        ></v-textarea>
                    </v-col>

                </v-row>
                <v-row>
                   <v-spacer></v-spacer>
                <v-btn
                 
                  text
                  color="green"
                  @click="salvarDetalhes"
                >
                  Salvar
                </v-btn>

                </v-row>
            </v-form>
        </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>

</template>

<script>
export default {
    props:{
        negocio :{
            type : Object,
            required: true
        }
    },
    data(){
        return {
            expansionPanelValue : false
        }
    },
    methods: {
        salvarDetalhes(){
            console.log('salvo')
            this.$http.patch('negocios/'+this.negocio.id,this.negocio)
				.then(() => {})
        }
    }
}
</script>

<style>

</style>