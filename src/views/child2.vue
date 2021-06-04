<template>
  <div class="border">
    <h2>child2</h2>
    <div @click="getData">获取数据</div>
    <p>{{title}}</p>
  </div>
</template>

<script>
export default {
  name: 'child2',
  data () {
    return {
      title: '',
      type: 'css'
    }
  },
  methods: {
    getData () {
      console.log(this.$root.myData)
      this.title = this.$root.myData
    }
  }
}
</script>

<style scoped>

</style>
