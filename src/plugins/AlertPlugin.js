import Alert from './Alert';
const install = function(Vue) {
  if (install.installed) {
    console.warn('Alert is already installed.');

    return;
  }
  install.installed = true;

  let $vm;
  if (!$vm) {
    const Dialog = Vue.extend(Alert);
    $vm = new Dialog({
      el: document.createElement('div')
    });
    document.body.appendChild($vm.$el);
  }

  Vue.alert = function(title) {
    if (typeof title !== 'string') return console.error('必须输入标题');
    $vm.mdContent = title;
    $vm.open();
  };
};

export default install;
