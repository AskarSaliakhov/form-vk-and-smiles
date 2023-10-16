<template>
    <div class="Main">
        <p id="title">Выбор переговорной</p>
        <div class="towers">
            <p id="title--choose">Выбранная башня</p>
            <Multiselect
                :options="towers"
                placeholder="Выберите башню"
                v-model="selectedTower"
                :data-pointed="false"
                :class="{is__selected__tower:this.isSelectedInfoAll.isSelectedTowerInfo}"
            />
        </div>

        <div class="floors__and__rooms">
            <div class="floors">
                <p id="title--choose">Выбранный этаж</p>
                <Multiselect
                    :options="floors"
                    placeholder="Выберите этаж"
                    v-model="selectedFloor"
                    class="select__floor"
                    :class="{is__selected__floor:this.isSelectedInfoAll.isSelectedFloorInfo}"

                />
            </div>
            <div class="meeting__rooms">
                <p id="title--choose">Выбранная Переговорка</p>
                <Multiselect
                    :options="meetingForms"
                    placeholder="Выберите переговорку"
                    class="select__meeting__room"
                    v-model="selectedMeetingForm"
                    :class="{is__selected__meeting__room:this.isSelectedInfoAll.isSelectedMeetingRoomInfo}"
                />
            </div>
        </div>

        <div class="choose__day"
        >
            <p id="title--choose">Выбранный день</p>
            <DatePicker
                :available-dates='{ start: new Date(), end: null }'
                v-model='date'
                show-weeknumbers
                :class="{is__selected__day:this.isSelectedInfoAll.isSelectedDayInfo}"
            >
                <template v-slot="{ inputValue, inputEvents }">
                    <input
                        class="bg-white border px-2 py-1 rounded input__day"
                        :value="inputValue"
                        v-on="inputEvents"
                        placeholder="Выберите дату"
                    />
                </template>
            </DatePicker>
        </div>

        <div class="times">
            <div class="started__time">
                <p id="title--choose">Время начала</p>
                <Multiselect
                    v-model="selectedTime"
                    :options="allTimes"
                    placeholder="Выберите время"
                    class="select__started__time"
                    @input="chooseSelectedTime"
                    :class="{is__selected__started__time:this.isSelectedInfoAll.isSelectedTimeInfo}"
                />

            </div>
            <div class="finished__time">
                <p id="title--choose">До</p>
                <Multiselect
                    :options="finishedTimes"
                    :disabled="!disabled"
                    :class="{is__disabled:showDisabled,finished__selected__time:this.isSelectedInfoAll.isSelectedFinishTimeInfo}"
                    v-model="selectedFinishedTime"
                    placeholder="Выберите конец"
                />
            </div>
        </div>


        <div class="comment">
            <Smiles
                :clear="clear"
                @cleared="resetClear"
            />
            <div class="btns">
                <button id="btn--send" type="submit" @click="sendData">Отправить</button>
                <button id="btn--clear" @click="cleanDataForm">Очистить</button>
            </div>
        </div>
    </div>
</template>

<script>
import Smiles from "@/components/Smiles";
import Multiselect from "@vueform/multiselect/dist/multiselect.vue2.js";
import DatePicker from "v-calendar/lib/components/date-picker.umd";


