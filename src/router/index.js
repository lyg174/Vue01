import Vue from 'vue'
import VueRouter from 'vue-router'
import Movies from './../views/Movies.vue'// 导入路由组件
import Cinemas from './../views/Cinemas.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',// url 路径
    name: 'Movies',
    component: Movies //  组件
  },
  {
    path: '/cinemas',
    name: 'cinemas',
    component:Cinemas
  }
]

const router = new VueRouter({
  routes
})

export default router
