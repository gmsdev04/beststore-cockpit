<template>
  <div class="formularios-grid">
      <v-container fluid>
        <v-row>
            <v-col cols="12" md="4">
                <v-card class="mx-auto" max-width="344" outlined>
                    <v-list-item three-line>
                        <v-list-item-content>
                            <div class="overline mb-4">
                                Formulário
                            </div>
                            <v-list-item-title class="headline mb-1">
                                Produtos
                            </v-list-item-title>
                            <v-list-item-subtitle>Template da manutenção de produtos</v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-avatar tile size="80" color="grey">
                            <img
                                alt="Avatar"
                                src="https://previews.123rf.com/images/val2014/val20141603/val2014160300006/54302308-shopping-cart-icon.jpg"
                            >
                        </v-list-item-avatar>
                    </v-list-item>

                    <v-card-actions>
                        <v-btn outlined rounded text @click="showDialog = !showDialog">
                            Formatar
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
      </v-container>

      <FormulariosFormatarDialog :show="true"/>
  </div>
</template>

<script>
import FormulariosFormatarDialog  from './FormulariosFormatarDialog.vue'

export default {
    components: {FormulariosFormatarDialog},
    data(){
        return {
            showDialog : false
        }
    }
}
</script>

<style>

</style>