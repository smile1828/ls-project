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
      console.log(to)
      console.log(from)
    }
    // $route: {
    //   handler (to, from) {
    //     console.log(to)
    //     console.log(from)
    //   },
    //   immediate: true
    // }
  },
  beforeRouteUpdate (to, from, next) {
    console.log(to)
    console.log(from)
    next()
  },
  beforeCreate () {
    console.log('beforeCreate触发')
  },
  created () {
    console.log('created触发')
  },
  beforeMount () {
    console.log('beforeMount触发')
  },
  mounted () {
    console.log('mounted触发')
  },
  beforeUpdate () {
    console.log('beforeUpdate触发')
  },
  updated () {
    console.log('updated触发')
  },
  beforeDestroy () {
    console.log('beforeDestroy触发')
  },
  destroyed () {
    console.log('destroyed触发')
  }
}
</script>

<style scoped>

</style>
