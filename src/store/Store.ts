import { create } from "zustand";

interface ISidebar {
  showSidebar: boolean;
  setShowSidebar: (isShow: boolean) => void;
}

export const useStore = create<ISidebar>((set) => ({
  showSidebar: false,
  setShowSidebar: (isShow: boolean) => {
    set({ showSidebar: isShow });
  },
}));

// -----------------------------------------------------
