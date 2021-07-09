<template>
  <div>
    <div class="ls-h4">系统修饰符与按键修饰符</div>
    <p class="ls-p danger">
      请注意修饰键与常规按键不同，在和 keyup 事件一起用时，事件触发时修饰键必须处于按下状态。
      换句话说，只有在按住 ctrl 的情况下释放其它按键，才能触发 keyup.ctrl。
      而单单释放 ctrl 也不会触发事件。
      如果你想要这样的行为，请为 ctrl 换用 keyCode：keyup.17。
    </p>
    <el-button size="small" plain @click="revertMessage">重置</el-button>
    <div class="ls-flex-wrap">
      <div style="width: 40%">
        <p class="ls-p">使用.ctrl，按下Ctrl键的同时，按其他的键</p>
        <input v-model="value" @keyup.ctrl="keyCtrl" class="input">
        <p class="ls-p" v-html="message"></p>
      </div>
      <div style="width: 40%;margin-left: 20px">
        <p class="ls-p">使用.17，只按下Ctrl键</p>
        <input v-model="value1" @keyup.17="keyCtrl1" class="input">
        <p class="ls-p" v-html="message1"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'systemAndKeyup',
  data () {
    return {
      value: '',
      message: '',
      value1: '',
      message1: ''
    }
  },
  methods: {
    keyCtrl () {
      this.message = this.message + '按了 Ctrl 键，并且同时了其他键' + '<br/>'
    },
    keyCtrl1 () {
      this.message1 = this.message1 + '只按了 Ctrl 键' + '<br/>'
    },
    revertMessage () {
      this.message = ''
      this.message1 = ''
    }
  }
}
</script>

<style scoped>
.input{
  width: 100%;
  padding: 10px;
  border: 1px solid #e4e4e4;
  margin: 10px 0;
  box-sizing: border-box;
}
</style>
