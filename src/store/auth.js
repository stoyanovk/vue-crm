import firebase from "firebase/app";
export default {
  state: {
    user: null
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    async login({ commit }, { email, password }) {
      try {
        const response = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);

        commit("setUser", {
          email: response.user.email,
          uid: response.user.uid
        });
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
      console.log(user);
      return user.uid || null;
    },
    async logout() {
      await firebase.auth().signOut();
    },
    setUser({ commit }, user) {
      commit("setUser", user);
    }
  },
  getters: {
    user: state => state.user
  }
};
