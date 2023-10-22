<template>
    <div class="MainPageOneOfNews">
        <img :src="dataNews.Poster" :alt="dataNews.title__poster" @click="redirectToOneNews(dataNews)">
        <p id="title">{{dataNews.problem__poster}}</p>
    </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
    name: "MainPageOneOfNews",
    methods:{
        ...mapActions(["getOneNews"]),
        redirectToOneNews() {
            this.getOneNews(this.dataNews.id__news-1)
            this.$router.push({name:'oneNews',params:{id:this.dataNews.id__news}})
        }
    },
    props:{
        dataNews:{
            type:Object,
            default: () => {
            }
        }
    },

}
</script>

<style scoped>
img{
    width: 500px;
    height: 300px;
    cursor: pointer;
    transition: transform 0.5s;
}
img:hover{
    transform: scale(1.1);
}
#title{
    color: white;
    font-family: Tahoma, sans-serif;
}

</style>
