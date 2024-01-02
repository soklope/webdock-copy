// import { postArrayDb } from "../dummyDb";
import { create } from "zustand";

const usePostArrayStore = create((set) => ({
    allPosts: [],
    sustainAllPosts: [],
    statusFilter: [],
    sort: "",
    category: "All Categories",
    searchValue: "",

    setSustainAllPosts: (newValue) => {
        set((state) => ({ sustainAllPosts: newValue }));
    },

    setAllPosts: (newValue) => {
        set((state) => ({ allPosts: newValue }));
    },

    setSortValue: (newValue) => {
        set((state) => ({ sort: newValue }));
    },

    setCategoryValue: (newValue) => {
        set((state) => ({ category: newValue }));
    },

    setSearchValue: (newValue) => {
        set((state) => ({ searchValue: newValue }));
    },

    filterAllPosts: () => {
        set((state) => {
            let filteredPosts = [...state.sustainAllPosts];

            switch (state.sort) {
                case 'Trending':
                    filteredPosts.sort((a, b) => b.Comments.length - a.Comments.length);
                    break;

                case 'Top':
                    filteredPosts.sort((a, b) => b.upvotes - a.upvotes);
                    break;

                case 'New':
                    filteredPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                    break;
            }

            filteredPosts = filteredPosts.filter((post) =>
                (state.category === 'All Categories' || (post.Category && post.Category.category === state.category)) &&
                (state.searchValue === '' || post.title?.toLowerCase().includes(state.searchValue.toLowerCase())) &&
                (state.statusFilter.length === 0 || (post.Status && state.statusFilter.includes(post.Status.status)))
            );

            return { allPosts: filteredPosts };
        });
    },
}));

export default usePostArrayStore;




