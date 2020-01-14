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
  name: 'Product',
  components: {
    Navbar,
    CardProduct
  }
}

</script>

<style>

</style>