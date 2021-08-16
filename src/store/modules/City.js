/**
 * Created by 张建平 on 2021/八月/14.
 */
import axios from "axios";

// 驱动应用的数据源
const state = {
	recommendList: [],
	weekendList: [],
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
				throw new Error(err)
			});
	},
	getHomeList({commit}, myCity) {
		let requestPath = ''
		if(myCity === '重庆') {
			requestPath = '/api/index_chongqing.json'
		} else {
			// 非重庆景点
			requestPath = '/api/index.json'
		}
		console.log('Request API Path: ', requestPath)

		// 加载首页热销推荐和周末去哪儿 的景点列表数据
		axios.get(requestPath)
			.then(response => {
				const data = response.data.data
				commit('storeHomeList', data)
			})
			.catch(err => {
				throw new Error(err)
			})
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
	},
	// 存储返回首页时的数据到 state
	storeHomeList(state, data) {
		state.recommendList = data.recommendList
		state.weekendList = data.weekendList
	}
}

const getters = {
	recommendList: (state) => {
		return state.recommendList
	},
	weekendList: (state) => {
		return state.weekendList
	},
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
