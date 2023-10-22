<template>
    <div class="OneFilm">
        <img :src="filmData.Poster" :alt="filmData.title" @click="redirectToFilm(filmData.id)">
        <div class="data__film">
            <p id="title__film">{{ filmData.title }}</p>
            <p id="title__country">Страны: {{ filmData.country }}</p>
            <p id="title__time">Продолжительность: {{ filmData.time }} </p>
            <p id="title__point">Рейтинг: {{ filmData.point }} </p>
        </div>
    </div>
</template>

<script>

import {mapActions} from "vuex";

export default {
    name: "OneFilm",
    methods: {
        ...mapActions(["getFilm"]),
        redirectToFilm() {
            this.getFilm(this.filmData.id - 1)
            this.$router.push({name: 'film', params: {id: this.filmData.id}})
        }
    },
    props: {
        filmData: {
            type: Object,
        },
        dataAddedToWatchFilm: {
            type: Object,
            default: () => {
            }
        }
    },
}
</script>

<style scoped>
.OneFilm {
    display: flex;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    width: 660px;
    height: 200px;
    margin-left: 100px;
}

.OneFilm:hover {
    background-color: #484747;
}

img {
    width: 80px;
    height: 150px;
    position: relative;
    left: 20px;
    top: 25px;
    transition: transform 0.5s;
    cursor: pointer;
}

#title__film {
    font-size: 24px;
    font-family: cursive;
    color: white;
}

#title__time, #title__point, #title__country {
    color: gray;
}

.data__film {
    position: relative;
    left: 50px;
}

img:hover {
    transform: scale(1.1)
}


</style>
