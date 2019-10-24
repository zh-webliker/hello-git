<template>
  <div id="app">
    <Top/>
    <Foot/>
    <router-view/>
  </div>
</template>

<script>

import Top from './components/header'
import Foot from './components/footer'

export default {
  name: 'App',
  components:{
    Top,
    Foot
  }
}
</script>

<style>

</style>
