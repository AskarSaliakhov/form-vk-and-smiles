<template>
    <div class="Year">
        <select @change="selectYear">
            <option @click="allYears">Все годы</option>
            <option
                v-for="film in years"
                :key="film.id"
            >
                {{film.year}}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    name: "Years",
    data() {
        return {
            years: [
                {year: "2023",id:"year:2023"},
                {year: "2022",id:"year:2022"},
                {year: "2021",id:"year:2021"},
                {year: "2020",id:"year:2020"},
                {year: "2010-2019",id:"year:2010-2019"},
                {year: "2000-2009",id:"year:2000-2009"},
                {year: "1990-1999",id:"year:1990-1999"},
                {year: "1980-1989",id:"year:1980-1989"},
                {year: "1970-1979",id:"year:1970-1979"},
            ]
        }
    },
    methods:{
        selectYear(event) {
            this.$emit("takeYear",event.target.value)
        },
        allYears() {
            this.$emit("takeAllYears")
        }
    }
}
</script>

<style scoped>
.Year{
    position: relative;
}
select{
    padding: 1em 1.5em;
    background: #15172b;
    color: white;
    border-radius:10px;
    border: 1px solid black;
    padding-bottom: 10px;
    width: 200px;
    margin-top: 20px;
}
</style>
