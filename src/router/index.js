import Vue from 'vue'
import VueRouter from 'vue-router'
import UsersListView from '../views/UsersListView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/users',
    name: 'UsersListView',
    component: UsersListView
  },

]

const router = new VueRouter({
  routes
})

export default router
