import Vue from 'vue';
import Router from 'vue-router';
import tpl from '@/_vue/m/1/search-01-01.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'tpl',
            component: tpl
        }
    ]
});
