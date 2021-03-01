<template>
  <div  class="contain_register">
    <h1>Register</h1>
  <form v-on:submit.prevent="register" class="form_register">
    <input type="name" v-model="user.name" placeholder="  Name"/><br><br>
    <input type="last_name" v-model="user.last_name" placeholder="  Last name"/><br><br>
    <input type="idNumber" v-model="user.idNumber" placeholder="  Id Number"/><br><br>
    <input type="email" v-model="user.email" placeholder="  Email"/><br><br>
    <input type="password" v-model="user.password" placeholder="  Password"/><br><br>
    <button>Register</button>
  </form>
  
  </div>
</template>

<script>
import firebase from '../main'
import router from '../router/index'

export default {
 data(){
    return {
      user:{
          name:'',
          email:'',
          password:'',
          last_name:'',
      }         
    }
 },
 methods:{
     async register(){
         if(this.user.name===''||this.user.name===''||this.user.email===''||this.user.password===''){
             return alert('Todos los campos deben estar completos')
         }
         console.log(this.user)
         try{
             await firebase.firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password)
             firebase.db.collection('users-bank').add({
                  name:this.user.name,
                  last_name:this.user.last_name,
                  idNumber:parseInt(this.user.idNumber),
                  email:this.user.email,
                  balance:100,
                });
                router.push('/login')
         }
         catch(err){
             alert(err)
         }
        
       this.user={
          name:'',
          email:'',
          password:'',
          last_name:'',
      } 
     },
     typing(e){
         this.name= e.target.value
     },
     submit(){
         console.log(this.user)
     }
 }  
}
</script>


<style scoped>

</style>