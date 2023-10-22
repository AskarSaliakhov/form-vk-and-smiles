<template>
    <div class="AddedWatchOneFilm">
        <div class="added__film">
            <img :src="dataAddedToWatchFilm.Poster" :alt="dataAddedToWatchFilm.title">
            <div class="data__added__film">
                <div class="div__flex">
                    <p id="data__film__static484747">Название:</p>
                    <p id="data__film" class="info__title">{{dataAddedToWatchFilm.title }}</p>
                </div>
                <div class="div__flex">
                    <p id="data__film__static484747">Время:</p>
                    <p id="data__film" class="info__time">{{ dataAddedToWatchFilm.time }}</p>
                </div>
                <div class="div__flex">
                    <p id="data__film__static484747">Страна:</p>
                    <p id="data__film" class="info__country">{{ dataAddedToWatchFilm.country }}</p>
                </div>
                <div class="div__flex">
                    <p id="data__film__static484747">Оценка зрителей:</p>
                    <p id="data__film" class="info__point">{{ dataAddedToWatchFilm.point }}</p>
                </div>
                <button id="btn--delete--film" @click="deleteAddedFilmWatch">Удалить</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddedWatchOneFilm",
    methods: {
        deleteAddedFilmWatch() {
            this.$emit("deleteAddedFilmWatch")
        }
    },
    props: {
        dataAddedToWatchFilm: {
            type: Object,
            default: () => {
            }
        }
    },
}
</script>

<style scoped>
.AddedWatchOneFilm {
    justify-content: center;
    align-items: center;
    display: flex;
    min-width: 100px;
}

img {
    width: 200px;
    height: 250px;
}

.added__film {
    width: 100%;
    min-width: 600px;
    min-height: 250px;
    border: 1px solid gray;
    display: flex;
}

p {
    color: white;
}

.div__flex {
    display: flex;
}

#data__film__static484747 {
    color: #484747;
    padding-left: 30px;
}
#btn--delete--film{
    cursor: pointer;
    transition: transform 0.5s;
    margin-left: 30px;
    margin-top: 10px;
    background-color: #0f1015;
    border: none;
    color: white;
}
#btn--delete--film:hover {
    transform: scale(1.1);
    color: goldenrod;
}
.info__title,.info__time,.info__country,.info__point{
    position: relative;
}
.info__point{
    left: 42px;
}
.info__country{
    left: 115px;
}
.info__time{
    left: 120px;
}
.info__title{
    left: 100px;
}
p{
    font-family: Tahoma, sans-serif;
}
</style>
