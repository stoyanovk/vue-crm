<template>
  <form class="card auth-card" @submit.prevent="handleSubmit">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
          id="email"
          type="text"
          name="email"
          class="validate"
          :class="{invalid:(!$v.email.email && $v.email.$dirty)||(!$v.email.required && $v.email.$dirty)}"
          v-model="email"
        />
        <label for="email">Email</label>
        <small
          v-if="(!$v.email.email && $v.email.$dirty)"
          class="helper-text invalid"
        >full email please</small>
        <small
          v-else-if="(!$v.email.required && $v.email.$dirty)"
          class="helper-text invalid"
        >full this field please</small>
      </div>
      <div class="input-field">
        <input
          id="password"
          type="password"
          name="password"
          class="validate"
          v-model="password"
          :class="{invalid:(!$v.password.required && $v.password.$dirty)||(!$v.password.minLength && $v.password.$dirty)}"
        />
        <label for="password">Пароль</label>
        <small
          v-if="(!$v.password.required && $v.password.$dirty)"
          class="helper-text invalid"
        >full email please</small>
        <small
          v-else-if="(!$v.password.minLength && $v.password.$dirty)"
          class="helper-text invalid"
        >password length must be more 6 letter</small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link to="/register">Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";
import { messages } from "@/utils/data";

export default {
  name: "Login",
  data: () => ({
    email: "",
    password: "",
  }),
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(6),
    },
  },
  methods: {
    handleSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const data = {};
      data.email = this.email;
      data.password = this.password;
      console.log(data);
    },
  },
  mounted() {
    if (messages[this.$route.query.message]) {
      this.$showMessage(messages[this.$route.query.message]);
    }
  },
};
</script>
