import {mapGetters, mapActions} from "vuex"

export default {
    data() {
        return {
            currentCount: 0,
            countCoupleFilms: null,
            filmsWinners: [],
            firstFilm: '',
            secondFilm: '',
            currentCountKing: 1,
            allFilmsPOCopy: [],
            allFilmsKingCopy: [],
            isEndGameKing: false,
            isEndGamePO: false
        }
    },
    methods: {
        ...mapActions(["getFilms"]),
        newFilms() {
            this.firstFilm = this.allFilmsPOCopy[Math.floor(Math.random() * this.allFilmsPOCopy.length)]
            this.secondFilm = this.allFilmsPOCopy[Math.floor(Math.random() * this.allFilmsPOCopy.length)]
            if (this.firstFilm === this.secondFilm) {
                while (this.firstFilm === this.secondFilm) {
                    this.secondFilm = this.allFilmsPOCopy[Math.floor(Math.random() * this.allFilmsPOCopy.length)]
                }
            }
        },
        updateFilm() {
            this.currentCountKing++;
            this.allFilmsKingCopy = this.allFilmsKingCopy.filter(val => val !== this.secondFilm)
            this.secondFilm = this.allFilmsKingCopy[Math.floor(Math.random() * this.allFilmsKingCopy.length)]
        },
        updateCoupleFilm() {
            this.allFilmsPOCopy = this.allFilmsPOCopy.filter(val => val !== this.firstFilm && val !== this.secondFilm)
            if (this.currentCount !== this.countCoupleFilms - 1) {
                this.newFilms()
            }
            this.currentCount++;
            if (this.currentCount === this.countCoupleFilms) {
                this.currentCount = 0;
                this.countCoupleFilms = this.countCoupleFilms / 2
                this.allFilmsPOCopy = this.filmsWinners
                this.filmsWinners = []
                this.newFilms()
            }
        },
        redirectToResultKing() {
            if (this.currentCountKing === this.ALL_FILMS.length - 1) {
                this.isEndGameKing = true
            } else {
                this.updateFilm()
            }
        }
    },
    computed: {
        ...mapGetters(['ALL_FILMS']),
    },
    async mounted() {
        await this.getFilms();
        this.allFilmsPOCopy = this.ALL_FILMS;
        this.allFilmsKingCopy = this.ALL_FILMS
        this.newFilms();
        this.allFilmsKingCopy = this.allFilmsKingCopy.filter(val => val !== this.firstFilm && val !== this.secondFilm)
        this.countCoupleFilms = this.ALL_FILMS.length / 2
    }
}
