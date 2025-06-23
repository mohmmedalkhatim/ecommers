import { create } from 'zustand';
import { pb } from '../../main';
import React, { Dispatch, SetStateAction } from 'react';
import { Product } from '../Product';

export type Commit = {
  id: string;
  user: string;
  content: string;
};

interface commit_context {
  one: (
    id: string,
    setCommit: React.Dispatch<SetStateAction<Commit | undefined>>
  ) => void;
  create: (
    content: string,
    product_id: string,
    commits: string[],
    setProduct: Dispatch<SetStateAction<Product>>,
    setCommits: Dispatch<SetStateAction<string[]>>
  ) => void;
  modify: () => void;
}

export let useCommits = create<commit_context>(() => ({
  one: (id, setCommit) => {
    pb.collection('commit')
      .getOne<Commit>(id)
      .then(res => {
        console.log(res)
        setCommit(res);
      });
  },
  create: (
    content: string,
    product_id: string,
    commits: string[],
    setProduct,
    setCommits
  ) => {
    pb.collection('commit')
      .create({ content })
      .then(res => {
        pb.collection('product')
          .update<Product>(product_id, {
            product: pb.authStore.record?.name,
            commits: [...commits, res.id],
          })
          .then(res => {
            setProduct(res);
          });
        setCommits([...commits, res.id]);
      });
  },
  modify: () => {},
}));
