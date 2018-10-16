import Vue from 'vue'
import Router from 'vue-router'
import BootstrapContainer from '../components/bootstrap_container'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'BootstrapContainer',
        component: BootstrapContainer
    }]
})
