/**
 * Created by 张建平 on 2021/八月/14.
 */
import axios from "axios";

// 驱动应用的数据源
const state = {
	cities: {},
	hotCities: []
}

/*
负责发ajax 请求与后端的 api 服务系统交互，获得数据后提交给mutations
Actions 类似于 mutations，不同在于：
  (1) Action 提交的是 mutation，而不是直接变更状态。
  (2) Action 可以包含任意异步操作。
*/
const actions = {
	// getHotCities(context) { .... }
	// {commit} 意思是从 context 对象中将 commit 函数解构
	getHotCities({commit}) {
		// 请求后端 API 服务，也就是调用 springboot 开发的控制器
		axios.get('/api/china_city_data.json')
			.then((response) => {
				//console.log(response.data.data)
				// 将数据提交给 mutations
				commit('storeHotCities', response.data.data)
				//context.commit('storeHotCities', response.data.data)
			})
			.catch(err => {
				new Error(err)
			});
	}
}

// mutations 中的操作是同步的
const mutations = {
	/* 
	将数据存储到Vuex的 state 对象中 
	storeHotCities(Vuex 中的 state对象, 是 action 提交过来的数据)
	*/
	storeHotCities(state, data) {
		state.cities = data.cities
		state.hotCities = data.hotCities
	}
}

const getters = {
	cities: (state) => {
		// 这里根据需求可以再做一些数据封装
		return state.cities
	},
	hotCities: (state) => {
		return state.hotCities
	}
}

export default {
	state,
	actions,
	mutations,
	getters
}
