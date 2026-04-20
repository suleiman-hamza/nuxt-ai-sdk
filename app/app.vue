<script setup lang="ts">
const colorMode = useColorMode()

const color = computed(() => colorMode.value === 'dark' ? '#1b1718' : 'white')

// define shortcut ?
defineShortcuts({
  c: () => {
    navigateTo('/')
  }
})
</script>

<template>
  <main>
    <UApp>
      <NuxtLoadingIndicator color="var(--ui-primary)" />
      <NuxtPage />
    </UApp>
  </main>
</template>
