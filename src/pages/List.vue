<template>
  <section class="main-content">
    <scroll ref="scroll" height="547px">
      <md-card md-with-hover v-for="product in products" :key="product.id">
        <md-card-header>
          <div class="md-title">{{ product.title }}</div>
          <div class="md-subhead">库存：{{ product.inventory }}</div>
        </md-card-header>

        <md-card-content>
          价格：{{ product.price }}
        </md-card-content>

        <md-card-actions>
          <md-button @click="add(product)">加入购物车</md-button>
        </md-card-actions>
      </md-card>
    </scroll>
  </section>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex';
  import Vue from 'vue';
  import Scroll from '@/components/scroll';
  export default {
    name: 'List',
    computed: {
      ...mapGetters({
        products: 'product/allProducts'
      })
    },
    methods: {
      ...mapActions([
        'product/getAllProducts',
        'cart/addToCart'
      ]),
      add(p) {
        Vue.confirm('提示', '是否加入购物车').then(type => {
          if (type === 'ok') {
            this['cart/addToCart'](p);
          }
        });
      }
    },
    watch: {
      products() {
        this.$refs.scroll.refresh();
      }
    },
    components: {
      Scroll
    },
    created() {
      this['product/getAllProducts']();
    }
  };
</script>
<style>

</style>