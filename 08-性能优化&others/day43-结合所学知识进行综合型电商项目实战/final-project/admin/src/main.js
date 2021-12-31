import Vue from 'vue'
import ElementUI from 'element-ui'
import router from './router/index'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(ElementUI, {
  size: 'small',
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
