<template>
    <router-view></router-view>
</template>



<script>

export default {
  name: 'App',
  components: {
  }
}
</script>



<style>
@import url('https://fonts.googleapis.com/css2?family=Georama&display=swap');
/* POLICE GEORAMA */

* {
  font-family: 'Georama', sans-serif;
  margin: 0;
  padding: 0; 
  box-sizing: border-box; 
}


#app {
  max-width: 100%;
}

body{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333333;
}

.login {
  max-width: 100%;
  width: 30em;
  background: #E3E3E1;
  border-radius: 25px;
  padding: 32px;
  box-shadow:
  2.8px 2.8px 2.2px rgba(0, 0, 0, 0.07),
  6.7px 6.7px 5.3px rgba(0, 0, 0, 0.033),
  12.5px 12.5px 10px rgba(0, 0, 0, 0.025),
  22.3px 22.3px 17.9px rgba(0, 0, 0, 0.021),
  41.8px 41.8px 33.4px rgba(0, 0, 0, 0.019),
  100px 100px 80px rgba(0, 0, 0, 0.015);
}

@media screen and (max-width: 560px) {
    body{
      min-height: 50vh;
    }
}

</style>
