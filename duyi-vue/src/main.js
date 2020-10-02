import Vue from 'vue';
import App from './App.vue';
import "./assets/reset.css";
import router from "./router"



Vue.config.productionTip = false


new Vue({
  //template: "<p>haha deng is a p</p>",
  render: h => h(App),
  router,
}).$mount('#app') 
