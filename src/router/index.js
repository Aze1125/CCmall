import Vue from 'vue'
import VueRouter from 'vue-router'
// import Router from 'vue-router'
const Home = () => import('../views/home/Home');
const Category = () => import('../views/category/Category');
const Car = () => import('../views/car/Car');
const My = () => import('../views/my/My');
const Detail = () => import('../views/detail/Detail');

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/Home',
    component: Home
  },
  {
    path: '/Category',
    component: Category
  },
  {
    path: '/Car',
    component: Car
  },
  {
    path: '/My',
    component: My
  },
  {
    path: '/detail:iid',
    component: Detail
  }
]
const router = new VueRouter({
  routes,
  mode:'history'
})
// 3导出
export default router


