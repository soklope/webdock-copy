import { create } from 'zustand';

const useRoadmapStore = create((set) => ({
    roadmapView: true,

    toggleRoadmapView: () => {
        set((state) => ({ roadmapView: !state.roadmapView }));
    },
}));

export default useRoadmapStore;
