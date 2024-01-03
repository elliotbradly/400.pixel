<template>

 <q-page class="q-gutter-sm window-height window-width row justify-center items-center">

 <canvas id="indexCanvas"> </canvas>

 <div class="q-pa-md">
    <q-btn-group spread>

      <q-btn color="purple" label="Process" icon="timeline" />
      <q-btn color="purple" label="Color" icon="visibility" />

    </q-btn-group>
  </div>

 </q-page>


</template>

<script setup>
import { ref, onMounted, onUnmounted, onUpdated, inject, getCurrentInstance } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import * as ActShd from '../110.shade/00.shade.unit/shade.action'
import * as ActVsg from '../110.shade/01.visage.unit/visage.action'
import * as ActCan from '../110.shade/03.container.unit/container.action'

import { mount, update, unmount, render } from "../composables/screens"
import { mountControl } from "../controls/basic"

const router = useRouter()
const route = useRoute()
const bus = inject('bus')

const instance = getCurrentInstance();
const SHADE = inject('SHADE')

bus.on('RENDER', (arg1, arg2, arg3) => {
  render()
})

onMounted(async () => {
  mount('on')
  mountControl('on')
})

onUpdated(async () => {
  update('on')
  render()
})

onUnmounted(async () => {})

</script>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GamePlay'
})
</script>
