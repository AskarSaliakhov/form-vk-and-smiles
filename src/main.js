import Vue from 'vue'
import App from './App.vue'
import Multiselect from '@vueform/multiselect/dist/multiselect.vue2.js'
import Toast,{POSITION} from "vue-toastification";
import "vue-toastification/dist/index.css";
import DatePicker from 'v-calendar'


Vue.use(Multiselect,DatePicker)

Vue.use(Toast, {
    position: POSITION.BOTTOM_LEFT,
});

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