export default {
    name: "theForm",
    data() {
        return {
            // для v-model'ов
            selectedTower: '',
            selectedFloor: '',
            selectedMeetingForm: '',
            selectedTime: '',
            selectedFinishedTime: '',

            finishedTimes: [],
            towers: [
                {
                    label: 'Башня 1',
                    value: 'А'
                },
                {
                    label: 'Башня 2',
                    value: 'Б'
                }
            ],
            allTimes: [
                {
                    label: '08:00',
                    value: 480
                },
                {
                    label: '08:30',
                    value: 510
                },
                {
                    label: '09:00',
                    value: 540
                },
                {
                    label: '09:30',
                    value: 570
                },
                {
                    label: '10:00',
                    value: 600
                },
                {
                    label: '10:30',
                    value: 630
                },
                {
                    label: '11:00',
                    value: 660
                },
                {
                    label: '11:30',
                    value: 690
                },
                {
                    label: '12:00',
                    value: 720
                },
                {
                    label: '12:30',
                    value: 750
                },
                {
                    label: '13:00',
                    value: 780
                },
                {
                    label: '13:30',
                    value: 810
                },
                {
                    label: '14:00',
                    value: 840
                },
                {
                    label: '14:30',
                    value: 870
                },
                {
                    label: '15:00',
                    value: 900
                },
                {
                    label: '15:30',
                    value: 930
                },
                {
                    label: '16:00',
                    value: 960
                },
                {
                    label: '16:30',
                    value: 990
                },
                {
                    label: '17:00',
                    value: 1020
                },
                {
                    label: '17:30',
                    value: 1050
                },
                {
                    label: '18:00',
                    value: 1080
                },
                {
                    label: '18:30',
                    value: 1110
                },
                {
                    label: '19:00',
                    value: 1140
                },
                {
                    label: '19:30',
                    value: 1170
                },
                {
                    label: '20:00',
                    value: 1200
                },
            ],
            meetingForms: [
                {
                    label: 'Переговорка 1',
                    value: 'meetingRoom1'
                },
                {
                    label: 'Переговорка 2',
                    value: 'meetingRoom2'
                },
                {
                    label: 'Переговорка 3',
                    value: 'meetingRoom3'
                },
                {
                    label: 'Переговорка 4',
                    value: 'meetingRoom4'
                },
                {
                    label: 'Переговорка 5',
                    value: 'meetingRoom5'
                },
                {
                    label: 'Переговорка 6',
                    value: 'meetingRoom6'
                },
                {
                    label: 'Переговорка 7',
                    value: 'meetingRoom7'
                },
                {
                    label: 'Переговорка 8',
                    value: 'meetingRoom8'
                },
                {
                    label: 'Переговорка 9',
                    value: 'meetingRoom9'
                }
            ],
            floors: [
                {
                    label: 'Этаж 1',
                    value: 1
                },
                {
                    label: 'Этаж 2',
                    value: 2
                },
                {
                    label: 'Этаж 3',
                    value: 3
                },
                {
                    label: 'Этаж 4',
                    value: 4
                },
                {
                    label: 'Этаж 5',
                    value: 5
                },
                {
                    label: 'Этаж 6',
                    value: 6
                },
                {
                    label: 'Этаж 7',
                    value: 7
                },
                {
                    label: 'Этаж 8',
                    value: 8
                },
                {
                    label: 'Этаж 9',
                    value: 9
                },
                {
                    label: 'Этаж 10',
                    value: 10
                }
            ],
            clear: false,
            disabled: 0,
            showDisabled: true,
            date: '',
            // чтобы отправить в консоль
            dataForm: {
                selectedTower: null,
                selectedFloor: null,
                selectedMeetingForm: null,
                selectedDay: null,
                selectedTime: null,
                selectedFinishedTime: null,
            },
            // если не выбрано, то option становится красным
            isSelectedInfoAll: {
                isSelectedTowerInfo: false,
                isSelectedFloorInfo: false,
                isSelectedMeetingRoomInfo: false,
                isSelectedDayInfo: false,
                isSelectedTimeInfo: false,
                isSelectedFinishTimeInfo: false
            },
        }
    },
    components: {
        Multiselect, Smiles, DatePicker
    },
    methods: {
        sendData() {
            if (this.dataForm.selectedTower && this.dataForm.selectedFloor && this.dataForm.selectedMeetingForm && this.dataForm.selectedTime && this.dataForm.selectedFinishedTime) {
                !this.$toast.success("Информация выведена в консоль", {
                    timeout: 2500,
                });
                console.log(JSON.stringify(this.dataForm))
            } else {
                if (this.dataForm.selectedTower === null || this.dataForm.selectedTower === "") {
                    this.isSelectedInfoAll.isSelectedTowerInfo = true
                }
                if (this.dataForm.selectedFloor === null || this.dataForm.selectedFloor === "") {
                    this.isSelectedInfoAll.isSelectedFloorInfo = true
                }
                if (this.dataForm.selectedMeetingForm === null || this.dataForm.selectedMeetingForm === "") {
                    this.isSelectedInfoAll.isSelectedMeetingRoomInfo = true
                }
                if (this.dataForm.selectedDay === null || this.dataForm.selectedDay === "") {
                    this.isSelectedInfoAll.isSelectedDayInfo = true
                }
                if (this.dataForm.selectedTime === null || this.dataForm.selectedTime === "") {
                    this.isSelectedInfoAll.isSelectedTimeInfo = true
                }
                if (this.dataForm.selectedFinishedTime === null || this.dataForm.selectedFinishedTime === "") {
                    this.isSelectedInfoAll.isSelectedFinishTimeInfo = true
                }
            }
        },
        cleanDataForm() {
            this.clear = true
            this.isSelectedInfoAll.isSelectedTowerInfo =
                this.isSelectedInfoAll.isSelectedFloorInfo =
                    this.isSelectedInfoAll.isSelectedMeetingRoomInfo =
                        this.isSelectedInfoAll.isSelectedDayInfo =
                            this.isSelectedInfoAll.isSelectedTimeInfo =
                                this.isSelectedInfoAll.isSelectedFinishTimeInfo =
                                    false
            this.selectedTower = this.selectedFloor = this.selectedMeetingForm = this.selectedTime = this.selectedFinishedTime = this.date = ""
        },
        resetClear() {
            this.clear = false
        },
        chooseSelectedTime() {
            this.disabled = 1
            this.showDisabled = false
            this.finishedTimes = []
            const firstTime = this.selectedTime
            for (let i = 1; i <= 4; i++) {
                this.selectedTime += 30;
                this.finishedTimes.push({
                    label: this.toHoursAndMinutes,
                    value: this.selectedTime
                })
            }
            this.selectedTime = firstTime
        },
        cleanComment() {

        }
    },
    computed: {
        toHoursAndMinutes() {
            const minutes = this.selectedTime % 60;
            const hours = Math.floor(this.selectedTime / 60);
            return hours.toString().padStart(2, '0') + ":" + minutes.toString().padStart(2, '0')
        },
    },
    watch: {
        selectedTower() {
            this.isSelectedInfoAll.isSelectedTowerInfo = false
            this.dataForm.selectedTower = this.selectedTower
        },
        selectedFloor() {
            this.isSelectedInfoAll.isSelectedFloorInfo = false
            this.dataForm.selectedFloor = this.selectedFloor
        },
        selectedMeetingForm() {
            this.isSelectedInfoAll.isSelectedMeetingRoomInfo = false
            this.dataForm.selectedMeetingForm = this.selectedMeetingForm
        },
        selectedTime() {
            this.dataForm.selectedTime = false
            if (this.selectedTime === null) {
                this.disabled = 0
                this.selectedFinishedTime = ""
                this.isSelectedInfoAll.isSelectedTimeInfo = true
            } else {
                this.dataForm.selectedTime = this.selectedTime
            }
            this.isSelectedInfoAll.isSelectedTimeInfo = false
        },
        selectedFinishedTime() {
            this.dataForm.selectedFinishedTime = false
            this.dataForm.selectedFinishedTime = this.selectedFinishedTime
            this.isSelectedInfoAll.isSelectedFinishTimeInfo = false
        },
        date() {
            this.dataForm.selectedDay = false
            this.dataForm.date = this.date
        },
    }
}
</script>

