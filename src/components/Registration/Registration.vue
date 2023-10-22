<template>
    <div class="Registration">
        <div v-if="isPopupOpen" class="incorrect__data__wrapper" ref="wrapperData">
            <div class="incorrect__data">
                <p id="tittle--wrong">Проверьте,что данные верны</p>
                <img id="close--btn" src="../../assets/close.png" @click="closePopup" alt="закрыть окно">
                <ul>
                    <li class="incorrect__message">Проверьте,что номер телефона из 11 цифр.</li>
                    <li class="incorrect__message">Проверьте,что длина длина пароля больше 5 символов.</li>
                    <li class="incorrect__message">Проверьте,что пароли совпадают.</li>
                    <li class="incorrect__message">Проверьте,что пароль содержит только латинские буквы,одну заглавную и
                        минимум одну цифру.
                    </li>
                </ul>
            </div>
        </div>
        <div class="form">
            <div class="title">Добро пожаловать!</div>
            <div class="subtitle">Создайте аккаунт</div>
            <div class="input-container ic1">
                <input id="firstname" class="input" v-mask="['# (###) ###-##-##']" placeholder=""
                       v-model="phoneNumber"/>
                <div class="cut"></div>
                <label for="firstname" class="placeholder">Номер телефона</label>
            </div>
            <div class="input-container ic2">
                <input id="lastname" class="input" onkeypress="return (event.charCode >= 65 && event.charCode
                                                           <= 90) || (event.charCode >= 97 && event.charCode <= 122) ||
                                                            (event.charCode >= 48 && event.charCode <= 57)"
                       type="password" placeholder="" v-model="password"/>
                <div class="cut"></div>
                <label for="lastname" class="placeholder">Пароль</label>
            </div>
            <div class="input-container ic2">
                <input id="email" class="input" onkeypress="return (event.charCode >= 65 && event.charCode
                                                           <= 90) || (event.charCode >= 97 && event.charCode <= 122) ||
                                                            (event.charCode >= 48 && event.charCode <= 57)"
                       type="password" placeholder=" " v-model="repeatPassword"/>
                <div class="cut cut-short"></div>
                <label for="email" class="placeholder">Повторите пароль</label>
            </div>
            <button type="submit" class="submit" @click="clearDataInForm">Очистить форму</button>
            <button type="submit" class="submit" :class="{btn__disabled:isAlreadyLogIn}" @click="handleRegistrated"
                    :disabled="isAlreadyLogIn">Зарегистрироваться
            </button>
        </div>
    </div>
</template>

<script>

import {mapActions} from "vuex";
import {mask} from "vue-the-mask"
import closePopup from "@/mixins/closePopup";

export default {
    name: "Registration",
    directives: {mask},
    data() {
        return {
            phoneNumber: "",
            password: "",
            repeatPassword: "",
            isDataRight: null,
            isAlreadyLogIn: false,
        }
    },
    methods: {
        ...mapActions(["registrate"]),
        handleRegistrated() {
            if (this.password === this.repeatPassword &&
                this.password.length > 0 &&
                this.repeatPassword.length > 0 &&
                this.password.length > 5 &&
                this.phoneNumber.length === 17 &&
                this.onlyLettersAndNumbers(this.password)
            ) {
                this.isDataRight = this.isAlreadyLogIn = true;
                this.registrate();
                history.back();
            } else {
                this.isPopupOpen = true
            }
        },
        onlyLettersAndNumbers(str) {
            return (/\d/.test(str) && /[a-z]/.test(str) && /[A-Z]/.test(str))
        },
        clearDataInForm() {
            this.password = this.repeatPassword = this.phoneNumber = "";
        }
    },
    mounted() {
        this.$store.watch(
            (state, getters) => getters.IS_REGISTERED,
            (newValue) => {
                if (newValue === true) {
                    this.isDataRight = true;
                    this.isAlreadyLogIn = false;
                }
            }
        )
    },
    mixins: [closePopup]

}
</script>

<style scoped>
body {
    align-items: center;
    background-color: #000;
    display: flex;
    justify-content: center;
    height: 100vh;
}

.Registration {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 60px
}

.form {
    background-color: #15172b;
    border-radius: 20px;
    box-sizing: border-box;
    height: 620px;
    padding: 10px;
    width: 450px;
    position: relative;
    bottom: 20px;
    word-break: break-all;
}

.title {
    color: #eee;
    font-family: sans-serif;
    font-size: 36px;
    font-weight: 600;
    margin-top: 30px;
}

.subtitle {
    color: #eee;
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 600;
    margin-top: 10px;
}

.input-container {
    height: 50px;
    position: relative;
    width: 100%;
}

.ic1 {
    margin-top: 40px;
}

.ic2 {
    margin-top: 30px;
}

.input {
    background-color: #303245;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #eee;
    font-size: 18px;
    height: 100%;
    outline: 0;
    padding: 4px 20px 0;
    width: 100%;
}

.cut {
    background-color: #15172b;
    border-radius: 10px;
    height: 20px;
    left: 20px;
    position: absolute;
    top: -20px;
    transform: translateY(0);
    transition: transform 200ms;
    width: 76px;
}

.cut-short {
    width: 50px;
}

.input:focus ~ .cut,
.input:not(:placeholder-shown) ~ .cut {
    transform: translateY(8px);
}

.placeholder {
    color: #65657b;
    font-family: sans-serif;
    left: 20px;
    line-height: 14px;
    pointer-events: none;
    position: absolute;
    transform-origin: 0 50%;
    transition: transform 200ms, color 200ms;
    top: 20px;
}

.input:focus ~ .placeholder,
.input:not(:placeholder-shown) ~ .placeholder {
    transform: translateY(-30px) translateX(10px) scale(0.75);
}

.input:not(:placeholder-shown) ~ .placeholder {
    color: #808097;
}

.input:focus ~ .placeholder {
    color: white;
}

.submit {
    background-color: #0f1015;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #eee;
    cursor: pointer;
    font-size: 18px;
    height: 50px;
    margin-top: 38px;
    text-align: center;
    width: 100%;
}

.incorrect__data {
    width: 500px;
    height: 500px;
    border: 1px solid white;
    background-color: #0f1015;
    cursor: pointer;
    overflow: hidden;
    z-index: 10;
}

p, li {
    color: white;
    font-size: 20px;
}

.incorrect__data {
    background: #0f1015;
    width: 500px;
    height: 300px;
    border: 3px solid #0f1015;
    box-shadow: 0 0 10px 0 #0f1015;
    z-index: 999;
    position: absolute;
    left: 400px;
    top: 50px;
}

.incorrect__data__wrapper {
    width: 100vw;
    height: 100vh;
    background-color: rgba(64, 64, 64, 0.4);
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    top: 0;
    z-index: 999;
    cursor: pointer;
}

.incorrect__message, #tittle--wrong {
    position: relative;
    top: 50px
}

#tittle--wrong {
    padding-left: 23px;
}

#close--btn {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 10px;
    left: 450px;
}

.btn__disabled {
    background-color: #afafaf;
    color: #15172b;
}

.title, .subtitle {
    padding-left: 10px;
}

</style>
