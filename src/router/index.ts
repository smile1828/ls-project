import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@views/index.vue'),
    children: [
      {
        path: '/index/router',
        name: 'router',
        component: () => import('@views/router/router.vue'),
        children: [
          {
            path: '/index/router/dynamicMatchExample/:title',
            name: 'dynamicMatchExample',
            component: () =>
              import(
                '@views/router/dynamic-match/components/dynamic-match-example.vue'
              )
          }
        ]
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
