import { create } from "zustand";
import { Column } from "../types";

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

const getLocalStorage = () => {
  return localStorage.getItem("columns") || [];
};

// interface IColumn {
//   id: number;
//   title: string;
// }

interface IColumn {
  columns: Column[] | [];
  addColumn: (column: Column) => void;
}

export const useColumnStore = create<IColumn>((set) => ({
  columns: [],
  addColumn: (column: Column) => {
    set((state) => ({ columns: [...state.columns, column] }));
  },
}));
