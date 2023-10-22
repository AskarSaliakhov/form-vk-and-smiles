<template>
    <div class="CarouselFilms">
        <SliderFilm
            v-for="(film,index) in ALL_CAROUSEL_FILMS"
            :key="film.id"
            :index="index"
            :visible-slide="visibleSlide"
            :direction="direction"
        >
            <button  @click="previousPhoto">
                <img id="back--png" src="../../../assets/back.png" alt="назад">
            </button>
            <img
                id="poster--film"
                :src="film.Poster"
                :alt="film.title"
            >
            <button id="next" @click="nextPhoto"> <img id="next--png" src="../../../assets/next.png" alt="назад"></button>
        </SliderFilm>
    </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"
import SliderFilm from "@/components/MainPage/Carousel/SliderFilm";

export default {
    name: "CarouselFilms",
    components: {SliderFilm},
    data() {
        return {
            visibleSlide: 0,
            direction:"left"
        }
    },
    methods: {
        ...mapActions(["getCarouselFilms"]),
        nextPhoto() {
            if (this.visibleSlide >= this.ALL_CAROUSEL_FILMS.length - 1) {
                this.visibleSlide = 0
            } else {
                this.visibleSlide++
            }
            this.direction="left"
        },
        previousPhoto() {
            if (this.visibleSlide <= 0) {
                this.visibleSlide = this.ALL_CAROUSEL_FILMS.length - 1
            } else {
                this.visibleSlide--
            }
            this.direction="right"
        },
    },
    computed: {
        ...mapGetters(["ALL_CAROUSEL_FILMS"]),
    },
    async mounted() {
        await this.getCarouselFilms()
    },
}
</script>

<style scoped>
#poster--film {
    width: 100%;
    height: 400px;
    transition: 1s ease;
}
.CarouselFilms {
    position: relative;
    width: 892px;
    height: 400px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}
button{
    position: absolute;
    height: 33px;
    width: 45px;
    top: 42%;
    border: none;
    z-index: 10;
    text-align: center;
}
#previous{
    left: 0;
}
#next {
    right: 0;
}
.shadow{
    opacity: 0.4;
    filter: alpha(opacity=40);
}
#back--png,#next--png{
    width: 30px;
    height: 30px;
}


</style>
