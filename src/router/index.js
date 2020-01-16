import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/views/Home'
import Product from '../components/views/Product'
import Shop from '../components/views/Shop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    }
  ]
})
