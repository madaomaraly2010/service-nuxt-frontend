export const state = reactive({
  direction: "ltr" as "ltr" | "rtl",
  setDirectionArabic() {
    state.direction = "rtl";
  },
  setDirectionEnglish() {
    state.direction = "ltr";
  },
  toggleDirection() {
    state.direction = state.direction == "ltr" ? "rtl" : "ltr";
  },
});
export const useGlobalStore = () => state;
