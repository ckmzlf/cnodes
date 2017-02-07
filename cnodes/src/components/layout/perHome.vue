<template>
	 <div class="wrap">
      <sidebar v-bind:msgInfo="msg"></sidebar>
      <div class="panel">
        <div class="per-home">
            <h2>个人主页</h2>
            <div class="user">
                <img :src="msg.avatar_url">
                <span>{{msg.loginname}}</span>
                <ul>
                   <li>{{msg.score}}积分</li>
                   <li>github:@{{msg.githubUsername}}</li>
                </ul>
            </div>
            
        </div>
        <div class="recent-topic">
            <h2>最近创建话题</h2>
            <ul class="topic-list">
                <li v-for="(item,index) in msg.recent_topics" v-if="index<5">
                    <img :src="item.author.avatar_url">
                    {{item.title}}
                </li>
            </ul>
            <div><router-link to="/more">查看更多»</router-link></div>
        </div>
        <div class="join-topic">
            <h2>最近创建话题</h2>
            <ul class="topic-list">
                <li v-for="item in msg.recent_replies">
                    <img :src="item.author.avatar_url">
                    {{item.title}}
                </li>
            </ul>
            <div><router-link to="/more">查看更多»</router-link></div>
        </div>
      </div>
   </div>
</template>
<style lang="scss" scoped>
.wrap{
    .panel{margin-right:315px;text-align:left;}
}
.h2{
  border-radius:3px 3px 0 0;
  background-color:#f6f6f6;padding:10px;color:#80bd01;border-bottom:1px solid #e5e5e5;
}
.recent-topic,.join-topic,.per-home{margin-bottom:20px;background-color:#fff;}
.recent-topic,.join-topic{
  div{padding:10px;}
}
.per-home h2,.recent-topic h2,.join-topic h2{
   @extend .h2
}
.topic-list li{
  padding:10px;border-bottom:1px solid #f0f0f0;
  color:#08c;
  img{width:40px;height:40px;}
}
.user{padding:10px;
 img{width:32px;height:32px;}
}
</style>
<script>
import sidebar from '../perSidebar'
export default {
      components:{
        sidebar
      },
     data(){
        return {
           msg:'',
           count:''
        }
     },
     beforeMount(){
        this.menu();
     },
     methods:{

        menu:function(){
          this.count=this.$store.state.datalist;
          console.log(this.count);
          var that=this;
          fetch("https://cnodejs.org/api/v1/user/"+this.$route.params.name,{
            methods:"get"
          }).then(function(res){
            return res.text()
          }).then(function(res){
            that.msg=JSON.parse(res).data;
            console.log(JSON.parse(res).data);
          }).catch(function(e){
            console.log("获取数据失败")
          })
        }
     }
 }
</script>