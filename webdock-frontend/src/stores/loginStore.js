import { create } from 'zustand';

const userStore = create((set) => ({
    user: null,

    setUserState: (userData) => set({
        user: userData
    }),
    
    logout: () => {
        localStorage.removeItem('user');
        set({ user: null });
    },
}));

export default userStore;
