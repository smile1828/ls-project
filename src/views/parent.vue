<template>
  <div class="border">
    <h2>parent</h2>
    <child></child>
    <child2 ref="child2" v-for="(item, index) in list" :key="index"></child2>
    <div @click="getChild">获取子节点数据</div>
    <p>{{childTitle}}</p>
  </div>
</template>

<script>
import Child from './child.vue'
import Child2 from './child2.vue'
export default {
  name: 'parent',
  components: { Child, Child2 },
  data () {
    return {
      title: '我是父组件',
      childTitle: '',
      list: ['a', 'b', 'c']
    }
  },
  methods: {
    sayHello () {
      console.log('hello')
    },
    getChild () {
      this.childTitle = this.$children[0].title
      this.$children[0].sayBye()
      // console.log(this.$refs.child2.type)
      console.log(this.$refs.child2)
    }
  }
}
</script>

<style scoped>

</style>
