<template>
  <div >
    <container class="container_navbar">
      <router-link 
       to="/piggybank" 
       class="navbar_link"
      >
      <h1 class="title">Piggy bank </h1>
      </router-link> 
    <container class="nav_buttoms">
      <router-link 
       to="/contact"
       class="button_nav"
      >
      <button >Contact us </button>
      </router-link>

      <router-link
        to="/register"
        v-if="!$store.state.user"
        class="button_nav"
      >
        <button >Register</button>  
      </router-link>

      <router-link 
       to="/piggybank" 
       v-if="!$store.state.user"
        class="button_nav"
      >
      <button>Login</button> 
      </router-link> 


      <router-link 
       to="/piggybank"
       v-if="$store.state.user"
       class="button_nav"
      >
      <button  @click="logout" >Logout</button>
      </router-link>

    </container>
    </container>
    <div>
      <router-view></router-view>  
    </div>
  </div>
</template>

<script>
import router from '../router/index'
import {mapActions} from 'vuex'
import firebase from '../main'


 export default {
  name: 'Navbar',
  components: {
  },
  methods:{
     ...mapActions(['getUser']),
    logout(){
      firebase.firebase.auth().signOut().then(()=>console.log('sign out'))
      this.getUser('')
      router.push('/piggybank')
      localStorage.setItem('user', null)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="../scss/main.scss">

</style>
