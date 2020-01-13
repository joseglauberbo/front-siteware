<template>
  <form @submit="submitProduct">
    <label for="name">Name of product</label>
    <input type="text" class="form-control" v-model="name">
    <label for="price">Price</label>
    <input type="text" class="form-control" v-model="price">
    <input type="submit" value="Submit">
  </form>
  
</template>

<script>

  export default {
    name: 'FormProduct',
    data() {
            return {
              name: '',
              price: ''
            };
        },
        methods: {
            submitProduct(e) {
                e.preventDefault();
                let currentObj = this;
                this.$http.post('/products', {
                    name: this.name,
                    price: this.price
                })
                .then(function (response) {
                    currentObj.output = response.data;
                })
                .catch(function (error) {
                    currentObj.output = error;
                });
            }
        }
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

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

</style>