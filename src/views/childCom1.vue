<template>
  <div class="border">
    <h2>childCom1</h2>
    <child-com2 title="前端工匠" :aoo="aoo" :boo="boo" :coo="coo"
                :style="{background: '#f2f2f2'}" class="box"
                @msgChanged="updateMsg"></child-com2>
    <p>{{msg}}</p>
  </div>
</template>

<script>
import ChildCom2 from '@/views/childCom2.vue'
export default {
  name: 'childCom1',
  components: { ChildCom2 },
  data () {
    return {
      aoo: 'Html',
      boo: 'CSS',
      coo: 'Javascript',
      msg: ''
    }
  },
  methods: {
    updateMsg (msg) {
      this.msg = msg
    }
  }
}
</script>

<style scoped>

</style>
