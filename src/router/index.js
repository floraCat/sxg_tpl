import Vue from 'vue';
import Router from 'vue-router';
import tpl from '@/_vue/m/1/cat-02-01.vue';

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
