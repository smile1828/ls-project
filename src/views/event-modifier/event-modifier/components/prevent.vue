<template>
  <div>
    <div class="ls-h4">.prevent</div>
    <p class="ls-p">阻止按钮原本的行为:</p>
    <p class="ls-p">提交表单中，按钮默认会有刷新页面的行为</p>
    <div class="ls-flex-wrap">
      <div>
        <p class="ls-p">没有使用修饰符:</p>
        <form action="submit">
          <button type="submit" @click="submit">我是表单中的提交按钮</button>
        </form>
        <div class="ls-p">{{message}}</div>
      </div>
      <div style="margin-left: 20px">
        <p class="ls-p">使用 .prevent 修饰符:</p>
        <form action="submit">
          <button type="submit" @click.prevent="modifierSubmit">我是表单中的提交按钮</button>
        </form>
        <div class="ls-p">{{modifierMessage}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'prevent',
  data () {
    return {
      message: '',
      modifierMessage: ''
    }
  },
  methods: {
    submit () {
      this.message = this.message + '触发了提交按钮'
    },
    modifierSubmit () {
      this.modifierMessage = this.modifierMessage + '触发了提交按钮'
    }
  }
}
</script>

<style scoped>

</style>
