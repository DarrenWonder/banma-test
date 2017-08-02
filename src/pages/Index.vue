<template>
  <div>
    <md-toolbar>
      <md-button class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title" style="flex: 1">Default</h2>
    </md-toolbar>
    <router-view></router-view>
    <footer class="main-footer">
      <md-bottom-bar>
        <md-bottom-bar-item md-icon="home" md-active @click="$router.push('/')">首页</md-bottom-bar-item>
        <md-bottom-bar-item md-icon="shopping_cart" @click="$router.push('/cart')">购物车</md-bottom-bar-item>
      </md-bottom-bar>
    </footer>
  </div>
</template>
<script>
  export default {
    name: 'Index'
  };
</script>
<style lang="scss">
    @mixin font-dpr($font-size){
      font-size: $font-size;
      line-height: $font-size;
      [data-dpr="2"] & { font-size: $font-size * 2; line-height: $font-size * 2;}
      [data-dpr="3"] & { font-size: $font-size * 3; line-height: $font-size * 3; }
    }
    .md-toolbar .md-title {
      @include font-dpr(20px);
    }
    .md-button {
      @include font-dpr(14px)
    }
    .main-footer {
      position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
  }
</style>