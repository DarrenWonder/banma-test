let MyPlugin = {
  install(Vue) {
    Vue.test = function *() {
      yield 'hello';
      yield 'world';
      return 'ending';
    };
  }
};

export default MyPlugin;
