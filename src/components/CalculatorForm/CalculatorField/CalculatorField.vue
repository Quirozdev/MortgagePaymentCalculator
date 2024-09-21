<script setup>
import { ref } from "vue";

defineProps({
  label: {
    type: String,
    required: true,
  },
  appendedContent: {
    type: String,
    required: true,
  },
  inputType: {
    type: String,
    required: true,
  },
});

const focus = ref(false);

function toggleFocus() {
  focus.value = !focus.value;
}
</script>

<template>
  <div>
    <label for="">{{ label }}</label>
    <div class="input-and-appended-content-container">
      <div class="appended-content" :class="{ focus: focus }">
        {{ appendedContent }}
      </div>
      <input
        v-bind:type="inputType"
        v-on:focus="toggleFocus"
        v-on:focusout="toggleFocus"
        :class="{ focus: focus }"
        required
      />
    </div>
  </div>
</template>

<style scoped>
.input-and-appended-content-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid var(--slate-500);
  border-radius: 8px;
}

.input-and-appended-content-container input {
  flex: 1;
  border: none;
}

.input-and-appended-content-container input:focus {
  outline: none;
}

.input-and-appended-content-container input,
.appended-content {
  padding: 0.5rem;
}

.appended-content {
  background-color: var(--slate-100);
  border-radius: 8px 0px 0px 8px;
  padding: 0.75rem;
}

.appended-content.focus {
  background-color: var(--lime);
}

.input-and-appended-content-container:has(input.focus) {
  border: 1px solid var(--lime);
}
</style>
