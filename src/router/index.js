import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/layout'
import Detail from '@/pages/detail'

import Lunbo from '@/components/lunbo'//轮播图

import Car from '@/pages/details/car'
//D:\我的vue项目\first-project\first-project\src\pages\details\car.vue
import Earth from '@/pages/details/earth'
import Hill from '@/pages/details/hill'
import Loud from '@/pages/details/loud'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/lunbo',
      name: 'Lunbo',
      component:Lunbo
    },
    {
      path: '/',
      name: 'Layout',
      component:Layout
    },
    {
      path:'/detail',
      name:'detail',
      component:Detail,
      children:[
        {
          path:'earth',
          name:'earth',
          component:Earth
        },
        {
          path:'loud',
          name:'loud',
          component:Loud
        },
        {
          path:'hill',
          name:'hill',
          component:Hill
        },
        {
          path:'car',
          name:'car',
          component:Car
        }
      ]
    }
  ]
})
