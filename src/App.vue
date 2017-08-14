<template>
  <div id="app">
    <img src="./assets/logo.png">
  
    <router-link to='/'>欢迎页</router-link>
    <router-link to='/news'>新闻页</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted: function () {
    this.$http({
      url: '/Apiuser/get',
      method: 'get',
      data: {}
    }).then(function (res) {
      console.log(res)
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
