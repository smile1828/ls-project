<template>
  <div>
    <div class="ls-h4">.stop</div>
    <p class="ls-p">阻止事件冒泡</p>
    <el-button plain @click="revertMessage">重置</el-button>
    <div class="ls-flex-wrap">
      <div>
        <p class="ls-p">没有使用修饰符,点击child:</p>
        <div class="parent example-box" @click="parentClick">
          <p class="ls-p">parent</p>
          <div class="child example-box" @click="childClick">
            <p class="ls-p">child</p>
          </div>
        </div>
        <p class="ls-p" v-html="message"></p>
      </div>
      <div style="margin-left: 20px">
        <p class="ls-p">child使用.stop，点击child:</p>
        <div class="parent example-box" @click="parentModifierClick">
          <p class="ls-p">parent</p>
          <div class="child example-box" @click.stop="childModifierClick">
            <p class="ls-p">child</p>
          </div>
        </div>
        <p class="ls-p" v-html="modifierMessage"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'event',
  data () {
    return {
      message: '',
      modifierMessage: ''
    }
  },
  methods: {
    parentClick () {
      this.message = this.message + 'parent触发了点击事件' + '<br/>'
    },
    childClick () {
      this.message = this.message + 'child触发了点击事件' + '<br/>'
    },
    revertMessage () {
      this.message = ''
      this.modifierMessage = ''
    },
    parentModifierClick () {
      this.modifierMessage = this.modifierMessage + 'parent触发了点击事件' + '<br/>'
    },
    childModifierClick () {
      this.modifierMessage = this.modifierMessage + 'child触发了点击事件' + '<br/>'
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
.child{
  width: 200px;
  background: lightgreen;
}
</style>
