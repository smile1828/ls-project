<template>
  <div>
    <div class="ls-h4">鼠标修饰符</div>
    <div class="ls-h4">
      <span class="span">.left</span>
      <span class="span">.right</span>
      <span class="span">.middle</span>
    </div>
    <p class="ls-p">允许你控制由精确的系统修饰符组合触发的事件</p>
    <el-button plain @click="revertMessage">重置</el-button>
    <div class="ls-flex-wrap">
      <div>
        <p class="ls-p">使用.left,使用鼠标左键点击box:</p>
        <div class="box" @click.left="leftClick">
          <p class="ls-p">box</p>
        </div>
        <p class="ls-p" v-html="message"></p>
      </div>
      <div style="margin-left: 20px">
        <p class="ls-p">使用.right，使用鼠标右键点击box:</p>
        <div class="box" @click.right="rightClick">
          <p class="ls-p">box</p>
        </div>
        <p class="ls-p" v-html="message1"></p>
      </div>
      <div style="margin-left: 20px">
        <p class="ls-p">仅使用.middle,使用中键点击box:</p>
        <div class="box" @click.middle="middleClick">
          <p class="ls-p">box</p>
        </div>
        <p class="ls-p" v-html="message2"></p>
      </div>
    </div>
    <div class="ls-h4 danger">说明：</div>
    <p class="ls-p danger">鼠标滚轴，是中键，也可以点击。</p>
  </div>
</template>

<script>
export default {
  name: 'mouse',
  data () {
    return {
      message: '',
      message1: '',
      message2: ''
    }
  },
  methods: {
    leftClick () {
      this.message = this.message + '使用鼠标左键点击了box' + '<br/>'
    },
    rightClick () {
      this.message1 = this.message1 + '使用鼠标右键点击了box' + '<br/>'
    },
    middleClick () {
      this.message2 = this.message2 + '使用鼠标中键点击了box' + '<br/>'
    },
    revertMessage () {
      this.message = ''
      this.message1 = ''
      this.message2 = ''
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
