import Vue from 'vue'
import router from './router/router.js'
import store from './store/store.js'
import vuetify from './plugins/vuetify';
import '@/assets/css/support.css'
import '@/assets/css/main.scss'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
	router,
	store,
	vuetify,
	render: h => h(App)
}).$mount('#app')
