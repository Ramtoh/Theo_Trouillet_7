<template>
    <div class="groupomania">
        <header>
            <div class="container_header">
                <div class="container_header_logo">
                    <img src="../img/icon-left-font-monochrome-white.svg" alt="" class="logo">
                    <img src="../img/icon.png" alt="" class="logo2">
                </div>
            </div>

            <div class="container_header_modify">
                <nav>
                    <a href="" @click="myProfile()" class="myProfile">
                        <fa icon="user-circle"/>
                    </a>
                    <a href="" @click="addPost()" class="addPost">
                        <fa icon="plus-circle"/>
                    </a>  
                    <a href="" @click="disconnect()" class="disconnect">
                        <fa icon="power-off"/> 
                    </a>    
                </nav>
            </div>
        </header>

        <main>
            <div class="container">
                <div class="main_container">
                    <div class="welcome_message">
                        <h1>Bienvenue {{ users.retourDB.firstName }}, retrouvez le fil d'actualité :</h1>
                    </div>
                    <div id="publications" v-for="(post) in posts" :key="post.post_id">
                        <ul>
                            <li>
                                {{ post.users}}
                            </li>
                            <li>
                                {{ post.title }}
                            </li> 
                            <li>
                                {{ post.content }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>

        <footer>
            <div>
                <ul>
                    <li>
                        <a href="" class="footer_a">
                            <fa icon="phone"/>
                            Contact
                        </a>
                    </li>

                    <li>
                        <a href="" class="footer_a">
                            <fa icon="book-open"/>
                            Conditions générales d'utilisation
                        </a>
                    </li> 

                    <li>
                        <a href="" class="footer_a">
                            <fa icon="shield-virus"/>
                            Politique de protection des données personnelles
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    </div>  
</template>

<script>
import axios from "axios";
export default {
    name: 'groupomania',
    data: function () {
        return {
            mode: 'groupomania',
            users: [],
            posts: [],
            comments: [],
        }
    },
    beforeMount() {
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
            .catch(err => console.log(err));
    },
    mounted() {
        axios
            .get("http://localhost:3000/main", {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token')
                }
            })

            .then(res => {
                this.posts = res.data.posts;
            })

            .catch(err => console.log(err));
    },
    methods: {
        myProfile() {
            this.$router.push({ path: '/myProfile' });
        },
        addPost() {
            this.$router.push({ path: '/publish' });
        },
        disconnect() {
            if (
                window.confirm("Confirmation de déconnexion")
            )
            localStorage.clear();
            this.$router.push({ path: '/' });
        },
    }
}
</script>

<style scoped>    
    .container { 
        background-color: #E3E3E1;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 25px;
    }
    
    .main_container{
        display: flex;
        align-items: center;
        flex-direction: column;
        min-height: 80em;
        height: auto;
        width: 50em;
    }

    #publications {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 40px;
    }

    #publications ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        background-color: #1E1E1C;
        border-radius: 25px;
        width: 400px;
        padding: 20px;
    }

    #publications li {
        color: white;
    }

    .welcome_message h1 {
        padding-top: 20px;
        font-size: 1.5em;
    }

    .container_header {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 25px; 
        padding-bottom: 25px;
    }

    .container_header_modify {
        display: flex;
        justify-content: center;
    }

    .container_header_modify nav {
        display: flex;
        column-gap: 40px;
        padding-bottom : 20px;
    }
    
    .logo2 {
        display: none;
    }

    nav a {
        font-size: 40px;
        color: #E3E3E1;
    }

    nav a:hover {
        color: #284F8F;
    }

    .disconnect:hover {
        color: #B22B27;
    }

    #comment textarea {
        min-width: 29em;
        padding: 5px;
    }

    /* FOOTER */


    footer {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 150px;
        background-color: #3333;
    }

    footer ul {
        display: flex;
        row-gap: 15px;
        flex-direction: column;
        list-style: none;
    }

    .footer_a {
        text-decoration: none;
        font-size: 20px;
        color: #E3E3E1;
    }

    .footer_a:hover {
        color: #284F8F;
    }


    /* MEDIA QUERIES */
    @media screen and (max-width: 560px) {
        .logo{
            display: none;
        }

        .logo2{
            display: block;
            width: 150px;
            height: 150px;
            filter: brightness(0) invert(1);
        }
        
    }

    @media screen and (max-width: 840px) {
        .container {
            margin-left: 20px;
            margin-right: 20px;
        }
    }

    @media screen and (max-width: 500px) {
        footer {
            padding-left: 20px;
            padding-right: 20px;
        }
    }
</style>