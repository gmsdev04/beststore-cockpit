<template>
    <div class="campos-padroes-detalhes">
        <v-layout column >
            <v-flex xs12 sm8 md6> 
                Detalhes
            </v-flex>
        </v-layout>
        <v-divider/>
        <v-form  readonly>
            <v-row>
                <v-col cols="12" md="4">
                    <v-text-field 
                        v-model="campoPadrao.nome" 
                        :counter="10" 
                        label="Nome do campo" required
                        small>
                    </v-text-field>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" md="4">
                    <v-select
                       :items="items"
                       label="Standard"
                    ></v-select>                 
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" md="4">
                     <v-checkbox label="Campo está produtivo?" color="success" v-model="campoPadrao.produtivo"
                        hide-details>
                    </v-checkbox>
                </v-col>
            </v-row>
        </v-form>

         <h3>{{ campoPadrao }}</h3>
    </div>
</template>

<script>
export default {
    props:['id'],
    data(){
        return {
            campoPadrao : {tipo:{}},
             items: ['Foo', 'Bar', 'Fizz', 'Buzz']
        }
    },
    created(){
        this.$http.get("campos-padroes/"+this.id)
        .then(res => {
            this.campoPadrao = res.data
        })
    }
}
</script>

<style>

</style>