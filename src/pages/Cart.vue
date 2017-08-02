<template>
  <section>
    <md-subheader>当前购物篮中有{{ products.length }}件商品</md-subheader>
    <md-list>
      <md-list-item v-for="p in products" :key="p.id">
         <span>{{ p.title }}</span>
         <span>{{ p.price }}</span>
         <span>{{ p.quantity }}</span>
      </md-list-item>
    </md-list>
  </section>
</template>
<script>
  import { mapGetters } from 'vuex';
  export default {
    computed: {
      ...mapGetters({
        products: 'cart/cartProducts'
      })
    }
  };
</script>
<style>
</style>