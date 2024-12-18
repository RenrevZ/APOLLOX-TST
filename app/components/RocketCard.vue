<template>
    <v-card min-width="300px" min-height="100px">
      <v-card-title>{{ rocket.name }}</v-card-title>

      <v-card-text>
        <p>
            <strong>Description:</strong> 
            {{ rocket.description?.length > 50 ? rocket.description.slice(0, 50) + '...' : rocket.description }}
        </p>
      </v-card-text>

      <v-card-actions>
        <v-btn
          :to="{ name: 'rockets-id', params: { id: rocket.id } }"
        >
          <v-icon>mdi-launch</v-icon>
          <span>See Details</span>
        </v-btn>
      </v-card-actions>
    </v-card>
</template>
  
<script setup lang="ts">  
   defineProps<{
    rocket: {
      id: string;
      name: string;
      description: string;
    };
  }>();
</script>
  