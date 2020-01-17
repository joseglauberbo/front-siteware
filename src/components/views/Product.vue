<template>
  <div>
    <Navbar/>
    <CardProduct/>
  </div>
</template>

<script>

import Navbar from '../Navbar'
import CardProduct from '../CardProduct'

export default {
  name: 'product',
  components: {
    Navbar,
    CardProduct
  }
}

</script>

<style>

</style>