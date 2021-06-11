<template>
  <transition name="slide">
    <div class="ls-p" style="height: 300px;background: lightblue">compD</div>
  </transition>
</template>

<script>
export default {
  name: 'compD'
}
</script>

<style scoped>
.slide-enter-active {
  transition: all .3s ease;
}
</style>
