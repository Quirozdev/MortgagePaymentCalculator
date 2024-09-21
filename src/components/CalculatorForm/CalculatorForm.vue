<script setup>
import { ref, watch } from "vue";
import { formState } from "./formState";
import CalculatorField from "./CalculatorField/CalculatorField.vue";
import CalculatorHeader from "./CalculatorHeader/CalculatorHeader.vue";
import RadioButtonGroup from "./RadioButtonsGroup/RadioButtonGroup.vue";

const radioGroupOptions = ref([
  {
    label: "Repayment",
    value: "repayment",
  },
  {
    label: "Interest Only",
    value: "interest-only",
  },
]);

watch(formState, (value) => {
  console.log(value);
});
</script>

<template>
  <section class="calculator-container">
    <CalculatorHeader />
    <CalculatorField
      id="mortgage-amount"
      label="Mortgage Amount"
      appended-content="&#xa3;"
      appendedContentDirection="left"
      input-type="number"
      @value-change="(newValue) => (formState.mortgageAmount = newValue)"
    />
    <div class="row">
      <CalculatorField
        id="mortgage-term"
        label="Mortgage Term"
        appended-content="years"
        appendedContentDirection="right"
        input-type="number"
        @value-change="(newValue) => (formState.mortgageTerm = newValue)"
      />
      <CalculatorField
        id="interest-rate"
        label="Interest Rate"
        appended-content="%"
        appendedContentDirection="right"
        input-type="number"
        @value-change="(newValue) => (formState.interestRate = newValue)"
      />
    </div>
    <RadioButtonGroup
      name="mortgage-type"
      group-title="Mortgage Type"
      :options="radioGroupOptions"
      @option-selected="
        (selectedValue) => (formState.mortgageType = selectedValue)
      "
    />
  </section>
</template>

<style scoped>
.calculator-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.row > * {
  flex: 1;
}
</style>
