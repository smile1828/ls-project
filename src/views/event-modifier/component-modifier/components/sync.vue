<template>
  <div>
    <div class="ls-h4">.sync</div>
    <p class="ls-p">用于prop“双向绑定”</p>
    <p class="ls-p">prop数据为父组件传入子组件的值，子组件中不支持直接修改prop。
      如果想要修改需要把想要修改的值，传到父组件，在父组件中修改。.sync提供了简便的写法。</p>
    <el-button size="small" plain @click="revertTitle">重置</el-button>
    <div class="ls-flex-wrap">
      <div>
        <p class="ls-p">父组件传入title,子组件修改</p>
        <div class="parent example-box">
          <p class="ls-p">parent</p>
          <childComp1 :title="title"></childComp1>
        </div>
      </div>
      <div style="margin-left: 20px">
        <p class="ls-p">使用.sync，子组件修改prop:</p>
        <div class="parent example-box">
          <p class="ls-p">parent</p>
          <childComp2 :title.sync="title"></childComp2>
        </div>
      </div>
    </div>
    <div class="ls-h4">.sync使用方法：</div>
    <p class="ls-p">父组件传值时：</p>
    <p class="ls-p">&lt;childComp2 :title.sync="title"&gt;&lt;/childComp2&gt;</p>
    <p class="ls-p">子组件修改值时：</p>
    <p class="ls-p">this.$emit('update:title', '我是子组件修改的prop')</p>
    <div class="ls-h4 danger">说明：</div>
    <p class="ls-p danger">父组件传入子组件的prop，在子组件中不支持直接修改。会报如下错误：</p>
    <p class="ls-p danger">Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value.</p>
    <p class="ls-p danger">翻译过来就是：避免直接改变属性，因为每当父组件重新渲染时，该值将被覆盖。相反，使用基于属性值的数据或计算属性。</p>
  </div>
</template>

<script>
import childComp1 from './childComp1'
import childComp2 from './childComp2'
export default {
  name: 'sync',
  components: { childComp1, childComp2 },
  data () {
    return {
      title: '我是父组件定义的title'
    }
  },
  methods: {
    revertTitle () {
      this.title = '我是父组件定义的title'
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
</style>
