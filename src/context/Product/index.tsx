import { create } from 'zustand';
import { pb } from '../../main';

export interface Product{
  id?: number;
  name: string;
  price: number;
  picture: string;
  description:string;
  pictures: string[];
  quantity?: number;
  commits_ids: string[]
};
interface Product_context {
  product: (id: string, setProduct: any) => Promise<void>;
  list: (page: number, setList: any) => Promise<void>;
}

export let useProduct = create<Product_context>(set => ({
  product: async (id, setProduct) => {
    await pb.collection('product')
      .getOne(id)
      .then(res => {
        console.log(res);
        setProduct(res);
      });
  },
  list: async (page, setList) => {
    await pb
      .collection('product')
      .getFullList()
      .then((res: any) => {
        setList(res);
        console.log(res[0].picture);
      });
  },
}));
