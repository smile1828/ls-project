<template>
  <div>
    <div class="ls-h1">异步组件</div>
    <p class="ls-p">异步组件的实现方式</p>
    <div class="ls-box">
      <p class="ls-p">异步组件的实现方式</p>
      <div class="ls-h4">工厂函数</div>
      <el-button size="small" type="primary" plain @click="showChild1 = true">显示组件1</el-button>
      <div v-if="showChild1">
        <Child1></Child1>
      </div>
      <el-divider></el-divider>
      <div class="ls-h4">Promise</div>
      <el-button size="small" type="primary" plain @click="showChild2 = true">显示组件2</el-button>
      <div v-if="showChild2">
        <Child2></Child2>
      </div>
      <el-divider></el-divider>
      <div class="ls-h4">高阶组件</div>
      <el-button size="small" type="primary" plain @click="showChild3 = true">显示组件3</el-button>
      <div v-if="showChild3">
        <Child3></Child3>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'async-component',
  components: {
    Child1: function (resolve) {
      require(['./components/child1'], resolve)
    },
    Child2: () => import('./components/child2'),
    Child3: () => ({
      // 需要加载的组件 (应该是一个 `Promise` 对象)
      component: import('./components/child3.vue'),
      // 异步组件加载时使用的组件
      loading: {
        template: '<div>Loading</div>'
      },
      // 加载失败时使用的组件
      error: {
        template: '<div>error</div>'
      },
      // 展示加载时组件的延时时间。默认值是 200 (毫秒)
      delay: 200,
      // 如果提供了超时时间且组件加载也超时了，
      // 则使用加载失败时使用的组件。默认值是：`Infinity`
      timeout: 3000
    })
  },
  data () {
    return {
      showChild1: false,
      showChild2: false,
      showChild3: false
    }
  }
}
</script>

<style scoped>

</style>
