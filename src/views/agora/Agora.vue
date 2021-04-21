<template>
  <div class="agora">
        <v-select
                       :items="items"
                       label="Standard"
                    ></v-select>    
  </div>
</template>

<script>
 export default {
    data: () => ({
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    }),
  }
</script>

<style>

</style>