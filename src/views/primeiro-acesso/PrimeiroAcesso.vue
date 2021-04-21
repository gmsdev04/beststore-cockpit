<template>
  <v-app>
    <v-container fill-height>
      <v-layout row wrap align-center>
        <v-flex class="text-xs-center">
          <v-stepper v-model="e6" vertical>
            <v-stepper-step :complete="e6 > 1" step="1" color="green">
              Bem vindo!
            </v-stepper-step>

            <v-stepper-content step="1" color="green">
              <h6 class="text-h6">Seja bem vindo ao BestStore!</h6>
              <h6 class="text-body-1">Para iniciar precisamos coletar algumas informações sobre o seu negócio, não se preocupe são só algumas perguntinhas </h6>
              <h6 class="text-body-1-bold">Campos com asterisco são obrigatórios! (*)</h6>
              
              <br>
              <v-btn  color="green" @click="e6 = 2">
                Vamos lá!
              </v-btn>
         
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 2" step="2" color="green">
              Informações gerais da loja
            </v-stepper-step>

            <v-stepper-content step="2" color="green">
              
              <v-card  class="mb-12" height="160">
                <v-container>
                <v-form
                  ref="form"
                  v-model="valid"
                >
                  <v-text-field
                    v-model="loja.nome"
                    :rules="nomeRules"
                    label="Nome da loja *"
                    placeholder="ex. Pizzaria Nostra Tatuapé"
                    counter="15"
                    required
                  ></v-text-field>
                  
                  <v-text-field
                    v-model="loja.cnpj"
                    :rules="cnpjRules"
                    v-mask="'##.###.###/###-##'"
                    label="CNPJ"
                    counter="14"
                    type="number"
                    required
                  ></v-text-field>

                </v-form>
              </v-container>

              </v-card>
              
              <v-btn color="green" @click="e6 = 3" :disabled="!valid">
                Continuar
              </v-btn>
              <v-btn text @click="e6 = 1">
                Voltar
              </v-btn>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 2" step="3" color="green">
              Localização da loja
            </v-stepper-step>

            <v-stepper-content step="3" color="green">
              
              <v-card  class="mb-12" height="360px">
                <v-container>
                <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
                >

                  <v-text-field
                    v-model="loja.endereco.cep"
      
                    :disabled="loja.naopossuilocalizacao"
                    label="CEP"
                    counter="8"
                    type="number"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="loja.endereco.logradouro"
         
                    :disabled="loja.naopossuilocalizacao"
                    label="Logradouro"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="loja.endereco.numero"

                    :disabled="loja.naopossuilocalizacao"
                    label="Número"
                    type="number"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="loja.endereco.complemento"
   
                    :disabled="loja.naopossuilocalizacao"
                    label="Complemento"
                    counter="30"
                    required
                  ></v-text-field>

                  <v-checkbox
                    v-model="loja.naopossuilocalizacao"
                    @click="loja.endereco = {}"
                    label="Sem localização física"
                    required
                  ></v-checkbox>

                </v-form>
              </v-container>

              </v-card>
              
              <v-btn color="green" @click="e6 = 4">
                Continuar
              </v-btn>
              <v-btn text @click="e6 = 2">
                Voltar
              </v-btn>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 3" step="4" color="green">
              Negócio
            </v-stepper-step>

            <v-stepper-content step="4" color="green">
              <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
              <v-btn color="green" @click="e6 = 4">
                Continuar
              </v-btn>
              <v-btn text @click="e6 = 3">
                Voltar
              </v-btn>
            </v-stepper-content>

            <v-stepper-step step="5" color="green">
              Serviçõs
            </v-stepper-step>
            <v-stepper-content step="5">
              <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
              <v-btn color="green" @click="e6 = 1">
                Continuar
              </v-btn>
              <v-btn text @click="e6 = 4">
                Voltar
              </v-btn>
            </v-stepper-content>
          </v-stepper>
        </v-flex>
      </v-layout>
    </v-container>
    {{loja}}
  </v-app>
</template>

<script>

import CnpjValidator from '../../plugins/cnpjValidator'

export default {
  data () {
    return {
      loja : {
        nome : '',
        cnpj : '',
        endereco: {
          cep : '',
          logradouro: '',
          numero: '',
          complemento: ''
        },
        naopossuilocalizacao:false,
      },
      e6: 1,
      valid: true,
      nomeRules: [
        v => !!v || 'Nome é obrigatório',
        v => (v && v.length <= 15) || 'Deve conter até 15 caracteres',
      ],
      cnpjRules : [
        v => (v === ""  || (v.length == 14 && CnpjValidator.validarCNPJ(this.loja.cnpj) )) || 'CNPJ inválido',
      ]
    }
  },
}
</script>

<style>
#app {
  background-color:"#4CAF50"
}
</style>