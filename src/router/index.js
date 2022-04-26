import Vue from 'vue'
import VueRouter from 'vue-router'
import Connexion from '../views/MyConnexion.vue'
import YetTest from '../views/YetTest.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'connexion',
    component: Connexion
  },


  {
    path: '/ytest',
    name: 'ytest',
    component: YetTest
  },

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router