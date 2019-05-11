import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import home from '../pages/home-z.vue';
import information from '../pages/information-z.vue';
import amusement from '../pages/amusement-z.vue';
import details from '../pages/details-z.vue';
import shoppingcart from '../pages/shoppingcart-z.vue';
import user from '../pages/user-z.vue';
import login from '../pages/login-z.vue';
import reg from '../pages/reg-z.vue';
import error from '../pages/error-z.vue';
let routes=[
    {path:'/home',component:home},
    {path:'/information',component:information},
    {path:'/amusement',component:amusement},
    {name:'details',path:'/details/:id',component:details},
    {path:'/shoppingcart',component:shoppingcart},
    {path:'/user',component:user},
    {path:'/login',component:login},
    {path:'/reg',component:reg},
    {path:'/',redirect:'/home'},
    {path:'*',component:error},
];
let router = new VueRouter({routes});

export default router;