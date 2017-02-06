<template>
	<div class="wrap">
	    <sidebar></sidebar>
	    <div class="header">
	    	<h1>Home 页面</h1>

			<ul class="menuList">
				<li v-for="item in listItem" v-on:click="menu(item.tab)" :class="['nav-li', { status: item.isChecked }]">{{item.text}}</li>
			</ul>

			<ul class="dataList">
				<li v-for="item in datalist">
		            <!-- 加入这个图片会有发生错误，是否为加载的原因 -->
		            <a href="" class="author-head"><img :src="item.author.avatar_url"></a> 
		            <span>{{item.reply_count}}/</span><span>{{item.visit_count}}</span>
		            <span>置顶</span>
		            <a :href="/topic/"+item.id+"">{{item.title}}</a>
	         	</li>
			</ul>
			<div class="page">
				<!-- <a href="" v-on:click=""></a> -->
			</div>
		</div>
		
	</div>
</template>
<style>
.wrap{width:1200px;margin:0 auto;}
.header{overflow: hidden;text-align:left;
	  width:800px;
 }
 .menuList{overflow:hidden;padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;}
 .menuList li {	float:left; margin: 0 10px;color: #80bd01;}
 .dataList li{line-height:24px;}
 .author-head img{width:24px;height:24px;}
 .menuList .status{background-color: #80bd01;color: #fff;padding: 3px 4px;border-radius: 3px;}
</style>
<script>
import sidebar from '../sidebar'
   export default {
   	  components:{
   	  	sidebar
   	  },
   	  data(){
   	  	  return {
   	  	  	 listItem:[
	   	  	  	 {text:"全部",tab:"all",isChecked:true},
	   	  	  	 {text:"精华",tab:"good",isChecked:false},
	   	  	  	 {text:"分享",tab:"share",isChecked:false},
	   	  	  	 {text:"问答",tab:"ask",isChecked:false},
	   	  	  	 {text:"招聘",tab:"job",isChecked:false}
   	  	  	 ]
   	  	  }
   	  },
   	  created:function(){
   	  	this.menu('all');
   	  		/*var obj={};
   	  		obj.item='all';
   	  		obj.limit=10;
   	  		obj.page=1;
   	  		obj.mdrender =true;
   	  		this.$store.dispatch('createData',obj);*/
   	  },
   	  computed:{
	      datalist(){
	        return this.$store.state.datalist;
	      }
	  },
   	  methods:{
   	  	menu:function(item){
   	  		this.listItem.map((li) =>{
				item === li.tab ? li.isChecked = true : li.isChecked = false
			});
   	  		var obj={};
   	  		obj.item=item;
   	  		obj.limit=20;
   	  		obj.page=1;
   	  		this.$store.dispatch('createData',obj);
   	  	}
   	  }
   }
</script>