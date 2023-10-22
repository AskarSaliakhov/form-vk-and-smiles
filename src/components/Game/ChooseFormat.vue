<template>
    <div class="ChooseFormat">
        <div class="container">
            <p id="title">Выберите какой формат теста хотите пройти</p>
            <div class="modals">
                <div class="description__king">
                    <p id="title--format">Турнир: Царь горы</p>
                    <ul>
                        <li>Прохождение разбито на раунды;</li>
                        <li>Каждый раунд вам на выбор предлагается два случайных варианта;</li>
                        <li>При выборе одного из вариантов он переходит в следующий раунд, а его противник вылетает;
                        </li>
                        <li>Таким образом выигравший вариант сразу сталкивается с новым противником;</li>
                        <li>По итогу всех выборов, последний оставшийся на поле вариант выигрывает;</li>
                    </ul>
                    <div class="buttons">
                        <button id="btn--king" @click="redirectToKing">Выбрать "Царь горы"</button>
                    </div>
                </div>
                <div class="description__play__offs">
                    <p id="title--format"> Турнир: Плей-офф</p>
                    <ul>
                        <li>Каждый раунд вам на выбор предлагается два случайных варианта, участвующих в этапе;</li>
                        <li> При выборе одного из вариантов он переходит в следующий этап, а его противник вылетает;
                        </li>
                        <li>Новый этап начинается, когда все варианты, попавшие в него были рассмотрены и осталась
                            половина;
                        </li>
                        <li>Таким образом каждый этап отсеивает половину вариантов, пока не останется один - победитель;
                        </li>
                    </ul>
                    <div class="buttons">
                        <button id="btn--po" @click="redirectToPlayOff">Выбрать "Плей-офф"</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

export default {
    name: "ChooseFormat",
    data() {
        return {
            thirtyTwo: 32,
            sixtyFor: 64,
        }
    },
    methods: {
        redirectToKing() {
            this.$router.push('/voting/KingOfMountain')
        },
        redirectToPlayOff() {
            this.$router.push('/voting/PlayOffs')
        }
    },

}
</script>

<style scoped>
.ChooseFormat{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 100px;
}
.modals {
    display: flex;
    justify-content: center;
    align-items: center;
}

.description__king, .description__play__offs {
    height: 400px;
    border: 2px solid white;
    margin-left: 100px;
    min-width: 300px;
    max-height: 1000px;
}

p {
    font-size: 20px;
    text-align: center;
}

li, #title--format {
    font-size: 20px;
    color: white;
}

button {
    width: 200px;
    height: 40px;
    background-color: gray;
    border: none;
    cursor: pointer;
    font-family: cursive;
    position: relative;
    bottom: 10px;
    left: 120px;
    border-radius: 10px;
}

.buttons {
    text-align: center;
    position: relative;
    right: 130px;
}

#title {
    color: gray;
    font-family: Tahoma, sans-serif;
    font-size: 30px;
}

#btn--king {
    position: relative;
    top: 15px
}
#btn--po{
    position: relative;
    top:16px
}
button{
    transition: transform 0.5s;
}
button:hover{
    transform: scale(1.1);
}
@media (max-width: 800px) {
    .ChooseFormat {
        position: absolute;
    }
    #btn--po{
        position: relative;
        top:-7px
    }
}
@media (max-width: 1000px) {
    .description__king, .description__play__offs {
        height: 500px;
    }
}
@media (max-width: 1200px) {
    .description__king, .description__play__offs {
        height: 550px;
    }
}



</style>
