<template>
  <div>
   <div class="card" v-for="product in products">
    <div class="container">
        {{product.name}}
        <input type="text" class="form-control">
        <button class="button" @click="addToCart(product)" >Adicionar no carrinho</button>
        <button class="button">Delete this product</button>
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
              products: {},
              productsShop: []
            };
        },
        methods: {
          getProducts(){
            let currentObj = this;
            this.$http.get('/products')
            .then(function(res){
              currentObj.products = res.data;
            })
            .catch(function(err){
              console.log(err);
            })
          },
          addToCart(product) {
            let currentObj = this;
            this.$http.get('/products/' + product._id)
            .then(function(res) {
              currentObj.productsShop.push(res.data)
            })
            .catch(function(err){
              console.log(err);
            })
            this.saveProducts();
          },
          saveProducts() {
            const parsed = JSON.stringify(this.productsShop);
            localStorage.setItem('productsShop', parsed)
          }
        },
        mounted() {
          this.getProducts();

          if(localStorage.getItem('productsShop')) {
            try {
              this.productsShop = JSON.parse(localStorage.getItem('productsShop'))
            } catch(e) {
              localStorage.removeItem('productsShop')
            }
          }
        }
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