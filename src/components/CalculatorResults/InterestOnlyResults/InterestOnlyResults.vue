<script setup>
import { results } from "@/stores/resultsState";
import CalculatorResults from "../CalculatorResults.vue";

const formatter = Intl.NumberFormat("en-US");
</script>

<template>
  <CalculatorResults>
    <h3 class="title">Your results</h3>
    <p class="text">
      Your results are shown below based on the information you provided. To
      adjust the results, edit the form and click "calculate repayments" again.
    </p>
    <div class="interest-only-results-container">
      <p class="text">Interest only payment</p>
      <p class="interest-only-payment">
        {{
          `&#xa3;${formatter.format(
            results.mortgage.calculateInterestOnlyPayment()
          )}`
        }}
      </p>
    </div>
  </CalculatorResults>
</template>

<style scoped>
.title {
  width: 100%;
  color: white;
  font-size: 1.3rem;
}

.text {
  color: var(--slate-500);
  font-size: 0.95rem;
}

.interest-only-results-container {
  background-color: #0e2530;
  border-radius: 6px;
  border-top: 4px solid var(--lime);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.interest-only-payment {
  color: var(--lime);
  font-size: 2.5rem;
  font-weight: bold;
}

@media screen and (max-width: 400px) {
  .interest-only-results-container {
    padding: 1rem;
  }
}
</style>
