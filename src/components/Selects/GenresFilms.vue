<template>
    <div class="Genders">
        <ul>
            <li @click="handleAllGenres" :class="{active:isAllGenres}">ВСЕ ЖАНРЫ</li>
            <li v-for="film in genres"
                :key="film.id"
                :class="{'active':film.id===selectedFilm}"
                @click="selectGenre(film)"
            >
               {{ film.genre }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Genres",
    data() {
        return {
            genres: [
                {id: 1, genre: "Биография"},
                {id: 2, genre: "Боевик"},
                {id: 3, genre: "Военный"},
                {id: 4, genre: "Детектив"},
                {id: 5, genre: "Драма"},
                {id: 6, genre: "История"},
                {id: 7, genre: "Комедия"},
                {id: 8, genre: "Криминал"},
                {id: 9, genre: "Музыка"},
                {id: 10, genre: "Мультфильм"},
                {id: 11, genre: "Мюзикл"},
                {id: 12, genre: "Семейный"},
                {id: 13, genre: "Спорт"},
                {id: 14, genre: "Триллер"},
                {id: 16, genre: "Фантастика"},
                {id: 17, genre: "Фэнтези"},
            ],
            selectedFilm: null,
            isAllGenres:true
        }
    },
    methods: {
        selectGenre(film) {
            this.selectedFilm=film.id
            this.isAllGenres=false
            this.$emit('takeGenre', film.genre)
        },
        handleAllGenres() {
            this.isAllGenres=true
            this.selectedFilm=null
            this.$emit("allGenres")
        }
    }
}
</script>

<style scoped>
.Genders {
    width: 200px;
    height: 100px;
    z-index: 20;
}

p {
    color: white;
}

li {
    color: gray;
    padding-top: 10px;
    cursor: pointer;
}
li:hover {
    color: goldenrod;
}
.active{
    color: white;
    transition: all ease 1.0s;
    transform: scale(1.1)
}
</style>
