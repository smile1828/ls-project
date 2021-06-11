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
    <div class="ls-h1">路由元信息</div>
    <meta-info></meta-info>
    <div class="ls-h1">过渡效果</div>
    <transition-comp></transition-comp>
    <div class="ls-h1">滚动行为</div>
    <scroll-comp></scroll-comp>
  </div>
</template>

<script>
import DynamicMatch from './dynamic-match/dynamic-match.vue'
import Program from './program/program.vue'
import NominateView from './nominate-view/nominate-view.vue'
import PassArguments from './pass-arguments/pass-arguments.vue'
import MetaInfo from './meta-info/meta-info'
import TransitionComp from './transition/transition-comp'
import ScrollComp from './scroll/scroll-comp.vue'
export default {
  name: 'router',
  components: {
    DynamicMatch,
    Program,
    NominateView,
    PassArguments,
    MetaInfo,
    TransitionComp,
    ScrollComp
  }
}
</script>

<style scoped>

</style>
