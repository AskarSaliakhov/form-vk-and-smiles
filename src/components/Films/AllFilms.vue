<template>
    <div class="AllFilms">
        <div class="input__search">
            <input
                id="input--search"
                type="search"
                v-model="search"
                placeholder="Найти фильм"
            >
        </div>
        <div class="all__films__data">
            <div class="all__genres">
                <Genres
                    @allGenres="getAllFilms"
                    @takeGenre="getGenre"
                />
            </div>
            <div class="all__films">
                <div v-if="isExistsFilms" class="film">
                    <OneFilm
                        v-for="film in paginatedFilms"
                        :key="film.id"
                        :film-data="film"
                    />
                </div>
                <div v-else>
                    <p id="title--no--films">К сожалению, фильмов не найдено...</p>
                    <img
                        id="gif"
                        src="https://media1.giphy.com/media/LSnxmiONseS4GC3svg/giphy.gif?cid=ecf05e47ztno10i45oue4i68ohexo53qay1d2aeqy9476d99&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                        alt="gif">
                </div>
                <div class="itemsPagination">
                    <button
                        v-if="filmNumber>1"
                        class="page"
                        @click="previousPage"
                    >
                        {{ filmNumber - 1 }}
                    </button>
                    <button
                        class="page currentPage"
                        @click="scrollToTop"
                    >
                        {{ filmNumber }}
                    </button>
                    <button
                        v-if="this.paginatedFilms.length/this.filmsPerPage===1 && filmNumber<ALL_FILMS.length/filmsPerPage"
                        class="page"
                        @click="nextPage"
                    >
                        {{ filmNumber + 1 }}
                    </button>
                </div>
            </div>
            <div class="all__selects">
                <div class="general__select">
                    <select @change="sortBy" id="general--select">
                        <option hidden>Выберите условие</option>
                        <option>По дате выхода</option>
                        <option>По названию фильма</option>
                        <option>По рейтингу</option>
                    </select>
                </div>

                <Years
                    @takeYear="selectYears"
                    @takeAllYears="getAllFilmsWithoutTime"
                />
                <Countries
                    @takeCountry="selectCountries"
                    @takeAllCountries="getAllFilmsWithoutCountry"
                />
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex"
import Genres from "@/components/Selects/GenresFilms";
import Years from "@/components/Selects/Years";
import Countries from "@/components/Selects/Countries";
import OneFilm from "@/components/Films/OneFilm";

