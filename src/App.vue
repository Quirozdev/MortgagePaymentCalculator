<script setup>
import CalculatorForm from "./components/CalculatorForm/CalculatorForm.vue";
import CalculatorResults from "./components/CalculatorResults/CalculatorResults.vue";
import CodeAttribution from "./components/CodeAttribution/CodeAttribution.vue";
import { results } from "./stores/resultsState";
import NoResults from "./components/CalculatorResults/NoResults/NoResults.vue";
import RepaymentResults from "./components/CalculatorResults/RepaymentResults/RepaymentResults.vue";
import InterestOnlyResults from "./components/CalculatorResults/InterestOnlyResults/InterestOnlyResults.vue";
</script>

<template>
  <main>
    <section class="container">
      <CalculatorForm class="calculator-section" />
      <CalculatorResults>
        <NoResults v-if="results.mortgage == null" />
        <RepaymentResults v-else-if="results.mortgage.type === 'repayment'" />
        <InterestOnlyResults
          v-else-if="results.mortgage.type === 'interest-only'"
        />
      </CalculatorResults>
    </section>
    <CodeAttribution />
  </main>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: white;
  border-radius: 12rem;
}

.container > * {
  flex: 1;
  flex-wrap: wrap;
}

.calculator-section {
  min-width: 240px;
}
</style>
