export const useUIHelper = () => {
  const nuxtApp = useNuxtApp();

  const showSucceedMessage = (messageKey: string) => {
    nuxtApp.$q.notify({
      message: nuxtApp.$t(messageKey),
      position: "top",
      classes: "text-h6",
      type: "positive",
    });
  };

  const showErrorMessage = (messageKey: string) => {
    nuxtApp.$q.notify({
      classes: "text-h6",
      message: nuxtApp.$t(messageKey),
      position: "top",
      type: "negative",
    });
  };

  return {
    showSucceedMessage,
    showErrorMessage,
  };
};