export default {
    name: "AllFilms",
    data() {
        return {
            filmsByCategory: [],
            filmsPerPage: 16,
            filmNumber: 1,
            search: "",
            selectedYear: "",
            selectedCountry: "",
            isExistsFilms: true,
            onlyYears: [],
            onlyCountries: []
        }
    },
    components: {
        Countries, Years, Genres, OneFilm
    },
    methods: {
        ...mapActions(["getFilms"]),
        sortByRaiting() {
            this.filmsByCategory.sort((a, b) => parseFloat(b.point) - parseFloat(a.point));
        },
        sortByName() {
            this.filmsByCategory.sort((a, b) => (a.title > b.title) - (a.title < b.title));
        },
        sortByYear() {
            this.filmsByCategory.sort((a, b) => parseFloat(b.year) - parseFloat(a.year));
        },
        sortBy(event) {
            if (event.target.value==="По дате выхода") {
                this.sortByYear()
            }
            else if (event.target.value==="По рейтингу") {
                this.sortByRaiting();
            }
            else {
                this.sortByName()
            }
        },
        selectYears(year) {
            this.selectedYear = year;
            this.onlyYears = []
            if (this.selectedYear.length === 4) {
                for (let i = 0; i < this.ALL_FILMS.length; i++) {
                    if (this.selectedYear === this.ALL_FILMS[i].year) {
                        this.onlyYears.push(this.ALL_FILMS[i]);
                    }
                }
            } else {
                const years = this.selectedYear.split("-");
                for (let i = 0; i < this.ALL_FILMS.length; i++) {
                    if (years[0] <= this.ALL_FILMS[i].year && this.ALL_FILMS[i].year <= years[1]) {
                        this.onlyYears.push(this.ALL_FILMS[i]);
                    }
                }
            }
            this.filmsByCategory = this.onlyCountries.filter(element => this.onlyYears.includes(element));
        },
        selectCountries(country) {
            this.selectedCountry = country;
            this.onlyCountries = []
            for (let i = 0; i < this.ALL_FILMS.length; i++) {
                const countries = this.ALL_FILMS[i].country.split(",")
                for (let k = 0; k < countries.length; k++) {
                    countries[k] = countries[k].trim();
                    if (this.selectedCountry === countries[k]) {
                        this.onlyCountries.push(this.ALL_FILMS[i]);
                        break;
                    }
                }
            }
            this.filmsByCategory = this.onlyYears.filter(element => this.onlyCountries.includes(element));
        },
        getAllFilms() {
            this.filmsByCategory = this.ALL_FILMS;
        },
        getAllFilmsWithoutTime() {
            this.filmsByCategory = [];
            for (let i = 0; i < this.ALL_FILMS.length; i++) {
                const countries = this.ALL_FILMS[i].country.split(",")
                for (let k = 0; k < countries.length; k++) {
                    countries[k] = countries[k].trim();
                    if (this.selectedCountry === countries[k]) {
                        this.filmsByCategory.push(this.ALL_FILMS[i])
                        break;
                    }
                }
            }
            this.selectedYear = "Все годы"
        },
        getAllFilmsWithoutCountry() {
            this.filmsByCategory = [];
            if (this.selectedYear.length === 4) {
                for (let i = 0; i < this.ALL_FILMS.length; i++) {
                    if (this.selectedYear === this.ALL_FILMS[i].year) {
                        this.filmsByCategory.push(this.ALL_FILMS[i]);
                    }
                }
            } else {
                const years = this.selectedYear.split("-");
                for (let i = 0; i < this.ALL_FILMS.length; i++) {
                    if (years[0] <= this.ALL_FILMS[i].year && this.ALL_FILMS[i].year <= years[1]) {
                        this.filmsByCategory.push(this.ALL_FILMS[i]);
                    }
                }
            }
            this.selectedCountry = "Все страны";
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        },
        previousPage() {
            if (this.filmNumber > 1) {
                this.filmNumber--;
            }
            this.scrollToTop()
        },
        nextPage() {
            if (this.filmNumber !== Math.ceil(this.filmsByCategory.length / this.filmsPerPage)) {
                this.filmNumber++;
            }
            this.scrollToTop()
        },


        getGenre(film) {
            this.search = "";
            this.scrollToTop();
            this.filmNumber = 1;
            film = film.toLowerCase();
            this.filmsByCategory = [];
            for (let i = 0; i < this.ALL_FILMS.length; i++) {
                let data = this.ALL_FILMS[i].genre;
                data = data.split(",")
                for (let j = 0; j < data.length; j++) {
                    data[j] = data[j].toLowerCase().trim();
                    if (data[j] === film) {
                        this.filmsByCategory.push(this.ALL_FILMS[i]);
                    }
                }
            }
        },
    },
    computed: {
        ...mapGetters(["ALL_FILMS"]),
        paginatedFilms() {
            let from = (this.filmNumber - 1) * this.filmsPerPage;
            let to = from + this.filmsPerPage;
            if (this.search.trim() === "") {
                return this.filmsByCategory.slice(from, to);
            } else {
                return this.filmsByCategory.filter(film => film.title.toLowerCase().includes(this.search.toLowerCase().trim())).slice(from, to);
            }
        },
    },
    async mounted() {
        await this.getFilms();
        this.filmsByCategory = this.onlyYears = this.onlyCountries = this.ALL_FILMS;
    },
    watch: {
        search() {
            this.filmNumber = 1
            if (this.paginatedFilms.length === 0) {
                this.filmNumber = 0
                this.isExistsFilms = false;
            } else {
                this.isExistsFilms = true;
            }
        },
        filmsByCategory() {
            this.isExistsFilms = this.filmsByCategory.length !== 0;
        },
        selectedYear() {
            //TODO ПОМЕНЯТЬ фильтры баг     =
        },
        selectedCountry() {

        }

    }
}
</script>
<style>
.AllFilms {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100vw;
    flex-direction: column;
}

#input--search {
    width: 400px;
    height: 30px;
    border-radius: 10px;
    border: none;
}

.all__films__data {
    display: flex;
    max-width: 1440px;
    width: 100vw;
}

.all__genres {
    min-width: 200px;
    min-height: 200px;
    position: fixed;
    top: 55px;
}

.all__selects {
    width: 300px;
    min-height: 500px;
    padding-top: 37px;
    margin-left: 100px;
}

.all__films {
    padding-top: 37px;
    margin-left: 180px;
    z-index: 1;
}

button {
    border-radius: 10px;
    cursor: pointer;
    border: none;
}

button:hover {
    color: goldenrod;
}

.page {
    width: 30px;
    height: 30px;
    background-color: #0f1015;
    color: white;
    margin-left: 10px;
}

.currentPage {
    background-color: #484747;
}

.page:hover {
    background-color: goldenrod;
    color: white;
}

.itemsPagination {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    left: 60px;
    top: 30px
}

.input__search {
    display: flex;
    justify-content: center;
    align-items: center;
}

input {
    color: white;
    background-color: #484747;
}

input:focus {
    outline: none;
}


#general--select option {
    letter-spacing: 1.2px;
    font-weight: 400;
    font-size: 18px;
    margin-top: 10px;
}


#general--select {
    padding: 1em 1.5em;
    background: #15172b;
    color: white;
    border-radius: 10px;
    border: 1px solid black;
}

.all__selects {
    position: relative;
}

input {
    margin-top: 20px;
}

#gif {
    width: 690px;
    margin-left: 100px;
}

#title--no--films {
    margin-left: 100px;
    color: gray;
    font-family: Tahoma, sans-serif;
    font-size: 24px;
    text-align: center;
}

</style>
