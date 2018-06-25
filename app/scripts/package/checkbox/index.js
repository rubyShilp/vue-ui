import faCheckbox from './src/checkbox';

/* istanbul ignore next */
faCheckbox.install = function(Vue) {
  Vue.component(faCheckbox.name, faCheckbox);
};

export default faCheckbox;
