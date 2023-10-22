<template>
    <div class="PlayOffs">
        <div v-if="!isEndGamePO" class="choices">
            <p id="score">{{ currentCount + 1 }}/{{ countCoupleFilms }}</p>
            <div class="info__play__off">
                <div class="first__film">
                    <img :src="firstFilm.Poster" @click="chooseLeftFilm">
                    <p id="info">{{ firstFilm.title }}</p>
                </div>
                <div class="second__film">
                    <img :src="secondFilm.Poster" @click="chooseRightFilm">
                    <p id="info">{{ secondFilm.title }}</p>
                </div>
            </div>
        </div>
        <div v-else class="winner">
            <p id="winner--title">Победитель</p>
            <img :src="firstFilm.Poster">
        </div>
    </div>
</template>

<script>
import game from "@/mixins/game";

export default {
    name: "PlayOff",
    data() {
        return {
            isEndGamePO: false
        }
    },
    methods: {
        chooseLeftFilm() {
            this.filmsWinners.push(this.firstFilm)
            if (this.currentCount === 0 && this.countCoupleFilms === 1) {
                this.isEndGamePO = true
            } else {
                this.updateCoupleFilm();
            }
        },
        chooseRightFilm() {
            this.filmsWinners.push(this.secondFilm)
            if (this.currentCount === 0 && this.countCoupleFilms === 1) {
                this.isEndGamePO = true
                this.firstFilm = this.secondFilm
            } else {
                this.updateCoupleFilm();
            }
        }
    },
    mixins: [game]
}
</script>

<style scoped>
#score {
    color: white;
    font-size: 20px;
    text-align: center;
}

img {
    width: 400px;
    height: 450px;
    transition: transform 0.25s;
    cursor: pointer;
}

img:hover {
    transform: scale(1.1);
}

.info__play__off {
    align-items: center;
    justify-content: center;
    display: flex;
}

#info,#winner--title {
    color: white;
    text-align: center;
    font-family: Tahoma, sans-serif;
    font-size: 20px;
}
.winner{
    text-align: center;
    align-items: center;
    justify-content: center;
}
#winner--title{
    font-family: cursive;
}
@media (max-width: 768px) {
    .PlayOffs{
        position: absolute;
    }
}
</style>
