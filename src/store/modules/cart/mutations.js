import { ADD_TO_CART } from './mutation_types';
export default {
  [ADD_TO_CART](state, { id, title, price}) {
    const added = state.goods.find(p => p.id === id);
    if (!added) {
      state.goods.push({
        id,
        title,
        price,
        quantity: 1
      });
    } else {
      added.quantity++;
      added.price = added.quantity * price;
    }
  }
};
