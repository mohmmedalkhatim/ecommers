import { create } from 'zustand';
import { Product } from '../Product';

type cart_element = {
  include: boolean;
} & Product;
interface Cart {
  list: cart_element[];
  total_price: number;
  add_Product: (item: cart_element) => void;
  remove_Product: (id: number) => void;
  update_Product: (item: cart_element) => void;
}

export let useCart = create<Cart>(set => ({
  list: [],
  total_price: 0,
  add_Product: (item: cart_element) => {
    set(state => {
      let filter = state.list.filter(iter => iter.id != item.id);
      let element = state.list.find(ele => ele.id == item.id);
      if (element) {
        if (element.quantity) element.quantity += 1;
        return {
          list: [...filter, { ...element }],
          total_price: state.total_price + item.price ,
        };
      } else {
        return {
          list: [...filter, { ...item, quantity: 1 }],
          total_price: state.total_price + item.price ,
        };
      }
    });
  },
  remove_Product: (id: number) =>
    set(state => {
      let item = state.list.find(item => item.id === id);
      return {
        list: state.list.filter(item => item.id !== id),
        total_price:
          state.total_price - (item?.price || 0) * (item?.quantity || 1),
      };
    }),
  update_Product: item =>
    set(state => {
      const index = state.list.findIndex(i => i.id === item.id);
      if (index !== -1) {
        const updatedList = [...state.list];
        updatedList[index] = item;
        return {
          list: updatedList,
          total_price: updatedList.reduce(
            (prev, curr) => prev + curr.price * (curr.quantity || 1),
            0
          ),
        };
      }
      return state;
    }),
}));
