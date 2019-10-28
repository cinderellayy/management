import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import usermanagement from '@/components/userCenter/userManagement'
import blacklist from '@/components/userCenter/blacklist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: 'usermanagement',
          name: 'usermanagement',
          component: usermanagement
        },
        {
          path: 'blacklist',
          name: 'blacklist',
          component: blacklist
        }
      ]
    },

  ]
})
