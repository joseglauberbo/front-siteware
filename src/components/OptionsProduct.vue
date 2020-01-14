<template>
  <div>
    <input type="text" class="form-control" v-model="name">
    <button class="button">Submit</button>
    <button class="button">Delete this product</button>
  </div>
</template>

<style>
.button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
input[type=text], select {
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

</style>

<script>

  export default {
    name: 'OptionsProduct',
  }

</script>