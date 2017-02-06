export default{
	Data(state,obj){
		fetch("https://cnodejs.org/api/v1/topics?tab="+obj.item+"&limit="+obj.limit+"&page="+obj.page, {
          method:"get"          
        }).then(function(res) {
          return res.text();
        }).then(function(text){
          state.datalist=JSON.parse(text).data;
          console.log(state.datalist)

        }).catch(function(e) {
          console.log("获取数据失败");
          //console.log("fetch fail", JSON.stringify(e));
        });
	}
}