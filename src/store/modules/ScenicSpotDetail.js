/**
 * Created by 张建平 on 2021/八月/14.
 */
import axios from "axios";

// 驱动应用的数据源
const state = {
	scenicSpotDetail: {}
}

/*
负责发ajax 请求与后端的 api 服务系统交互，获得数据后提交给mutations
Actions 类似于 mutations，不同在于：
  (1) Action 提交的是 mutation，而不是直接变更状态。
  (2) Action 可以包含任意异步操作。
*/
const actions = {
	getScenicSpotDetailById({commit}, id) {
		// 真实请求 springboot 控制器
		// axios.get(`/api/detail?id=${id}`)
		axios.get(`/api/detail.json`)
			.then(response => {
				const data = response.data.data
				console.dir(data)
				commit('storeScenicSpotDetail', data)
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
	storeScenicSpotDetail(state, data) {
		state.scenicSpotDetail = data
	}
}

const getters = {
	scenicSpotDetail: (state) => {
		return state.scenicSpotDetail
	}
}

export default {
	state,
	actions,
	mutations,
	getters
}
