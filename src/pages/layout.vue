<template>
    <div>
        <div class='left'>
            <div class='left-top'>
            <h2>全部产品</h2>
            <div v-for="(product,index) in productList" :key="index">
                <h3>{{product.category}}</h3>
                <ul class='listli'>
                    <li v-for='(item,index1) in product.list' :key="index1">
                        <a :herf='item.url'>{{item.name}}</a>
                        <span class='hot-tag' v-if="item.hot">HOT</span>
                    </li>
                </ul>
                <div class="hr"></div>
            </div>
            </div>
            <div class='left-buttom'>
                <h2>最新消息</h2>
                <div>
                    <ul class='listli'>
                        <li v-for='items in news' v-bind:key='items.value'>{{items}}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class='right'>
            <div class='right-top'>
                <swiper :options="swiperOption">
                    <div class="swiper-pagination"  slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
            <div class='right-buttom'>
                <div v-for="(single,index2) in propList" :key='index2' class='right-buttom-list'>
                    <h3>{{single.project}}</h3>
                    <p>{{single.text}}</p>
                    <router-link to='./detail'>
                        <button>立即购买</button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default{
    name:"layout",
    data(){
        return{
          swiperOption: {
              pagination: {
                el: '.swiper-pagination',
              },
              loop:true,
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
          },
           productList:[
               {
                   category:"手机应用类",
                   list:[
                       {
                           name:'91助手',
                           url:'https://cn.vuejs.org/v2/guide/list.html',
                           hot:false
                       },
                       {
                           name:'豌豆荚',
                           url:'https://cn.vuejs.org/v2/guide/list.html',
                           hot:false
                       },
                       {
                           name:'金山毒霸',
                           url:'https://cn.vuejs.org/v2/guide/list.html',
                           hot:true
                       },
                   ]
               },
               {
                   category:"pc产品",
                   list:[
                       {
                           name:'webstorm',
                           url:'https://cn.vuejs.org/v2/guide/list.html',
                           hot:true
                       },
                       {
                           name:'HBuiler',
                           url:'https://cn.vuejs.org/v2/guide/list.html',
                           hot:false
                       },
                       {
                           name:'Sublime Text 3',
                           url:'https://cn.vuejs.org/v2/guide/list.html',
                           hot:false
                       },
                       {
                           name:'Atom',
                           url:'https://cn.vuejs.org/v2/guide/list.html',
                           hot:false
                       },

                   ],
                   
               }
           ],
           news:[
               "生活达人",
               "环球网",
               "中国新闻网",
               "玄冥居士",
               "环球网",
               "玄冥居士",
               "人民网",
               "环球网",
               "中国新闻网",
           ],
           propList:[
               {
                   project:"开发产品",
                   text:'开发产品是一种开放产品'
               },
               {
                   project:"品牌宣传",
                   text:'品牌营销帮助你的产品'
               },
               {
                   project:"使命必答",
                   text:'使命必答提升速度'
               },
               {
                   project:"勇攀高峰",
                   text:'勇攀高峰事业巅峰'
               }
           ]
        }
    }
}

</script>

<style scoped>
.left-top {
    margin-left: 80px;
    margin-top: 20px;
    font-size: 20px;
}
.left-buttom {
    margin-left: 80px;
    margin-top: 20px;
    font-size: 20px;
}
.listli{
    margin-top: 0px;
    margin-left: 0px;
    list-style: none;  
    padding-left:0px;
}
.listli li{
    margin-top:10px;
}
.hot-tag{
    background-color: red;
    color:#fff;
    width:20px;
    height: 15px;
    font-size: 15px;
    margin-left:10px;
}
.right-buttom{
    width: 450px;
    height: 380px;
    display: flex;
    flex-flow:row wrap;
}
.right-buttom-list{
    width: 200px;
    height: 160px;
    margin-left:2 0px;
}
</style>

