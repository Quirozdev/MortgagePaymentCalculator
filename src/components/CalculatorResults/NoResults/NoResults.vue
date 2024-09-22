<script setup>
import CalculatorResults from "../CalculatorResults.vue";
</script>

<template>
  <CalculatorResults>
    <img
      src="../../../assets/images/illustration-empty.svg"
      alt="Empty Results"
    />
    <h3 class="title">Results shown here</h3>
    <p class="text">
      Complete the form and click "calculate repayments" to see what your
      monthly repayments would be.
    </p>
  </CalculatorResults>
</template>

<style scoped>
.title {
  color: white;
  font-size: 1.3rem;
}

.text {
  text-align: center;
  color: var(--slate-500);
  font-size: 0.95rem;
}
</style>
