import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import itemView from '../views/ItemView.vue';

Vue.use(VueRouter);


export const router = new VueRouter({
  mode :'history',
  routes:[
    {
        path : '/',
        redirect: '/news',
    },
    {
        path : '/news',
        component: NewsView,
    },
    {
        path : '/ask',
        component: AskView,
    },
    {
        path : '/jobs',
        component: JobsView,
    },
    {
        path : '/item',
        component: itemView,
    }
    ,
    {
        path : '/user',
        component: UserView,
    }
  ]
})
