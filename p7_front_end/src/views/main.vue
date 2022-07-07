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
                        <fa id="user_circle" icon="user-circle"/>
                        <label for="user_circle" class="label_nav">Mon profil</label>
                    </a>
                    <a href="" @click="addPost()" class="addPost">
                        <fa id="plus-circle" icon="plus-circle"/>
                        <label for="plus-circle" class="label_nav">Ajouter un post</label>
                    </a>  
                    <a href="" @click="disconnect()" class="disconnect">
                        <fa id="power-off" icon="power-off"/> 
                        <label for="power-off" class="label_nav">Déconnexion</label>
                    </a>    
                </nav>
            </div>
        </header>

        <main>
            <div class="container">
                <div class="main_container">
                    <div class="welcome_message">
                        <h1>Bienvenue {{  users.firstName }}, retrouvez le fil d'actualité :</h1>
                    </div>
                    <div id="publications" v-for="(post) in posts" :key="post.post_id">
                        <ul>
                            <li>
                                {{ }} <!-- prenom et nom de l'auteur (author_id) -->
                            </li>
                            <li class="post_title">
                                {{ post.title }}
                                <div class="trashIcon" v-if="users.user_id==post.author_id || users.isAdmin == true" @click="deletePost(post.post_id)">
                                    <fa icon="trash"/>
                                </div>
                            </li> 
                            <li class="post_content">
                                {{ post.content }}
                            </li>
                            <li class="commentApost">
                                <div class="addComment">
                                    <form method="post" @submit.prevent="comment(post.post_id)" action="/" enctype="multipart/form-data">
                                        <input type="text" name="text" class="inputComment" placeholder="Insérez votre commentaire.." v-model="content" required>
                                        <button type="submit" value="Upload">Commenter</button>
                                    </form>
                                </div>
                            </li>
                            <li>
                                Commentaires :
                                {{  }} <!-- commentaires du post en question ? --> 
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

        axios
            .get("http://localhost:3000/main", {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token')
                }
            })

            .then(res => {
                this.posts = res.data.posts;
                console.log(res);
            })

            .catch(err => console.log(err));

        // axios
        //     .get("http://localhost:3000/main/comments/"+publicationId, 
        //     {
        //         headers: {
        //             Authorization: "Bearer " + localStorage.getItem('token')
        //         }
        //     })
        //     .then(res => {
        //         this.comments = res.data.comments;
        //         console.log(res);
        //     })

        //     .catch(err => console.log(err));
    },
    methods: {
        deletePost(id) {
            let token = localStorage.getItem('token');

            if (
                window.confirm("Le post va être supprimé")
            )

            axios
                .delete("http://localhost:3000/main/"+id,
            {
                headers: {
                    'Content-Type' : 'application/json',
                    'Accept' : 'application/json',
                    'Authorization': `Bearer ${token}`,
                },      
            })
            .then(res => {
                console.log(res);
                window.location.reload();
            })
            .catch(error => console.log(error));
        },

        comment(postId) {
        let token = localStorage.getItem('token');
          {
            axios
                .post("http://localhost:3000/main/comments/"+postId,
                    {
                        content: this.content,
                        publicationId: postId
                    },
                    {
                        headers: {
                            'Content-Type' : 'application/json',
                            'Accept' : 'application/json',
                            'Authorization': `Bearer ${token}`,
                        }
                    })
                .then(res => {
                    console.log(res);
                    window.location.reload();
                })
                .catch(error => console.log(error));
          }  
        },

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
        padding-top: 20px;
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
        align-items: center;
        display:flex;
    }

    #publications button { 
        color: white;
        width: 100%;
        background-color: #3333;
        margin-top: 10px;
        margin-bottom: 10px;
        padding: 5px;
        border-radius: 8px;
        border-color: #E3E3E1;
        opacity: 0.5;
    }

    #publications button:hover {
        opacity: 1;
    }

    .label_nav{
        font-size: 20px;
    }
    
    .commentApost{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 15px;
    }
    .addComment {
        display: flex;
    }

    .inputComment {
        border: 1px solid #ccc;
        height: auto;
        margin-top: 5px;
        min-height: 10px;
        overflow: auto;
        padding: 5px;
        width: 360px;
        word-break: break-word;
    }
    .addComment form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    
    .textComment{
        height: 50px;
    }

    .trashIcon{ 
        color: white;
    }

    .trashIcon:hover {
        color: #B22B27;
        transition: 0.5s;
    }

    .welcome_message h1 {
        padding-top: 20px;
        font-size: 1.5em;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .post_title{ 
        font-weight: 700;
        font-size: 20px; 
        padding-bottom: 20px;
        display: flex;
        justify-content:space-between;
    }

    .post_content{
        background-color: #E3E3E1;
        color: #1E1E1C!important;
        padding: 10px;
        border-radius: 15px;
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
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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

    @media screen and (max-width: 510px) {
        .container {
            margin-left: 0px;
            margin-right: 0px;
        }
    }

    @media screen and (max-width: 500px) {
        footer {
            padding-left: 20px;
            padding-right: 20px;
        }
    }
</style>