<template>
    <div class="profile_page">
        <div class="user">
            <img v-if="mode == 'myProfile'" class="user_image" src="../img/default_user.jpg">
            <div v-else>
                <p>Ajouter un avatar</p>
                <input type="file">
            </div>
            <div class="user_name">
                <p class="user_firstname">John</p>
                <p class="user_lastname">Doe</p>
            </div>

            <p class="user_email">example@outlook.fr</p>

            <div>
                <button v-if="mode == 'myProfile'" @click="modifyProfile()">Modifier son profil</button>
                <button v-else @click="myProfile()" type="submit">Valider les modifications</button> <!-- valider les modifications --> 
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'myProfile',
    data: function () {
        return {
            mode: 'myProfile',
        }
    },
    methods: {
        myProfile: function () {
            this.mode = 'myProfile';
        },
        modifyProfile: function() {
            this.mode = 'modifyProfile';
        }
    }
}

</script>

<style scoped>
    .profile_page{
        padding-top: 10%;
    }

    .user{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 60em;
        background: #E3E3E1;
        border-radius: 25px;
        padding: 32px;
        row-gap: 22px;
    }

    .user_image{
        display: flex;
        width: 250px;
        height: 250px;
        border-radius: 50%;
        border: 3px;
        background-repeat: no-repeat;
        background-position: center center;
        object-fit: cover;
        background-size: cover;
    }

    .user_name{
        font-weight: 700;
        display: flex;
        column-gap: 5px;
    }

    .user_email{
        display: flex;
    }
</style>