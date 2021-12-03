<template>
    <div class="login_page">
        <div class="login_img">
            <img src="../img/icon-left-font-monochrome-white.svg" alt="" class="logo">
            <img src="../img/icon.png" alt="" class="logo2">
        </div>
        <div class="login">
            <h2 class="login_title" v-if="mode == 'login'">Connexion</h2>
            <h2 class="login_title" v-else>Inscription</h2>
            <form action="auth" method="POST">
                <div class="form_el" v-if="mode == 'create'">
                    <input type="text" class="form_el_input" placeholder="Prénom" required>
                    <input type="text" class="form_el_input" placeholder="Nom" required>
                </div>

                <div class="form_el">
                    <input type="text" class="form_el_input" placeholder="Adresse e-mail" required>
                </div>

                <div class="form_el">
                    <input type="password" class="form_el_input" placeholder="Mot de passe" required>
                </div>

                <div class="form_el" v-if="mode =='login'">
                    <button type="submit" class="form_el_input form_button">Se connecter</button>
                </div>

                <div class="form_el" v-else>
                    <button type="submit" class="form_el_input form_button">S'inscrire</button>
                </div>

                <div class="form_el" v-if="mode == 'login'">
                    <p>Vous n'êtes pas encore inscrit ? 
                        <a class="register_link" @click="createAccount()">S'inscrire ici</a>
                    </p>
                </div>

                <div class="form_el" v-else>
                    <p>Vous avez déjà un compte ? 
                        <a class="login_link" @click="moveToLogin()">Se connecter</a>
                    </p>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Login',
    data: function () {
        return {
            mode: 'login',
        }
    },
    methods: {
        createAccount: function() {
            this.mode = 'create';
        },
        moveToLogin: function() {
            this.mode = 'login';
        }
    }
};

</script>

<style scoped>
    .login_page{
        padding-top: 20%;
    }

    .form_el{
        display: flex;
        margin: 16px 0px;
        gap: 16px;
        flex-wrap: wrap;
    }

    .form_el_input{ 
        padding: 8px;
        border: none;
        border-radius: 8px;
        background: #f2f2f2;
        font-weight: 500;
        font-size: 16px;
        flex: 1; 
        min-width: 100px;
        color: black; 
        box-shadow: 0 6px 6px rgba(0,0,0,0.2);
    }

    .form_el_input::placeholder{
        color: #1c1c1e;
    }

    .form_button:hover{
        cursor: pointer;

    }

    .login_title{
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 10px;
    }

    .login_img{
        display: flex; 
        justify-content: center;
        align-items: center;
    }

    .logo{
        max-width: 100%;
        width: 30em;
        padding-bottom: 40px;
    }  

    .logo2{
        display: none;
    }

    .register_link, .login_link{
        text-decoration: underline;
        font-weight: 900;  
    }

    .register_link:hover, .login_link:hover{
        cursor: pointer; 
        color: #333333;
    }

    button {
        background-color: #1c1c1E !important;
        color: white !important;
    }

    button:hover{
        background-color: #333333 !important;
    }

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
</style>
