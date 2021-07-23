<template>
  <div>
    <div class="ls-h1">watch使用</div>
    <div class="ls-box">
      <div>
        <div class="ls-h4">基本类型监听</div>
        <el-button size="small" plain @click="changeData">change</el-button>
      </div>
      <el-divider></el-divider>
      <div>
        <div class="ls-h4">数组监听</div>
        <el-button size="small" plain @click="changeData1">length变化</el-button>
        <el-button size="small" plain @click="changeData2">内容变化</el-button>
      </div>
      <div>
        <div class="ls-h4">对象监听</div>
        <el-button size="small" plain @click="changeData3">新加key</el-button>
        <el-button size="small" plain @click="changeData4">内容变化</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'watch',
  data () {
    return {
      name: '小黑',
      age: 300,
      isSpirit: true,
      list: [
        { id: '1', name: 'A' },
        { id: '2', name: 'B' },
        { id: '3', name: 'C' }
      ],
      object: {
        id: '001',
        name: '对象',
        info: {
          type: 'sub',
          name: '嵌入对象'
        }
      }
    }
  },
  watch: {
    name: function (newVal, oldVal) {
      console.log('name发生了变化：newVal:' + newVal + ',oldVal:' + oldVal)
    },
    // age (newVal, oldVal) {
    //   console.log('age发生了变化：newVal:' + newVal + ',oldVal:' + oldVal)
    // },
    age: {
      handler (newVal, oldVal) {
        console.log('age发生了变化：newVal:' + newVal + ',oldVal:' + oldVal)
      },
      sync: true
    },
    // isSpirit: function (newVal, oldVal) {
    //   console.log('isSpirit发生了变化：newVal:' + newVal + ',oldVal:' + oldVal)
    // },
    isSpirit: {
      handler (newVal, oldVal) {
        console.log('isSpirit发生了变化：newVal:' + newVal + ',oldVal:' + oldVal)
      },
      sync: true
    },
    // list: function (newVal, oldVal) {
    //   console.log('list发生了变化.')
    // }
    list: {
      handler (newVal, oldVal) {
        console.log('list发生了变化.')
      },
      deep: true
    },
    // object: function (newVal, oldVal) {
    //   console.log('object发生了变化.')
    // }
    object: {
      handler (newVal, oldVal) {
        console.log('object发生了变化.')
      },
      deep: true
    },
    $route: {
      handler (to, from) {
        console.log(to)
        console.log(from)
      }
    }
  },
  methods: {
    changeData () {
      this.age = 10
      this.isSpirit = false
      this.name = '小白'
    },
    changeData1 () {
      this.list.push({ id: '4', name: 'D' })
    },
    changeData2 () {
      this.list[0].name = 'Z'
    },
    changeData3 () {
      this.$set(this.object, 'type', 'out')
    },
    changeData4 () {
      this.$set(this.object, 'name', 'haha')
    }
  }
}
</script>

<style scoped>

</style>
