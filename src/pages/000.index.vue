<template>

 <q-page class="q-gutter-sm window-height window-width row justify-center items-center">


  <div id="app">
		<DropZone class="drop-area" @files-dropped="addFiles" #default="{ dropZoneActive }">
			<label for="file-input">
				<span v-if="dropZoneActive">
					<span>Drop Them Here</span>
					<span class="smaller">to add them</span>
				</span>
				<span v-else>
					<span>Drag Your File Here</span>
					<span class="smaller">
						or <strong><em>click here</em></strong> to select files
					</span>
				</span>

				<input type="file" id="file-input" multiple @change="onInputChange" />
			</label>
			<ul class="image-list" v-show="files.length">
				<FilePreview v-for="file of files" :key="file.id" :file="file" tag="li" @remove="removeFile" />
			</ul>
		</DropZone>
		<button @click.prevent="uploadFiles(files)" class="upload-button">Upload</button>
	</div>


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

import { mount, update, unmount, render } from "../composables/screens"
//import { mountControl } from "../controls/basic"

import DropZone from '../components/DropZone.vue'
import FilePreview from '../components/FilePreview.vue'

import useFileList from '../compositions/file-list'
const { files, addFiles, removeFile } = useFileList()

function onInputChange(e) {
	addFiles(e.target.files)
	e.target.value = null // reset so that selecting the same file again will still cause it to fire this change
}

import createUploader from '../compositions/file-uploader'
const { uploadFiles } = createUploader('YOUR URL HERE')

const bus = inject('bus')

bus.on('RENDER', (arg1, arg2, arg3) => {
  render()
})

onMounted(async () => {
  mount('on')
  //mountControl('on')
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


<style scoped lang="stylus">
#app {
	font-family: Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin: 0 auto;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.drop-area {
	width: 100%;
	max-width: 800px;
	margin: 0 auto;
	padding: 50px;
	background: #ffffff55;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
	transition: .2s ease;

	&[data-active=true] {
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
		background: #ffffffcc;
	}
}

label {
	font-size: 36px;
	cursor: pointer;
	display: block;

	span {
		display: block;
	}

	input[type=file]:not(:focus-visible) {
		// Visually Hidden Styles taken from Bootstrap 5
		position: absolute !important;
		width: 1px !important;
		height: 1px !important;
		padding: 0 !important;
		margin: -1px !important;
		overflow: hidden !important;
		clip: rect(0, 0, 0, 0) !important;
		white-space: nowrap !important;
		border: 0 !important;
	}

	.smaller {
		font-size: 16px;
	}
}

.image-list {
	display: flex;
	list-style: none;
	flex-wrap: wrap;
	padding: 0;
}

.upload-button {
	display: block;
	appearance: none;
	border: 0;
	border-radius: 50px;
	padding: 0.75rem 3rem;
	margin: 1rem auto;
	font-size: 1.25rem;
	font-weight: bold;
	background: #369;
	color: #fff;
	text-transform: uppercase;
}

button {
	cursor: pointer;
}
</style>
