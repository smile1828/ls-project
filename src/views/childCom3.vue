<template>
  <div class="border">
    <h2>childCom3</h2>
    <p @click="changeMsg">childCom3的$attrs: {{ $attrs }}</p>
  </div>
</template>
<script>
export default {
  name: 'childCom3',
  inheritAttrs: true,
  props: {
    coo: String,
    title: String
  },
  methods: {
    changeMsg () {
      this.$emit('msgChanged', '我是childCom3的数据')
    }
  }
}
</script>
