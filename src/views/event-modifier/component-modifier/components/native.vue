<template>
  <div>
    <div class="ls-h4">.native</div>
    <p class="ls-p">给组件绑定原生事件</p>
    <p class="ls-p">在父组件中，如果想要直接给子组件添加事件，需要使用.native修饰符。否则事件不起作用。</p>
    <el-button plain @click="revertMessage">重置</el-button>
    <div class="ls-flex-wrap">
      <div>
        <p class="ls-p">没有使用修饰符,点击child:</p>
        <div class="parent example-box">
          <p class="ls-p">parent</p>
          <childComp @click="compClick"></childComp>
        </div>
        <p class="ls-p" v-html="message"></p>
      </div>
      <div style="margin-left: 20px">
        <p class="ls-p">使用.native修饰符,点击child:</p>
        <div class="parent example-box">
          <p class="ls-p">parent</p>
          <childComp @click.native="compModifierClick"></childComp>
        </div>
        <p class="ls-p" v-html="modifierMessage"></p>
      </div>
    </div>
  </div>
</template>

<script>
import ChildComp from './childComp'
export default {
  name: 'native',
  components: {
    ChildComp
  },
  data () {
    return {
      message: '',
      modifierMessage: ''
    }
  },
  methods: {
    compClick () {
      this.message = this.message + '触发了子组件的点击事件' + '<br/>'
    },
    compModifierClick () {
      this.modifierMessage = this.modifierMessage + '触发了子组件的点击事件' + '<br/>'
    },
    revertMessage () {
      this.message = ''
      this.modifierMessage = ''
    }
  }
}
</script>

<style scoped>
.example-box{
  padding: 20px
}
.parent{
  width: 250px;
  background: lightgoldenrodyellow;
}
</style>
