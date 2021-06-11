<template>
  <div>
    <p class="ls-p">匹配到的内容：</p>
    <p class="ls-p">{{$route.params.pathMatch }}</p>
  </div>
</template>

<script>
export default {
  name: 'wildcard-example',
  beforeRouteUpdate (to, from, next) {
    console.log(to)
    console.log(from)
    next()
  }
}
</script>

<style scoped>

</style>
