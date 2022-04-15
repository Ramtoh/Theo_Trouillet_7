import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/Login.vue";
import Profile from "@/views/myProfile.vue";
import mainpage from "@/views/main.vue";
import publish from "@/views/publication.vue";

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
    },
    {
        name: 'groupomania',
        path: '/groupomania',
        component: mainpage,
    },
    {
        name: 'publish',
        path: '/publish',
        component: publish,
    }
]

const router = createRouter ({
    history: createWebHistory(),
    routes,
})

export default router; 