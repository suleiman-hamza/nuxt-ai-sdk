<script setup lang="ts">
const colorMode = useColorMode()

const color = computed(() => colorMode.value === 'dark' ? '#1b1718' : 'white')

</script>

<template>
  <main>
    <UApp>
      <NuxtPage />
    </UApp>
  </main>
</template>
