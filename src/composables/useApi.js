import { createFetch } from '@vueuse/core'
import { useMainStore } from '../stores/main.js'
import { useUserStore } from '../stores/user.js'
import { storeToRefs } from 'pinia'

const useApiFetch = createFetch({
  baseUrl: import.meta.env.VITE_BASE_API,
  options: {
    async beforeFetch({ options }) {
      const myToken = localStorage.getItem('token')
      options.headers.Authorization = `Bearer ${ myToken }`

      return { options }
    },
    afterFetch(ctx) {
      ctx.data = JSON.parse(ctx.data)

      return ctx
    },
    onFetchError(ctx) {
      useMainStore().setNotification('Error', ctx.error.message, 'error')

      if (ctx.response.status === 401) {
        localStorage.removeItem('token')

        const { user } = storeToRefs(useUserStore())

        user.value = {}
      }

      return ctx
    }
  }
})

export default useApiFetch