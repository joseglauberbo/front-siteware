<template>
  <div>
   <div class="card" v-for="(product, index) in productAtShop">
    <div class="container">
        {{product.name}}
        {{product.qt}}
        {{product.price}}
        {{product.promotion}}
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
        productAtShop: []
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
          }
        },
        mounted() {
          this.getProductsShop()
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
