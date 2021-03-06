import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { store } from '../store';


Vue.use(VueRouter)
let data = process.env.NODE_ENV !== 'production' ? 'https://prime-wood.ru/' : ''

const routes = [{
    path: '*/*',
    name: 'Home',
    component: Home,
    beforeEnter(from, to, next) {
        let item = "Get groceries"
        store.dispatch('products/GET_TODO', item)
        store.dispatch('products/loadItems');
        next();
    }
}]

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
})

export default router