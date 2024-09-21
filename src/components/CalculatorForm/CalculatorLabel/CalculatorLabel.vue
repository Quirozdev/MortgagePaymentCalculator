<script setup>
defineProps({
  forId: {
    type: String,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <label :for="forId" class="label">{{ text }}</label>
</template>

<style scoped>
.label {
  color: var(--slate-500);
}
</style>
