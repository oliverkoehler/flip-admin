<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        alt="Your Company"
        class="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
      >
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in to your
        account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form
        action="#"
        class="space-y-6"
        method="POST"
        @submit.prevent="handleLogin"
      >
        <div>
          <label
            class="block text-sm font-medium leading-6 text-gray-900"
            for="email"
          >Torn Username</label>
          <div class="mt-2">
            <input
              id="tornname"
              v-model="username"
              autocomplete="username"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              name="tornname"
              required
              type="text"
            >
          </div>
        </div>

        <div>
          <label
            class="block text-sm font-medium leading-6 text-gray-900"
            for="password"
          >API Key</label>

          <div class="mt-2">
            <input
              id="password"
              v-model="apiKey"
              autocomplete="current-password"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              name="password"
              required=""
              type="password"
            >
          </div>
        </div>

        <div>
          <button
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            type="submit"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUser } from '../../composables/useUser.js'

const { loginUser } = useUser()

const username = ref('olli962')
const apiKey = ref('FnivfQgmBnBhJ4r7')

const handleLogin = () => {
  loginUser(username.value, apiKey.value)
}
</script>