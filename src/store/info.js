// import firebase from "firebase/app";

export default {
  state: {},
  actions: {
    async fetchInfo({ commit, dispatch, getters }) {
      const uid = getters.user;
      console.log(uid);
      //   const info = await firebase
      //     .database()
      //     .ref(`/user/${uid}`)
      //     .once();
    }
  },
  mutation: {},
  getters: {}
};
