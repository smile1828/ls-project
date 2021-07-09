<template>
  <div>
    <div class="ls-h4">.passive</div>
    <p class="ls-p">执行事件默认的行为，与 prevent 相反。</p>
    <p class="ls-p">
      浏览器监听事件，对于该事件，是否要阻止默认行为，浏览器无法提前知道。
      只有执行了监听事件时绑定的js函数后，才能知道，到底是否阻止。
      但即使绑定的监听函数是空函数，执行空函数也需要时间。
      这时，通过 .passive 修饰符，就是告诉浏览器，这里的默认行为，我不会阻止，你执行就好。
    </p>
    <p class="ls-h5">使用场景：</p>
    <p class="ls-p">
      在移动端，用户体验异常重要。
      移动端，对于 touchstart和touchmove 事件，有默认滚动的行为。
      如果可以提前告诉浏览器这里不会阻止默认行为，那在 touchstart和touchmove 刚开始出发时，就可以对滚动行为做响应。
      而不用等到函数执行的时候，在判断到底有没有阻止默认行为。
      这样，可以提高响应速度。移动端，可以避免出现卡顿。（对于touchstart和touchmove 已经开始了，得等一会，才会看到页面滚动）
    </p>
    <el-button plain @click="revertMessage">重置</el-button>
    <p class="ls-p">PC端，没有明显的现象~~~~~</p>
    <div class="ls-flex-wrap">
      <div>
        <p class="ls-p">没有使用修饰符:</p>
        <div class="parent" @scroll="scroll">
          <div class="child"></div>
          <p class="ls-p">到底了</p>
        </div>
        <p class="ls-p" v-html="message"></p>
      </div>
      <div style="margin-left: 20px">
        <p class="ls-p">使用 .passive 修饰符:</p>
        <div class="parent" @scroll.passive="scrollModifier">
          <div class="child"></div>
          <p class="ls-p">到底了</p>
        </div>
        <p class="ls-p" v-html="modifierMessage"></p>
      </div>
    </div>
    <div class="ls-h4 danger">说明：</div>
    <p class="ls-p danger">.passive 和 .prevent 不能同时使用。</p>
  </div>
</template>

<script>
export default {
  name: 'passive',
  data () {
    return {
      message: '',
      modifierMessage: ''
    }
  },
  methods: {
    scroll () {
      this.message = this.message + '触发了滚动事件,' + new Date().getTime() + '<br/>'
    },
    scrollModifier () {
      this.modifierMessage = this.modifierMessage + '触发了滚动事件,' + new Date().getTime() + '<br/>'
    },
    revertMessage () {
      this.message = ''
      this.modifierMessage = ''
    }
  }
}
</script>

<style scoped>
.parent{
  width: 200px;
  height: 200px;
  overflow: scroll;
  padding: 20px;
  background: lightgoldenrodyellow;
}
.child{
  width: 150px;
  height: 800px;
  background: lightgreen;
}

</style>
