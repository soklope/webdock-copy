import { create } from 'zustand';

const useModalStore = create((set) => ({
  modalIsOpen: false,
    
  mergePostModalIsOpen: false,
  postParamId: 0,

  toggleModal: () => {
    set((state) => ({ modalIsOpen: !state.modalIsOpen }));
  },

  toggleMergeModal: () => {
    set((state) => ({ mergePostModalIsOpen: !state.mergePostModalIsOpen }));
  },

  setNewPostParam: (newPostParam) => {
    set((state) => ({ postParamId: parseInt(newPostParam) }));
  },
}));

export default useModalStore;