<script setup>
import { computed, ref } from "vue";
import CalculatorLabel from "../CalculatorLabel/CalculatorLabel.vue";
import { formState } from "../formState";
import ErrorMsg from "../ErrorMsg/ErrorMsg.vue";

const props = defineProps({
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

// const emit = defineEmits(["valueChange"]);

const focus = ref(false);
const isError = computed(() => {
  return formState.errors[props.id] != null;
});

function toggleFocus() {
  focus.value = !focus.value;
}

function onValueChange(e) {
  formState.values[e.target.id] = e.target.value;
  // emit("valueChange", inputValue.value);
  formState.validateRequiredValue(e.target.id);
}
</script>

<template>
  <div class="container">
    <CalculatorLabel :for-id="id" :text="label" />
    <div
      class="input-and-appended-content-container"
      :class="{
        reversed: appendedContentDirection == 'right',
        error: isError,
      }"
    >
      <div class="appended-content" :class="{ focus: focus, error: isError }">
        {{ appendedContent }}
      </div>
      <input
        class="field"
        :id="id"
        :value="formState.values[id]"
        @input="onValueChange"
        v-bind:type="inputType"
        v-on:focus="toggleFocus"
        v-on:focusout="toggleFocus"
        :class="{ focus: focus }"
        required
      />
    </div>
    <ErrorMsg :msg="formState.errors[id]" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.input-and-appended-content-container {
  min-width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid var(--slate-500);
  border-radius: 8px;
  overflow: hidden;
  transition: border-color 0.5s ease-in-out;
}

.input-and-appended-content-container.error {
  border: 1px solid var(--red);
}

.reversed {
  flex-direction: row-reverse;
}

.appended-content.error {
  background-color: var(--red);
  color: white;
}

.field {
  flex: 1;
  border: none;
  border-radius: 8px;
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
  padding: 0.75rem;
  transition: background-color 0.5s ease-in-out;
}

.appended-content.focus {
  background-color: var(--lime);
  color: var(--slate-700);
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
