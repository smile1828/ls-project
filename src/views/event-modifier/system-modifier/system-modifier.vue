<template>
  <div>
    <div class="ls-h1">系统修饰符</div>
    <div class="ls-box">
      <System></System>
      <el-divider></el-divider>
      <SystemAndKeyup></SystemAndKeyup>
      <el-divider></el-divider>
      <Exact></Exact>
      <el-divider></el-divider>
      <Mouse></Mouse>
    </div>
  </div>
</template>

<script>
import System from './components/system'
import SystemAndKeyup from './components/systemAndKeyup'
import Exact from './components/exact'
import Mouse from './components/mouse'
export default {
  name: 'system-modifier',
  components: {
    System,
    SystemAndKeyup,
    Exact,
    Mouse
  }
}
</script>

<style scoped>

</style>
