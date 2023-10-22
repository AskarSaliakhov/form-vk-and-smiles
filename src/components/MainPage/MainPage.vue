<template>
    <div class="MainPage">
        <div class="carousel">
            <CarouselFilms/>
        </div>
        <p id="last--news">Последние новости:</p>
        <div class="all__news">
            <AllNews/>
        </div>
        <div class="fees__data">
            <Fees/>
        </div>
    </div>
</template>

<script>
import CarouselFilms from "@/components/MainPage/Carousel/CarouselFilms";
import AllNews from "@/components/MainPage/News/AllNews";
import Fees from "@/components/MainPage/BoxOfficeWeekend/Fees";

export default {
    name: "MainPage",
    components: {Fees, AllNews, CarouselFilms},
}
</script>

<style scoped>
#last--news {
    text-align: center;
    font-family: Tahoma, sans-serif;
    color: white;
    font-size: 35px;
}

.carousel,.fees__data {
    justify-content: center;
    align-items: center;
    display: flex;
}
.carousel{
    padding-top: 20px;
}
.all__news{
    width: 100%;
    overflow-x: scroll;
}



</style>
