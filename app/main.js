import Vue from 'vue'
import "vueify/lib/insert-css"
import bootstrap from "bootstrap";
import Testing from "./components/testing.vue";

Vue.config.productionTip = false

new Vue({
    el: '#vue-app',
    components: {
        Testing
    }
})
