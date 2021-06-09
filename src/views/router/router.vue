<template>
  <div>
    <div class="ls-h1">动态路由匹配</div>
    <dynamic-match></dynamic-match>
  </div>
</template>

<script>
import DynamicMatch from './dynamic-match/dynamic-match.vue'
export default {
  name: 'router',
  components: {
    DynamicMatch
  }
}
</script>

<style scoped>

</style>
