<template lang="pug">
  nav.navbar
      .navbar-brand
        a.navbar-item(href="/")
          b-icon(class="logo" icon="pets")
          span.company Pawfolio
        .navbar-burger.burger(
          data-target="mobile"
          v-bind:class="{ 'is-active': open }"
          @click="open = !open"
        )
          span
          span
          span
      #mobile.navbar-menu(v-bind:class="{ 'is-active': open }")
        .navbar-start(v-if="!$store.state.loggedIn")
          router-link.navbar-item(to="/sign-in") Sign In
        .navbar-end(v-if="!$store.state.loggedIn")
          router-link.navbar-item(to="/sign-up") Sign up
</template>
<script>
  export default {
    name: 'navigation',
    data() {
      return {
        open: false,
      };
    },
  };
</script>
<style scoped lang="scss">
  .company {
    margin-left: 10px;
    display: inline-block;
    font-size: 30px;
  }
</style>
