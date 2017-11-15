<template>
  <scroll ref="scroll">
    <template slot="pullDown" scope="props">
      <div class="pulldown-container">
        <span v-if="props.pullDownStatus === 'default' || props.pullDownStatus === 'down'">⬇️</span>
        <span v-if="props.pullDownStatus === 'up'">⬆️</span>
        <span v-if="props.pullDownStatus === 'load'">🕐</span>
      </div>
    </template>
    <ul>
      <li v-for="p in products" :key="p.id">{{ p.title }}</li>
    </ul>
  </scroll>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex';
  import Scroll from '@/components/scroll';
  export default {
    computed: {
      ...mapGetters({
        products: 'product/allProducts'
      })
    },
    methods: {
      ...mapActions([
        'product/getAllProducts'
      ])
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
  body {
    height: 100%;
  }
</style>
