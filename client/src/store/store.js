import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '../main'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user:'',
        dataUser:[]
    },
    actions: {
        getUser({commit},user) {
            commit('setUser',user)
        },
        async getDataUser({commit}){
            var aux = []
            await firebase.db.collection('users-bank').onSnapshot((snap) => {
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
            commit('setDataUser',aux)
        }
    },
    mutations: {
        setUser(state,user) {
            state.user=user
        },
        setDataUser(state,aux){
            state.dataUser=aux
        }
    },
    modules: {
    }
})
