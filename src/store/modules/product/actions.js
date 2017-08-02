import api from '@/api';
import Vue from 'vue';
import { FETCH_PRODUCTS } from './mutation_types';
export default {
  getAllProducts({ commit }) {
    api.getAllProducts().then(function(data) {
      console.log(data);
      commit(FETCH_PRODUCTS, { products: data.data});
    }).catch(function(msg) {
      Vue.alert(msg);
    });
  }
};
