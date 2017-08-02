<template>
  <md-dialog-alert
      :md-content="mdContent"
      md-ok-text="确定"
      ref="alert">
  </md-dialog-alert>
</template>
<script>
  export default {
    data() {
      return {
        mdContent: '标题'
      };
    },
    methods: {
      open() {
        this.$refs.alert.open();
      }
    }
  };
</script>
<style>
</style>