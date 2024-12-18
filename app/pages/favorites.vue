<template>
    <v-container>
      <v-row>
        <v-col>
          <!-- Title and Clear All Button -->
          <h1>Favorite Rockets</h1>
          <v-btn
            color="red"
            @click="clearFavorites"
            class="mb-4"
            v-if="favoritesStore.allFavorites.length > 0"
          >
           
            Clear All Favorites

            <v-icon>mdi-delete</v-icon>
          </v-btn>
  
          <!-- Display Favorite Rockets -->
          <v-row v-if="favoritesStore.allFavorites.length > 0">
            <v-col
              v-for="rocket in favoritesStore.allFavorites"
              :key="rocket.id"
              cols="12"
              sm="6"
              md="4"
            >
              <v-card>
                <v-card-title>{{ rocket.name }}</v-card-title>
                <v-card-actions>
                  <v-btn color="red" @click="removeFavorite(rocket.id)">
                    Remove
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
  
          <!-- Empty State -->
          <v-row v-else>
            <v-col>
              <p>No favorites added yet. Go back and add some rockets!</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup lang="ts">
  import { useFavoritesStore } from '@/stores/favorites';

  // Access the Pinia store
  const favoritesStore = useFavoritesStore();
  
  // Function to clear all favorites
  const clearFavorites = () => {
    favoritesStore.clearFavorites();
  };
  
  // Function to remove a specific favorite
  const removeFavorite = (id: string) => {
    favoritesStore.removeFavorite(id);
  };
  </script>
  