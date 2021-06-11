<template>
  <div class="ls-box">
    <router-link to='/index/router/metaInfo' tag="div" class="ls-button">Go To metaInfo</router-link>
    <router-view name="metaInfo"></router-view>
  </div>
</template>

<script>
export default {
  name: 'meta-info'
}
</script>

<style scoped>

</style>
