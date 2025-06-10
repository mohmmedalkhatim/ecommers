import { create } from 'zustand';
import Pocketbase from 'pocketbase';
import {
  Link,
  redirect,
  redirectDocument,
  resolvePath,
} from 'react-router-dom';

let pb = new Pocketbase('http://127.0.0.1:8090');

class Error {
  isError: boolean = false;
  details: string = '';
  constructor (details: string) {
    this.isError = true;
    this.details = details;
  }
}

export type User = {
  email: string;
  emailVisibility: boolean;
  name: string;
  orders: string[];
  password: string;
  passwordConfirm: string;
};

interface Auth_Logic {
  loading: boolean;
  login: boolean;
  Error?: Error;
  signup: (data: User) => Promise<void>;
  logout: () => Promise<void>;
  signin: (email: string, password: string) => Promise<void>;
  delete: () => void;
  retrieve: () => void;
}

export let useAuth = create<Auth_Logic>(set => ({
  loading: false,
  login: false,
  signup: async (data: User) => {
    const record = await pb.collection('users').create(data);
  },
  signin: async (email, password) => {
    await pb.collection('users').authWithPassword(email, password);
    console.log(pb.authStore.record);
    if (pb.authStore.isValid) {
      set({ login: true });
    }
  },
  logout: async ()=>{
    pb.authStore.clear()
    set({login:false})
  },
  update: () => {},
  delete: () => {},
  retrieve: () => {},
}));
