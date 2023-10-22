<template>
    <div class="AddedWatchAllFilms">
        <p id="title" v-if="ADDED_TO_WATCH_FILMS.length">Фильмы,которые вы собираетесь посмотреть: {{ADDED_TO_WATCH_FILMS.length}}</p>
        <p v-else id="title">Добавьте фильмы, которые хотите посмотреть</p>
        <button @click="deleteAllFilms" id="btn--delete--all" v-if="ADDED_TO_WATCH_FILMS.length">Удалить все</button>
        <AddedWatchOneFilm
            v-for="(film,index) in ADDED_TO_WATCH_FILMS"
            :key="film.id"
            :data-added-to-watch-film="film"
            @deleteAddedFilmWatch="deleteFilm(index)"
        />
    </div>
</template>

<script>
import {mapGetters} from "vuex";
import AddedWatchOneFilm from "@/components/AddedFilmsWatch/AddedWatchOneFilm";


export default {
    name: "AddedWatchAllFilms",
    components: {AddedWatchOneFilm},
    methods:{
        deleteFilm(index) {
            this.ADDED_TO_WATCH_FILMS.splice(index,1)
        },
        deleteAllFilms() {
            this.ADDED_TO_WATCH_FILMS.splice(0,this.ADDED_TO_WATCH_FILMS.length)
        }
    },
    computed: {
        ...mapGetters(["ADDED_TO_WATCH_FILMS"])
    }
}
</script>

<style scoped>
#title{
    color: gray;
    text-align: center;
    font-size: 20px;
    font-family: Verdana, sans-serif;
}
#btn--delete--all{
    position: relative;
    bottom: 10px;
    left: 92%;
    width: 100px;
    background-color: #0f1015;
    border: none;
    color: white;
    transition: transform 0.5s;
}
#btn--delete--all:hover{
    color: goldenrod;
    transform: scale(1.1);
}
</style>
