<template>
    <div id="app">
        <Form/>
    </div>
</template>

<script>
import Form from "@/components/Form";

export default {
    name: 'App',
    components: {
        Form
    },
}
</script>
<style src="@vueform/multiselect/themes/default.css"></style>
<style>
body {
    padding: 0;
    margin: 0;
    background-color: #edeef0;
}

#app {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

select {
    font-size: 16px;
    padding: 10px;
    cursor: pointer;
    border-radius: 10px;
}

select:required:invalid {
    color: gray;
}

option[value=""][disabled] {
    display: none;
}

option {
    color: black;
}

#title--choose, #title--comment {
    color: #6d7885;
    margin-left: 2px;
}

textarea, select {
    background-color: #f2f3f5;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
}

.multiselect-wrapper:focus {
    outline: 0.09rem solid #1d67b3;
    border-radius: 3px;
}

.sel {
    width: 250px;
    border: none;
    outline: none;
}


.vue-simple-select-button {
    border: none;
    outline: none;
}

.sel__floor, .sel__meeting__room, .started__time, .finished__time {
    width: 240px;
    background-color: #f2f3f5;
}
.vue-simple-select-container {
    background-color: #f2f3f5;
}

.vue-simple-select-container:focus {
    outline: 1px solid #1d67b3;
}

.qwe {
    width: 200px;
    height: 100px;
}

.select2-results__option[aria-selected=true] {
    display: none;
}

.multiselect.is-active {
    box-shadow: none;
}

.multiselect-option.is-selected {
    background-color: #2688eb;
    color: black;
}

.multiselect-option.is-selected:hover, .multiselect-option.is-pointed:hover {
    background-color: #f2f3f5;
    color: black;
}

.multiselect-option.is-selected.is-pointed {
    background-color: #2688eb;
    color: black;
}

.toastify__toast--success {
    background-color: green;
    bottom: 0;
    left: 0;
}

.multiselect-wrapper {
    background-color: #edeef0;
}

.multiselect .is-disabled {
    color: red;
}
.container textarea:focus {
    outline: #1d67b3;
}

.is-disabled:hover {
    outline: red;
}

.multiselect-wrapper {
    border-radius: 3px;
}

.choose__day div {
    z-index: 10000;
}


.is-interactive{
    z-index: 20;
}
.multiselect-caret,.multiselect-clear{
    z-index: 0;
}
.vc-popover-content-wrapper ,.is-interactive {
    z-index: 999;
}
.is-open,.is-active{
    z-index: 1;
}
</style>


