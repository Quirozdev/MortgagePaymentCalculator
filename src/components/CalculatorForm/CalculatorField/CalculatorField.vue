<script setup>
import { ref } from "vue";
import CalculatorLabel from "../CalculatorLabel/CalculatorLabel.vue";

defineProps({
  id: {
    type: String,
  },
  label: {
    type: String,
    required: true,
  },
  appendedContent: {
    type: String,
    required: true,
  },
  // "left" or "right"
  appendedContentDirection: {
    type: String,
    default: "left",
  },
  inputType: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["valueChange"]);

const inputValue = ref("");
const focus = ref(false);

function toggleFocus() {
  focus.value = !focus.value;
}

function onValueChange(e) {
  inputValue.value = e.target.value;
  emit("valueChange", inputValue.value);
}
</script>

<template>
  <div class="container">
    <CalculatorLabel :for-id="id" :text="label" />
    <div
      class="input-and-appended-content-container"
      :class="{ reversed: appendedContentDirection == 'right' }"
    >
      <div class="appended-content" :class="{ focus: focus }">
        {{ appendedContent }}
      </div>
      <input
        class="field"
        :id="id"
        :value="inputValue"
        @input="onValueChange"
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
.container {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.input-and-appended-content-container {
  min-width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid var(--slate-500);
  border-radius: 8px;
  transition: border-color 0.5s ease-in-out;
}

.reversed {
  flex-direction: row-reverse;
}

.reversed .appended-content {
  border-radius: 0px 8px 8px 0px;
}

.field {
  flex: 1;
  border: none;
  font-family: "PlusJakartaSans";
  font-size: 1rem;
  font-weight: bold;
  color: var(--slate-900);
  width: 100px;
}

.field:focus {
  outline: none;
}

.field,
.appended-content {
  padding: 0.5rem;
}

.appended-content {
  color: var(--slate-700);
  font-weight: bold;
  background-color: var(--slate-100);
  border-radius: 8px 0px 0px 8px;
  padding: 0.75rem;
  transition: background-color 0.5s ease-in-out;
}

.appended-content.focus {
  background-color: var(--lime);
}

.input-and-appended-content-container:has(.field.focus) {
  border: 1px solid var(--lime);
}

/* Remove up and down arrows in input type number */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>
