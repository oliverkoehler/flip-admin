import { useMainStore } from '../stores/main.js'
import { useUserStore } from '../stores/user.js'
import useApiFetch from './useApi.js'
import { storeToRefs } from 'pinia'

export const useUser = () => {
  const { setNotification } = useMainStore()
  const { user } = storeToRefs(useUserStore())

  const loginUser = async (username, apiKey) => {
    const { data } = await useApiFetch('/auth/login').post({
      name: username,
      apiKey
    })


    if (data.value.token) {
      setNotification('Success', 'You have successfully logged in.', 'success')

      localStorage.setItem('token', data.value.token)
    }

    const { data: userResponse } = await useApiFetch('/user/me').get()

    user.value = userResponse.value

    return data
  }


  return {
    loginUser
  }
}