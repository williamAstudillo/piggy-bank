<template>
  <div class="contain_login">
  <form v-on:submit.prevent="submit" class="form_login"> 
    <input type="email" v-model="user.email" placeholder="  Email" class="form_input"/><br><br>
    <input type="password" v-model="user.password" placeholder="  Password" class="form_input" /><br><br>
    <button>Iniciar sesión </button>
  </form>
  <!-- <h1>{{$store.state}}</h1> -->
    <!-- <li v-for="data in $store.state.dataUser.name" :key="data.name">
        {{$store.state.dataUser.name}}
    </li> -->
  </div>
</template>

<script>
import firebase from '../main'
import {mapActions,mapState} from 'vuex'
import router from '../router/index'
export default {
  computed:{
      ...mapState(['dataUser'])
  },
 data(){
    return {
      user:{}        
    }
 },
 created(){
     this.getDataUser(),
     this.isAuthenticated()
 },
 methods:{
     ...mapActions(['getUser','getDataUser']),
     isAuthenticated(){
         if(this.$store.state.user){
                 router.push('/home') 
             
         }
     },
     typing(e){
         this.name= e.target.value
     },
     async submit(){
         try{
             await firebase.firebase
             .auth()
             .signInWithEmailAndPassword(this.user.email, this.user.password)
             .then((res) => {
                 const find=this.dataUser.find(user =>user.email === res.user.email)
                 this.getUser(find)
                 router.push('/home') 
             })
         }
         catch(err){
             alert(err)
         }
         
     }
 }  
}
</script lang="scss" src="../scss/main.scss">


<style scoped>

</style>