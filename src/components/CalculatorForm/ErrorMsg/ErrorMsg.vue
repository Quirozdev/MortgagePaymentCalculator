<script setup>
defineProps({
  msg: {
    type: [String, null],
    required: true,
  },
});
</script>

<template>
  <p class="error-msg">{{ msg }}</p>
</template>

<style scoped>
.error-msg {
  color: var(--red);
  font-size: 1rem;
  height: 0.25rem;
}
</style>
