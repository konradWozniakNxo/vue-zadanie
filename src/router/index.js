import Vue from 'vue'
import VueRouter from 'vue-router'
import UsersListView from '../views/UsersListView.vue'
import UserDetailsView from '../views/UserDetailsView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/users',
    name: 'UsersListView',
    component: UsersListView
  },

  {
    path: '/users/:user',
    name:"user",
    component: UserDetailsView,
  }
]

const router = new VueRouter({
  routes
})

export default router
