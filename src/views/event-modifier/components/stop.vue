<template>
  <div>
    <div class="ls-h4">.stop</div>
    <p class="ls-p">阻止事件冒泡:</p>
    <div class="ls-flex-wrap">
      <div>
        <p class="ls-p">没有使用修饰符:</p>
        <div class="parent" @click="parentClick">
          <div class="child" @click="childClick"></div>
        </div>
        <el-button plain @click="revertMessage">重置</el-button>
        <p class="ls-p">{{message}}</p>
      </div>
      <div style="margin-left: 20px">
        <p class="ls-p">使用 .stop 修饰符:</p>
        <div class="parent" @click="parentModifierClick">
          <div class="child" @click.stop="childModifierClick"></div>
        </div>
        <el-button plain @click="revertModifierMessage">重置</el-button>
        <p class="ls-p">{{modifierMessage}}</p>
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
      this.message = this.message + '父元素触发了点击事件'
    },
    childClick () {
      this.message = this.message + '子元素触发了点击事件'
    },
    revertMessage () {
      this.message = ''
    },
    parentModifierClick () {
      this.modifierMessage = this.modifierMessage + '父元素触发了点击事件'
    },
    childModifierClick () {
      this.modifierMessage = this.modifierMessage + '子元素触发了点击事件'
    },
    revertModifierMessage () {
      this.modifierMessage = ''
    }
  }
}
</script>

<style scoped>
.parent{
  width: 120px;
  height: 80px;
  background: lightcyan;
}
.child{
  width: 80px;
  height: 60px;
  background: lightcoral;
}
</style>
