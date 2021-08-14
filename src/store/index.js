/**
 * Created by 张建平 on 2021/八月/14.
 */
import Vue from 'vue'
import Vuex from 'vuex'
// 注册状态管理插件
Vue.use(Vuex)

import City from './modules/City'

export default new Vuex.Store({
	modules: { // Vuex模块
		City // 加载./modules/City.js
	}
})
