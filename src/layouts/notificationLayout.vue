<template>
  <div class="w-full h-full">
    <slot />
    <AppNotification />
  </div>
</template>
<script setup>
import AppNotification from '../components/molecules/AppNotification.vue'
</script>