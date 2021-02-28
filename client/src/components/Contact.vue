<template>
  <div >
    <form v-on:submit.prevent="register" class="form_login">
    <input type="email" v-model="user.email" placeholder="  Email from"/><br><br>
    <input type="subject" v-model="user.subject" placeholder="  Subject"/><br><br>
    <input type="message" v-model="user.message" placeholder="  Message"/><br><br>
    </form>
    <button>Registrarse</button>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  components: {
   
  },
  data(){
    return {
      user:{}         
    }
 },
}
</script>

<style>

</style>
