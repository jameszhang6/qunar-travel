// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'babel-polyfill'

// 轮播图组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'

// 全局注册
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(VueAxios, axios)

//解决移动端手动点击与真正触发click事件会存在300ms的延迟问题
import fastclick from 'fastclick'
fastclick.attach(document.body)

// 导入全局样式
// 导入重置页面的默认样式
import 'styles/reset.css'
// 解决移动端1像素边框问题
import 'styles/border.css'
import 'styles/iconfont/iconfont.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 路由管理
  components: { App },
  template: '<App/>'
})