<style scoped>
.Main {
    min-width: 360px;
    min-height: 400px;
    border-radius: 10px;
    background-color: white;
    padding: 0 20px 20px 20px;
    max-height: 600px;
    border: 1px solid #e0e0e0;
    overflow-y: auto;
}



.select__floor, .select__meeting__room {
    width: 240px;
}

.meeting__rooms, .finished__time {
    margin-left: 20px;
}

.floors__and__rooms, .times {
    display: flex;
}

.started__time, .finished__time {
    background-color: white;
}

.btns {
    display: flex;
    width: 500px;
    margin-top: 20px;
}

#btn--clear {
    margin-left: 10px;
    padding: 0 10px 0 10px;
}

#btn--clear, #btn--send {
    border-radius: 10px;
    height: 50px;
    width: 100%;
    border: none;
    cursor: pointer;
}

#btn--send {
    background-color: #2688eb;
    color: white;
}

#btn--clear {
    background-color: #f5f5f5;
    color: #2688eb;
}

textarea {
    resize: none;
    width: 400px;
    max-height: 50px;
    padding: 10px 10px 0 10px;
}


#title {
    font-size: 20px;
    font-weight: 600;
    font-family: sans-serif;
}

*::-webkit-input-placeholder {
    color: #6d7885;
    font-family: sans-serif;
}

*:-moz-placeholder {
    color: #6d7885;
    font-family: sans-serif;
    opacity: 1;
    padding: 5px;
}

*::-moz-placeholder {
    color: #6d7885;
    font-family: sans-serif;
    opacity: 1;
    padding: 5px;
}

*:-ms-input-placeholder {
    color: #6d7885;
    font-family: sans-serif;
    padding: 5px;
}

*::-ms-input-placeholder {
    color: #6d7885;
    font-family: sans-serif;
    padding: 5px;
}

*::placeholder {
    color: #6d7885;
    font-family: sans-serif;
    padding: 5px;
}

.is__disabled {
    background-color: rebeccapurple;
    outline: none;
}

.input__day {
    width: 489px;
    height: 35px;
    border-radius: 10px;
    border: none;
    background-color: #f2f3f5;
    padding-left: 10px;
}

.vc-container.vc-blue {
    background-color: red;
}

.is__selected__tower, .is__selected__floor, .is__selected__meeting__room, .is__selected__day, .is__selected__started__time, .finished__selected__time {
    outline: 1px solid red;
}

.is__selected__day {
    border-radius: 30px;
}
@media screen and (max-width: 400px){
    .floors__and__rooms{
        width: 300px;
    }
    .floors{
        max-width: 200px;
    }
    #btn--send,#btn--clear{
        width: 180px;
    }
}
</style>
