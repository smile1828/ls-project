<template>
  <div class="child example-box">
    <p class="ls-p">我是子组件1</p>
  </div>
</template>

<script>
export default {
  name: 'child1'
}
</script>

<style scoped>
.example-box{
  padding: 20px
}
.child{
  width: 200px;
  background: lightgreen;
}
</style>
