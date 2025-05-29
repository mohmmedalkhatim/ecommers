import { create } from 'zustand';

export type Product = {
  id?: number;
  name: string;
  price: number;
  image: string;
  quantity?: number;
};

interface Cart {
  list: Product[];
  total_price: number;
  add_Product: (item: Product) => void;
  remove_Product: (id: number) => void;
  update_Product: (item: Product) => void;
}

let useCart = create<Cart>((set) => ({
  list: [],
  total_price: 0,
  add_Product: (item: Product) => {
    item.price = parseFloat(item.price.toString());
    item.image = item.image.toString();
    set((state) => ({
      list: [...state.list, item],
      total_price: state.total_price + item.price * (item.quantity || 1),
    }));
  },
  remove_Product: (id: number) =>
    set((state) => {
      let item = state.list.find((item) => item.id === id);
      return {
        list: state.list.filter((item) => item.id !== id),
        total_price:
          state.total_price - (item?.price || 0) * (item?.quantity || 1),
      };
    }),
  update_Product: (item: Product) =>
    set((state) => {
      const index = state.list.findIndex((i) => i.id === item.id);
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
