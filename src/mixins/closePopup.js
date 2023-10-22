export default {
    data() {
        return {
            isPopupOpen:false
        }
    },
    methods:{
        closePopup() {
            this.isPopupOpen=false
        }
    },
    mounted() {
        let vm=this
        document.addEventListener('click', function (item) {
            if (item.target === vm.$refs['wrapperData']) {
                vm.isPopupOpen=false
            }
        })
        window.addEventListener('keyup', function (event) {
            if (event.keyCode === 27) {
                vm.isPopupOpen = false;
            }
        })
    }
}
