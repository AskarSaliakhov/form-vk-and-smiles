export default {
    state: {
        oneFilm: {
            actors:"",
            rolesDuplicated:"",
            relatedFilms:[],
            facts:[],
            reviews:[]
        }
    },
    actions: {
        async getFilm({commit}, id) {
            const data = await fetch("https://askarsaliakhov.github.io/TEST_API_MOVIES/films_api.json");
            const dataResponse = await data.json();
            const film = dataResponse.data[id]
            commit("setOneFilmData", film)
        },
    },
    mutations: {
        setOneFilmData(state, film) {
            state.oneFilm =film
        },
    },
    getters: {
        ONE_FILM(state) {
            return state.oneFilm;
        },
    }
}
