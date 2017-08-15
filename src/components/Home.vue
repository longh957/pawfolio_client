<template lang="pug">
  .home
    h1 Pawfolio
    h2 {{ msg }}
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      msg: 'All your pet records in one place.',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home {
  h1 {
    font-size: 40px;
  }
}

h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
