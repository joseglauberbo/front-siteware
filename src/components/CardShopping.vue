<template>
  <div>
   <div class="card" v-for="(product, index) in productAtShop">
    <div class="container">
        <p>Name: {{product.name}} </p>
        <p>Quantity: {{product.qt}}</p>
        <p>Price: {{product.price}}</p>
        <p>Sale: {{product.promotion}}</p>
    </div>
  </div>
  <div class="card" v-for="(object, index) in object">
  <div class="container">
    <p>Value of Carrinho: {{object.value}} </p>
  </div>
</div>
  </div>
</template>

<script>
 export default {
    name: 'CardShopping',
    components: {
    },
    data() {
      return {
        productAtShop: [],
        object: []
      }
    },
      methods: {
          getProductsShop(){
            let currentObj = this;
            this.$http.get('/shop/products')
            .then(function(response){
              currentObj.productAtShop = response.data;
            })
            .catch(function(err){
              console.log(err);
            })
          },
          getValueOfShopCart(){
            let currentObj = this;
            this.$http.get('/shop/size')
            .then(function(response){
              currentObj.object = response.data;
            })
            .catch(function(err){
              console.log(err);
            })
            console.log(object)
          }
        },
        mounted() {
          this.getProductsShop(),
          this.getValueOfShopCart()
        },
  }
</script>

<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
 }
 .card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.container {
  padding: 2px 16px;
}
</style>
