<template>
  Inventory components part two

  <q-list>

    <InventoryItem v-for="link in essentialLinks" :key="link.title" v-bind="link" />

  </q-list>
</template>

<script>
import { defineComponent } from 'vue'
import InventoryItem from 'components/InventoryItem.vue'

const inventoryList = [
  { title: 'Pole Hook' },
  { title: 'Power Fists' },
  { title: 'Pool Cues' }]

export default defineComponent({
  name: 'Inventory',
  components: {
    InventoryItem
  },

  setup() {

    return {
      essentialLinks: inventoryList
    }
  }
})
</script>


