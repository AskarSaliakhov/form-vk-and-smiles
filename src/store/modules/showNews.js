export default {
    state:{
        isNeedShowNews:true,
        count:0,
        nameButton:""
    },
    actions:{
        showNewsAll({commit}){
            commit("ShowNews")
        }
    },
    mutations:{
        ShowNews(state) {
            state.count++;
            if (state.count%2===0) {
                state.isNeedShowNews=false
                state.nameButton="Скрыть новости"
            }
            else {
                state.isNeedShowNews=true
                state.nameButton="Подробнее"
            }
        },
    },
    getters:{
        INFO_SHOW_NEWS(state) {
            return state.isNeedShowNews
        },
        NAME_BUTTON(state) {
            return state.nameButton
        }
    }
}
