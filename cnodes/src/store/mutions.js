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
	}/*,
  detailList(state,id){
      fetch("https://cnodejs.org/api/v1/topic/"+id+"", {
          method:"get"          
        }).then(function(res) {
          return res.text();
        }).then(function(text){
          var data=JSON.parse(text).data;
          console.log(data.replies);
          state.detailTheme={
              content: data.content,
              title: data.title,
              last_reply_at: countDate(data.last_reply_at),
              good: false,
              top: false,
              reply_count: data.reply_count,
              visit_count: data.visit_count,
              create_at: countDate(data.create_at),
              loginname: data.author.loginname,
              replies:data.replies
              //avatar_url: data.author.avatar_url,
             // replies: replyArry,
              //status: getStatus(data.good, data.top)
          }
          //console.log(state.detailTheme)

        }).catch(function(e) {
          console.log("获取数据失败");
          //console.log("fetch fail", JSON.stringify(e));
      });
      function countDate(last_reply_at) {
          const nowYear = new Date().getFullYear(),
                nowDate = new Date().getTime(),
                timeDistance = (nowDate - new Date(last_reply_at).getTime()) / 60000,
                dayNum = timeDistance / 1400,
                replyYear = new Date(last_reply_at).getFullYear();
          let replyTime;
          if(timeDistance < 1){
            replyTime = '1 分钟前'
          }else if(1 <= timeDistance && timeDistance < 60){
            replyTime = Math.floor(timeDistance) + ' 分钟前'
          }else if (timeDistance < 1440) {
            replyTime = Math.floor(timeDistance/60) + ' 小时前'
          }else if (dayNum < 31){
            replyTime = Math.floor(dayNum) + ' 天前'
          }else if ( 31 <= dayNum && dayNum <= 58 ) {
            replyTime = '1 个月前'
          }else if (dayNum <= 59) {
            if(nowYear % 4 === 0 && nowYear % 100 !== 0 || nowYear % 400 === 0){
              replyTime = '28 天前'
            }else {
              replyTime = '2 个月前'
            }
          }else if (dayNum <= 60) {
            replyTime = '2 个月前'
          }else if (dayNum <= 91) {
            replyTime = '3 个月前'
          }else if (dayNum <= 121) {
            replyTime = '4 个月前'
          }else if (dayNum <= 152) {
            replyTime = '5 个月前'
          }else if (dayNum <= 182) {
            replyTime = '6 个月前'
          }else if (dayNum <= 213) {
            replyTime = '7 个月前'
          }else if (dayNum <= 243) {
            replyTime = '8 个月前'
          }else if (dayNum <= 274) {
            replyTime = '9 个月前'
          }else if (dayNum <= 304) {
            replyTime = '10 个月前'
          }else if (dayNum <= 335) {
            replyTime = '11 个月前'
          }else if (dayNum <= 365) {
            if(nowYear % 4 === 0 && nowYear % 100 !== 0 || nowYear % 400 === 0){
              replyTime = '11 个月前'
            }else {
              replyTime = '1 年前'
            }
          }else if(dayNum > 365) {
            replyTime = (nowYear - replyYear) + ' 年前'
          }
          return replyTime
        }
  }*/
}