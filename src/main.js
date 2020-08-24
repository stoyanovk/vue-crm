import Vue from "vue";
import App from "./App.vue";
import Vuelidate from "vuelidate";
import router from "./router";
import store from "./store";
import message from "./utils/message";
import Loader from "@/components/Loader";
import "materialize-css/dist/js/materialize";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

firebase.initializeApp({
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_DOMAIN,
  databaseURL: process.env.VUE_APP_DB,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_BUCKET,
  messagingSenderId: process.env.VUE_APP_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID
});

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(message);

Vue.component("Loader", Loader);

new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch("setUser", { email: user.email, uid: user.uid });
        this.$store.dispatch("fetchInfo", user.uid);
      }
    });
  }
}).$mount("#app");
