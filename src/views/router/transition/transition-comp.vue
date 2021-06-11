<template>
  <div class="ls-box">
    <div class="ls-h4">所有的切换拥有相同的效果</div>
    <router-link to='/index/router/transition-a' tag="div" class="ls-button">Go To a</router-link>
    <router-link to='/index/router/transition-b' tag="div" class="ls-button">Go To b</router-link>
    <transition name="fade">
      <router-view name="transitionAll"></router-view>
    </transition>
    <el-divider></el-divider>
    <div class="ls-h4">每个组件有自己的效果</div>
    <router-link to='/index/router/transition-c' tag="div" class="ls-button">Go To c</router-link>
    <router-link to='/index/router/transition-d' tag="div" class="ls-button">Go To d</router-link>
    <router-view name="transitionDiff"></router-view>
  </div>
</template>

<script>
export default {
  name: 'transition-comp'
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
