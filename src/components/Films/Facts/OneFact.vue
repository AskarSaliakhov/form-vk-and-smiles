<template>
    <div class="OneFact">
        <div class="fact">{{oneFact.fact}}</div>
    </div>
</template>

<script>
export default {
    name: "OneFact",
    props:{
        oneFact:{
            type:Object,
            default: () => {
            }
        }
    }
}
</script>

<style scoped>
.fact{
    border-top:1px solid gray ;
    border-bottom:1px solid gray ;
    color: white;
    font-family: Tahoma, sans-serif;
    height: 100px;
    align-items: center;
    display: flex;
    max-height: 1000px;
}
</style>
