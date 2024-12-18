<template>
     <v-dialog max-width="500">
        <template v-slot:activator="{ props: activatorProps }"  class="d-flex align-content-end">
            <v-btn
              v-bind="activatorProps"
              color="red"
              text="Remove"
              variant="text"
            >
            <v-icon>mdi-heart</v-icon>
            Remove from Favorites
          </v-btn>
        </template>

        <template v-slot:default="{ isActive }">
          <v-card title="Confirm Deletion" variant="elevated">
            <v-card-text>
              Are you sure you want to remove this favorite?
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>

             <slot name="actions"></slot>
             <v-btn
                text="Cancel"
                color="red"
                @click="isActive.value = false"
            ></v-btn>
            </v-card-actions>
          </v-card>
        </template>
    </v-dialog>
</template>