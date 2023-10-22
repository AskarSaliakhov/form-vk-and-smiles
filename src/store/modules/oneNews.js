export default {
    state: {
        oneNews:[]
    },
    actions: {
        async getOneNews({commit}, id) {
            const data = await fetch("https://askarsaliakhov.github.io/TEST_API_MOVIES/news.json")
            const dataResponse = await data.json()
            const onePieceOfNews = dataResponse.news[id]
            commit("setOneNewsData", onePieceOfNews)
        }
    },
    mutations: {
        setOneNewsData(state,onePieceOfNews) {
            state.oneNews=onePieceOfNews
        }
    },
    getters: {
        ONE_PIECE_NEWS(state) {
            return state.oneNews
        }
    }
}
