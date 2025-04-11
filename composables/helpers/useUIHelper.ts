export const useUIHelper = () => {
  const nuxtApp = useNuxtApp();

  const showNotifyMessage = (message: string, color?: string) => {
    nuxtApp.$q.notify({
      message: message,
      position: "top",
      color,
    });
  };

  return {
    showNotifyMessage,
  };
};
