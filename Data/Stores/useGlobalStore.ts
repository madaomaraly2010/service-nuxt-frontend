export const useGlobalStore = defineStore<
  "global",
  IGlobalStoreState,
  {},
  IGlobalStoreActions
>("global", {
  state: () => ({
    direction: "ltr",
  }),
  actions: {
    setDirectionArabic() {
      this.direction = "rtl";
    },
    setDirectionEnglish() {
      this.direction = "ltr";
    },
    toggleDirection() {
      this.direction = this.direction == "ltr" ? "rtl" : "ltr";
    },
  },
});

export interface IGlobalStoreState {
  direction: "ltr" | "rtl";
}

export interface IGlobalStoreActions {
  setDirectionArabic(): void;
  setDirectionEnglish(): void;
  toggleDirection(): void;
}
