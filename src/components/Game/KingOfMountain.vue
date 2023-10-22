<template>
    <div class="KingOfMountain">
        <div class="container">
            <div v-if="!isEndGameKing" class="choices">
                <p id="score">{{ currentCountKing }}/{{ ALL_FILMS.length - 1 }}
                <p/>
                <div class="photos">
                    <div class="first__film">
                        <img :src="firstFilm.Poster" :alt="firstFilm.title" @click="chooseLeftFilm">
                        <p id="title--film">{{ firstFilm.title }}</p>
                    </div>
                    <div class="second__film">
                        <img :src="secondFilm.Poster" :alt="secondFilm.title" @click="chooseRightFilm">
                        <p id="title--film">{{ secondFilm.title }}</p>
                    </div>
                </div>
            </div>
            <div v-else class="winner">
                <p id="winner--title">Победитель</p>
                <img :src="firstFilm.Poster" :alt="firstFilm.title">
            </div>
        </div>
    </div>
</template>

<script>
import game from "@/mixins/game";

export default {
    name: "KingOfMountain",
    methods: {
        chooseLeftFilm() {
            this.redirectToResultKing()
        },
        chooseRightFilm() {
            this.firstFilm = this.secondFilm;
            this.redirectToResultKing()
        }
    },
    mixins: [game]
}
</script>

<style scoped>

.photos {
    align-items: center;
    justify-content: center;
    display: flex;
}

img {
    width: 400px;
    height: 450px;
        transition: transform 0.25s;
}

img:hover {
    transform: scale(1.1);
    cursor: pointer;
}

#score, #title--film, #winner--title {
    color: white;
    font-size: 20px;
    text-align: center;
}

.winner {
    text-align: center;
    align-items: center;
    justify-content: center;
}

#winner--title {
    font-family: cursive;
}

@media (max-width: 768px) {
    .KingOfMountain {
        position: absolute;
    }
}








</style>
