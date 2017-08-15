<template lang="pug">
  #app
    navigation
    .block
      b-icon(icon="person")
      b-icon(icon="home")
      b-icon(icon="dashboard")
      b-icon(icon="pets")
    router-view
</template>

<script>
import Navigation from '@/components/Navigation';

export default {
  name: 'app',
  components: {
    Navigation,
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
}
</style>
