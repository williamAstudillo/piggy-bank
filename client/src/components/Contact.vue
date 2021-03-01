<template>
  <div class="contain_contact">
    <form v-on:submit.prevent="send" class="form_contact">
    <input type="email" v-model="user.email" placeholder="  Email from"/><br><br>
    <input type="subject" v-model="user.subject" placeholder="  Subject"/><br><br>
    <input type="message" v-model="user.message" placeholder="  Message" id='message'/><br><br>
    <button>Enviar mail </button>
    </form>
  </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {
  data(){
    return {
      user:{},   
    }
  },
   computed:{
      ...mapState(['confirmationEmail'])
  },
  methods:{
  ...mapActions(['sendMail','changeState']),
  send(){
    if(!this.user.email.includes('@') || !this.user.email.includes('.') ) return alert('Write a valid email')
    if(!this.user.email || !this.user.subject || !this.user.message)return alert('Please complete all fields')
    this.sendMail(this.user)
    var aux=this.user.message
    var aux2=this.user.subject
    var obj={
      email:'app.piggybank@gmail.com',
      message:aux,
      subject:aux2
    }
    this.sendMail(obj)
    this.user ={}
    alert('Yout email was send')
  }
 }
}
</script>

<style>

</style>
