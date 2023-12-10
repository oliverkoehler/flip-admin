<template>
  <div
    :class="{
      'bg-green-100 border-l-green-500': notificationType === 'success',
      'bg-red-100 border-l-red-500': notificationType === 'error',
      'opacity-0': !notification,
      'opacity-100': notification
    }"
    class="w-fit h-fit min-w-[400px] m-4 rounded p-4 transition duration-500 absolute bottom-0 right-0 border-l-4"
  >
    <div class="font-semibold">
      {{ notificationTitle }}
    </div>
    <div>{{ notificationMessage }}</div>
  </div>
</template>

<script setup>
import { useMainStore } from '../../stores/main.js'
import { storeToRefs } from 'pinia'

const mainStore = useMainStore()

const { notificationTitle, notificationMessage, notificationType, notification } = storeToRefs(mainStore)
</script>