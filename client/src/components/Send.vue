<template>
  <div class="contain_send">
   <form v-on:submit.prevent="send" class="form_send">
     <h1>Send money to another wallet</h1>
    <input type="text" v-model="data.iduser" placeholder="  Id User to send"/><br><br>
    <input type="text" v-model="data.sendMoney" placeholder="  Mount of money"/><br><br>
    <button>Send</button>
  </form>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import firebase from '../main'

 export default {
  name: 'Send',
  computed:{
    ...mapState(['dataUser'])
  },
   data(){
    return {
      data:{},
      
    }
  },
  beforeCreated(){
     this.getDataUser()
  },
  components: {
  },
  methods:{
      async send(){
        var find = this.dataUser.find(e=>e.idNumber == this.data.iduser )
        if(!find)return alert('This user does not have a wallet')
        if(this.balance >= parseInt(this.data.sendMoney)){
          await firebase.db.collection('users-bank').doc(this.user.id).update({
           balance:this.balance-this.data.sendMoney
         })
          await firebase.db.collection('users-bank').doc(find.id).update({
           balance:parseInt(find.balance) + parseInt(this.data.sendMoney)
         })
         this.balance=this.balance-this.data.sendMoney
          this.getDataUser()
         this.data.iduser=''
         this.data.sendMoney=''
        //   
        }else{
          alert('You do not have enough money')
        }
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
