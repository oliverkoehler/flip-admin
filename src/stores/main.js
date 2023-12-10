import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMainStore = defineStore('main', () => {
  const notificationTitle = ref('')
  const notificationMessage = ref('')
  const notificationType = ref('')
  const notification = ref(false)

  const setNotification = (title, message, type) => {
    notificationTitle.value = title
    notificationMessage.value = message
    notificationType.value = type
    notification.value = true

    setTimeout(() => {
      notification.value = false
    }, 7500)
  }

  return {
    notificationTitle,
    notificationMessage,
    notificationType,
    notification,
    setNotification
  }
})