export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    const isAuthenticated = localStorage.getItem("auth") === "true";
    debugger;
    if (!isAuthenticated && to.path !== "/login") {
      return navigateTo("/login"); // Redirect to login if not authenticated
    }
  }
});
