<template>
    <div class="DefineteFilm">
        <div class="modal__star__wrapper" v-if="isPopupOpen" ref="wrapperData">
            <div
                class="modal__star"
                @mouseleave="showCurrentRating(0)"
            >
                <img id="close--btn" src="../../assets/close.png" @click="closePopup" alt="закрыть окно">
                <div @mouseleave="showCurrentRating(0)">
                    <star-rating
                        id="all--stars"
                        :show-rating="false"
                        @current-rating="showCurrentRating"
                        @rating-selected="setCurrentSelectedRating"
                        :increment="0.5"
                        :max-rating="10"
                    />
                </div>
                <div id="your--point">{{ currentRating }}</div>
            </div>
        </div>
        <div class="info__film">
            <div class="poster__film">
                <img id="poster" :src="ONE_FILM.Poster" :alt="ONE_FILM.title">
                <button id="btn--add" @click="addToWatch"> Добавить в "Посмотреть"</button>
                <button id="btn--point" @click="addPoint">Поставить оценку фильму</button>
            </div>
            <div class="about__film">
                <p id="title--film">{{ ONE_FILM.title }}</p>
                <p id="tittle--about--film">О фильме</p>
                <div class="div__flex">
                    <p id="stat--info">Год производства:</p>
                    <p id="film--info" class="info__year">{{ ONE_FILM.year }}</p>
                </div>
                <div class="div__flex">
                    <p id="stat--info">Страна:</p>
                    <p id="film--info" class="info__country">{{ ONE_FILM.country }}</p>
                </div>
                <div class="div__flex">
                    <p id="stat--info">Жанр:</p>
                    <p id="film--info" class="info__genre">{{ ONE_FILM.genre }}</p>
                </div>
                <div class="div__flex">
                    <p id="stat--info">Режиссер:</p>
                    <p id="film--info" class="info__producer">{{ ONE_FILM.producer }}</p>
                </div>
                <div class="div__flex">
                    <p id="stat--info">Слоган:</p>
                    <p id="film--info" class="info__slogan">{{ ONE_FILM.slogan }}</p>
                </div>
                <div class="div__flex">
                    <p id="stat--info">Бюджет:</p>
                    <p id="film--info" class="info__budget">{{ ONE_FILM.budget }}</p>
                </div>
                <div class="div__flex">
                    <p id="stat--info">Сборы в мире:</p>
                    <p id="film--info" class="info__fees">{{ ONE_FILM.feesInTheWorld }}</p>
                </div>
                <div class="div__flex">
                    <p id="stat--info">Премьера в мире:</p>
                    <p id="film--info" class="info__premiere__world">{{ ONE_FILM.premiere }}</p>
                </div>
                <div class="div__flex">
                    <p id="stat--info">Время:</p>
                    <p id="film--info" class="info__time">{{ ONE_FILM.time }}</p>
                </div>
            </div>
            <div class="all__actors">
                <div class="main__actors">
                    <p id="tittle--main--actors">В главных ролях</p>
                    <ul
                        v-for="actor in allActors" :key="actor"
                    >
                        <li id="main--actor">{{ actor }}</li>
                    </ul>
                </div>
                <div class="voice__actors">
                    <p id="tittle--voice--actors">Роли озвучивали</p>
                    <ul
                        v-for="actorVoice in allVoiceActors" :key="actorVoice"
                    >
                        <li id="voice--actor">{{ actorVoice }}</li>
                    </ul>
                </div>
            </div>
            <div class="film__decription">
                <p id="description">Описание фильма:</p>
                <p id="film__description__info">{{ ONE_FILM.description }}</p>
                <video-embed
                    class="trailer"
                    :src="ONE_FILM.trailer"
                />
                <div class="all__related__films">
                    <p id="title--relate--film">Похожие фильмы</p>
                    <div class="related__films">
                        <RelatedFilm
                            v-for="film in allRelatedFilms"
                            :key="film.id+'related'"
                            :related-film="film"
                            class="related__film"
                        />
                    </div>
                </div>
                <div class="facts">
                    <p id="facts--title">Знаете ли вы, что…</p>
                    <OneFact
                        v-for="fact in allFacts"
                        :key="fact.id"
                        :one-fact="fact"
                        class="one__fact"
                    />
                </div>
                <div class="reviews">
                    <p id="reviews--title">Рецензии Зрителей:</p>
                    <Review
                        v-for="review in allReviews"
                        :key="review.id"
                        :all-reviews="review"
                        :class="{
                            good__review:review.characteristic==='Положительная',
                            bad__review:review.characteristic==='Отрицательная',

                        }"
                    />
                </div>
                <div class="make__review">
                    <div v-if="isShowTypeRewiews">
                        <input type="radio" @click="goodReview" v-model="reviewType">
                        <label for="one">Положительная</label>
                        <br>
                        <input type="radio" @click="badReview" v-model="reviewType">
                        <label for="two">Отрицательная</label>
                    </div>
                    <textarea placeholder="Написать рецензию" v-model="reviewText"></textarea>
                    <button id="btn--make--review" @click="chooseReview">Опубликовать рецензию</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import StarRating from "vue-star-rating";
