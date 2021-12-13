<template>
      <html>
        <header>
            <div class="container_header">
                <div class="container_header_logo">
                    <img src="../img/icon-left-font-monochrome-white.svg" alt="" class="logo">
                    <img src="../img/icon.png" alt="" class="logo2">
                </div>
                <div class="container_header_modify">
                    <nav>
                        <a href="" class="addPost">
                            <fa icon="plus-circle"/>
                        </a>
                        <a href="" class="myProfile">
                            <fa icon="user-circle"/>
                        </a>
                    </nav>
                </div>
            <div>

                </div>
            </div>
        </header>

        <main id="mainpage">
            <div id="container">
                <div class="main_container">
                    <h1>Fil d'actualité</h1>
                </div>
            </div>
        </main>

        <footer>
            <div>
            </div>
        </footer>
    </html>
</template>

<script>
export default {
    name: 'groupomania',
    data: function () {
        return {
            mode: 'groupomania',
        }
    }
}
</script>

<style scoped>
    header {
        background-color: #333333;
    }
    #container { 
        width: 50em;
        background-color: #E3E3E1;
        display: flex;
        justify-content: center;
        align-items: center;
        /* border-top-right-radius: 25px;
        border-top-left-radius: 25px; */
    }
    
    .main_container{
        height: 80em;
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

    .logo2 {
        display: none;
    }

    .addPost, .myProfile {
        font-size: 50px;
        color: #E3E3E1;
    }

    .addPost:hover, .myProfile:hover {
        color: #284F8F;
    }
    footer {
        background-color: #3333;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>