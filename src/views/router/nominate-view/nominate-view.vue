<template>
  <div class="ls-box">
    <router-link to='/index/router/nominateView' tag="div" class="ls-button">Go To nominateView</router-link>
    <router-view name="a"></router-view>
    <router-view name="b"></router-view>
    <router-view name="c"></router-view>
  </div>
</template>

<script>
export default {
  name: 'nominate-view'
}
</script>

<style scoped>

</style>
