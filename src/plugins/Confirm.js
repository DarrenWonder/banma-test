import mdConfirm from 'vue-material/src/components/mdDialog/presets/mdDialogConfirm';

export default {
  install(Vue) {
    if (this.installed) {
      console.warn('Confirm is already installed.');
      return;
    }
    this.installed = true;
    Vue.confirm = function(title, content) {
      if (typeof title !== 'string' || typeof content !== 'string') return console.error('必须输入标题和内容');
      return new Promise(function(resolve, reject) {// eslint-disable-line
        const confirm = new Vue({
          render: createElement => createElement(mdConfirm, {
            props: {
              mdTitle: title,
              mdContent: content,
              mdCancelText: '取消',
              mdOkText: '确定'
            },
            on: {
              close: function(type) {
                resolve(type);
                // document.body.removeChild(confirm.$el);
                // $vm = null;
              }
            }
          }),
          el: document.createElement('div')
        });
        console.log(confirm);
        let $vm = confirm.$children[0];
        document.body.appendChild(confirm.$el);
        setTimeout(() => {
          $vm.open();
        }, 0);
      });
    };
  }
};
