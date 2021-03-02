<template>
  <div class="contain_send">
   <form v-on:submit.prevent="send" class="form_send">
     <h1 id="form_h1">Send money to another wallet</h1>
     <h1 id="form_h2">Send money to <br>another wallet</h1>
    <input type="text" v-model="data.iduser" placeholder="  Id User to send"/><br><br>
    <input type="text" v-model="data.sendMoney" placeholder="  Mount of money"/><br><br>
    <button>Send</button>
  </form>
  </div>
</template>

<script>

import firebase from '../main'
import {mapState} from 'vuex'

 export default {
  name: 'Send',
  computed:{
      ...mapState(['confirmationEmail'])
  },
   data(){
    return {
      data:{},
      dataUser:''
    }
  },
  mounted(){
     var aux = []
             firebase.db.collection('users-bank').onSnapshot((snap) => {
                snap.docs.forEach(doc => {
                    const { name, email, balance, idNumber } = doc.data();
                    aux.push({
                        id: doc.id,
                        name,
                        email,
                        balance,
                        idNumber
                    })
                    
                })
            })  
        this.dataUser =aux
  },
  methods:{
      async send(){
        if(!parseInt(this.data.sendMoney) )return alert('Id or mount of money should be a number')
        var find = this.dataUser.find(e=>e.idNumber == this.data.iduser )
        if(!find)return alert('This user does not have a wallet')
        await firebase.db.collection('users-bank').doc(find.id).update({
        balance:parseInt(find.balance) + parseInt(this.data.sendMoney)
        })
        alert(`You send $${this.data.sendMoney} to ${find.name} `)
         this.dataUser.map(e=>{
             if(e.id ===find.id){
                 e.balance = e.balance + parseInt(this.data.sendMoney)
             }
         })    
        this.data.iduser=''
        this.data.sendMoney=''
     },
     
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
