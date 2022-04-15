import { createRouter,createWebHashHistory} from "vue-router"
const routes = [
  {
    path:'/',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },{
    path:'/overview',
    name: 'overview',
    component: () => import('../views/overview/overview.vue'),
  }
]
const router = createRouter({
  history:createWebHashHistory(),
  routes
})
export default router