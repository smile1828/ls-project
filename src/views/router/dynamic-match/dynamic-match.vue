<template>
  <div class="ls-box">
    <div class="ls-h4">router-link跳转</div>
    <p class="ls-p">直接在地址中传递参数:</p>
    <p class="ls-p">to='/index/router/dynamicMatchExample/abc'</p>
    <router-link to='/index/router/dynamicMatchExample/abc' tag="div" class="ls-button">Go To abc</router-link>
    <router-link to='/index/router/dynamicMatchExample/efg' tag="div" class="ls-button">Go to efg</router-link>
    <p class="ls-p">通过params传递参数:</p>
    <p class="ls-p">:to={name:'dynamicMatchExample',params:{title:'ghi'}}</p>
    <router-link :to="{name:'dynamicMatchExample',params:{title:'hij'}}" tag="div" class="ls-button">Go to hij</router-link>
    <router-link :to="{name:'dynamicMatchExample',params:{title:'lmn'}}" tag="div" class="ls-button">Go to lmn</router-link>
    <el-divider></el-divider>
    <div class="ls-h4">$router.push跳转</div>
    <p class="ls-p">直接在地址中传递参数:</p>
    <p class="ls-p">path: '/index/router/dynamicMatchExample/opq'</p>
    <el-button plain @click="goPage('opq')">Go To opq</el-button>
    <el-button plain @click="goPage('rst')">Go To rst</el-button>
    <p class="ls-p">通过params传递参数:</p>
    <p class="ls-p">name: 'dynamicMatchExample', params: { title: val }</p>
    <el-button plain @click="goPageByParams('uvw')">Go To uvw</el-button>
    <el-button plain @click="goPageByParams('xyz')">Go To xyz</el-button>
    <div class="ls-h4 danger">说明：</div>
    <p class="ls-p danger">动态路由实现页面跳转时，如果是path则直接在地址后添加参数，如果是使用params传递参数，要配合name使用</p>
    <el-divider></el-divider>
    <div class="ls-h4">通配符</div>
    <router-link to='/index/router/wildcard-abcdefg' tag="div" class="ls-button">Go To wildcard-abcdefg</router-link>
    <router-link to='/index/router/wildcard-hijklmn' tag="div" class="ls-button">Go To wildcard-hijklmn</router-link>
    <el-divider></el-divider>
    <div class="ls-h4">404页面</div>
    <router-link to='/abc/efg' tag="div" class="ls-button">Go To /abc/efg</router-link>
    <el-divider></el-divider>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'dynamic-match',
  methods: {
    goPage (val) {
      this.$router.push({
        path: '/index/router/dynamicMatchExample/' + val
      })
    },
    goPageByParams (val) {
      this.$router.push({
        name: 'dynamicMatchExample',
        params: {
          title: val
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
