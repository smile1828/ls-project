<template>
  <div>
    <div class="ls-h4">.capture</div>
    <p class="ls-p">捕获事件</p>
    <el-button plain @click="revertMessage">重置</el-button>
    <div class="ls-flex-wrap">
      <div>
        <p class="ls-p">没有使用修饰符,点击grandChild:</p>
        <div class="grandPa example-box" @click="grandPaClick">
          <p class="ls-p">grandPa</p>
          <div class="parent example-box" @click="parentClick">
            <p class="ls-p">parent</p>
            <div class="child example-box" @click="childClick">
              <p class="ls-p">child</p>
              <div class="grandChild example-box" @click="grandChildClick">
                <p class="ls-p">grandChild</p>
              </div>
            </div>
          </div>
        </div>
        <p class="ls-p" v-html="message"></p>
      </div>
    </div>
    <div class="ls-flex-wrap">
      <div>
        <p class="ls-p">child使用.capture修饰符,点击grandChild:</p>
        <div class="grandPa example-box" @click="grandPaModifierClick">
          <p class="ls-p">grandPa</p>
          <div class="parent example-box" @click="parentModifierClick">
            <p class="ls-p">parent</p>
            <div class="child example-box" @click.capture="childModifierClick">
              <p class="ls-p">child</p>
              <div class="grandChild example-box" @click="grandChildModifierClick">
                <p class="ls-p">grandChild</p>
              </div>
            </div>
          </div>
        </div>
        <p class="ls-p" v-html="modifierMessage1"></p>
      </div>
      <div style="margin-left: 20px">
        <p class="ls-p">parent使用.capture修饰符,点击grandChild:</p>
        <div class="grandPa example-box" @click="grandPaModifier2Click">
          <p class="ls-p">grandPa</p>
          <div class="parent example-box" @click.capture="parentModifier2Click">
            <p class="ls-p">parent</p>
            <div class="child example-box" @click="childModifier2Click">
              <p class="ls-p">child</p>
              <div class="grandChild example-box" @click="grandChildModifier2Click">
                <p class="ls-p">grandChild</p>
              </div>
            </div>
          </div>
        </div>
        <p class="ls-p" v-html="modifierMessage2"></p>
      </div>
      <div style="margin-left: 20px">
        <p class="ls-p">grandPa使用.capture修饰符,点击grandChild:</p>
        <div class="grandPa example-box" @click.capture="grandPaModifier3Click">
          <p class="ls-p">grandPa</p>
          <div class="parent example-box" @click="parentModifier3Click">
            <p class="ls-p">parent</p>
            <div class="child example-box" @click="childModifier3Click">
              <p class="ls-p">child</p>
              <div class="grandChild example-box" @click="grandChildModifier3Click">
                <p class="ls-p">grandChild</p>
              </div>
            </div>
          </div>
        </div>
        <p class="ls-p" v-html="modifierMessage3"></p>
      </div>
    </div>
    <div class="ls-flex-wrap">
      <div>
        <p class="ls-p">child和parent使用.capture修饰符,点击grandChild:</p>
        <div class="grandPa example-box" @click="grandPaModifier4Click">
          <p class="ls-p">grandPa</p>
          <div class="parent example-box" @click.capture="parentModifier4Click">
            <p class="ls-p">parent</p>
            <div class="child example-box" @click.capture="childModifier4Click">
              <p class="ls-p">child</p>
              <div class="grandChild example-box" @click="grandChildModifier4Click">
                <p class="ls-p">grandChild</p>
              </div>
            </div>
          </div>
        </div>
        <p class="ls-p" v-html="modifierMessage4"></p>
      </div>
      <div style="margin-left: 20px">
        <p class="ls-p">child和grandPa使用.capture修饰符,点击grandChild:</p>
        <div class="grandPa example-box" @click.capture="grandPaModifier5Click">
          <p class="ls-p">grandPa</p>
          <div class="parent example-box" @click="parentModifier5Click">
            <p class="ls-p">parent</p>
            <div class="child example-box" @click.capture="childModifier5Click">
              <p class="ls-p">child</p>
              <div class="grandChild example-box" @click="grandChildModifier5Click">
                <p class="ls-p">grandChild</p>
              </div>
            </div>
          </div>
        </div>
        <p class="ls-p" v-html="modifierMessage5"></p>
      </div>
      <div style="margin-left: 20px">
        <p class="ls-p">parent和grandPa使用.capture修饰符,点击grandChild:</p>
        <div class="grandPa example-box" @click.capture="grandPaModifier6Click">
          <p class="ls-p">grandPa</p>
          <div class="parent example-box" @click.capture="parentModifier6Click">
            <p class="ls-p">parent</p>
            <div class="child example-box" @click="childModifier6Click">
              <p class="ls-p">child</p>
              <div class="grandChild example-box" @click="grandChildModifier6Click">
                <p class="ls-p">grandChild</p>
              </div>
            </div>
          </div>
        </div>
        <p class="ls-p" v-html="modifierMessage6"></p>
      </div>
    </div>
    <div class="ls-flex-wrap">
      <div>
        <p class="ls-p">四个元素都使用.capture修饰符,点击grandChild:</p>
        <div class="grandPa example-box" @click.capture="grandPaModifier7Click">
          <p class="ls-p">grandPa</p>
          <div class="parent example-box" @click.capture="parentModifier7Click">
            <p class="ls-p">parent</p>
            <div class="child example-box" @click.capture="childModifier7Click">
              <p class="ls-p">child</p>
              <div class="grandChild example-box" @click.capture="grandChildModifier7Click">
                <p class="ls-p">grandChild</p>
              </div>
            </div>
          </div>
        </div>
        <p class="ls-p" v-html="modifierMessage7"></p>
      </div>
    </div>
    <div class="ls-h4 danger">说明：</div>
    <p class="ls-p danger">由此可以看到，捕获的事件会先执行，而且有多个捕获的时候，是由父到子的。</p>
  </div>
