<template>
  <div>
    <Card>
      <FormProduct/>
    </Card>
  </div>

</template>

<script>

  import Card from './CardProduct'
  import FormProduct from './FormProduct'


  export default {
    name: 'CardProduct',
    components: {
      Card,
      FormProduct
    }
  }

</script>

<style>

</style>