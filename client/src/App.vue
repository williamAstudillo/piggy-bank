<template>
  <div id="app">
     <Navbar /> 
    <!-- <Home/> -->
     <!-- <router-link to="/login">Login</router-link> |
     <router-link to="/register">Register</router-link> 
     <router-view></router-view> -->
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
// import Home from './components/Home.vue';


export default {
  name: 'App',
  components: {
    Navbar,
    // Home
    
  }
}
</script>

<style>

</style>
