<template>
  <div class="w-full h-full">
    <div>
      <slot />
      <NotificationLayout />
    </div>
  </div>
</template>
<script setup>
import NotificationLayout from './notificationLayout.vue'
</script>