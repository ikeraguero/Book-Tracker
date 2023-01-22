<template>
  <AppHeader v-if="$route.path!='/register'"/>
  <router-view/>
  <AppFooter />
</template>

<script>
import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'

export default {
  components: {
    AppFooter,
    AppHeader
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  ;
}
body{
  margin: 0%;
  background-image: linear-gradient(120deg, #ffffff, rgb(221, 248, 248));
}

</style>
