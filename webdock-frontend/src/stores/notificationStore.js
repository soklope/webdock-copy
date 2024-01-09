import { create } from 'zustand';

const useNotificationArrayStore = create((set) => ({
    notificationArray: [],

    setNotificationStore: (newArrayValue) => {
        set((state) => ({ notificationArray: newArrayValue }))
    }
}))

export default useNotificationArrayStore;