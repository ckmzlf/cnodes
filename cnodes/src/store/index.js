import Vue from "vue";
import Vuex from 'vuex';

import actions from './actions'
import mutations from './mutions'

Vue.use(Vuex);



const state={
	datalist:'',
	detailTheme:''
}

export default new Vuex.Store({
	state,
	actions,
	mutations
})
