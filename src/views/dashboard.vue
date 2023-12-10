<template>
  <MainLayout>
    test
  </MainLayout>
</template>
<script setup>
import MainLayout from '../layouts/mainLayout.vue'
import { useMainStore } from '../stores/main.js'

useMainStore().setNotification('test', 'success', 'success')

</script>