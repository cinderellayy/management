// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ant from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import '@/assets/css/reset.css'
import '@/assets/css/style.css'

Vue.use(ant)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
