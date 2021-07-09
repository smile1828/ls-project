<template>
  <div>
    <div class="ls-h1">按键修饰符</div>
    <div class="ls-box">
      <div>
        <div class="ls-h4">.enter</div>
        <p class="ls-p">只有按 Enter（回车键）才会触发事件</p>
        <el-button size="small" plain @click="revertMessage">重置</el-button>
        <input v-model="value" @keyup.enter="submit" class="input">
        <p class="ls-p" v-html="message"></p>
      </div>
      <el-divider></el-divider>
      <div>
        <div class="ls-h4">其他修饰符</div>
        <p class="ls-p">KeyboardEvent.key 暴露的任意有效按键名都可以转换为 kebab-case 来作为修饰符</p>
        <p class="ls-p">例如： .page-up</p>
        <p class="ls-p">只有按 PgUp 才会触发事件</p>
        <el-button size="small" plain @click="revertMessage1">重置</el-button>
        <input v-model="value1" @keyup.page-up="submit1" class="input">
        <p class="ls-p" v-html="message1"></p>
      </div>
      <el-divider></el-divider>
      <div>
        <div class="ls-h4">按键修饰符别名</div>
        <p class="ls-p">键盘中每个键都有自己的 keyCode，但是比如 esc 键，在 IE9 和其他浏览器中的值不同。
          IE9 就是这么雨中不同，这时如果想要兼容，可以使用 vue 定义的别名</p>
        <p class="ls-p">例如： .delete</p>
        <p class="ls-p">只有按 Delete 和 Backspace 才会触发事件</p>
        <el-button size="small" plain @click="revertMessage2">重置</el-button>
        <input v-model="value2" @keyup.delete="submit2" class="input">
        <p class="ls-p" v-html="message2"></p>
        <p class="ls-p">vue中定义的别名：</p>
        <p class="ls-p">
          <span class="span">.enter</span>
          <span class="span">.tab</span>
          <span class="span">.delete</span>
          <span class="span">.esc</span>
          <span class="span">.space</span>
          <span class="span">.up</span>
          <span class="span">.down</span>
          <span class="span">.left</span>
          <span class="span">.right</span>
        </p>
      </div>
      <el-divider></el-divider>
      <div>
        <div class="ls-h4">自定义按键修饰符别名</div>
        <p class="ls-p">Vue.config.keyCodes 中可以全局配置按键修饰符别名</p>
        <p class="ls-p">例如，在 main.js 中配置如下</p>
        <p class="ls-p">Vue.config.keyCodes = { v: 86 }</p>
        <p class="ls-p">可以使用 .v 作为修饰符</p>
        <el-button size="small" plain @click="revertMessage3">重置</el-button>
        <input v-model="value3" @keyup.v="submit3" class="input">
        <p class="ls-p" v-html="message3"></p>
        <div class="ls-h4 danger">说明：</div>
        <p class="ls-p danger">在 Vue.config.keyCodes 中配置时，不支持驼峰，要使用中划线</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'keyup-modifier',
  data () {
    return {
      value: '',
      message: '',
      value1: '',
      message1: '',
      value2: '',
      message2: '',
      value3: '',
      message3: ''
    }
  },
  methods: {
    submit () {
      this.message = this.message + '按了 Enter' + '<br/>'
    },
    revertMessage () {
      this.message = ''
    },
    submit1 () {
      this.message1 = this.message1 + '按了 PgUp' + '<br/>'
    },
    revertMessage1 () {
      this.message1 = ''
    },
    submit2 () {
      this.message2 = this.message2 + '按了 删除键（Delete 或者 Backspace）' + '<br/>'
    },
    revertMessage2 () {
      this.message2 = ''
    },
    submit3 () {
      this.message3 = this.message3 + '按了 v 键' + '<br/>'
    },
    revertMessage3 () {
      this.message3 = ''
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
.span{
  padding: 5px 10px;
}
</style>
