import { createRouter,createWebHashHistory} from "vue-router"
const routes = [
  {
    path:'/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    redirect:'overview',
    children:[
      {
        path:'/overview',
        name: 'overview',
        component: () => import('../views/overview/overview.vue'),
      },
      {
        path:'/neighborhood',
        name: 'neighborhood',
        component: () => import('../views/neighborhood/index.vue'),
      },
      {
        path:'/traffic',
        name: 'traffic',
        component: () => import('../views/traffic/index.vue'),
      },
      {
        path:'/building',
        name: 'building',
        component: () => import('../views/building/index.vue'),
      },
      {
        path:'/service',
        name: 'service',
        component: () => import('../views/service/index.vue'),
      },
      {
        path:'/lowCarbon',
        name: 'lowCarbon',
        component: () => import('../views/neighborhood/index.vue'),
      },
      {
        path:'/health',
        name: 'health',
        component: () => import('../views/neighborhood/index.vue'),
      },
      {
        path:'/entrepreneurship',
        name: 'entrepreneurship',
        component: () => import('../views/neighborhood/index.vue'),
      },
      {
        path:'/Governance',
        name: 'Governance',
        component: () => import('../views/neighborhood/index.vue'),
      },
      {
        path:'/education',
        name: 'education',
        component: () => import('../views/neighborhood/index.vue'),
      }
    ]
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router