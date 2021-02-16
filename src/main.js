// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  created(){
    const uuid = '8f138c3f-2a4e-454e-9dcf-8ea2379b5549';
    // const api = 'https://postman-echo.com/get/?menu=1';
    var api = `https://course-ec-api.hexschool.io/api/${uuid}/ec/products`;
    axios.get(api).then( response => {
      console.log(response)
    })
  }
})
