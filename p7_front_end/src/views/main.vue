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
                    <h1>Fil d'actualité</h1>


                    <div id="publications">
                        <!-- INJECTION HTML PAR JS -->
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
export default {
    name: 'groupomania',
    data: function () {
        return {
            mode: 'groupomania',
        }
    },
    methods: {
        myProfile() {
            this.$router.push({ path: '/myProfile' });
        },
        addPost() {
            this.$router.push({ path: '/publish' });
        },
        disconnect() {
            // 
        },
    }
}

// let containerPublication = document.getElementById("publications");

// const publication = item => {
//     containerPublication.innerHTML =
//     `
//         <div class="publication">
//             <div class="publication__header">
//                 <div class="publication__author">
//                     <img src="" alt="" />
//                     <p>{users.firstName}</p>
//                     <p>{user.lastName}</p>
//                 </div>
//             </div>

//             <div class="publication__main">
//                 <div class="publication__mainTitle">
//                     <h2>Title</h2>
//                 </div>
//                 <div class="publication__mainContent">
//                     <img src="" alt="" />
//                     <span class="publication__mainDescription">
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, 
//                         dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, 
//                         varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi
//                     </span>
//                 </div>
//             </div>

//             <div class="publication__likes">
//                 <div class="like">
//                     <fa icon="thumbs-up" />
//                 </div>
//                 <div class="dislike">
//                     <fa icon="thumbs-down" />
//                 </div>
//             </div>

//             <div class="publication__comments">
//                 <p>comments</p>
//             </div>
//         </div>
//     `
// }

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
        justify-content: center;
        min-height: 80em;
        height: auto;
        width: 50em;
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