import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Register from '../components/Register'
import Home from '../components/Home'
import Contact from '../components/Contact'
import Send from '../components/Send'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
    {
        path: '/send',
        name: 'send',
        component: Send
    }
]

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes
})

export default router