import RelatedFilm from "@/components/Films/RelatedFilm";
import closePopup from "@/mixins/closePopup";
import {mapGetters, mapActions} from "vuex";
import OneFact from "@/components/Films/Facts/OneFact";
import Review from "@/components/Films/Reviews/Review";
import {v4 as uuidv4} from 'uuid';


export default {
    name: "DefineteFilm",
    data() {
        return {
            rating: 0,
            currentRating: "",
            reviewText: "",
            reviewType: "",
            isShowTypeRewiews:false,
        }
    },
    components: {
        Review, OneFact, RelatedFilm, StarRating
    },
    methods: {
        ...mapActions(["AddFilmInWatch"]),
        addToWatch() {
            if (this.IS_REGISTERED) {
                this.AddFilmInWatch(this.ONE_FILM)
                this.$toast("Фильм был успешно добавлен", {
                    timeout: 2500,
                });
            } else {
                this.$router.push("/registration");
            }
        },
        addPoint() {
            this.isPopupOpen = true;
        },
        showCurrentRating(rating) {
            this.currentRating = (rating === 0) ? this.currentSelectedRating : "Кликните,чтобы поставить " + rating + " звёзд"
        },
        setCurrentSelectedRating(rating) {
            this.currentSelectedRating = "Ваша оценка: " + rating + " звёзд";
        },
        chooseReview() {
            if (this.reviewText.length > 0 && this.IS_REGISTERED) {
                this.isShowTypeRewiews=true;
            } else {
                this.$router.push("/registration");
            }
        },
        makeReview() {
            this.allReviews.push({
                review: this.reviewText,
                id: uuidv4(),
            });
            this.reviewText="";
            this.isShowTypeRewiews=false;
        },
        badReview() {
            this.reviewType="Отрицательная";
            this.makeReview()
        },
        goodReview() {
            this.reviewType="Положительная";
            this.makeReview()
        }
    },
    computed: {
        ...mapGetters(["ONE_FILM", "IS_REGISTERED"]),
        allActors() {
            return this.ONE_FILM.actors.split(",");
        },
        allVoiceActors() {
            return this.ONE_FILM.rolesDuplicated.split(",");
        },
        allRelatedFilms() {
            return this.ONE_FILM.relatedFilms;
        },
        allFacts() {
            return this.ONE_FILM.facts;
        },
        allReviews() {
            return this.ONE_FILM.reviews;
        },
    },
    updated() {
        let allReviews = document.querySelectorAll(".review")
        let lastReview = Array.prototype.slice.call(allReviews)[Array.prototype.slice.call(allReviews).length-1]
        if (this.reviewType === "Положительная") {
            lastReview.classList.add('good__review')
        }
        else if (this.reviewType === "Отрицательная") {
            lastReview.classList.add('bad__review')
        }
    },
    created() {
        document.title="Фильм"
    },
    mixins: [closePopup]
}
</script>
<style>
.DefineteFilm {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 40px;
}


