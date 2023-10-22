import Vue from 'vue'
import App from './App.vue'
import router from "@/router/router";
import store from "@/store/store";
import VideoEmbed from "v-video-embed/src";
import StarRating from 'vue-star-rating'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const options={
    closeOnClick: true,
    draggable: true
}
Vue.use(VideoEmbed,StarRating)
Vue.use(Toast,options)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
