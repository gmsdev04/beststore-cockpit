<template>
    <div class="negocios-novo">
        <v-layout column justify-center align-center>
            <v-flex xs12 sm8 md6>
                Cadastrar novo negócio
            </v-flex>
        </v-layout>
        <v-divider> </v-divider>
        <v-expansion-panels v-model="detalheIsOpen" accordion mandatory>
            <!-- DETALHES -->
            <v-expansion-panel>
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

                            <v-checkbox label="Ativo para o mundo" color="success" v-model="negocio.ativo" hide-details>
                            </v-checkbox>
                        </v-row>

                        <v-row>
                            <v-col cols="12" md="6">
                                <v-textarea v-model="negocio.descricao" name="input-7-1" label="Descrição do negócio">
                                </v-textarea>
                            </v-col>

                        </v-row>
                        <v-row>
                            <v-spacer></v-spacer>
                            <v-btn text color="green" @click="criarNovoNegocio">
                                Salvar
                            </v-btn>

                        </v-row>
                    </v-form>
                </v-expansion-panel-content>
            </v-expansion-panel>
            <!-- IDEAL DE PRODUTO -->
            <v-expansion-panel>

                <v-expansion-panel-header>
                    Ideal de produto
                </v-expansion-panel-header>

                <v-expansion-panel-content>
                    <v-form>
                        <v-row>
                            <v-col cols="12" sm="6" md="3">
                                <v-text-field label="Nome" v-model="negocio.nome">
                                </v-text-field>
                            </v-col>

                            <v-checkbox label="Ativo para o mundo" color="success" v-model="negocio.ativo" hide-details>
                            </v-checkbox>
                        </v-row>

                    </v-form>
                </v-expansion-panel-content>
            </v-expansion-panel>

        </v-expansion-panels>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                detalheIsOpen: true,
                negocio: {}
            }
        },
        methods: {
            criarNovoNegocio() {

            }
        }
    }
</script>

<style>
</style>