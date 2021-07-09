<template>
  <div>
    <div class="ls-h4">
      <span class="span">.ctrl</span>
      <span class="span">.alt</span>
      <span class="span">.shift</span>
      <span class="span">.meta</span>
    </div>
    <el-button plain @click="revertMessage">重置</el-button>
    <div class="ls-flex-wrap">
      <div>
        <p class="ls-p">使用.ctrl,按下Ctrl键，并且点击box:</p>
        <div class="box" @click.ctrl="ctrlClick">
          <p class="ls-p">box</p>
        </div>
        <p class="ls-p" v-html="message"></p>
      </div>
      <div style="margin-left: 20px">
        <p class="ls-p">使用.alt,按下Alt键，并且点击box:</p>
        <div class="box" @click.alt="altClick">
          <p class="ls-p">box</p>
        </div>
        <p class="ls-p" v-html="message1"></p>
      </div>
      <div style="margin-left: 20px">
        <p class="ls-p">使用.shift,按下shift键，并且点击box:</p>
        <div class="box" @click.shift="shiftClick">
          <p class="ls-p">box</p>
        </div>
        <p class="ls-p" v-html="message2"></p>
      </div>
      <div style="margin-left: 20px">
        <p class="ls-p">使用.meta,按下meta键，并且点击box:</p>
        <div class="box" @click.meta="metaClick">
          <p class="ls-p">box</p>
        </div>
        <p class="ls-p" v-html="message3"></p>
      </div>
    </div>
    <div class="ls-h4 danger">说明：</div>
    <p class="ls-p danger">在 Mac 系统键盘上，meta 对应 command 键 (⌘)。在 Windows 系统键盘 meta 对应 Windows 徽标键 (⊞)。</p>
  </div>
</template>

<script>
export default {
  name: 'system',
  data () {
    return {
      message: '',
      message1: '',
      message2: '',
      message3: ''
    }
  },
  methods: {
    ctrlClick () {
      this.message = this.message + '按着Ctrl键，并点击了box' + '<br/>'
    },
    altClick () {
      this.message1 = this.message1 + '按着Alt键，并点击了box' + '<br/>'
    },
    shiftClick () {
      this.message2 = this.message2 + '按着Shift键，并点击了box' + '<br/>'
    },
    metaClick () {
      this.message3 = this.message3 + '按着Meta键，并点击了box' + '<br/>'
    },
    revertMessage () {
      this.message = ''
      this.message1 = ''
      this.message2 = ''
      this.message3 = ''
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
.span{
  padding-right: 20px;
  font-weight: bold;
}
</style>
