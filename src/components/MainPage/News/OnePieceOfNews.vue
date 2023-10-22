<template>
    <div class="OnePieceOfNews">
        <div class="container">
            <p id="title">{{ONE_PIECE_NEWS.title}}</p>
            <img :src="ONE_PIECE_NEWS.Poster" :width="ONE_PIECE_NEWS.widthFirst" :alt="ONE_PIECE_NEWS.title__poster">
            <p id="about">О чем?</p>
            <p id="description--one">{{ONE_PIECE_NEWS.descriptionOne}}</p>
            <img :src="ONE_PIECE_NEWS.firstPicture" :alt="ONE_PIECE_NEWS.title__poster">
            <p> {{ONE_PIECE_NEWS.about}}</p>
            <p id="description--two">Что теперь...?</p>
            <img :src="ONE_PIECE_NEWS.secondPicture" :alt="ONE_PIECE_NEWS.title__poster">
            <p>{{ONE_PIECE_NEWS.descriptionTwo}}</p>
            <video-embed
                :src="ONE_PIECE_NEWS.trailer">
            </video-embed>
            <p id="in--ending">В заключении</p>
            <p>{{ONE_PIECE_NEWS.ending}}</p>
        </div>
    </div>
</template>

<script>

import {mapGetters} from "vuex";

export default {
    name: "OnePieceOfNews",
    components: {},
    props: {
        NewsData: {
            type: Object,
            default: () => {
            }
        }
    },
    computed: {
        ...mapGetters(["ONE_PIECE_NEWS"])
    },
    created() {
        document.title='Новость'
    }
}
</script>

<style scoped>
.OnePieceOfNews{
    display: flex;
    justify-content: center;
    align-items: center;
}
.container{
    flex-direction: column;
    width:892px ;
    min-width: 100px;
}
img {
    height: 595px;
    width: 892px;
}
p{
    color: white;
    font-family: Tahoma, sans-serif;
}
#title{
    font-size: 25px;
}
#about,#in--ending,#description--two{
    font-size: 30px;
    color: gray;
    font-family: Tahoma, sans-serif;
}


</style>
