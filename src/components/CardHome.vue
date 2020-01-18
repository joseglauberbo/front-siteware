<template>
  <div>
   <div class="card" v-for="(product, index) in products">
    <div class="container">
        {{product.name}}
        <form >
          <input type="text" class="form-control" v-model="qt">
        </form>
        <button class="button" @click="addProductToShop(product)" >Adicionar no carrinho</button>
        <button class="button" @click="deleteProduct(product)">Delete this product</button>
    </div>
  </div>
  </div>
</template>

<script>

  import OptionsProduct from './OptionsProduct'

  export default {
    name: 'CardProduct',
    components: {
      OptionsProduct
    },
    data() {
      return {
              products: [],
              qt: '',
              id: '',
              name: '',
              price: '',
              promotion: '' 
      }
    },
      methods: {
          getProducts(){
            let currentObj = this;
            this.$http.get('/products')
            .then(function(response){
              currentObj.products = response.data;
            })
            .catch(function(err){
              console.log(err);
            })
          },
          deleteProduct(product) {
            let currentObj = this;
            this.$http.delete('/products/' + product._id)
            .then(function(res){
              currentObj.products.splice(currentObj.products.indexOf(product), 1)
            })
            .catch(function(err) {
              console.log(err);
            })
          },
          addProductToShop(product) {
            let currentObj = this;
            this.$http.post('/shop/products', {
              qt: this.qt,
              id: product._id,
              name: product.name,
              price: product.price,
              promotion: product.promotion 
            })
            .then(function (response) {
              currentObj.products.push(response.data)
            })
            .catch(function (err) {
              console.log(err);
            });
          }
        },
        mounted() {
          this.getProducts();
        },
  }

</script>

<style>
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
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