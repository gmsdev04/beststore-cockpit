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
              <h6 class="text-body-1">Para iniciar precisamos coletar algumas informações sobre o seu negócio, não se
                preocupe são só algumas perguntinhas </h6>
              <h6 class="text-body-1-bold">Campos com asterisco são obrigatórios! (*)</h6>

              <br>
              <v-btn color="green" @click="e6 = 2">
                Vamos lá!
              </v-btn>

            </v-stepper-content>

            <v-stepper-step :complete="e6 > 2" step="2" color="green">
              Informações gerais da loja
            </v-stepper-step>

            <v-stepper-content step="2" color="green">
              <v-card class="mb-12" height="200">
                <v-container>
                  <v-form ref="form" v-model="valid">
                    <v-col cols="12" xl="3" md="4" sm="5">
                      <v-text-field v-model="loja.nome" :rules="nomeRules" label="Nome da loja *"
                        placeholder="ex. Pizzaria Nostra Tatuapé" counter="30" ></v-text-field>
                    </v-col>

                    <v-col cols="12" xl="3" md="4" sm="5">

                      <v-text-field v-model="loja.cnpj" :rules="cnpjRules" label="CNPJ" counter="14" type="number"
                        ></v-text-field>
                    </v-col>
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

              <v-card class="mb-12" height="740px">
                <v-container>
                  <v-form ref="form" v-model="validLocalizacaoLoja">
                    <v-col cols="12" xl="3" md="4" sm="5">
                      <v-text-field 
                        v-model="loja.endereco.cep" 
                        :disabled="loja.naopossuilocalizacao"
                        :rules="localizacaoRules"
                        @input="getDadosByCep" label="CEP" counter="8" type="number"></v-text-field>
                    </v-col>

                    <v-col cols="12" xl="3" md="4" sm="5">
                      <v-text-field 
                      v-model="loja.endereco.logradouro" 
                      :disabled="loja.naopossuilocalizacao"
                      :rules="localizacaoRules"
                      label="Logradouro"></v-text-field>
                    </v-col>

                    <v-col cols="12" xl="3" md="4" sm="5">
                      <v-text-field 
                      v-model="loja.endereco.bairro" 
                      :disabled="loja.naopossuilocalizacao" 
                      :rules="localizacaoRules"
                      label="Bairro">
                      </v-text-field>
                    </v-col>

                    <v-col cols="12" xl="3" md="4" sm="5">
                      <v-text-field 
                      v-model="loja.endereco.cidade" 
                      :disabled="loja.naopossuilocalizacao" 
                      :rules="localizacaoRules"
                      label="Cidade">
                      </v-text-field>
                    </v-col>

                    <v-col cols="12" xl="3" md="4" sm="5">

                      <v-text-field 
                        v-model="loja.endereco.uf" 
                        :disabled="loja.naopossuilocalizacao"
                        :rules="localizacaoRules"
                        label="UF">
                      </v-text-field>

                    </v-col>

                    <v-col cols="12" xl="3" md="4" sm="5">

                      <v-text-field 
                      v-model="loja.endereco.numero" 
                      :disabled="loja.naopossuilocalizacao" 
                      :rules="localizacaoRules"
                      label="Número"
                        type="number" ></v-text-field>

                    </v-col>

                    <v-col cols="12" xl="3" md="4" sm="5">

                      <v-text-field v-model="loja.endereco.complemento" :disabled="loja.naopossuilocalizacao"
                        label="Complemento" counter="30" ></v-text-field>

                    </v-col>

                    <v-col cols="12" xl="3" md="4" sm="5">

                      <v-checkbox 
                        v-model="loja.naopossuilocalizacao"
                        label="Sem localização física"
                         ></v-checkbox>

                    </v-col>

                  </v-form>
                </v-container>

              </v-card>

              <v-btn color="green" @click="e6 = 4" :disabled="!validLocalizacaoLoja">
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
              <h6 class="text-h6">Definição de negócio</h6>
              <h6 class="text-caption">Selecione abaixo em qual tipo de negócio sua loja se encaixa melhor para deixarmos
                tudo pronto para poder vender o mais rápido possível</h6>
         
                <v-form ref="form" v-model="validNegocio">
                    <v-col cols="12" xl="3" md="4" sm="5">
                      <v-autocomplete v-model="loja.negocio"
                        :rules="[  v => !!v || 'Nome é obrigatório',]"
                        :items="negocios" 
                        item-text="nome"
                        placeholder="Selecione um negócio" 
                        label="Negócios"
                        return-object>
                        </v-autocomplete>
                    </v-col>

                    
                    <v-col cols="12" xl="3" md="4" sm="5">
                    <div v-if="loja.negocio != undefined" class="text-subtitle-1">Descrição do negócio</div>
                    <div v-if="loja.negocio != undefined" class="text-caption">{{loja.negocio.descricao}}</div>
                    
                    
                    </v-col>
                </v-form>
             

              <v-btn color="green" @click="e6 = 4" :disabled="!validNegocio">
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
              <v-btn color="green" @click="e6 = 1" :disabled="!valid">
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
  </v-app>
</template>

<script>
import axios from 'axios'
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
          cidade: '',
          bairro: '',
          estado: '',
          uf: '',
          numero: '',
          complemento: ''
        },
        naopossuilocalizacao: false,
        negocio: undefined
      },
      negocios : [],
      e6: 1,
      valid: true,
      validNegocio: true,
      validLocalizacaoLoja: true,
      nomeRules: [
        v => !!v || 'Nome é obrigatório',
        v => (v && v.length <= 30) || 'Deve conter até 30 caracteres',
      ],
      cnpjRules : [
        v => (v === ""  || (v.length == 14 && CnpjValidator.validarCNPJ(this.loja.cnpj) )) || 'CNPJ inválido',
      ],
      localizacaoRules : [() => this.loja.naopossuilocalizacao  ||'Campo obrigatório'],
    }
  },
  methods : {
    getDadosByCep(){
      if(this.loja.endereco.cep.length == 8){
        axios.get(`https://viacep.com.br/ws/${this.loja.endereco.cep}/json/`)
        .then(result => {
          if(!result.data.error){
            
            this.loja.endereco.logradouro = result.data.logradouro;
            this.loja.endereco.cidade =  result.data.localidade;
            this.loja.endereco.uf =  result.data.uf;
            this.loja.endereco.bairro =  result.data.bairro;
          }
        }).catch(error => console.error(error));
      }
    }
  },
  created(){
   this.$http.get('/api/v1/negocios')
				.then(resp => {
					this.negocios = resp.data.data
				});
  }
}
</script>

<style>
#app {
  background-color:"#4CAF50"
}
</style>