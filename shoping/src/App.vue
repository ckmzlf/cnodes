
<template>
    <div>
           <div class="from">
            <ul>
                <li v-for="(item,index) in listItem">
                    <span :class="['nav',{cur:item.isChecked}]" @click="toggleChoice(index)"></span>
                    <span>华为荣耀V8系列</span>
                    <span class="cost">￥{{item.price}}</span>
                    <div class="num">
                        <span>数量:</span>
                        <span @click="changePrice(index,-1)">-</span>
                        <input type="text" v-model="item.num"/>
                        <span @click="changePrice(index,1)">+</span>
                        <span>单个个商品总的价格：{{item.singlePrice}}</span>
                    </div>
                </li>
            </ul>

            <div><span :class="['choice',{hasChoice:isAllChoice}]" @click="AlltoggleChoice()"></span>商品总的价格：{{totalPrice}}</div>
        </div>
    </div>
</template>
<style scoped>
.num input{width:40px;border:1px solid #d0d0d0;text-align:center;}
.nav{background-color: #fff;border:1px solid #ccc;display:inline-block;width:10px;height:10px;border-radius:5px;}
.cur{background-color:red;}

.choice{border:1px solid #ccc;display:inline-block;width:10px;height:10px;border-radius:50%;background-color: #fff;}
.hasChoice{background-color:red;}
</style>
<script>
    import vHeader from 'vuex'
    export default {
         data(){
            return {
                user: {
                    name:"jhon"
                },
                listItem:[{
                    price:199,
                    num:1,
                    singlePrice:199,
                    isChecked:false
                },
                {
                    price:99,
                    num:1,
                    singlePrice:99,
                    isChecked:false
                }
                ],
                isAllChoice:false,
                totalPrice:0
                
            }
        },
        methods:{
            changePrice:function(item,type){//item是第几个列表,type代表加还是减
                if(type==1){
                    this.listItem[item].num++;
                    this.count();
                }else{
                    if(this.listItem[item].num>1){
                        this.listItem[item].num--;
                        this.count();
                    }
                }
            },
            count:function(){/*总的价格*/
                this.totalPrice=0;
                var _that=this;
                this.listItem.forEach(function(li,i){
                    _that.listItem[i].singlePrice=_that.listItem[i].num*_that.listItem[i].price;
                    if(li.isChecked){
                        _that.totalPrice+=li.singlePrice;
                    }
                });
            },
            toggleChoice:function(index){/*单个的选择*/
                this.listItem[index].isChecked=!this.listItem[index].isChecked;
                this.count();
                var flag=false;
                this.listItem.forEach(function(li){
                    if(li.isChecked==false){
                        flag=true;
                    }
                });
                if(!flag){
                    this.isAllChoice=true;
                }else{
                    this.isAllChoice=false;
                }
            },
            AlltoggleChoice:function(){//全选方式
                if(this.isAllChoice){/*全部不选*/
                    this.listItem.forEach(function(li){
                        li.isChecked=false;
                    });
                    this.isAllChoice=false;
                    this.totalPrice=0;
                }else{/*全部选中*/
                    this.totalPrice=0;
                    var _that=this;
                    this.listItem.forEach(function(li,i){
                        li.isChecked=true;
                        _that.totalPrice+=li.singlePrice;
                    });
                    this.isAllChoice=true;
                }
            }
        }
    }
</script>