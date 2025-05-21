import { create } from 'zustand';
import { pb } from '../../main';


class Error {
  isError: boolean = false;
  details: string = '';
  constructor (details: string) {
    this.isError = true;
    this.details = details;
  }
}
type Post = {
  id: number;
  title: string;
  content: string;
};

interface Post_Logic {
  loading: boolean;
  Error?: Error;
  create: (title: string, content: string) => Promise<void>;
  update: (id: string, title: string, content: string) => void;
  delete: (id: string) => void;
  retrieve: (id: string) => Post;
}

let usePosts = create<Post_Logic>(set => ({
  loading: false,
  create: async (t, c) => {
    set({ loading: true });
    const data = {
      title: t,
      content: c,
    };
    let record;
    pb.collection('posts')
      .create(data)
      .then(res => {
        record = res;
      })
      .catch(error => {
        set({ Error: new Error(error) });
      })
      .finally(() => set({ loading: false }));
  },
  update: (id, title, content) => {
    set({ loading: true });
    pb.collection('posts')
      .update(id, { title, content })
      .then(() => {
        console.log('done');
      })
      .catch(e => set({ Error: new Error(e) }))
      .finally(() => set({ loading: false }));
  },
  delete: id => {
    pb.collection('posts')
      .delete(id)
      .then(() => {
        console.log('done');
      })
      .catch(e => set({ Error: new Error(e) }))
      .finally(() => set({ loading: false }));
  },
  retrieve: id => {
    let item = {} as Post;
    pb.collection('post')
      .getOne(id)
      .then(res => {
        item = { ...res.expand } as Post;
      });
    return item;
  },
}));
