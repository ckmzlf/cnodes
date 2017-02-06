<template>
	<div class="wrap">

	   <h1>列表</h1>
     <sidebar></sidebar>
     <div class="header">
        <span class="top-title">{{detailTheme.title}}</span>
        <div class="changes">
        <span>
          发布于{{detailTheme.create_at}}
        </span>
        <span>
          作者 <a href="/user/xuancheng">{{detailTheme.loginname}}</a>
        </span>
        <span>
          {{detailTheme.visit_count}}次浏览
        </span>
        
          <span>
            最后一次编辑是 5 个月前
          </span>
        
        

        

      </div>
      <div v-html="detailTheme.content" class="topic_content"></div>
      <div class="reply">
          <h2>回复</h2>
          <div class=""></div>
      </div>
     </div>
		<!-- <span>{{msg}}</span> -->
	</div>
</template>
<style>
.top-title{font-size: 22px; font-weight: 700;margin: 8px 0;display: inline-block;vertical-align: bottom;width: 75%;line-height: 130%;}
 .topic_content{text-align:left;}
 .topic_content p img{width:100%;}
.changes {font-size: 12px; color: #838383;}
.changes span:before {content: "•";}
</style>
<script>
import sidebar from '../sidebar'
   export default {
      components:{
        sidebar
      },
   	   data(){
   	   	  return {
   	   	  	  msg:"hello,world"
   	   	  }
   	   },
   	   methods:{
   	   	  
   	   },
   	   created:function(){
         /*if(this.$store.state.detailTheme.length){
            this.$http.get('https://cnodejs.org/api/v1/topics').then(function(response){
                this.detailTheme=response.body.data;
                console.log(this.detailTheme)
              })
           
         }else{
            console.log("hello")
         }*/
   	   },
       computed:{
          detailTheme(){
            return this.$store.state.detailTheme
          }
          
       }
   }
</script>