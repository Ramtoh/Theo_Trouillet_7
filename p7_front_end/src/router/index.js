import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/Login.vue";
import Profile from "@/views/myProfile.vue";
import mainpage from "@/views/main.vue";
import publish from "@/views/publication.vue";
import PageNotFound from '@/views/404.vue';
import { ifAuthenticated } from "../middleware/auth";

const routes = [
    {
        name: 'login',
        path: '/',
        component: Login,
    },
    {
        name: 'profile',
        path: '/myProfile',
        component: Profile,
        props: true,
        beforeEnter: ifAuthenticated
    },
    {
        name: 'groupomania',
        path: '/groupomania',
        component: mainpage,
        beforeEnter: ifAuthenticated
    },
    {
        name: 'publish',
        path: '/publish',
        component: publish,
        beforeEnter: ifAuthenticated
    },
    {
        name: 'pageNotFound',
        path: '/:pathMatch(.*)*',
        component: PageNotFound
    }
]

const router = createRouter ({
    history: createWebHistory(),
    routes,
})


export default router; 