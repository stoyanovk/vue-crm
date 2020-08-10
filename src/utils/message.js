export default {
  install(Vue) {
    Vue.prototype.$showMessage = function(text) {
      // eslint-disable-next-line no-undef
      M.toast({ html: text });
    };

    Vue.prototype.$showError = function(text) {
      // eslint-disable-next-line no-undef
      M.toast({ html: `[erroe]: ${text}` });
    };
  }
};
