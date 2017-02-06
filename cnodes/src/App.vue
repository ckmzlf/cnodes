<template>
  <div id="app">
    <div class="navbar">
  <div class="navbar-inner">
    <div class="container">
      <a class="brand" href="/">
        
          <img src="http://o4j806krb.qnssl.com/public/images/cnodejs_light.svg">
        
      </a>

      <form id="search_form" class="navbar-search" action="/search">
        <input type="text" id="q" name="q" class="search-query span3" value="">
      </form>
      <ul class="nav pull-right">
        <li><router-link to="/home">首页</router-link></li>
        <li><router-link to="/newHand">新手入门</router-link></li>
        <li><router-link to="/API">API</router-link></li>
        <li><router-link to="/About">关于</router-link></li>
        <li><a href="/signup">注册</a></li>
        <li><a href="/signin">登录</a></li>
        
      </ul>
      <a class="btn btn-navbar" id="responsive-sidebar-trigger">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </a>
    </div>
  </div>
</div>
    <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
