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
                    <h1>Bienvenue {{ users.firstName }}, retrouvez le fil d'actualité :</h1>
                    <div id="publications">
                            <div class="container_post">
                                <div class="publication__header">
                                    <div class="publication__author">
                                        <img src="" alt="" />
                                        <p>{{users.firstName}}</p>
                                        <p>{{users.lastName}}</p>
                                    </div>
                                </div>
                                <!-- <li>
                                    {{this.posts[0].title}}
                                </li> -->
                                <li v-for="post in posts" :key="post.post_id">
                                    {{ post.title }}
                                </li>

                                <div class="publication__main">
                                    <div class="publication__mainTitle">
                                        <h2>{{posts.title}}</h2>
                                    </div>
                                    <div class="publication__mainContent">
                                        <span>
                                            {{posts.content}}
                                        </span>
                                    </div>
                                    <!-- <div id="comment">
                                            <textarea type="text" id="comment" v-model="content" placeholder="Ajoutez un commentaire.."></textarea>
                                            <a v-on:click="createComment()">
                                                <fa icon="fa-comments" title="Commenter"/>
                                            </a>
                                        </div> -->
                                </div>
                            </div>

                            <!-- <ul class="showComments">
                                <li>
                                    <h3>{{comments.authorId.firstName}}</h3>
                                     <span>{{content}}</span>

                                    <p v-if="users.user_id==comments.authorId || users.isAdmin">
                                        <button @click.prevent="deleteComment(comments.comment_id, comments.authorId)" id="delete_button" >
                                            <fa icon="fa-solid fa-trash-can-slash" />
                                        </button>
                                    </p>
                                </li>
                            </ul> -->
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

    mounted() {
        axios
            .get("http://localhost:3000/auth/me", {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token')
                }
            })

            .then(res => {
                this.users = res.data;
                console.log(res);
            })
            .catch(err => console.log(err));
// recupere les differents posts de l'API
        axios
            .get("http://localhost:3000/main", {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token')
                }
            })

            .then(res => {
                console.log(res);
                this.post = res.data.posts;
                console.log(res.data.posts);
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

    .container_post {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 200px;
        width: 40em;
    }

    .main_container h1 {
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