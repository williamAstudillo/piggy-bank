import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import firebase from 'firebase'
import store from './store/store'
import vueResource  from 'vue-resource'

import 'firebase/firestore';
Vue.config.productionTip = false
var firebaseConfig = {
  apiKey: 'AIzaSyCn3rJuZGaiPSVMCJZiKkT4yveturHkV_c',
  authDomain: 'henry-app-50edd.firebaseapp.com',
  projectId: 'henry-app-50edd',
  storageBucket: 'henry-app-50edd.appspot.com',
  messagingSenderId: '643875518821',
  appId: '1:643875518821:web:82171dc147cc1f2c9bc98c',
  measurementId: 'G-23KB774KZJ'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();
export default{
  firebase,
  db
}

Vue.use(vueResource)


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
