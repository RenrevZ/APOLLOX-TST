import { defineStore } from 'pinia';

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favorites: [] as { id: string; name: string }[],
  }),
  actions: {
    addFavorite(rocket: { id: string; name: string }) {
      if (!this.favorites.some((fav) => fav.id === rocket.id)) {
        this.favorites.push(rocket);
      }
    },
    removeFavorite(rocketId: string) {
      this.favorites = this.favorites.filter((fav) => fav.id !== rocketId);
    },
    clearFavorites() {
      this.favorites = [];
    },
  },
  getters: {
    allFavorites: (state) => state.favorites,
    isFavorite: (state) => (rocketId: string) =>
      state.favorites.some((fav) => fav.id === rocketId),
  },
});
