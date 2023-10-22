<template>
    <div class="AllNews">
        <div class="all__news">
            <MainPageOneOfNews
                v-for="(news,index) in ALL_NEWS"
                :key="index"
                :data-news="news"
            >
                {{ news }}
            </MainPageOneOfNews>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import MainPageOneOfNews from "@/components/MainPage/News/MainPageOneOfNews";


export default {
    name: "AllNews",
    components: {MainPageOneOfNews},
    methods: {
        ...mapActions(["getNews"])
    },
    computed: {
        ...mapGetters(["ALL_NEWS"])
    },
    async mounted() {
        await this.getNews()
    }
}
</script>

<style scoped>
.AllNews {
    display: flex;
    justify-content: center;
    align-items: center;
}

img {
    width: 500px;
    height: 300px;
}
.all__news{
    display: flex;
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
}
.all__news::-webkit-scrollbar {
    display: none;
}


</style>
