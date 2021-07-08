<template>
  <div>
    <div class="ls-h1">事件修饰符</div>
    <Stop />
    <prevent />
  </div>
</template>

<script>
import Stop from './components/stop'
import Prevent from './components/prevent'
export default {
  name: 'event-modifier',
  components: {
    Stop,
    Prevent
  }
}
</script>

<style scoped>

</style>
