<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo">
    <el-submenu :index="item.id" v-for="(item, index) in menuList" :key="index">
      <template slot="title">
        <span>{{item.label}}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item
          :index="menu.id"
          v-for="(menu) in item.list"
          :key="menu.id"
          @click="goPages(menu)">{{ menu.label }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
import menuList from './aside-menu-data.js'
export default {
  name: 'aside-menu',
  data () {
    return {
      menuList: menuList
    }
  },
  methods: {
    goPages (menu) {
      this.$router.push({
        path: menu.url
      })
    }
  }
}
</script>

<style scoped>

</style>
