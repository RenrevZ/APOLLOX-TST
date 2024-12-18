<script setup lang="ts">
 import { GET_ROCKETS } from '../../graphql/queries';

 const { data : rockets } = useAsyncQuery<{
	rockets: {
		id : string
		name : string
        description : string
	}
  }>(GET_ROCKETS)
</script>

<template>
  <v-container>
    <v-row>
		<v-col v-for="rocket in rockets?.rockets" :key="rocket.id">
			<RocketCard :rocket="rocket" />
		</v-col>
	</v-row>
  </v-container>
</template>
