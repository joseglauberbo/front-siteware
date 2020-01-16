<template>
  <ul>
    <router-link to="/"><li><a>Home</a></li></router-link>
    <router-link to="/product"><li><a>Create new product</a></li></router-link>
    <router-link to="/shop"><li><a>Shop</a></li></router-link>
  </ul>
</template>

<style>
  ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
}
</style>

<script>
  export default {
    name: 'Navbar'
  }
</script>