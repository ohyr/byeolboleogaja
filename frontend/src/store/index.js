import create from 'zustand';
import { persist } from 'zustand/middleware';

import vite from './vite';
import user from './user';
import nasa from './nasa';
import pickCharacter from './pickCharacter';
import worldGuideSkip from './worldGuideSkip';
const useStore = create(
  persist(
    (set, get) => ({
      ...vite(set, get),
      ...user(set, get),
      ...nasa(set, get),
      ...pickCharacter(set, get),
      ...worldGuideSkip(set, get),
    }),
    {
      name: 'star-storage',
      getStorage: () => sessionStorage,
    },
  ),
);

export { useStore };
