import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// 完全引入 elementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入公共样式
import './assets/stylus/index.styl'

Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.config.keyCodes = {
  v: 86
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
