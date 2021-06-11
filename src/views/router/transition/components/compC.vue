<template>
  <transition name="fade">
    <div class="ls-p" style="height: 300px;background: lightgoldenrodyellow">compC</div>
  </transition>
</template>

<script>
export default {
  name: 'compC'
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
