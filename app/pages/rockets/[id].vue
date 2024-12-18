<script setup lang="ts">
import { useRoute } from 'vue-router';
import { GET_ROCKET_DETAILS } from '@/graphql/queries';

const route = useRoute();
const { data : result } = useAsyncQuery(GET_ROCKET_DETAILS, { id: route.params.id });
const rocket = computed(() => result?.value?.rocket);
</script>

<template>
  <v-container>
    <v-card class="pa-md-4">
       <v-text v-if="rocket">
        <h1>{{ rocket.name }}</h1>
        <p>{{ rocket.description }}</p>
        <p><strong>First Flight:</strong> {{ rocket.first_flight }}</p>
        <p><strong>Height:</strong> {{ rocket.height.meters }} m</p>
        <p><strong>Diameter:</strong> {{ rocket.diameter.meters }} m</p>
        <p><strong>Mass:</strong> {{ rocket.mass.kg }} kg</p>
        <p><strong>Stages:</strong> {{ rocket.stages }}</p>
       </v-text>
    </v-card>
  </v-container>
</template>