</template>

<script>
export default {
  name: 'capture',
  data () {
    return {
      message: '',
      modifierMessage1: '',
      modifierMessage2: '',
      modifierMessage3: '',
      modifierMessage4: '',
      modifierMessage5: '',
      modifierMessage6: '',
      modifierMessage7: ''
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
    grandChildClick () {
      this.message = this.message + '触发了grandChild事件' + '<br/>'
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
    grandChildModifierClick () {
      this.modifierMessage1 = this.modifierMessage1 + '触发了grandChild事件' + '<br/>'
    },
    //
    grandPaModifier2Click () {
      this.modifierMessage2 = this.modifierMessage2 + '触发了grandPa事件' + '<br/>'
    },
    parentModifier2Click () {
      this.modifierMessage2 = this.modifierMessage2 + '触发了parent事件' + '<br/>'
    },
    childModifier2Click () {
      this.modifierMessage2 = this.modifierMessage2 + '触发了child事件' + '<br/>'
    },
    grandChildModifier2Click () {
      this.modifierMessage2 = this.modifierMessage2 + '触发了grandChild事件' + '<br/>'
    },
    //
    grandPaModifier3Click () {
      this.modifierMessage3 = this.modifierMessage3 + '触发了grandPa事件' + '<br/>'
    },
    parentModifier3Click () {
      this.modifierMessage3 = this.modifierMessage3 + '触发了parent事件' + '<br/>'
    },
    childModifier3Click () {
      this.modifierMessage3 = this.modifierMessage3 + '触发了child事件' + '<br/>'
    },
    grandChildModifier3Click () {
      this.modifierMessage3 = this.modifierMessage3 + '触发了grandChild事件' + '<br/>'
    },
    //
    grandPaModifier4Click () {
      this.modifierMessage4 = this.modifierMessage4 + '触发了grandPa事件' + '<br/>'
    },
    parentModifier4Click () {
      this.modifierMessage4 = this.modifierMessage4 + '触发了parent事件' + '<br/>'
    },
    childModifier4Click () {
      this.modifierMessage4 = this.modifierMessage4 + '触发了child事件' + '<br/>'
    },
    grandChildModifier4Click () {
      this.modifierMessage4 = this.modifierMessage4 + '触发了grandChild事件' + '<br/>'
    },
    //
    grandPaModifier5Click () {
      this.modifierMessage5 = this.modifierMessage5 + '触发了grandPa事件' + '<br/>'
    },
    parentModifier5Click () {
      this.modifierMessage5 = this.modifierMessage5 + '触发了parent事件' + '<br/>'
    },
    childModifier5Click () {
      this.modifierMessage5 = this.modifierMessage5 + '触发了child事件' + '<br/>'
    },
    grandChildModifier5Click () {
      this.modifierMessage5 = this.modifierMessage5 + '触发了grandChild事件' + '<br/>'
    },
    //
    grandPaModifier6Click () {
      this.modifierMessage6 = this.modifierMessage6 + '触发了grandPa事件' + '<br/>'
    },
    parentModifier6Click () {
      this.modifierMessage6 = this.modifierMessage6 + '触发了parent事件' + '<br/>'
    },
    childModifier6Click () {
      this.modifierMessage6 = this.modifierMessage6 + '触发了child事件' + '<br/>'
    },
    grandChildModifier6Click () {
      this.modifierMessage6 = this.modifierMessage6 + '触发了grandChild事件' + '<br/>'
    },
    //
    grandPaModifier7Click () {
      this.modifierMessage7 = this.modifierMessage7 + '触发了grandPa事件' + '<br/>'
    },
    parentModifier7Click () {
      this.modifierMessage7 = this.modifierMessage7 + '触发了parent事件' + '<br/>'
    },
    childModifier7Click () {
      this.modifierMessage7 = this.modifierMessage7 + '触发了child事件' + '<br/>'
    },
    grandChildModifier7Click () {
      this.modifierMessage7 = this.modifierMessage7 + '触发了grandChild事件' + '<br/>'
    },
    revertMessage () {
      this.message = ''
      this.modifierMessage1 = ''
      this.modifierMessage2 = ''
      this.modifierMessage3 = ''
      this.modifierMessage4 = ''
      this.modifierMessage5 = ''
      this.modifierMessage6 = ''
      this.modifierMessage7 = ''
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
.grandChild{
  width: 150px;
  background: lightcoral;
}
</style>
