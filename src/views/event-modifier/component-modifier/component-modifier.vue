<template>
  <div>
    <div class="ls-h1">组件修饰符</div>
    <div class="ls-box">
      <Native></Native>
      <el-divider></el-divider>
      <Sync></Sync>
    </div>
  </div>
</template>

<script>
import Native from './components/native'
import Sync from './components/sync'
export default {
  name: 'component-modifier',
  components: {
    Native,
    Sync
  }
}
</script>

<style scoped>

</style>
