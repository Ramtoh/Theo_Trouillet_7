<template>
    <div class="profile_page">
        <div class="user">
            <div v-if="mode =='myProfile'" class="return__main">
                <a @click="returnHome()">
                    <fa icon="angle-left" class="return__icon"/>
                </a>
            </div>
            <div class="user__main">
                <img class="user_image" src="../img/default_user.jpg" alt="">
                <div class="user_name">
                    <p class="user_firstname">{{ users.firstName }}</p>
                    <p class="user_lastname">{{ users.lastName }}</p>
                </div>

                <p class="user_email">{{ users.email }}</p>

                <div>
                    <button v-if="mode == 'myProfile'" @click="modifyProfile()">Modifier son profil</button>
                    <button v-else @click="myProfile()" type="submit">Retour au profil</button> <!-- valider les modifications --> 
                </div>
                <button v-if="mode =='modifyProfile'" @click="deleteProfile()" type="submit" class="deleteButton">Supprimer le profil</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: 'myProfile',
    data: function () {
        return {
            users: [],
            mode: 'myProfile',
        }
    },
    mounted() {
        axios
            .get("http://localhost:3000/user/me", {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token')
                }
            })

            .then(res => {
                this.users = res.data.users;
                console.log(res);
            })
            .catch(err => console.log(err));
    },

    methods: {
        myProfile: function () {
            this.mode = 'myProfile';
        },
        modifyProfile: function() {
            this.mode = 'modifyProfile';
        },
        returnHome() {
            this.$router.push({ path: '/groupomania' });
        },
        deleteProfile() {
            if (
                window.confirm("Souhaitez vous vraiment supprimer votre compte?")
            )
            axios
                .delete("http://localhost:3000/user/me/:id", {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem('token')
                    }
                })

                .then(() => {
                    localStorage.clear();
                    this.$router.push('/');
                })
        }
    }
};

</script>

<style scoped>
    .profile_page{
        padding-top: 10%;
    }

    .user{
        margin-top: 50px;
        background: #E3E3E1;
        border-radius: 25px;
        padding: 32px;
        row-gap: 22px;
    }

    .user__main {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        row-gap: 10px;
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

    .return__main a {
        color: #1c1c1e;
    }

    .return__icon {
        font-size: 35px;
    }

    .return__icon:hover {
        color: #284F8F;
        cursor: pointer;
    }

    .modify_profile_icon { 
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    button {
        padding: 8px;
        border: none;
        border-radius: 8px;
        background: #1c1c1e;
        font-weight: 500;
        font-size: 16px;
        flex: 1; 
        min-width: 100px;
        color: white; 
        box-shadow: 0 6px 6px rgba(0,0,0,0.2);
    }

    button:hover {
        background-color: #284F8F;
        cursor: pointer;
    }

    .deleteButton {
        background: #B22B27;
    }

    .deleteButton:hover {
        background-color: #C96B68;
    }
</style>