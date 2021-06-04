<template>
  <div class="border">
    <h2>child</h2>
    <div @click="getParent">获取父节点数据</div>
    <p>{{parentTitle}}</p>
    <div @click="setData">设置数据</div>
  </div>
</template>

<script>
export default {
  name: 'child',
  data () {
    return {
      title: '我是子组件',
      parentTitle: ''
    }
  },
  methods: {
    sayBye () {
      console.log('bye')
    },
    getParent () {
      this.parentTitle = this.$parent.title
      this.$parent.sayHello()
    },
    setData () {
      this.$root.myData = '使用$root传递数据'
    }
  }
}
</script>

<style scoped>

</style>
