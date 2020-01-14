<template>
  <div>
   <div class="card" v-for="product in products">
    <div class="container">
        {{product.name}}
        <OptionsProduct>
        </OptionsProduct>
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
              products: {}
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
        }
        },
        mounted() {
          this.getProducts();
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