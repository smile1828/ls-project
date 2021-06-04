<template>
  <el-container style="width: 100%;height: 100%">
    <el-header height="50px">
    </el-header>
    <el-container direction="horizontal">
      <el-aside><aside-menu></aside-menu></el-aside>
      <el-main></el-main>
    </el-container>
  </el-container>
</template>

<script>
import AsideMenu from '@components/layout/aside-menu.vue'
export default {
  name: 'index',
  components: { AsideMenu }
}
</script>

<style scoped>

</style>
