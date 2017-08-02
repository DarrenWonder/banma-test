import { ADD_TO_CART } from './mutation_types';
import Vue from 'vue';
export default {
  addToCart({commit}, product) {
    if (product.inventory > 0) {
      commit(ADD_TO_CART, product);
      Vue.alert('加入购物车成功');
    } else {
      Vue.alert('库存不足');
    }
  }
};
