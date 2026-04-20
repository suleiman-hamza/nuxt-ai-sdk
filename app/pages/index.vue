<script setup lang="ts">
// import { useChat } from '@ai-sdk/vue';
// import { computed } from 'vue';

// const { error, input, status, handleSubmit, messages, reload, stop } = useChat({
//   onFinish(messages, { usage, finishReason }) {
//     console.log('Usage', usage);
//     console.log('FinishReason', finishReason);
//   },
// });

// const disabled = computed(() => status.value !== 'ready');
</script>

<template>
  <main>
    <h1 class="text-2xl">Welcome to the App</h1>
    <p>This is a simple Nuxt 4 app.</p>
    <span>
      <a href="#">Local Repo Link</a>
    </span>
  </main>
</template>
