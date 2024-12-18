<template>
    <v-card min-width="300px" min-height="200px" :loading="launch === undefined">
      <v-card-title>{{ launch.mission_name }}</v-card-title>
      <v-card-subtitle>{{ formattedDate }}</v-card-subtitle>
      <v-card-text>
        <p><strong>Rocket:</strong> {{ launch.rocket?.rocket_name }}</p>
        <p><strong>Launch Site:</strong> {{ launch.launch_site?.site_name_long }}</p>
        <p v-show="launch.details"><strong>Details:</strong><br> {{ launch.details.length > 50 ? launch.details.slice(0, 50) + '...' : launch.details }}</p>
      </v-card-text>

      <v-card-actions>
        <v-btn
          :color="isFavorite ? 'red' : 'grey'"
          @click="toggleFavorite"
        >
          <v-icon>{{ isFavorite ? 'mdi-heart' : 'mdi-heart-outline' }}</v-icon>
          <span>{{ isFavorite ? 'Remove from Favorites' : 'Add to Favorites' }}</span>
        </v-btn>

      </v-card-actions>
    </v-card>
</template>
  
<script setup lang="ts">
  import { computed } from 'vue';
  import { useFavoritesStore } from '@/stores/favorites';
  
  
  const props = defineProps<{
    launch: {
      id : string;
      mission_name: string;
      launch_date_utc: string;
      rocket: { 
        rocket_name: string 
      };
      launch_site: { site_name_long: string };
      details?: string;
    };
  }>();
  
  const formattedDate = computed(() =>
    new Date(props.launch.launch_date_utc).toLocaleDateString()
  );

  const favoritesStore = useFavoritesStore();

const isFavorite = computed(() =>
  favoritesStore.isFavorite(props.launch?.id)
);

const toggleFavorite = () => {
  const rocket = {
    id: props.launch?.id,
    name: props.launch.rocket.rocket_name,
  };

  
  if (isFavorite.value) {
    favoritesStore.removeFavorite(rocket.id);
  } else {
    favoritesStore.addFavorite(rocket);
  }
};
</script>
  