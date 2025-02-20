export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    const isAuthenticated = true; // localStorage.getItem("auth") === "true";
    if (!isAuthenticated && to.path !== "/login") {
      return navigateTo("/login"); // Redirect to login if not authenticated
    }
  }
});
