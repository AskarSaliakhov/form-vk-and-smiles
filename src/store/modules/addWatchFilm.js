export default {
    state: {
        addedFilms: []
    },
    actions: {
        AddFilmInWatch({commit}, film) {
            commit("addFilm", film)
        }
    },
    mutations: {
        addFilm(state, film) {
            if (state.addedFilms.length) {
                let isExistsAlready = false;
                state.addedFilms.map(function (addedFilm) {
                    if (film.id === addedFilm.id) {
                        isExistsAlready = true
                    }
                })
                if (!isExistsAlready) {
                    state.addedFilms.push(film)
                }
            } else {
                state.addedFilms.push(film)
            }
        }
    },
    getters: {
        ADDED_TO_WATCH_FILMS(state) {
            return state.addedFilms
        }
    }
}
