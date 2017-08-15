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
            )
          b-field(
            label="Email"
            v-bind:type="valid"
            v-bind:message="emailMessage"
          )
            b-input(
              type="email"
              maxlength="30"
            )
          b-field(
            label="Password"
          )
            b-input(
              type="password"
              maxlength="30"
            )
          b-field(
            label="Password Confirmation"
          )
            b-input(
              type="password"
              maxlength="30"
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
      valid: 'is-danger',
      emailMessage: 'Email is Invalid',
    };
  },
  methods: {
    submitForm() {
      console.log('submitted');
    },
  },
};
</script>
<style lang="scss">
</style>
