<template>
  <div class="ls-box">
    <el-button plain @click="goBack">Go back 100</el-button>
  </div>
</template>

<script>
export default {
  name: 'program',
  methods: {
    goBack () {
      try {
        this.$router.go(-100)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped>

</style>
