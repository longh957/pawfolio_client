<template lang="pug">
  #app
    nav.navbar
        .navbar-brand
          a.navbar-item(href="/")
            b-icon(class="logo" icon="pets")
            span.company Pawfolio
          .navbar-burger.burger
            span
            span
            span
    .block
      b-icon(icon="person")
      b-icon(icon="home")
      b-icon(icon="dashboard")
      b-icon(icon="pets")
    router-view
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  margin-left: 20px;
  margin-top: 10px;

  .company {
    margin-left: 10px;
    display: inline-block;
    font-size: 30px;
  }

}
</style>
