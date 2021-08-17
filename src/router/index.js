import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import CityIndex from '@/components/city/CityIndex';
// import DetailIndex from '@/components/detail/DetailIndex';

Vue.use(Router)

// 路由管理配置，即页面跳转
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'CityIndex',
      component: CityIndex
    },
    {
      path: '/detail', // /detail?id=1   
      name: 'DetailIndex',
      component: () => import('@/components/detail/DetailIndex') // 路由懒加载、延迟加载、按需加载
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {x:0, y:0}
  }
})
