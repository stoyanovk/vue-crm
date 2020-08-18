import firebase from "firebase/app";
export default {
  state: {
    user: null
  },
  mutations: {},
  actions: {
    async login({ commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (e) {
        commit("setError", e);
        throw new Error(e);
      }
    },
    async register({ dispatch, commit }, { email, password, name }) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const uid = await dispatch("getUser");
        await firebase
          .database()
          .ref(`/user/${uid}/info`)
          .set({
            bill: 10000,
            name
          });
      } catch (e) {
        commit("setError", e);
        throw new Error(e);
      }
    },
    async getUser() {
      const user = await firebase.auth().currentUser;
      return user.uid || null;
    },
    async logout() {
      await firebase.auth().signOut();
    }
  },
  getters: {
    user: state => state.user
  }
};
