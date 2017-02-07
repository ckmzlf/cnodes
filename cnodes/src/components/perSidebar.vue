<template>
	<div class="sidebar">
		  <h2>个人信息</h2>
		  <ul>
		  	<li>
		  		<img :src="msgInfo.avatar_url">
		  	  	{{msgInfo.loginname}}
		  	</li>
		  	<li>
		  		积分：{{msgInfo.score}}
		  	</li>
		  </ul>
	</div>
</template>
<style lang="scss" scoped>
	.sidebar{float:right;width:300px;background:#d0d0d0;text-align:left;background-color:#fff;
		h2{padding:10px;background-color:#f6f6f6;border-radius:3px 3px 0 0;}
		ul{padding:10px;
			li{padding-bottom:10px;}
			img{width:40px;height:40px;}
		}
	}

</style>
<script>
	export default{
		data(){
			return {
				msg:''
			}
		},
		props:['msgInfo']
		

	}
</script>