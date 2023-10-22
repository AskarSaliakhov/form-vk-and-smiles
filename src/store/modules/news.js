export default {
    state: {
        news: []
    },
    actions: {
        async getNews({commit}) {
            const data = await fetch("https://askarsaliakhov.github.io/TEST_API_MOVIES/news.json")
            const dataResponse = await data.json()
            const dataNews = dataResponse.news
            commit("setNews", dataNews)
        }
    },
    mutations: {
        setNews(state, dataNews) {
            state.news = dataNews
        }
    },
    getters: {
        ALL_NEWS(state) {
            return state.news
        }
    }
}
