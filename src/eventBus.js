import Vue from 'vue'

export default new Vue({
    methods : {
        emitEvent(eventName,data){
            this.$emit(eventName,data)
        },
        listenEvent(eventName,callback){
            this.$on(eventName,callback)
        }
    }
})