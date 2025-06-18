import { create } from 'zustand';

interface commit_context {
  one: () => {};
  create: () => {};
  modify: () => {};
  
}

let useCommits = create();
