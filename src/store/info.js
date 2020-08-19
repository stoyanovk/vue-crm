import firebase from "firebase/app";

export default {
  state: {
    info: null
  },
  actions: {
    async fetchInfo({ commit }, uid) {
      const info = (
        await firebase
          .database()
          .ref(`/user/${uid}/info`)
          .once("value")
      ).val();

      commit("setInfo", info);
    }
  },
  mutations: {
    setInfo(state, info) {
      state.info = info;
    }
  },
  getters: {
    info: state => state.info
  }
};
