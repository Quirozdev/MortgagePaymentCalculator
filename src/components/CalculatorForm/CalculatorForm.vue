<script setup>
import { formState } from "./formState";
import CalculatorField from "./CalculatorField/CalculatorField.vue";
import CalculatorHeader from "./CalculatorHeader/CalculatorHeader.vue";
import RadioButtonGroup from "./RadioButtonsGroup/RadioButtonGroup.vue";
import CalculateButton from "./CalculateButton/CalculateButton.vue";
import CalculatorLabel from "./CalculatorLabel/CalculatorLabel.vue";
import { Mortgage } from "@/services/mortgageCalculator";

const radioGroupOptions = [
  {
    label: "Repayment",
    value: "repayment",
  },
  {
    label: "Interest Only",
    value: "interest-only",
  },
];

function onCalculateRepayments() {
  if (formState.thereAreErrors()) {
    return;
  }
  console.log(formState.values);
  const mortgage = new Mortgage(
    formState.values.mortgageAmount,
    formState.values.mortgageTerm,
    formState.values.interestRate
  );

  console.log(mortgage.calculateMonthlyRepayment());
  console.log(mortgage.calculateTotalRepay());
  console.log(mortgage.calculateInterestOnlyPayment());
}
</script>

<template>
  <form
    @submit.prevent="onCalculateRepayments"
    class="calculator-container"
    novalidate
  >
    <CalculatorHeader />
    <CalculatorField
      id="mortgageAmount"
      label="Mortgage Amount"
      appended-content="&#xa3;"
      appendedContentDirection="left"
      input-type="number"
      @value-change="(newValue) => (formState.values.mortgageAmount = newValue)"
    />
    <div class="row">
      <CalculatorField
        id="mortgageTerm"
        label="Mortgage Term"
        appended-content="years"
        appendedContentDirection="right"
        input-type="number"
        @value-change="(newValue) => (formState.values.mortgageTerm = newValue)"
      />
      <CalculatorField
        id="interestRate"
        label="Interest Rate"
        appended-content="%"
        appendedContentDirection="right"
        input-type="number"
        @value-change="(newValue) => (formState.values.interestRate = newValue)"
      />
    </div>
    <div class="mortgage-type-container">
      <CalculatorLabel text="Mortgage Type" />
      <RadioButtonGroup
        name="mortgageType"
        group-title="Mortgage Type"
        :options="radioGroupOptions"
        @option-selected="
          (selectedValue) => (formState.values.mortgageType = selectedValue)
        "
      />
    </div>
    <CalculateButton />
  </form>
</template>

<style scoped>
.calculator-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: white;
  padding: 2rem;
  border-radius: 1rem;
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

.mortgage-type-container {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}
</style>
