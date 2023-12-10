<!--
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <NotificationLayout>
    <AppLogin class="h-full bg-white" />
  </NotificationLayout>
</template>

<script setup>
import AppLogin from '@/components/organisms/AppLogin.vue'
import NotificationLayout from '../layouts/notificationLayout.vue'
</script>