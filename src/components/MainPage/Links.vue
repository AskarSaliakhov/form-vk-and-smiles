<template>
    <div class="Links" ref="squareExit">
        <header class="hat">
            <div class="header__buttons">
                <router-link :to="{name:'MainPage'}">
                    <button id="filmoteka">Фильмотека</button>
                </router-link>

                <router-link :to="{name:'allFilms'}">
                    <button id="films">Фильмы</button>
                </router-link>

                <router-link :to="{name:'addedToWatchFilms'}">
                    <button id="added--films" v-if="IS_REGISTERED && ADDED_TO_WATCH_FILMS.length">Добавленные фильмы:
                        {{ ADDED_TO_WATCH_FILMS.length }}
                    </button>
                    <button id="added--films" v-else-if="IS_REGISTERED">Добавленные фильмы</button>
                </router-link>

                <router-link :to="{name:'chooseFormat'}">
                    <button id="play--game">Сыграть в игру</button>
                </router-link>

                <div v-if="IS_REGISTERED" id="exit--tittle" @click="openModal">
                    <button>Выйти из аккаунта</button>
                </div>

                <router-link :to="{name:'registration'}">
                    <button id="registration" v-if="!IS_REGISTERED">Регистрация</button>
                </router-link>
            </div>
        </header>

        <header
            v-if="isModalOpen"
            @mouseleave="closeModal"
            class="modal"
            :class="{ 'modal-open': isModalOpen, 'modal-closed': !isModalOpen }">
            <button id="exit--system" @click="exitFromSystem">Выйти</button>
        </header>

    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "theLinks",
    data() {
        return {
            isModalOpen: false,
            searchValue: ""
        }
    },
    methods: {
        ...mapActions(["exit"]),
        exitFromSystem() {
            this.isModalOpen = false
            this.exit()
            this.$router.push('allFilms')
        },
        openModal() {
            this.isModalOpen = true;
        },
        closeModal() {
            this.isModalOpen = false;
        },
    },
    computed: {
        ...mapGetters(["IS_REGISTERED", "ADDED_TO_WATCH_FILMS"])
    },
}
</script>

<style scoped>
.Links {
}

.hat {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    background-color: #1a171f;
}
.header__buttons {
    display: flex;
    align-items: center;
}

button {
    width: 180px;
    height: 30px;
    color: white;
    background-color: #1a171f;
    border: none;
    cursor: pointer;
    margin-left: 50px;
    padding-top: 2px;
}


#exit--tittle {
    color: white;
}

#exit--system {
    width: 50px;
    height: 30px;
    position: relative;
    left: 1px;
    top: 8px
}

button:hover, #exit--tittle:hover {
    color: goldenrod;
}


.modal {
    width: 200px;
    height: 50px;
    background-color: #1a171f;
    border: 1px solid gray;
    border-radius: 10px;
    position: absolute;
    right: 60px;
    top: 60px;
    z-index: 10;
}

.modal-open {
    opacity: 1;
}

.modal-closed {
    opacity: 0;
}

@keyframes ani {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

#exit--system {
    width: 100px;
    height: 30px;
    background-color: #1a171f;
    text-align: center;
    position: relative;
    right: 45px;
    color: white;
}

#exit--system:hover {
    color: goldenrod;
}
@media (max-width: 1000px) {
    .hat{
        justify-content: space-between;
    }
}
</style>
