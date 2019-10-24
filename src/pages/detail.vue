<template>
  <div class='son'>
      <div class='son-left'>
          <ul>
             <li  v-for="(item,index3) in ergodicList" :key="index3" @mouseover="changeBgC(index3)" 
                 @mouseout="recoverBgC" :class="[indexFlag==index3?'bggreen':'']">
                 <router-link :to="{path:'/detail/'+item.tag}">{{item.title}}</router-link>
             </li>
              <!--<router-link :to="{path:'/details/'+item.tag}" tag='li' v-for="(item,index3) in ergodicList" 
              :key="index3" @mouseover="changeBgC(index3)" 
              @mouseout="recoverBgC" :class="[indexFlag==index3?'bggreen':'']">{{item.title}}
              </router-link>-->
          </ul>
      </div>
      <div class='son-right'>
          <router-view></router-view>
      </div>
  </div>
</template>

<script>

export default {
  name: 'detail',
  data(){
      return{
          indexFlag:-1,
          ergodicList:[
              {
                  title: "开发产品",
                  tag:'earth'
              },
              {
                  title: "品牌宣传",
                  tag:'loud'
              },
              {
                  title: "使命必答",
                  tag:'car'
              },
              {
                  title: "勇攀高峰",
                  tag:'hill'
              }
          ]
      }
  },
  methods:{
     changeBgC(i){
         this.indexFlag=i;
     },
     recoverBgC(){
         this.indexFlag=-1;
     }
  },
  beforeCreate(){
    console.log(this.indexFlag)
  }
}
</script>

<style scoped>
.bggreen{
    background-color: aquamarine;
   
}
.bggreen a{
     color:white !important;
}
.son{
    width:100%;
    height: 200px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
}
.son-left{
    width:20%;
    font-size: 25px;
}
.son-left ul{
    list-style: none;
    margin-top: 20px;
}
.son-left ul li{
    margin-top: 20px;
}
.son-left ul li a{
 color: black;
}
.son-right{
    width:65%;
    
}

</style>