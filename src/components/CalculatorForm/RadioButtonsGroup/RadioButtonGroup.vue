<script setup>
import { ref } from "vue";
import CalculatorLabel from "../CalculatorLabel/CalculatorLabel.vue";

defineProps({
  groupTitle: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["optionSelected"]);

const optionSelected = ref(null);

function onOptionSelected(newValue) {
  emit("optionSelected", newValue);
  optionSelected.value = newValue;
}
</script>

<template>
  <div class="container">
    <CalculatorLabel text="Mortgage Type" />
    <div v-for="option in options" :key="option.value">
      <div
        class="radio-button-container"
        :class="{ selected: optionSelected === option.value }"
        @click="
          () => {
            onOptionSelected(option.value);
          }
        "
      >
        <input
          type="radio"
          :id="`option-${option.value}`"
          :name="name"
          :value="`${option.value}`"
          :checked="optionSelected === option.value"
          @change="
            (e) => {
              onOptionSelected(e.target.value);
            }
          "
        />
        <label :for="`option-${option.value}`" class="radio-label">{{
          option.label
        }}</label>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.radio-button-container {
  cursor: pointer;
  border: 1px solid var(--slate-500);
  border-radius: 8px;
  padding: 0.75rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  transition: background-color 0.5s ease-in-out, border-color 0.5s ease-in-out;
}

.radio-button-container.selected {
  border: 1px solid var(--lime);
  background-color: hsl(from var(--lime) h s l / 20%);
}

.radio-label,
input[type="radio"] {
  cursor: pointer;
  accent-color: var(--lime);
}
</style>
