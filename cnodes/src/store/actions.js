export default {
	createData(context,obj){
		/*this.$http.get('https://cnodejs.org/api/v1/topics').then(function(response){
   	   	  	this.state.dataList=response.body.data;
   	   	  	console.log(this.state.dataList);
   	    })*/
		context.commit('Data',obj)
	}
}