<template>
  <div class="child example-box">
    <p class="ls-p">child</p>
    <p class="ls-p">{{ title }}</p>
    <el-button size="small" plain @click="changeTitle">修改传入的prop</el-button>
  </div>
</template>

<script>
export default {
  name: 'childComp1',
  props: ['title'],
  methods: {
    changeTitle () {
      this.title = '我是子组件修改的prop'
    }
  }
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
