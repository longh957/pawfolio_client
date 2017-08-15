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
        .navbar-start
          a.navbar-item(href="/") Sign In
        .navbar-end
          a.navbar-item(href="/") Sign Up
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
