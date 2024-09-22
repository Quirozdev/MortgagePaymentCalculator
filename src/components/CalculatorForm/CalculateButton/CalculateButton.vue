<script setup></script>

<template>
  <button class="calculate-btn" type="submit">
    <img
      src="../../../assets/images/icon-calculator.svg"
      alt="Calculator Icon"
    />
    <span>Calculate Repayments</span>
  </button>
</template>

<style scoped>
.calculate-btn {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  padding: 1rem;
  border: none;
  border-radius: 3rem;
  background-color: var(--lime);
  font-family: "PlusJakartaSans";
  font-size: 1rem;
  font-weight: bold;
  color: var(--slate-900);
  cursor: pointer;
}

.calculate-btn:hover {
  filter: saturate(70%);
}
</style>
