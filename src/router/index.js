import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/details/HelloWorld'
import regist from '@/pages/regist/regist'
import login from '@/pages/login/login'
import details from '@/pages/details/photodetails/details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/regist',
      name: 'regist',
      component: regist
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/details',
      name: 'details',
      component: details
    }
  ]
})
