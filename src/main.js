import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// 页面的title更换
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')