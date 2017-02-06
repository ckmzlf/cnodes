<template>
	<div class="wrap">
	   <h1>列表</h1>
		<ul>
			<li v-for="item in msg">
            <!-- 加入这个图片会有发生错误，是否为加载的原因 -->
            <!-- <a href=""><img :src="item.author.avatar_url"></a>    -->
            <span>{{item.reply_count}}/</span><span>{{item.visit_count}}</span>
            <span>置顶</span>
            <a href="">{{item.title}}</a>
            <!-- <a href=""><img :src="item.author.avatar_url"></a> -->
         </li>
		</ul>
		<!-- <span>{{msg}}</span> -->
	</div>
</template>
<style></style>
<script>
	export default{
   	   data(){
   	   	  return {
   	   	  	  msg:"hello,world"
   	   	  }
   	   },
   	   methods:{
   	   	  
   	   },
   	   created:function(){
             var node=document.createElement("div");
             var textnode=document.createTextNode("加载中...");
             document.documentElement.appendChild(textnode);
   	   	 this.$http.get('https://cnodejs.org/api/v1/topics').then(function(response){
   	   	  	this.msg=response.body.data;
               document.documentElement.removeChild(textnode)
   	   	  })
   	   }
   }
</script>