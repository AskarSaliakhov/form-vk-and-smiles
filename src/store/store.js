import Vue from "vue"
import Vuex from "vuex"
import createPersistedState from "vuex-persistedstate";
import allFilms from "@/store/modules/allFilms";
import carouselFilms from "@/store/modules/carouselFilms";
import oneFilm from "@/store/modules/oneFilm";
import registration from "@/store/modules/registration";
import addWatchFilm from "@/store/modules/addWatchFilm";
import news from "@/store/modules/news";
import showNews from "@/store/modules/showNews";
import oneNews from "@/store/modules/oneNews";
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        allFilms,
        carouselFilms,
        oneFilm,
        registration,
        addWatchFilm,
        news,
        showNews,
        oneNews
    },
    plugins:[createPersistedState()]
})
