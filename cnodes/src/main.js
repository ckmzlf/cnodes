// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
 Vue.use(VueRouter)
 Vue.use(VueResource)
 /*样式*/
 import './assets/common.css'
 import './assets/style.css'
/*布局*/
 import Home from './components/layout/Home'
 import About from './components/layout/About'
 import API from './components/layout/API'
 import NewHand from './components/layout/NewHand'
 import detailList from './components/layout/detailList'

 /*注册vuex*/
 import store from './store/index'

 const routes=[
    {path:"/",component:Home},
    {path:'/home',component:Home},
    {path:"/about",component:About},
    {path:"/API",component:API},
    {path:"/newHand",component:NewHand},
    {path:"/topic/:id",component:detailList}
 ]

var router=new VueRouter({
	routes
})
/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  template: '<App/>',
  components: { App }
})
