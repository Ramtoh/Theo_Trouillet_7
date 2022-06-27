<template>
    <div class="publication">
        <h1>Ajouter une publication</h1>
        <form class="publication__content" method="post" @submit.prevent="createPublication" action="/" enctype="multipart/form-data">
            <input class="publication__el publication__title" type="text" placeholder="Titre" v-model="title" required>
            <input class="publication__el publication__description" type="text" placeholder="Description" v-model="content" required>
                <button type="submit" class="submit__button" value="Upload" @click="createPublication">Publier</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'publish',
    data: function () {
        return {
            title: '',
            content: '',
            users: '',
        };
    },

    mounted() {
        axios
            .get("http://localhost:3000/user/me", {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token')
                }
            })

           .then(res => {
                this.users = res.data;
                console.log(res);
            })

            .catch(e => console.log(e));
    },

    methods: {
        createPublication() {
            console.log(localStorage.getItem('token'));
            let token = localStorage.getItem('token');
            axios
                .post("http://localhost:3000/main", {
                        title: this.title,
                        content: this.content,
                    },{
                    headers: {
                        'Content-Type' : 'application/json',
                        'Accept' : 'application/json',
                        'Authorization': `Bearer ${token}`,
                    }, 
                })
            .then(res => {
                console.log(res);
                // this.$router.push('/groupomania');
            })
            .catch(err => {
                console.log(err);
            })
        }
    }
}
</script>

<style>
    .publication {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: #ffffff;
        padding-top: 80px;
    }

    .publication h1 {
        letter-spacing: 1px;
    }

    .publication__content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        row-gap: 20px;
        padding-top: 20px;
    }

    .publication__el {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        min-width: 375px;
        border-radius: 10px;
        padding: 8px;
        border: none;
        border-radius: 8px;
        background: #f2f2f2;
        font-weight: 500;
        font-size: 16px;
        flex: 1; 
        color: black; 
        box-shadow: 0 6px 6px rgba(0,0,0,0.2);
    }

    .publication__title {
        min-height: 30px;
        padding-left: 5px;
    }

    .publication__description {
        min-height: 200px;
        padding-left: 5px;
    }

    .publication__img {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .submit__button { 
        padding: 8px;
        border: none;
        border-radius: 8px;
        background: #1c1c1e;
        font-weight: 500;
        font-size: 16px;
        flex: 1; 
        min-width: 375px;
        color: white; 
        box-shadow: 0 6px 6px rgba(0,0,0,0.2);
    }

    .submit__button:hover{
        background-color: #284F8F;
        cursor: pointer;
    }
</style>