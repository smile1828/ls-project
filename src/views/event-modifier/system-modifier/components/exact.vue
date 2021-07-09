<template>
  <div>
    <div class="ls-h4">.exact</div>
    <p class="ls-p">允许你控制由精确的系统修饰符组合触发的事件</p>
    <el-button plain @click="revertMessage">重置</el-button>
    <div class="ls-flex-wrap">
      <div>
        <p class="ls-p">使用.ctrl,按下Ctrl键，或者同时按下Shift或者Alt并且点击box:</p>
        <div class="box" @click.ctrl="ctrlClick">
          <p class="ls-p">box</p>
        </div>
        <p class="ls-p" v-html="message"></p>
      </div>
      <div style="margin-left: 20px">
        <p class="ls-p">使用.ctrl 和 .exact,按下Ctrl键，并且点击box:</p>
        <div class="box" @click.ctrl.exact="ctrlClick1">
          <p class="ls-p">box</p>
        </div>
        <p class="ls-p" v-html="message1"></p>
      </div>
      <div style="margin-left: 20px">
        <p class="ls-p">仅使用.exact,点击box:</p>
        <div class="box" @click.exact="exactClick">
          <p class="ls-p">box</p>
        </div>
        <p class="ls-p" v-html="message2"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'exact',
  data () {
    return {
      message: '',
      message1: '',
      message2: ''
    }
  },
  methods: {
    ctrlClick () {
      this.message = this.message + '按着Ctrl键，并点击了box' + '<br/>'
    },
    ctrlClick1 () {
      this.message1 = this.message1 + '只按着Ctrl键，并点击了box' + '<br/>'
    },
    exactClick () {
      this.message2 = this.message2 + '没有任何系统修饰符被按下，并点击了box' + '<br/>'
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
</style>
