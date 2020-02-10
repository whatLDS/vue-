import Vue from 'vue'
import Router from 'vue-router'
import goods from '../components/goods/goods'
import commments from '../components/comments/comments'
import seller from '../components/seller/seller'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: goods
    },
    {
      path: '/goods',
      component: goods
    },
    {
      path: '/seller',
      component: seller
    },
    {
      path: '/comments',
      component: commments
    }
  ]
})
