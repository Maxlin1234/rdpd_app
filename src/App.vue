<template>
  <div id="app">
    <Navbar/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Products from './components/Products.vue';
export default {
  name: 'App',
  components:{
    Navbar,
    Products
  }
}
</script>

<style>
</style>
