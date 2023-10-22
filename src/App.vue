<template>
    <div id="app">

        <Links/>

        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>

import Links from "@/components/MainPage/Links";

export default {
    name: 'App',
    components: {Links}
}
</script>

<style>
body {
    margin: 0;
    padding: 0;
    background-color: #0f1015;
}
iframe{
    width: 600px;
    height: 300px;
}
button{
    cursor: pointer;
}
img{
    color: white;
}
</style>
