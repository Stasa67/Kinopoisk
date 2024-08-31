import Vue from 'vue'
import App from './App.vue'
import Unicon from 'vue-unicons/dist/vue-unicons-vue2.umd'
import { uniBookmarkSolid, uniUser, uniCaretRight, uniHome } from 'vue-unicons/dist/icons'

Unicon.add([uniBookmarkSolid, uniUser,uniCaretRight, uniHome])
Vue.use(Unicon)

new Vue({
  render: h => h(App)
}).$mount('#app')
