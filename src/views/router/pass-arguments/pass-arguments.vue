<template>
  <div class="ls-box">
    <router-link to='/index/router/passArgument-a/abcdefg' tag="div" class="ls-button">布尔模式</router-link>
    <router-link to='/index/router/passArgument-b' tag="div" class="ls-button">对象模式</router-link>
    <router-link :to="{name: 'passArgument-c', query: { title: '我是参数'}}" tag="div" class="ls-button">函数模式</router-link>
    <router-view name="passArgument"></router-view>
  </div>
</template>

<script>
export default {
  name: 'pass-arguments'
}
</script>

<style scoped>

</style>
