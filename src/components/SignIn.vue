<template lang="pug">
  .section
    .container.is-widescreen
      .columns
        .column
        form.column(
          method="post"
          v-on:submit.prevent="submitForm"

        )
          h1 Sign In
          b-field(
            label="Email"
          )
            b-input(
              type="email"
              v-model="email"
              maxlength="30"
              required="true"
            )
          b-field(
            label="Password"
          )
            b-input(
              type="password"
              v-model="password"
              maxlength="30"
              required="true"
            )
          b-field
            button.button.is-success(type="submit") Submit
        .column
</template>
<script>
export default {
  name: 'signin',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    submitForm() {
      // TODO implement axios and cookie

      const payload = {
        password: this.password,
        user: this.email,
      };

      this.axios.post(`${this.$store.state.apiUrl}/api/v1/authentication`, payload)
        .then((response) => {
          if (response.data) {
            const token = response.data.token;
            this.$store.state.token = token;
            this.$store.state.loggedIn = true;
            this.$toast.open({
              duration: 5000,
              message: 'Thanks for Signing in',
              type: 'is-success',
            });
            this.$router.push('/');
          }
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
      console.log('submitted');
    },
  },
};
</script>
<style scoped land="scss">
  h1 {
    font-size: 40px;
    margin-bottom: 40px;
  }
</style>
