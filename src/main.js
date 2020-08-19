import Vue from "vue";
import App from "./App.vue";
import Vuelidate from "vuelidate";
import router from "./router";
import store from "./store";
import message from "./utils/message";
import "materialize-css/dist/js/materialize";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

firebase.initializeApp({
  apiKey: "AIzaSyD-CqrUmz6C7kgCKdav9kyFqfbxkQymgM8",
  authDomain: "vue-crm-44b54.firebaseapp.com",
  databaseURL: "https://vue-crm-44b54.firebaseio.com",
  projectId: "vue-crm-44b54",
  storageBucket: "vue-crm-44b54.appspot.com",
  messagingSenderId: "765171592062",
  appId: "1:765171592062:web:046bf31313844a0f20612f"
});

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(message);

new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch("setUser", { email: user.email, uid: user.uid });
      }
    });
  }
}).$mount("#app");
