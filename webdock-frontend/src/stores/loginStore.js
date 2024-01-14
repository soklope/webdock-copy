import { create } from 'zustand';

const userStore = create((set) => ({
  authToken: null,

  setAuthState: (token) => set({ authToken: token }),

  logout: () => {
    set({ authToken: null });
    localStorage.removeItem('authToken');
  },
}));

export default userStore;