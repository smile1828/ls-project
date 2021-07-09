<template>
  <div>
    <div class="ls-h1">事件修饰符</div>
    <div class="ls-box">
      <Stop />
      <el-divider></el-divider>
      <Capture></Capture>
      <el-divider></el-divider>
      <Self></Self>
      <el-divider></el-divider>
      <Once></Once>
      <el-divider></el-divider>
      <prevent />
      <el-divider></el-divider>
      <Passive></Passive>
    </div>
  </div>
</template>

<script>
import Stop from './components/stop'
import Prevent from './components/prevent'
import Capture from './components/capture'
import Self from './components/self'
import Once from './components/once'
import Passive from './components/passive'
export default {
  name: 'event-modifier',
  components: {
    Stop,
    Prevent,
    Capture,
    Self,
    Once,
    Passive
  }
}
</script>

<style scoped>

</style>
