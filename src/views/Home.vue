<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h2>王者峡谷</h2>
    <child-com1> </child-com1>
    <parent></parent>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ChildCom1 from '@/views/childCom1.vue'
import Parent from '@/views/parent.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    ChildCom1,
    Parent
  }
}
</script>
<style>
.border{
  border: 2px solid red;
  padding: 10px;
}
</style>
