<template>
	<div class="wrap">
	    <sidebar></sidebar>
	    <div class="header">
			<ul class="menuList">
				<li v-for="item in listItem" v-on:click="menu(item.tab)" :class="['nav-li', { status: item.isChecked }]">{{item.text}}</li>
			</ul>
			<ul class="dataList">
				<li v-for="item in datalist" >
		            <!-- 加入这个图片会有发生错误，是否为加载的原因 -->
		            <a class="author-head" @click="personal(item.author.loginname)"><img :src="item.author.avatar_url"></a> 
		            <span>{{item.reply_count}}/</span><span>{{item.visit_count}}</span>
                  <span v-if='item.top' class="putTop">
                     置顶
                  </span>
                   <span v-else-if="item.tab=='good' & item.good" class="good">
                     精华
                   </span>
                  <span v-else-if="item.tab=='share'" class="share">
                     分享
                  </span>
                  <span v-else-if="item.tab=='job'" class="job">
                     招聘
                  </span>
                  <span v-else-if="item.tab=='ask'" class="ask">
                     问答
                  </span>
                 
		            <a v-on:click="detailInfo(item.id)">{{item.title}}</a>
	         </li>
			</ul>
			<div class="page">
             <a v-on:click="firstPage">«</a>
             <a v-if="currentPage>3">...</a>
             <a v-for="n in showPage" @click="pageSkip(n)" :class="{active: n==currentPage}">
                {{n}}
             </a>
             <a v-if="maxPage>5 && currentPage<maxPage">...</a>
             <a v-on:click="lastPage">»</a>
			</div>
		</div>
		
	</div>
</template>
<style lang="scss">
.wrap{
   max-width:1400px;margin:20px auto 0;width:90%;
   .header{overflow: hidden;text-align:left;
     margin-right:315px;background:#fff;border-radius:3px;
     .menuList{
       overflow:hidden;padding: 10px;
       background-color: #f6f6f6;
       border-radius: 3px 3px 0 0;}
      }
}
 .menuList  {	
   li {float:left; margin: 0 10px;color: #80bd01;}
   .status{background-color: #80bd01;color: #fff;padding:0 4px;border-radius: 3px;}
}
 .dataList li{line-height:24px;border-bottom:1px solid #f0f0f0;padding:5px 15px;}
 .author-head img{width:24px;height:24px;}

 .putTop,.good{background: #80bd01;color: #fff;}
.share,.putTop,.good,.job,.ask{padding: 2px 4px;border-radius: 3px;font-size: 12px;}
.share,.job,.ask{background-color: #e5e5e5;color: #999;  }

.page{border:1px solid #d0d0d0;border-radius:2px;margin:20px;display:inline-block;
 a{display:inline-block;line-height:24px;height:24px;color:#778087;border-right:1px solid #ccc;width:24px;text-align:center;
  &:last-child{border-right-width:0;}
 }

 .active{color:#80bd01}
 }
</style>
<script>
import sidebar from '../sidebar'
   export default {
   	  components:{
   	  	sidebar
   	  },
        beforemount(){
        },
   	  data(){
   	  	  return {
   	  	  	 listItem:[
	   	  	  	 {text:"全部",tab:"all",isChecked:true},
	   	  	  	 {text:"精华",tab:"good",isChecked:false},
	   	  	  	 {text:"分享",tab:"share",isChecked:false},
	   	  	  	 {text:"问答",tab:"ask",isChecked:false},
	   	  	  	 {text:"招聘",tab:"job",isChecked:false}
   	  	  	 ],
             askType:'',//tab的类型
             showPage:[1,2,3,4,5],//展示的分页数
             currentPage:1,//当前分页数
             limitPage:10,//每次获取的条数
             maxPage:50//最大的页数

   	  	  }
   	  },
   	  created:function(){
            /*
            如果是这样的话,每次回退都会在all栏目上面,所以这个是不对的
            所以在vuex中保存一个类型,但是在Vuex当中的话，每次刷新也是会清空数据的
            所以使用Vuex也是不对，所以的话tab类型还是保存在sessionStorage当中比较合适
            */
           var askType=sessionStorage.getItem("askType");
            if(!askType){
               sessionStorage.setItem("askType",'all');
               this.menu('all',1);
            }else{
               this.menu(askType);
            }
               	  	   
   	  },
   	  computed:{
	      datalist(){
	        return this.$store.state.datalist;
	      }
	  },
   	  methods:{

   	  	menu:function(item,page){
            var askType=sessionStorage.getItem("askType");
            if(askType!=item){
              this.showPage=[1,2,3,4,5];
            }
            sessionStorage.setItem("askType",item);
            //sessionStorage.setItem("page",this.currentPage);
     	  		this.listItem.map((li) =>{
        				item === li.tab ? li.isChecked = true : li.isChecked = false
      			});
   	  		var obj={};
   	  		obj.item=item;
   	  		obj.limit=this.limitPage;
            if(!page){
               obj.page=1;
            }else{
               obj.page=page;
            }
   	  		this.$store.dispatch('createData',obj);
   	  	},
   	  	detailInfo(id){
   	  		//触发detailList方法，同时传递id参数
   	  		//this.$store.dispatch("detailList",id);
            /*通过路由传递ID*/
   	  		this.$router.push({path:'/topic/'+id,params: { userId: id }});

   	  	},
         firstPage(){
            var askType=sessionStorage.getItem("askType");
            this.menu(askType,1);
         },
         lastPage(){
            var askType=sessionStorage.getItem("askType");
            this.menu(askType,1);
         },
         pageSkip(page){
          this.currentPage=page;
          //未达到最大页数,同时未达到最小页数
          if(this.currentPage<this.maxPage-2 && this.currentPage>3){
              this.showPage=[];
              var i=this.currentPage-2,len=this.currentPage+3;
              for(i;i<len;i++){
                this.showPage.push(i);
              }
          }else if(this.currentPage<4){
             this.showPage=[1,2,3,4,5];
          }
          
            
            var askType=sessionStorage.getItem("askType");
            this.menu(askType,page);
         },
         personal(name){
            this.$router.push({path:'/user/'+name,params: { userId: name }});
         }
   	  }
   }
</script>