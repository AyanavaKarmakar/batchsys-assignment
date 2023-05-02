import { create } from "zustand";

interface ScrollTypeStore {
  scrollType: "Vertical" | "Horizontal";
  setScrollType: (scrollType: "Vertical" | "Horizontal") => void;
}

export const useScrollTypeStore = create<ScrollTypeStore>((set) => ({
  scrollType: "Vertical",

  setScrollType: (scrollType) => set({ scrollType }),
}));
