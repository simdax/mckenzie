// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Chartkick from 'chartkick'
import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'
import Tooltip from 'v-tooltip'

Vue.use(Tooltip)
Vue.use(VueChartkick, { Chartkick })


// import * as nano from 'nano'
// var users = require('nano')('http://localhost:5984/mckenzie_users');
// users.list((er, body) => {
//     body.rows.forEach(item => {
// 	users.get(item._id, (er, body) => {
// 	    console.log(body)
// 	})
//     })
// })

Vue.use(Vuetify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
