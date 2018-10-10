import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'
import Layout from '../components/Basic/Layout'
import Container from '../components/Basic/Container'
import Button from '../components/Basic/Button'

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
      path: '/button',
      name: 'Button',
      component: Button
    },
    {
      path: '/',
     	redirect:'/home'
    }
  ]
})
