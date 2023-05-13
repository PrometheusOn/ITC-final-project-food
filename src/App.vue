<template>
  <div>
    <div>{{ state.count }}</div>
    <button @click="increment">
      click
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const state = ref({ count: 0 })

function increment() {
  state.value.count++
}
</script>


<style lang="scss" scoped>

</style>
