<template>
  <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-carousel v-model="slide" transition-prev="scale" transition-next="scale" swipeable animated control-color="white"
        navigation padding arrows height="300px" class="bg-primary text-white shadow-1 rounded-borders">
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <OrbTypeCard @title-event="createAction" dex="1"></OrbTypeCard>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <OrbTypeCard @title-event="createAction" dex="2"></OrbTypeCard>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <OrbTypeCard @title-event="createAction" dex="3"></OrbTypeCard>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <OrbTypeCard @title-event="createAction" dex="4"></OrbTypeCard>
        </q-carousel-slide>
      </q-carousel>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, onUpdated, inject, getCurrentInstance } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import OrbTypeCard from '../components/card.create-orb-type.vue'

//import { mountControl } from "../controls/basic"

import useFileList from '../compositions/file-list'
const { files, addFiles, removeFile } = useFileList()

function onInputChange(e) {
  addFiles(e.target.files)
  e.target.value = null // reset so that selecting the same file again will still cause it to fire this change
}

import createUploader from '../compositions/file-uploader'
const { uploadFiles } = createUploader('YOUR URL HERE')

const bus = inject('bus')

var createAction = (dex) => {

  switch (dex) {

    case 1:

      break


    case 2:

      break

    case 3:

      break


  }

}

var slide = ref('style');
var autoplay = ref(false)
var lorem = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'

bus.on('RENDER', (arg1, arg2, arg3) => {
  render()
})

onMounted(async () => {
  //  mount('on')
  //mountControl('on')
})

onUpdated(async () => {
  //  update('on')
  //render()
})

onUnmounted(async () => { })

</script>



<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GamePlay'
})
</script>



