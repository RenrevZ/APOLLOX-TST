import { ref, computed } from 'vue';

export function useFilters(launches: any[]) {
  const filterYear = ref<string>('All'); // Default to "All"

  const filteredLaunches = computed(() =>
    filterYear.value === 'All' || filterYear.value === ''
      ? launches
      : launches.filter((l) => l.launch_date_utc.startsWith(filterYear.value))
  );

  return { filterYear, filteredLaunches };
}
