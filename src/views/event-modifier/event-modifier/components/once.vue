<template>
  <div>
    <div class="ls-h4">.once</div>
    <p class="ls-p">点击事件将只会触发一次</p>
    <el-button plain @click="revertMessage">重置</el-button>
    <div class="ls-flex-wrap">
      <div>
        <p class="ls-p">没有使用修饰符,点击box:</p>
        <div class="box" @click="boxClick">
          <p class="ls-p">box</p>
        </div>
        <p class="ls-p" v-html="message"></p>
      </div>
      <div style="margin-left: 20px">
        <p class="ls-p">使用.once,点击box:</p>
        <div class="box" @click.once="boxModifierClick">
          <p class="ls-p">box</p>
        </div>
        <p class="ls-p" v-html="modifierMessage"></p>
      </div>
    </div>
    <div class="ls-h4 danger">说明：</div>
    <p class="ls-p danger">.once 修饰符还能被用到自定义的组件事件上。</p>
  </div>
</template>

<script>
export default {
  name: 'once',
  data () {
    return {
      message: '',
      modifierMessage: ''
    }
  },
  methods: {
    boxClick () {
      this.message = this.message + '触发了box事件' + '<br/>'
    },
    boxModifierClick () {
      this.modifierMessage = this.modifierMessage + '触发了box事件' + '<br/>'
    },
    revertMessage () {
      this.message = ''
      this.modifierMessage = ''
    }
  }
}
</script>

<style scoped>
.box{
  width: 200px;
  padding: 20px;
  background: lightgoldenrodyellow;
}
</style>
