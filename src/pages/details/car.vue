<template>
  <div>
      <div class='assembly-top'>
        <h2>流量分析</h2>
        <p>
           至于我们为啥不能用a标签，这是因为用Vue做的都是单页应用
          （当你的项目准备打包时，运行npm run build时，就会生成
          dist文件夹，这里面只有静态资源和一个index.html页面），
          所以你写的标签是不起作用的，你必须使用vue-router来进行管理。
        </p>
      </div>

      <div class='assembly-middle'>
        <div>
          购买数量:
        </div>
        <div>
          <Counter :max='Counter.max' :min='Counter.min' @counter='getGoodInfo("counter",$event)'/>
        </div>

        <div>
          产品类型:
        </div>
        <div>
          <DownMenu :DownData='DownMenu' @downmenu='getGoodInfo("downmenu",$event)'/>
        </div>

        <div>
          有效时间:
        </div>
        <div>
          <Effective :times='showTime' @times="getGoodInfo('times',$event)"/>
        </div>

        <div>
          总价:
        </div>
        <div>
          {{getTotalPrice}}元
        </div>

        <div>
          
        </div>
        <div>
          <a class='button' href='#'>立即购买</a>
        </div>

      </div>

      <div class='assembly-bottom'>
        <h2>产品说明</h2>
        <p>
          hash（#）是URL 的锚点，代表的是网页中的一个位置，单单改变
          #后的部分，浏览器只会滚动到相应位置，不会重新加载网页，也
          就是说hash 出现在 URL 中，但不会被包含在 http 请求中，对
          后端完全没有影响，因此改变 hash 不会重新加载页面；
        </p>
        <h2>用户行为指标</h2>
        <p>
          vue-router是Vue.js官方的路由插件，它和vue.js是深度集成的，
          适合用于构建单页面应用。vue的单页面应用是基于路由和组件的，
          路由用于设定访问路径，并将路径和组件映射起来。。
        </p>
      </div>
  </div>
</template>

<script>

import Counter from  './components/Counter'
import DownMenu from  './components/DownMenu'
import Effective from  './components/Effective'

export default {
  name: 'car',
  data(){
      return{
        counter:1,
        downmenu:1,
        times:1,
        totalprice:0,
        Counter:{
          min:1,
          max:10
        },
        DownMenu:[
          {
            name:"初级版",
            value:1
          },
          {
            name:"中级版",
            value:2
          },
          {
            name:"高级版",
            value:3
          },
        ],
        showTime:[
                    {
                        title:'一个月',
                        value:1
                    },
                    {
                        title:'三个月',
                        value:3
                    },
                    {
                        title:'半年',
                        value:6
                    },
                    {
                        title:'一年',
                        value:12
                    },
        ]
      }
  },
  methods:{

    getGoodInfo(key,value){
      // console.log(key,value);
      // //this是当前组件
      // console.log(this)
      this[key]=value;
      var readyDate={
        'counter':this.counter,//5
        'downmenu':this.downmenu,//2
        'times':this.times //10
      };
      //console.log(readyDate)
        this.totalprice = readyDate.counter*5 + readyDate.downmenu*2
        + readyDate.times*10
    }

    // getCounterNum(data){
    //   console.log(data);
    // },
    // getDownMenu(data){
    //   console.log(data);
    // },
    // getEffectiveTime(data){
    //   console.log(data);
    // }
  },
  components:{
    Counter,
    DownMenu,
    Effective
  },
  computed:{
    getTotalPrice(){
      return this.counter*5 + this.downmenu*2
        + this.times*10
    }
  }

}
</script>
 <style scoped>
.assembly-middle{
  font-size: 15px;
  font-weight: bold;
}
.assembly-middle{
  margin-top:50px;
  margin-bottom: 80px;
}
.button{
  background-color: #4fc08d;
  color:#fff;
  display: inline-block;
  padding: 10px 20px;
  margin-top: 15px;
  cursor:pointer;
}
</style>