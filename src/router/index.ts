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
        path: 'router',
        name: 'router',
        component: () => import('@views/router/router.vue'),
        children: [
          {
            path: 'dynamicMatchExample/:title',
            name: 'dynamicMatchExample',
            component: () =>
              import(
                '@views/router/dynamic-match/components/dynamic-match-example.vue'
              )
          },
          {
            path: 'wildcard-*',
            name: 'wildcard',
            component: () =>
              import(
                '@views/router/dynamic-match/components/wildcard-example.vue'
              )
          },
          {
            path: 'nominateView',
            name: 'nominateView',
            components: {
              a: () => import('@views/router/nominate-view/components/compA.vue'),
              b: () => import('@views/router/nominate-view/components/compB.vue'),
              c: () => import('@views/router/nominate-view/components/compC.vue')
            }
          },
          {
            path: 'passArgument-a/:title',
            name: 'passArgument-a',
            components: {
              passArgument: () => import('@views/router/pass-arguments/components/pass-arguments-example.vue')
            },
            props: {
              passArgument: true
            }
          },
          {
            path: 'passArgument-b',
            name: 'passArgument-b',
            components: {
              passArgument: () => import('@views/router/pass-arguments/components/pass-arguments-example.vue')
            },
            props: {
              passArgument: { title: '哈哈哈哈' }
            }
          },
          {
            path: 'passArgument-c',
            name: 'passArgument-c',
            components: {
              passArgument: () => import('@views/router/pass-arguments/components/pass-arguments-example.vue')
            },
            props: {
              passArgument: route => {
                return { title: route.query.title + 'yyy' }
              }
            }
          },
          {
            path: 'metaInfo',
            name: 'metaInfo',
            components: {
              metaInfo: () => import('@views/router/meta-info/components/meta-info-example.vue')
            },
            meta: {
              keepAlive: true,
              requiresAuth: true,
              title: 'hahahah'
            }
          },
          {
            path: 'transition-a',
            name: 'transition-a',
            components: {
              transitionAll: () => import('@views/router/transition/components/compA.vue')
            }
          },
          {
            path: 'transition-b',
            name: 'transition-b',
            components: {
              transitionAll: () => import('@views/router/transition/components/compB.vue')
            }
          },
          {
            path: 'transition-c',
            name: 'transition-c',
            components: {
              transitionDiff: () => import('@views/router/transition/components/compC.vue')
            }
          },
          {
            path: 'transition-d',
            name: 'transition-d',
            components: {
              transitionDiff: () => import('@views/router/transition/components/compD.vue')
            }
          }
        ]
      },
      {
        path: 'router-scroll',
        name: 'router-scroll',
        component: () => import('@views/router/scroll/components/scroll-example.vue')
      },
      {
        path: 'event-modifier',
        name: 'event-modifier',
        component: () => import('@views/event-modifier/event-modifier/event-modifier.vue')
      },
      {
        path: 'keyup-modifier',
        name: 'keyup-modifier',
        component: () => import('@views/event-modifier/keyup-modifier/keyup-modifier.vue')
      },
      {
        path: 'system-modifier',
        name: 'system-modifier',
        component: () => import('@views/event-modifier/system-modifier/system-modifier.vue')
      },
      {
        path: 'component-modifier',
        name: 'component-modifier',
        component: () => import('@views/event-modifier/component-modifier/component-modifier.vue')
      },
      {
        path: 'async-component',
        name: 'async-component',
        component: () => import('@views/async-component/async-component.vue')
      },
      {
        path: 'watch',
        name: 'watch',
        component: () => import('@views/watch/watch.vue')
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
  },
  {
    path: '*',
    component: () => import('../views/404/404.vue')
  }
]

const router = new VueRouter({
  routes
  // scrollBehavior (to, from, savedPosition) {
  //   // return 期望滚动到哪个的位置
  //   return { x: 0, y: 0 }
  // }
})

export default router
