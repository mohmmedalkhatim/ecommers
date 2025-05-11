import { create } from "zustand";
import Pocketbase from 'pocketbase';

let pb = new Pocketbase('http://127.0.0.1:8090');

class Error {
    isError: boolean = false;
    details: string = ""
    constructor(details: string) {
        this.isError = true;
        this.details = details
    }
}

interface Auth_Logic {
    loading: boolean,
    Error?: Error
    signup: () => Promise<void>,
    login: () => void,
    delete: () => void,
    retrieve: () => void,
}

let usePosts = create<Auth_Logic>(set => ({
    loading: false,
    signup: async () => {
        set({ loading: true })
        const data = {
            "title": "test",
            "content": "test"
        };
        
        let record;
        pb.collection('posts').create(data).then(res => {
            record = res
        }).catch(error => {
            set({ Error: new Error(error) })
        }).finally(() =>
            set({ loading: false })
        )
    },
    login:()=>{},
    update: () => { },
    delete: () => { },
    retrieve: () => { },
}))