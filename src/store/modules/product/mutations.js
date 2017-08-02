import { FETCH_PRODUCTS } from './mutation_types';

export default {
  [FETCH_PRODUCTS](state, {products}) {
    state.all = products;
  }
};
