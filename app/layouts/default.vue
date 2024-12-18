<template>
	 <v-app>
		<v-app-bar app>
			<v-toolbar-title>
				SpaceX Explorer
				<v-icon icon="mdi-rocket-launch-outline"></v-icon>
			</v-toolbar-title>
		</v-app-bar>

		<v-main min-width="100vw">
			<slot />
		</v-main>
		
		<v-bottom-navigation >
			<v-btn value="recent" :to="{ name: 'index' }">
				<v-icon>mdi-rocket-launch-outline</v-icon>
				<span>Lauches</span>
			</v-btn>
			<v-btn value="favorites" :to="{ name: 'favorites' }">
				<v-icon>mdi-heart</v-icon>
				<span>Favorites</span>
			</v-btn>
			<v-btn value="rockets" :to="{ name: 'rockets' }">
				<v-icon>mdi-rocket</v-icon>
				<span>Rockets</span>
			</v-btn>
		</v-bottom-navigation>
	</v-app>
</template>
<script>
export default {
	name: 'DefaultLayout',
}
</script>