.poster__film {
    display: flex;
    flex-direction: column;
}

.about__film {
    margin-right: auto;
    left: 80px;
    position: relative;
}


#poster {
    width: 300px;
    height: 400px;
    position: relative;
    bottom: 10px;
}

#btn--add, #btn--point {
    background-color: #1d1d1d;
    color: white;
    cursor: pointer;
    width: 300px;
    height: 40px;
    border-radius: 10px;
    border: none;
    margin-top: 20px;
}

#close--btn {
    width: 25px;
    height: 25px;
    position: absolute;
    right: 0;
}

.info__year, .info__country, .info__genre, .info__producer, .info__slogan, .info__budget, .info__premiere__world, .info__fees, .info__time {
    position: relative;
}

.info__year {
    left: 20px;
}

.info__fees {
    left: 45px;
}

.info__country {
    left: 89px;
}

.info__genre {
    left: 101px;
}

.info__slogan {
    position: relative;
    left: 90px;
    max-width: 400px;
}

.info__producer {
    left: 75px;
}

.info__budget {
    left: 85px;
}

.info__time {
    left: 95px;
}

.info__premiere__world {
    left: 25px;
}

#film--info {
    color: white;
}

#stat--info {
    color: gray;
}

.div__flex {
    display: flex;
}

.info__film {
    max-width: 1440px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    flex-wrap: wrap;
    position: relative;
}


#tittle--main--actors, #tittle--voice--actors {
    font-size: 25px;
    color: white;
    position: relative;
}

#main--actor, #voice--actor {
    color: white;
    position: relative;
    right: 20px;
}

#tittle--about--film {
    color: white;
    font-family: Tahoma, sans-serif
}

#title--film {
    color: white;
    font-size: 30px;
    font-family: Tahoma, sans-serif;
}


#description {
    color: gray;
    font-size: 24px;
}

#film__description__info {
    color: white;
    font-size: 18px;
    font-family: Gill Sans, sans-serif;
}

.film__decription {
    flex-wrap: wrap;
    min-width: 100px;
}

.all__actors {
    position: relative;
    top: 42px;
}


#title--relate--film, #facts--title, #reviews--title {
    color: gray;
    font-size: 24px;
    font-family: Tahoma, sans-serif;
}

.modal__star {
    width: 600px;
    height: 600px;
    border: 1px solid black;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
}

.modal__star__wrapper {
    width: 100vw;
    height: 100vh;
    background-color: rgba(64, 64, 64, 0.7);
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    top: 0;
    z-index: 999;
    overflow-x: hidden;
    cursor: pointer;
}

.modal__star {
    background: #0f1015;
    width: 500px;
    height: 300px;
    border: 3px solid #0f1015;
    box-shadow: 0 0 10px 0 #0f1015;
    z-index: 999;
    position: absolute;
    left: 400px;
    top: 150px;
    justify-content: center;
    align-items: center;
}

#your--point {
    color: white;
    font-size: 24px;
    position: relative;
    top: 120px
}

#close--btn {
    width: 25px;
    height: 25px;
    position: absolute;
    right: 0;
}

#all--stars {
    position: relative;
    top: 100px
}

.related__films {
    display: flex;
}

.related__film {
    margin-right: 90px;
}

textarea {
    margin-top: 50px;
    background-color: #484747;
    color: white;
    border: none;
    border-radius: 10px;
    display: block;
    resize: none;
    width: 532px;
    height: 370px;
}

textarea:focus {
    outline: none;
}

#btn--make--review {
    background-color: #484747;
    color: white;
    cursor: pointer;
    width: 300px;
    height: 40px;
    border-radius: 10px;
    border: none;
    margin-top: 20px;
    display: block;
    position: absolute;
    bottom: 10px;
    left: 100px;
}

.good__review {
    background-color: #ebf7eb;
    width: 540px;
}

.bad__review {
    background-color: #ffebeb;
    width: 540px;
}

.make__review {
    border: 2px solid gray;
    width: 536px;
    height: 500px;
    position: relative;
    margin-top: 30px;
}
.make__review label{
    color: white;
}


</style>
