<template>
	<div class="wrap">

     <sidebar></sidebar>
     <div class="header">
        <div class="title">
            <span class="top-title">{{msg.title}}</span>
            <div class="changes">
              <span>
                发布于{{msg.create_at}}
              </span>
              <span>
                作者 <a href="/user/xuancheng">{{msg.loginname}}</a>
              </span>
              <span>
                {{msg.visit_count}}次浏览
              </span>
              
                <span>
                  最后一次编辑是 5 个月前
                </span>
            </div>
        </div>
      <div v-html="msg.content" class="topic_content"></div>
      <div class="reply">
          <h2>回复</h2>
          
          <div v-for="item in replies" class="reply_area">
             <div class="user">
                 <img :src="item.author.avatar_url">
                 <span>{{item.author.loginname}}</span>
             </div>
             <div v-html="item.content"></div>
          </div>
      </div>
     </div>
		<!-- <span>{{msg}}</span> -->
	</div>
</template>
<style>
.title{padding:10px;border-bottom:1px solid #d0d0d0;}
.top-title{font-size: 22px; font-weight: 700;margin: 8px 0;display: inline-block;vertical-align: bottom;width: 75%;line-height: 130%;}
 .topic_content{text-align:left;padding:10px;}
 .topic_content p img{width:100%;}
.changes {font-size: 12px; color: #838383;}
.changes span:before {content: "•";}

.reply_area{padding-right: 10px;background: #fff;border-top: 1px solid #f0f0f0;position: relative;
    padding: 10px 0 10px 10px;
    font-size: 14px;}
.user img{width:30px;height:30px;}
</style>
<script>
import sidebar from '../sidebar'
   export default {
      components:{
        sidebar
      },
      beforeMount(){
          this.menu();
      },
   	   data(){
   	   	  return {
   	   	  	  msg:"",
              replies:''
   	   	  }
   	   },
   	   methods:{
   	   	  menu:function(){
              this.$http.get('https://cnodejs.org/api/v1/topic/'+this.$route.params.id).then(function(response){
                this.msg=response.body.data;
                this.replies=response.body.data.replies;
                console.log(this.replies);
              })
          }
   	   }
   }
</script>