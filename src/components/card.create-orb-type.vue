<template>
  <q-card class="my-card bg-secondary text-white">
    <q-card-section>
      <div class="text-h6">Color Changing Pixels</div>
      <div class="text-subtitle2">Covert one color scheme to another</div>
    </q-card-section>

    <q-separator dark />

    <q-card-actions>
      <q-btn flat @click="$emit('title-event',  dex )">Change</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'


defineProps<{
  dex?: number

}>()

</script>
