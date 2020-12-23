<template>
    <div class="configuracao-tipo-de-dado">

        <!-- Número -->
        <ConfiguracaoTipoDeDadoNumero v-if="tipoDeDado.nome=='NUMERO'" :tipoDeDado="tipoDeDado"/>

    </div>
</template>

<script>
import ConfiguracaoTipoDeDadoNumero from './ConfiguracaoTipoDeDadoNumero.vue'
export default {
    components :{ConfiguracaoTipoDeDadoNumero},
    props:{
        tipoDeDado:{
            type:Object,
            required: true
        }
    }
}
</script>

<style>

</style>