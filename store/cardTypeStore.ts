import { create } from "zustand";

interface CardTypeStore {
  cardType: "Card1" | "Card2";
  setCardType: (cardType: "Card1" | "Card2") => void;
}

export const useCardTypeStore = create<CardTypeStore>((set) => ({
  cardType: "Card1",

  setCardType: (cardType) => set({ cardType }),
}));
