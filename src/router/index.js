import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

var router = new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => (require(["@/components/mobile/GfIndex"], resolve))
    },
    {
      path: '/home',
      name: 'home',
      component: resolve => (require(["@/components/mobile/GfIndex"], resolve))
    },
    {
      path: '/contact',
      name: 'contact',
      component: resolve => (require(["@/components/mobile/Contact"], resolve))
    },
    {
      path: '/about',
      name: 'about',
      component: resolve => (require(["@/components/mobile/About"], resolve))
    },
    {
      path: '/terms',
      name: 'terms',
      component: resolve => (require(["@/components/mobile/Terms"], resolve))
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: resolve => (require(["@/components/mobile/Privacy"], resolve))
    },
    {
      path: '/refunds',
      name: 'refunds',
      component: resolve => (require(["@/components/mobile/Refound"], resolve))
    },
    {
      path: '/legality',
      name: 'legality',
      component: resolve => (require(["@/components/mobile/Legality"], resolve))
    },
  ]
})


export default router



