<template>
  <div class="home_container">
    <container class="info_container">
     Hi Welcome back <strong>{{user.name}}</strong><br><br><br>
     Your balance is <strong>${{balance}}</strong>
    </container>
   <form v-on:submit.prevent="send">
     <h1 >Deposit funds to your<br>or someone's wallet</h1>
    <input type="text" v-model="data.iduser" placeholder="  Id User to send"/><br><br>
    <input type="text" v-model="data.sendMoney" placeholder="  Mount of money"/><br><br>
    <button>Send</button>
  </form>
  <form v-on:submit.prevent="withdraw">
     <h1>Withdraw money</h1>
    <input type="text" v-model="data.withdraw" placeholder="  Mount of money"/><br><br>
    <button>Withdraw </button>
  </form>
  </div>
</template>

<script>
// import router from '../router/index'
// import {mapActions} from 'vuex'
import {mapState,mapActions} from 'vuex'
import firebase from '../main'
import router from '../router/index'


 export default {
  name: 'Home',
  computed:{
    ...mapState(['user','dataUser'])
  },
   data(){
    return {
      data:{},
      balance:0
    }
  },
  created(){
    if(!this.user) {
      router.push('/login')
    }
    this.setBalance()
 },
  components: {
  },
  methods:{
    ...mapActions(['getUser','getDataUser']),
      setBalance(){
        this.balance=this.user.balance
      },
      withdraw(){
        if(!parseInt(this.data.withdraw) )return alert('id or mount of monet should be a number')
        if(this.balance >= parseInt(this.data.withdraw)){
          firebase.db.collection('users-bank').doc(this.user.id).update({
             balance:this.balance-this.data.withdraw
          })
           this.balance=this.balance-this.data.withdraw
           this.data.withdraw =''
        }else{
           this.data.withdraw =''
          alert('You do not have enough money')
        }
      },
      async send(){
        console.log( parseInt(this.data.sendMoney) )
        if(!parseInt(this.data.sendMoney) )return alert('id or mount of monet should be a number')
        var find = this.dataUser.find(e=>e.idNumber == this.data.iduser )
        if(!find)return alert('This user does not have a wallet')
        console.log(this.user.idNumber,this.data.iduser)
        if(this.user.idNumber == this.data.iduser){
          await firebase.db.collection('users-bank').doc(find.id).update({
           balance:parseInt(find.balance) + parseInt(this.data.sendMoney)
         })
         this.balance=this.balance+ parseInt(this.data.sendMoney)
          this.data.iduser=''
         this.data.sendMoney=''
         return 
         
        }
        if(this.balance >= parseInt(this.data.sendMoney)){
          await firebase.db.collection('users-bank').doc(this.user.id).update({
           balance:this.balance-this.data.sendMoney
         })
          await firebase.db.collection('users-bank').doc(find.id).update({
           balance:parseInt(find.balance) + parseInt(this.data.sendMoney)
         })
        alert(`You send ${this.data.sendMoney} to ${find.name} `)
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
