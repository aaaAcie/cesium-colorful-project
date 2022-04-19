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
      }
    ]
  },
]
const router = createRouter({
  history:createWebHashHistory(),
  routes
})
export default router