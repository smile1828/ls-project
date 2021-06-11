<template>
  <div>
    <div class="ls-h1">动态路由匹配</div>
    <dynamic-match></dynamic-match>
    <div class="ls-h1">编程式导航</div>
    <program></program>
    <div class="ls-h1">命名视图</div>
    <nominate-view></nominate-view>
    <div class="ls-h1">路由组件传参</div>
    <pass-arguments></pass-arguments>
  </div>
</template>

<script>
import DynamicMatch from './dynamic-match/dynamic-match.vue'
import Program from './program/program.vue'
import NominateView from './nominate-view/nominate-view.vue'
import PassArguments from './pass-arguments/pass-arguments.vue'
export default {
  name: 'router',
  components: {
    DynamicMatch,
    Program,
    NominateView,
    PassArguments
  }
}
</script>

<style scoped>

</style>
