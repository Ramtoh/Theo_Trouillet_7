import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/Login.vue";
import Profile from "@/views/myProfile.vue";
import mainpage from "@/views/main.vue";

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
        props: true
    },
    {
        name: 'groupomania',
        path: '/groupomania',
        component: mainpage,
    },
]

const router = createRouter ({
    history: createWebHistory(),
    routes,
})

export default router; 