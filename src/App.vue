<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <MakePayment/>
</template>

<script>
import MakePayment from './components/MakePayment.vue'

export default {
  name: 'App',
  components: {
    MakePayment
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
