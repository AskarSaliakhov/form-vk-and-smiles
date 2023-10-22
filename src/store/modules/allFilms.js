export default {
    state: {
        films: [],
    },
    actions: {
        async getFilms({commit}) {
            const data = await fetch("https://askarsaliakhov.github.io/TEST_API_MOVIES/films_api.json");
            const dataResponse = await data.json();
            const films=dataResponse.data
            commit("setData", films)
        },
    },
    mutations: {
        setData(state, films) {
            state.films = films
        },
    },
    getters: {
        ALL_FILMS(state) {
            return state.films
        },
    }
}
