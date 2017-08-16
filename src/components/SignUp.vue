<template lang="pug">
  .section
    .container.is-widescreen
      .columns
        .column
        form.column(
          action="http://api.pawfol.io/api/v1/registration"
          method="post"
          v-on:submit.prevent="submitForm"

        )
          h1 Register
          b-field(label="Name")
            b-input(
              maxlength="30"
              v-model="name"
            )
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
          b-field(
            label="Password Confirmation"
          )
            b-input(
              type="password"
              v-model="passwordConfirmation"
              maxlength="30"
              required="true"
            )
          b-field
            button.button.is-success(type="submit") Submit
        .column
</template>
<script>
export default {
  name: 'signup',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    };
  },
  methods: {
    submitForm() {
      // TODO implement axios and cookie

      const payload = {
        name: this.name,
        password: this.password,
        email: this.email,
      };

      this.axios.post('http://api.pawfol.io/api/v1/registration', payload)
        .then((response) => {
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
<style lang="scss">
</style>
