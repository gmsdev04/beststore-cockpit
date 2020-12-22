<template>
    <div class="negocios-detalhe">
        <v-row>
            <v-layout column>
                <v-flex xs12 sm8 md6 class="ml-3">
                    Detalhes do negócio
                </v-flex>
            </v-layout>
        </v-row>
        <v-divider> </v-divider>
            <transition
                mode="in-out" 
                leave-active-class="animate__animated animate__fadeOut" 
                v-if="negocio == undefined">
                
                <v-progress-linear indeterminate color="green">

                </v-progress-linear>
            </transition>
            <v-expansion-panels accordion  :disabled="negocio == undefined" mandatory>
                <v-expansion-panel>
                    <v-expansion-panel-header >
                        Detalhes
                    </v-expansion-panel-header>
                    <v-expansion-panel-content  v-if="negocio != undefined">
                            <v-form>
                                <v-row>
                                    <v-col cols="12" sm="6" md="3">
                                        <v-text-field label="Nome" v-model="negocio.nome">
                                        </v-text-field>
                                    </v-col>

                                    <v-checkbox label="Ativo para o mundo" color="success" v-model="negocio.ativo"
                                        hide-details>
                                    </v-checkbox>
                                </v-row>

                                <v-row>
                                    <v-col cols="12" md="6">
                                        <v-textarea v-model="negocio.descricao" name="input-7-1"
                                            label="Descrição do negócio">
                                        </v-textarea>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-spacer></v-spacer>
                                    <v-btn text color="green" @click="salvarDetalhes">
                                        Salvar
                                    </v-btn>
                                </v-row>
                            </v-form>
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                    <v-expansion-panel-header >
                        Ideal de produto
                    </v-expansion-panel-header>
                    <v-expansion-panel-content  v-if="negocio != undefined">
                            
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
    </div>
</template>

<script>
    export default {
        props: ['id'],
        data() {
            return {
                negocio: undefined
            }
        },
        created() {
            this.$http.get('negocios/' + this.id)
                .then(resp => {
                    this.negocio = resp.data
                })
        },
        methods: {
            salvarDetalhes() {
                console.log('salvo')
                this.$http.patch('negocios/' + this.negocio.id, this.negocio)
                    .then(() => {})
            }
        }
    }
</script>

<style scoped>

</style>