<template>
    <div class="tipo-de-dado">

        <!-- Número -->
        <TipoDeDadoNumero v-if="tipoDeDado.nome=='Numero'" :tipoDeDado="tipoDeDado"/>

    </div>
</template>

<script>
import TipoDeDadoNumero from './TipoDeDadoNumero.vue'
export default {
    components :{TipoDeDadoNumero},
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