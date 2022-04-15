<template>
    <div class="login_page">
        <div class="login_img">
            <img src="../img/icon-left-font-monochrome-white.svg" alt="" class="logo">
            <img src="../img/icon.png" alt="" class="logo2">
        </div>
        <div class="login">
            <h2 class="login_title" v-if="mode == 'login'">Connexion</h2>
            <h2 class="login_title" v-else>Inscription</h2>

            <div class="form_el" v-if="mode == 'login'">
                <p>Vous n'êtes pas encore inscrit ? 
                    <a class="register_link" @click="moveToRegister()">S'inscrire ici</a>
                </p>
            </div>
            <div class="form_el" v-else>
                <p>Vous avez déjà un compte ? 
                    <a class="login_link" @click="moveToLogin()">Se connecter</a>
                </p>
            </div>

            <div class="form_el" v-if="mode == 'create'">
                <input type="text" class="form_el_input" v-model="firstName" placeholder="Prénom" required>
                <input type="text" class="form_el_input" v-model="lastName" placeholder="Nom" required>
            </div>

            <div class="form_el">
                <input type="text" class="form_el_input" v-model="email" placeholder="Adresse e-mail" required>
            </div>

            <div class="form_el">
                <input type="password" class="form_el_input" v-model="password" placeholder="Mot de passe" required>
            </div>

            <div class="form_el">
                <button @click="login()" class="button form_el_input" v-if="mode == 'login'">
                    <span v-if="status == 'loading'">Connexion en cours..</span>
                    <span v-else>Connexion</span>
                </button>
                <button @click="createAccount()" class="button form_el_input" v-else>
                    <span v-if="status == 'loading'">Création du compte..</span>
                    <span v-else>Créer mon compte</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data: function () {
        return {
            mode: 'login',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        }
    },
    methods: {
        moveToRegister: function() {
            this.mode = 'create';
        },
        moveToLogin: function() {
            this.mode = 'login';
        },
        login: function() {
            this.$store.dispatch('login', {
                email: this.email,
                password: this.password,
            })
            .then(response => {
                localStorage.setItem('token', response.data.retourDB.accessToken);
                this.$router.push('/groupomania');
            }),
            function(error) {
                console.log(error);
            }; 
        },
        createAccount: function() {
            this.$store.dispatch('createAccount', {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                password: this.password,
            }).then(function (response) {
                console.log(response);
                alert('Votre compte a été correctement créé !');
            }, function (error) {
                console.log(error);
            })
        },
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
        color: #284F8F;
        cursor: pointer;
    }

    button {
        background-color: #1c1c1E !important;
        color: white !important;
    }

    button:hover{
        background-color: #284F8F !important;
        cursor: pointer;
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
