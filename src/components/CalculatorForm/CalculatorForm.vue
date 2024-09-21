<script setup>
import CalculatorField from "./CalculatorField/CalculatorField.vue";
</script>

<template>
  <section class="calculator-container">
    <div class="calculator-header">
      <h3>Mortgage Calculator</h3>
      <button class="clear-all-btn">Clear All</button>
    </div>
    <CalculatorField
      label="Mortgage Amount"
      appended-content="&#xa3;"
      input-type="text"
    />
  </section>
</template>

<style scoped>
.calculator-container {
}

.calculator-header {
  display: flex;
  flex-direction: row;
  align-content: center;
}

.clear-all-btn {
  border: none;
  background-color: transparent;
  text-decoration: underline;
}
</style>
