<template>
  <div>
    <p class="ls-p">路由参数：</p>
    <p class="ls-p">{{$route.params.title}}</p>
  </div>
</template>

<script>
export default {
  name: 'dynamic-match-example',
  watch: {
    '$route' (to, from) {
      // console.log(to)
      // console.log(from)
    }
  },
  beforeRouteUpdate (to, from, next) {
    console.log(to)
    console.log(from)
    next()
  }
}
</script>

<style scoped>

</style>
