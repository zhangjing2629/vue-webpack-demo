import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// import News from '@/components/News'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      // component: Hello
      component: resolve => require(['@/components/Hello'], resolve)
    },
    {
      path: '/news',
      name: 'News',
      // component: News
      component: resolve => require(['@/components/News'], resolve)
    }
  ],
  mode: 'history'
})
