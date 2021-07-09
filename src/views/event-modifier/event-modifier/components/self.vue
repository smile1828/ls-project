<template>
  <div>
    <div class="ls-h4">.self</div>
    <p class="ls-p">只当在 event.target 是当前元素自身时触发处理函数</p>
    <el-button plain @click="revertMessage">重置</el-button>
    <div class="ls-flex-wrap">
      <div>
        <p class="ls-p">没有使用修饰符,点击child:</p>
        <div class="grandPa example-box" @click="grandPaClick">
          <p class="ls-p">grandPa</p>
          <div class="parent example-box" @click="parentClick">
            <p class="ls-p">parent</p>
            <div class="child example-box" @click="childClick">
              <p class="ls-p">child</p>
            </div>
          </div>
        </div>
        <p class="ls-p" v-html="message"></p>
      </div>
      <div style="margin-left: 20px">
        <p class="ls-p">parent使用.self,点击child:</p>
        <div class="grandPa example-box" @click="grandPaModifierClick">
          <p class="ls-p">grandPa</p>
          <div class="parent example-box" @click.self="parentModifierClick">
            <p class="ls-p">parent</p>
            <div class="child example-box" @click="childModifierClick">
              <p class="ls-p">child</p>
            </div>
          </div>
        </div>
        <p class="ls-p" v-html="modifierMessage1"></p>
      </div>
    </div>
    <div class="ls-h4 danger">说明：</div>
    <p class="ls-p danger">parent使用.self修饰符之后，点击child时，不会在触发parent事件。parent的事件，只有点击了parent之后，才会被触发</p>
  </div>
</template>

<script>
export default {
  name: 'self',
  data () {
    return {
      message: '',
      modifierMessage1: ''
    }
  },
  methods: {
    grandPaClick () {
      this.message = this.message + '触发了grandPa事件' + '<br/>'
    },
    parentClick () {
      this.message = this.message + '触发了parent事件' + '<br/>'
    },
    childClick () {
      this.message = this.message + '触发了child事件' + '<br/>'
    },
    //
    grandPaModifierClick () {
      this.modifierMessage1 = this.modifierMessage1 + '触发了grandPa事件' + '<br/>'
    },
    parentModifierClick () {
      this.modifierMessage1 = this.modifierMessage1 + '触发了parent事件' + '<br/>'
    },
    childModifierClick () {
      this.modifierMessage1 = this.modifierMessage1 + '触发了child事件' + '<br/>'
    },
    revertMessage () {
      this.message = ''
      this.modifierMessage1 = ''
    }
  }
}
</script>

<style scoped>
.example-box{
  padding: 20px
}
.grandPa{
  width: 300px;
  background: lightcyan;
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
