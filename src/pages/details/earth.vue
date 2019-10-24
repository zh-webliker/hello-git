<template>
  <div>
      <div class='assembly-top'>
        <h2>数据分析</h2>
        <p>
          由于hash模式会在url中自带#，如果不想要很丑的 hash，我们可以用路由
          的 history 模式，只需要在配置路由规则时，加入"mode: 'history'",
          这种模式充分利用了html5 history interface 中新增的 pushState() 
          和 replaceState() 方法。
        </p>
      </div>

      <div class='assembly-middle'>
        
      </div>
      
      <div class='assembly-bottom'>
        <h2>产品说明</h2>
        <p>
          这是继去年9月发布《关于中美经贸摩擦的事实与中方立场》白皮书后，
          中方再度就中美经贸问题发表白皮书。此次白皮书全文约8300字，除前
          言和结束语外，共包括三部分，分别是美国挑起对华经贸摩擦损害两国和
          全球利益，美国在中美经贸磋商中出尔反尔、不讲诚信，中国始终坚持平等
          、互利、诚信的磋商立场
        </p>
        <h2>用户行为指标</h2>
        <p>
          白皮书说，中美经贸关系是两国关系的“压舱石”和“推进器”，事关两国
          人民根本利益，事关世界繁荣与稳定。
        </p>
      </div>
  </div>
</template>

<script>


export default {
  name: 'earth',
  data(){
      return{
      }
  },
  methods:{
  },
}
</script>
<style scoped></style>