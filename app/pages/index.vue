<template>
	<v-container>
		<v-row>
			<v-col style="position: sticky;  top: 100px; height: 100vh;">
				<v-select
				v-model="sortOrder"
				:items="['asc', 'desc']"
				label="Sort by Date"
				outlined
				></v-select>

				<!-- Filter Dropdown -->
				<v-select
				v-model="filterYear"
				:items="availableYears"
				label="Filter by Year"
				outlined
				></v-select>
			</v-col>
			<v-col cols="10">
				<v-row>
					<v-col v-for="launch in filteredAndSortedLaunches" :key="launch.mission_name">
						<LaunchCard v-if="launch" :launch="launch" />
					</v-col>
					<v-col v-if="filteredAndSortedLaunches" v-for="n in 10" :key="n" cols="12" md="4">
							<v-skeleton-loader
							class="mx-auto"
							max-width="300"
							type="card"
							></v-skeleton-loader>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-container>
</template>
<script lang="ts" setup>
 import { GET_LAUNCHES } from '../graphql/queries';
 import { useSort } from '@/composables/useSort';
 import { useFilters } from '@/composables/useFilters';

 interface LaunchInterface {
	id : string
	mission_name : string
	launch_site : {
		site_name_long : string
	}
	rocket : {
		rocket_id : string
    	rocket_name : string
    }
	launch_date_utc : string
	launch_success : boolean,
	details: string
 }

const { data } = useAsyncQuery<{
	launches: LaunchInterface[]
}>(GET_LAUNCHES)



const launches = data?.value?.launches || [];

console.log(launches);
const { sortOrder, sortedLaunches } = useSort(launches);
const { filterYear, filteredLaunches } = useFilters(launches);

// Combined Computation: First Filter, Then Sort
const filteredAndSortedLaunches = computed(() => {
  const filtered = filteredLaunches.value; // Apply filtering
  const sorted = [...filtered].sort((a, b) => {
    const dateA = new Date(a.launch_date_utc).getTime();
    const dateB = new Date(b.launch_date_utc).getTime();
    return sortOrder.value === "asc" ? dateA - dateB : dateB - dateA;
  });
  return sorted;
});

// Dynamically create year options for the filter dropdown
const availableYears = computed(() => {
  const years = launches?.map((l) =>
    l.launch_date_utc.substring(0, 4)
  );
  return Array.from(new Set(years)).sort((a, b) => Number(b) - Number(a));
});
</script>
