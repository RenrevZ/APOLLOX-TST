export default defineNuxtRouteMiddleware((to) => {
    // Check if the page is not found (404)
    if (to.matched.length === 0) {
      // Redirect to the launch page
      return navigateTo('/');
    }
  });
  