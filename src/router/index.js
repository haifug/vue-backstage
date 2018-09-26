import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Login from '../components/Login'
import Index from '../components/Index'
import Home from '../components/Home'
import User from '../components/User'
import Grouping from '../components/Grouping'
import Role from '../components/Role'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/app',
      name: 'App',
      component: App
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home/:id',
      name: 'Home',
      component: Home
    },
    {
      path: '/user/:id',
      name: 'User',
      component: User
    },
    {
      path: '/grouping/:id',
      name: 'Grouping',
      component: Grouping
    },
    {
      path: '/role/:id',
      name: 'Role',
      component: Role
    },
    {
      path: '*',
     	redirect:Home
    }
  ]
})
