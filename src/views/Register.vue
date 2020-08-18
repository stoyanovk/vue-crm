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
          v-model="password"
          class="validate"
          :class="{invalid:(!$v.password.required && $v.password.$dirty)||(!$v.password.minLength && $v.password.$dirty)}"
        />
        <label for="password">Пароль</label>
        <small
          v-if="(!$v.password.required && $v.password.$dirty)"
          class="helper-text invalid"
        >full this field please</small>
      </div>
      <div class="input-field">
        <input
          id="name"
          type="text"
          class="validate"
          v-model="name"
          :class="{invalid:!$v.name.required && $v.name.$dirty}"
        />

        <label for="name">Имя</label>
        <small
          v-if="(!$v.name.required && $v.name.$dirty)"
          class="helper-text invalid"
        >full this field please</small>
      </div>
      <p>
        <label>
          <input type="checkbox" v-model="agree" />
          <span>С правилами согласен</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to="/login">Войти!</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  name: "Register",
  data: () => ({
    email: "",
    password: "",
    name: "",
    agree: false,
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
    name: {
      required,
    },
    agree: {
      validate: (value) => value,
    },
  },
  methods: {
    async handleSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const { email, password, name } = this;
      try {
        await this.$store.dispatch("register", { email, password, name });
        this.$router.push("/");
      } catch (e) {}
    },
  },
};
</script>
