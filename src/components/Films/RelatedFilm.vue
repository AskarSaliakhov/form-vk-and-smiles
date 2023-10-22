<template>
    <div class="RelatedFilm">
        <img :src="relatedFilm.Poster" :alt="relatedFilm.title">
        <p id="title">{{ relatedFilm.title }}</p>
    </div>
</template>

<script>


export default {
    name: "RelatedFilm",
    props: {
        relatedFilm: {
            type: Object,
            default: () => {
            }
        }
    },
}
</script>

<style scoped>
p {
    color: white;
    font-size: 20px;
    font-family: Tahoma, sans-serif;
    max-width: 300px;
}

img {
    width: 300px;
    height: 400px;
}
</style>
