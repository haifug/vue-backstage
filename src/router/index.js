import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'
import Grouping from '../components/Grouping'
import Role from '../components/Role'
import Layout from '../components/Basic/Layout'
import Container from '../components/Basic/Container'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/layout',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/container',
      name: 'Container',
      component: Container
    },
    {
      path: '/role',
      name: 'Role',
      component: Role
    },
    {
      path: '/',
     	redirect:'/home'
    }
  ]
})
