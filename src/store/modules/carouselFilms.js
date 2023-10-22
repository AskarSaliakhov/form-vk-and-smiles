export default {
    state:{
        carouselFilms:[]
    },
    actions:{
        async getCarouselFilms({commit}) {
            const data=await fetch("https://askarsaliakhov.github.io/TEST_API_MOVIES/carousel.json")
            const dataResponse=await data.json();
            const carouselFilms=dataResponse.data
            commit("setCarouselFilms",carouselFilms)
        }
    },
    mutations:{
        setCarouselFilms(state,carouselFilms) {
            state.carouselFilms=carouselFilms
        }
    },
    getters:{
        ALL_CAROUSEL_FILMS(state) {
            return state.carouselFilms
        }
    }
}
