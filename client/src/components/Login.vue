<template>
  <div class="contain_login">
    <h1>Log in </h1>
  <form v-on:submit.prevent="submit" class="form_login"> 
    <input type="email" v-model="user.email" placeholder="  Email" class="form_input"/><br><br>
    <input type="password" v-model="user.password" placeholder="  Password" class="form_input" /><br><br>
    <button>Iniciar sesión </button>
    <p>Do not have an account ? you can still send money <a href="/send">  here!</a></p>
  </form>
 
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
     this.getDataUser()
 },
 methods:{
     ...mapActions(['getUser','getDataUser']),
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