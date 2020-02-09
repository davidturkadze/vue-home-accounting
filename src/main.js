import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import Paginate from 'vuejs-paginate'
import './registerServiceWorker'
import router from './router'
import store from './store'
import messagePlugin from '@/utils/message.plugin'
import Loader from '@/components/app/Loader'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import toolTipDirective from '@/directives/tooltip.directive'
import localifeFilter from '@/filters/localize.filter'
import VueMeta from 'vue-meta'

//imports without any object (name) must be imported at the end of the import list
import 'materialize-css'
import 'materialize-css/dist/js/materialize.min.js'

//import firebase modules
import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/database'

Vue.use(Vuelidate)
//Toast plugin registration
Vue.use(messagePlugin)
Vue.use(VueMeta)
//register filter globally
Vue.filter('date', dateFilter)
Vue.filter('localize', localifeFilter)
Vue.filter('currency', currencyFilter)
Vue.directive('tooltip', toolTipDirective)
//register component globally
Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyAPBU5aZaTIKF_XgcsR8BEd9_PQ_Dwk8T4",
  authDomain: "vue-8c687.firebaseapp.com",
  databaseURL: "https://vue-8c687.firebaseio.com",
  projectId: "vue-8c687",
  storageBucket: "vue-8c687.appspot.com",
  messagingSenderId: "258530932605",
  appId: "1:258530932605:web:be14539ead1e86ade7fe14",
  measurementId: "G-9X1V8GM9Y4"
})

let app

//automatic user authorization (if true initialize Vue)
firebase.auth().onAuthStateChanged(() => {
  if(!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})


