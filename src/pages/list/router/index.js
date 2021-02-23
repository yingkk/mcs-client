import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: "mcs-list" */ '../views/index.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: "/list",
  routes
})

export default router
