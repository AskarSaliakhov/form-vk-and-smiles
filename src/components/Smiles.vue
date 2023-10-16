<template>
    <div class="smiles" :class="{active:isShowSmiles}" ref="smilesContainer">
        <p id="title--comment">Комментарий</p>
        <div v-if="isShowSmiles" class="emoji_picker">
            <div class="picker_container">
                <span class="general__smiles"
                      v-for="(emoji,index) in generalSmiles"
                      :key="emoji.id"
                >
                    <div @click="goToSmiles(index)">
                        {{ emoji.smile }}
                    </div>
                </span>
                <input
                    v-model="search"
                    id="search--emojies"
                    placeholder="Поиск смайлика"
                >
                <div class="category"
                     v-for="(category,index) in categories"
                     :key="`category_${category}`"
                >
                    <span
                        v-if="category_emojis(category).length"
                        :ref="'category'+index"
                    >
                        {{ category }}
                    </span>
                    <div class="emojis_container" :class="{hidden:isShowSmiles}">
                        <div
                            v-for="(emoji, index) in category_emojis(category)"
                            :key="`emoji_${index}`"
                            class="div__emoji"
                            @click="handleEmojiClick(emoji)"
                        >
                            {{ emoji }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <textarea
                v-model="text"
                ref="smilesTextarea"
                placeholder="Введите комментарий"

            ></textarea>
            <button class="btn__smiles" @click="showSimiles">😀</button>
            <button class="btn__clear" @click="cleanOnlyComment">X</button>
        </div>
    </div>
</template>

<script>
import data from '../../data.json'


export default {
    name: "theSmiles",
    data() {
        return {
            text: "",
            search: "",
            isShowSmiles: false,
            array: {},
            keys: [],
            generalSmiles: [
                {smile: "😀", id: "smile__😀"},
                {smile: "🐵", id: "smile__🐵"},
                {smile: "📕", id: "smile__📕"},
                {smile: "🏠", id: "smile__🏠"},
                {smile: "✅", id: "smile__✅"}
            ],
        }
    },
    props: ['clear'],
    methods: {
        handleEmojiClick(emoji) {
            const textarea = this.$refs.smilesTextarea;
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;
            this.text = this.text.slice(0, start) + emoji + this.text.slice(end);
            textarea.selectionStart = start;
            textarea.selectionEnd = start + emoji.length;
            textarea.focus();
            this.array.general[this.findSmile(this.keys, emoji)] = emoji
        },
        showSimiles() {
            this.isShowSmiles = !this.isShowSmiles
        },
        findSmile(array, value) {
            for (let i = 0; i < array.length; i++) {
                if (array[i].value === value) {
                    return array[i].name
                }
            }
        },
        goToSmiles(index) {
            this.search = ""
            const el = this.$refs['category' + (index + 1)][0]
            if (el) {
                el.scrollIntoView({behavior: 'smooth'})
            }
        },
        cleanOnlyComment() {
            this.text=""
        }
    },
    computed: {
        categories() {
            return Object.keys(this.array);
        },
        category_emojis() {
            return (category) => {
                let filteredEmojis = {};

                for (let emoji in this.array[category]) {
                    if (emoji.includes(this.search.toLowerCase().trim())) {
                        filteredEmojis[emoji] = this.array[category][emoji];
                    }
                }

                return Object.values(filteredEmojis);
            }
        },
    },
    mounted() {
        let vm = this;
        document.addEventListener('click', function (item) {
            if (item.target.contains(vm.$refs['smilesContainer'])) {
                vm.isShowSmiles = false;
            }
        })
        window.addEventListener('keyup', function (event) {
            if (event.keyCode === 27) {
                vm.isShowSmiles = false;
            }
        })
    },
    created() {
        this.array = data
        const categories = []
        for (const category in data) {
            categories.push(category)
            for (const key in data[category]) {
                this.keys.push(
                    {
                        name: key,
                        value: data[category][key]
                    }
                );
            }
        }
    },
    watch: {
        clear() {
            this.text = ''
            this.$emit('cleared')
        }
    }

}
</script>
<style>
body {
    background-color: #fd5858;
}

.smiles {
    position: relative;
}


.emoji_picker {
    display: flex;
    width: 20rem;
    max-height: 15rem;
    max-width: 100%;
    cursor: auto;
    z-index: 999;
    position: absolute;
    right: 0;
    bottom: 80px
}

.emoji_picker {
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, .0975);
}

.emoji_picker,
.picker_container {
    border-radius: 0.5rem;
}

.picker_container {
    position: relative;
    padding: 1rem;
    overflow: auto;
    z-index: 1;
    background-color: white;
    opacity: 0;
    animation: fadeIn 300ms ease-in-out forwards;
}
@keyframes fadeIn {
    from { opacity: 0; } /* начальный кадр */
    to { opacity: 1; } /* конечный кадр */
}


.category {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    color: rgb(169, 169, 169);
}

.emojis_container {
    display: flex;
    flex-wrap: wrap;
}

.category button {
    margin: 0.5rem 0.5rem 0.5rem 0;
    background: inherit;
    border: none;
    font-size: 1.75rem;
    padding: 0;
}

textarea {
    resize: none;

}


.div__emoji {
    width: 30px;
    height: 30px;
    display: flex;
    background-color: white;
    border: none;
    cursor: pointer;
    content: "😍";
    font-size: 20px
}

.div__emoji:hover {
    background-color: #ebecf0;
    border-radius: 5px;
}

.container {
    position: relative;
    width: 500px;
    height: 45px;
    background-color: #f2f3f5;
    border: none;
    border-radius: 10px;
}

.btn__smiles,.btn__clear {
    position: absolute;
    top: 3px;
    right: 20px;
    width: 20px;
    border: none;
    background-color: #f2f3f5;
    cursor: pointer;
}
.btn__clear{
    top:23px;
    right: 17px;
}


.container textarea {
    position: relative;
    border: none;
    width: 445px;
    height: 33px;
    resize: none;
    outline: none;
    padding: 10px 10px 0 10px;
    border-radius: 10px;
}

#search--emojies {
    width: 276px;
    color: white;
    background-color: whitesmoke;
    border-radius: 10px;
    border: none;
}


input:focus {
    outline: none;
}

.general__smiles {
    display: inline-block;
}

.general__smiles div {
    max-width: 30px;
    max-height: 30px;
    display: block;
    background-color: white;
    border: none;
    cursor: pointer;
    margin: 15px;
}

::-webkit-input-placeholder {
    color: #818c99;
}

:-moz-placeholder {
    color: #818c99;
    opacity: 1;
}

::-moz-placeholder {
    color: #818c99;
    opacity: 1;
}

:-ms-input-placeholder {
    color: #818c99;
}

::-ms-input-placeholder {
    color: #818c99;
}

::placeholder {
    color: #818c99;
}

#search--emojies {
    color: #818c99;
}

.btn__clear {
    border: none;
    background-color: #f2f3f5;
    cursor: pointer;
}
@media screen and (max-width: 400px) {
    .container textarea{
        width: 360px;
    }
    .btn__smiles{
        right: 20px;
        width: 20px;
    }
    .btn__smiles,.btn__clear {
        position: absolute;
        top: 3px;
        right: 20px;
        width: 20px;
        border: none;
        background-color: #f2f3f5;
        cursor: pointer;
    }
    .btn__clear{
        top:23px;
        right: 17px;
    }

}

</style>
