<template>
  <div class="border">
    <h2>childCom2</h2>
    <p>childCom2的$attrs: {{ $attrs }}</p>
    <child-com3 v-bind="$attrs" v-on="$listeners"></child-com3>
  </div>
</template>
<script>
const childCom3 = () => import('./childCom3.vue')
export default {
  name: 'childCom2',
  components: {
    childCom3
  },
  inheritAttrs: false,
  props: {
    aoo: String
  }
}
</script>
