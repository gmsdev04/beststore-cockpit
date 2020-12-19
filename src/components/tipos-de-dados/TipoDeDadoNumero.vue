<template>
    <div class="tipo-de-dado">

        <!-- Número -->
        <v-expansion-panels v-if="tipoDeDado.nome=='Numero'" single  :readonly="readonly">
            <v-expansion-panel>
                <v-expansion-panel-header>
                    Configurações número
                </v-expansion-panel-header>

                <v-expansion-panel-content>
                
                <v-row>
                    <v-col cols="12" md="2">
                        <v-text-field
                            v-model="tipoDeDadoNumero.valorMinimo.valor"
                            type="number" 
                            label="Valor mínimo" 
                           >
                        </v-text-field>
                    </v-col>
                </v-row>
                
                <v-row>
                    <v-col cols="12"  md="2">
                        <v-text-field 
                            v-model="tipoDeDadoNumero.valorMaximo.valor"
                            type="number" 
                            label="Valor máximo"
                            v-mask="'###.###.###-##'"
                            >
                        </v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12" md="2">
                        <v-text-field 
                            :min="tipoDeDadoNumero.valorMinimo.valor"
                            :max="tipoDeDadoNumero.valorMaximo.valor"
                            v-model="tipoDeDadoNumero.valorPadrao.valor"
                            :rules="[rules.valorPadraoMenorIgualMaximo(tipoDeDadoNumero.valorPadrao.valor,tipoDeDadoNumero.valorMaximo.valor),
                                        rules.valorPadraoMaiorIgualMinimo(tipoDeDadoNumero.valorPadrao.valor,tipoDeDadoNumero.valorMinimo.valor)]
                                        "
                            type="number" 
                            label="Valor padrão" 
                            >
                        </v-text-field>
                     </v-col>
                </v-row>
                </v-expansion-panel-content>

            </v-expansion-panel>
        </v-expansion-panels>


    </div>
</template>

<script>
export default {
    props:{
        tipoDeDado:{
            type:Object,
            required: true
        },
        readonly:{
            type: Boolean
        }
    },
    data(){
        return {
            tipoDeDadoNumero : JSON.parse(JSON.stringify(this.tipoDeDado)),
            rules: {
                    valorPadraoMenorIgualMaximo(valorPadrao,valorMaximo) {
                        return valorPadrao <= parseFloat(valorMaximo) || `Valor padrão maior que o máximo`;
                    },
                    valorPadraoMaiorIgualMinimo(valorPadrao,valorMinimo) {
                        return valorPadrao >= parseFloat(valorMinimo) || `Valor padrão menor que o mínimo`;
                    },

            }
        }
    }   
}
</script>

<style>

</style>