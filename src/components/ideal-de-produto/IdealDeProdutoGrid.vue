<template>
    <div class="ideal-de-produto-grid">
        <v-container>
             <v-row v-for="linha in linhas" :key="linha.numero" no-gutters>
                <v-col
                    v-for="(campo, index) in linha.campos"
                    :key="campo.id"
                    cols="12"
                    sm="4"
                >
                    <v-card
                        class="mx-1 my-1"
                        color="#fff0f2"
                    >
                        <v-list-item>
                        <v-list-item-content>
                                <div class="mb-1 text-center">
                                    {{ campo.nome }}
                                </div>
                                <v-divider></v-divider>
                                <div class="mb-1 label-texts">
                                    <strong>Posição campo: </strong> {{ index }}
                                </div>
                                <div class="mb-1 label-texts">
                                    <strong>Tipo: </strong> {{ campo.tipo.alias }}
                                </div>
                        </v-list-item-content>

                        </v-list-item>
                        <v-card-actions >
                            <v-btn text>
                                Editar
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>

export default {
    data() {
            return {
                active: 0,
                linhas: [
                    {
                        numero:1,
                        campos: [
                            {
                            nome: "Quantidade estoque real",
                            produtivo: true,
                            id: 1,
                            tipo: {
                                id: "8453042f-18a0-4172-acb0-08214ba1f814",
                                nome: "NUMERO",
                                alias: "Número",
                                valorPadrao: {
                                    descricao: "Representa o número caso nenhum seja inserido",
                                    valor: 0
                                },
                                valorMinimo: {
                                    descricao: "Representa o menor número a incluido",
                                    valor: 0
                                },
                                valorMaximo: {
                                    descricao: "Representa o número maximo a ser preenchido",
                                    valor: 10000000
                                }
                            }
                            },
                            {
                            nome: "Quantidade estoque virtual",
                            produtivo: true,
                            id: 2,
                            tipo: {
                                id: "8453042f-18a0-4172-acb0-08214ba1f814",
                                nome: "NUMERO",
                                alias: "Número",
                                valorPadrao: {
                                    descricao: "Representa o número caso nenhum seja inserido",
                                    valor: 0
                                },
                                valorMinimo: {
                                    descricao: "Representa o menor número a incluido",
                                    valor: 0
                                },
                                valorMaximo: {
                                    descricao: "Representa o número maximo a ser preenchido",
                                    valor: 10000000
                                }
                            }
                            },
                                 {
                            nome: "AZZZZZZZZZZZZZZZZZZZZZZZZZZZY",
                            produtivo: true,
                            id: 3,
                            tipo: {
                                id: "8453042f-18a0-4172-acb0-08214ba1f814",
                                nome: "NUMERO",
                                alias: "Número",
                                valorPadrao: {
                                    descricao: "Representa o número caso nenhum seja inserido",
                                    valor: 0
                                },
                                valorMinimo: {
                                    descricao: "Representa o menor número a incluido",
                                    valor: 0
                                },
                                valorMaximo: {
                                    descricao: "Representa o número maximo a ser preenchido",
                                    valor: 10000000
                                }
                            }
                            }

                        ]        
                    }
                ]
                
            }
    },
    computed : {
        qtdLinhasParaOsCampos(){
           return parseInt((this.campos.length / 3 ) + 1 )
        }
    }
}
</script>

<style>
.label-texts{
    font-size: 80%;
}
</style>