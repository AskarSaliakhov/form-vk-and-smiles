import Vue from "vue";
import Router from "vue-router"
import AllFilms from "@/components/Films/AllFilms";
import DefineteFilm from "@/components/Films/DefineteFilm";
import MainPage from "@/components/MainPage/MainPage";
import Registration from "@/components/Registration/Registration";
import AddedWatchAllFilms from "@/components/AddedFilmsWatch/AddedWatchAllFilms";
import ChooseFormat from "@/components/Game/ChooseFormat";
import KingOfMountain from "@/components/Game/KingOfMountain";
import PlayOff from "@/components/Game/PlayOff";
import OnePieceOfNews from "@/components/MainPage/News/OnePieceOfNews";

Vue.use(Router)

let router = new Router({
    mode:"history",
    base:process.env.BASE_URL,
    routes: [
        {
            path: '/AllFilms',
            name: 'allFilms',
            component: AllFilms,
            meta:{
                title:'Все фильмы'
            }
        },
        {
            path: '',
            name: 'MainPage',
            component: MainPage,
            meta:{
                title:'Фильмотека'
            }
        },
        {
            path: '/film/:id',
            name: 'film',
            component: DefineteFilm,
        },
        {
            path: '/news/:id',
            name: 'oneNews',
            component: OnePieceOfNews,
        },
        {
            path: "/registration",
            name: "registration",
            component: Registration,
            meta:{
                title:'Регистрация'
            }
        },
        {
            path: "/addedToWatchFilms",
            name: "addedToWatchFilms",
            component: AddedWatchAllFilms,
            meta:{
                title:'Добавленные фильмы'
            }
        },
        {
            path: "/chooseFormat",
            name: "chooseFormat",
            component: ChooseFormat,
            meta:{
                title:'Выберите формат'
            }
        },
        {
            path: '/voting/PlayOffs',
            name: "PlayOff",
            component: PlayOff,
            meta:{
                title:'Плей-офф'
            }
        },
        {
            path: '/voting/KingOfMountain',
            name: "KingOfMountain",
            component: KingOfMountain,
            meta:{
                title:'Царь горы'
            }
        }

    ]
})
router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
});

export default router
