<template>
  <div>
      <div class='assembly-top'>
        <h2>广告发布</h2>
        <p>
          vue-router是Vue.js官方的路由插件，它和vue.js是深度集成的，
          适合用于构建单页面应用。vue的单页面应用是基于路由和组件的，
          路由用于设定访问路径，并将路径和组件映射起来。
        </p>
      </div>

      <div class='assembly-middle'>
        
      </div>

      <div class='assembly-bottom'>
        <h2>产品说明</h2>
        <p>
          至于我们为啥不能用a标签，这是因为用Vue做的都是单页应用
          （当你的项目准备打包时，运行npm run build时，就会生成
          dist文件夹，这里面只有静态资源和一个index.html页面），
          所以你写的标签是不起作用的，你必须使用vue-router来进行管理。
        </p>
        <h2>用户行为指标</h2>
        <p>
          SPA(single page application):单一页面应用程序，只有
          一个完整的页面；它在加载页面时，不会加载整个页面，而是
          只更新某个指定的容器中内容。
        </p>
      </div>
  </div>
</template>

<script>

export default {
  name: 'hill',
  data(){
      return{
      }
  },
  methods:{
  },
}
</script>
<style scoped></style>