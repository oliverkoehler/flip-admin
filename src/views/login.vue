<template>
  <div>
    <input v-model='name' placeholder='Email' type='email'>
    <input v-model='apiKey' placeholder='Password' type='password'>
    <button @click='login'>Login</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const apiKey = ref('')

const login = () => {

}

</script>