<template>
  <div class="negocios-detalhe">
    
      <NegociosDetalheDetalhe :negocio="negocio"/>

  </div>
</template>

<script>
import NegociosDetalheDetalhe from './NegociosDetalheDetalhe.vue'

export default {
    components:{NegociosDetalheDetalhe},
    props : ['id'],
    data(){
        return {
            negocio : {}
        }
    },
    created(){
        this.$http.get('negocios/'+this.id)
            .then(resp => {
                this.negocio = resp.data
            })
    }
}
</script>

<style scoped>

</style>