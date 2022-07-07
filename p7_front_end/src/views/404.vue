<template>
    <main>
        <h1>404 Not Found</h1>
        <button @click="goHome()">
            <fa class="goHome" icon="home"/>
        </button>
    </main>
</template>

<script>
export default {
    name: "pageNotFound",

    methods: {
        goHome() {
            this.$router.push({ path: '/groupomania' })
        }
    }
}

</script>

<style scoped>
    main {
        display: flex; 
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    h1 {
        padding-top: 40px;
    }

    button {
        border-radius: 50%;
        width: 80px;
        height: 80px;
        margin-top: 20px;
    }

    .goHome:hover { 
        color: #284F8F;
    }

    .goHome {
        width: 50px;
        height: 50px;
    }
</style>